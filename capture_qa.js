import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromeProcess = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9244',
  '--disable-gpu',
  '--user-data-dir=C:\\Users\\ahmed\\AppData\\Local\\Temp\\chrome-qa-profile',
  'about:blank',
]);

const outDir = 'qa_screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function waitForChrome(port, maxRetries = 20) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      if (res.ok) {
        const list = await res.json();
        const page = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
        if (page) return page;
      }
    } catch (e) {
      // wait and retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Chrome remote debugging did not become ready in time');
}

(async () => {
  try {
    const page = await waitForChrome(9244);
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let id = 1;
    const send = (method, params = {}) =>
      new Promise((resolve) => {
        const mid = id++;
        const handler = (e) => {
          const d = JSON.parse(e.data);
          if (d.id === mid) {
            ws.removeEventListener('message', handler);
            resolve(d.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: mid, method, params }));
      });

    ws.onopen = async () => {
      await send('Page.enable');
      await send('Runtime.enable');

      const shots = [
        { name: 'qa_home_ar_desktop.png', url: 'http://localhost:3005/ar', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_home_ar_light.png', url: 'http://localhost:3005/ar', w: 1920, h: 1080, mobile: false, theme: 'light' },
        { name: 'qa_home_en_desktop.png', url: 'http://localhost:3005/en', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_home_mobile.png', url: 'http://localhost:3005/ar', w: 390, h: 844, mobile: true, theme: 'dark' },
        { name: 'qa_home_mobile_light.png', url: 'http://localhost:3005/ar', w: 390, h: 844, mobile: true, theme: 'light' },
        { name: 'qa_work_desktop.png', url: 'http://localhost:3005/ar/work', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_case_study_mithaq.png', url: 'http://localhost:3005/ar/work/mithaq-legal', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_case_study_alawad.png', url: 'http://localhost:3005/ar/work/al-awad-solutions', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_services_desktop.png', url: 'http://localhost:3005/ar/services', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_about_desktop.png', url: 'http://localhost:3005/ar/about', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_contact_desktop.png', url: 'http://localhost:3005/ar/contact', w: 1920, h: 1080, mobile: false, theme: 'dark' },
        { name: 'qa_contact_light.png', url: 'http://localhost:3005/ar/contact', w: 1920, h: 1080, mobile: false, theme: 'light' },
      ];

      for (const item of shots) {
        console.log(`Setting viewport ${item.w}x${item.h} for ${item.name}...`);
        await send('Emulation.setDeviceMetricsOverride', {
          width: item.w,
          height: item.h,
          deviceScaleFactor: 1,
          mobile: item.mobile,
        });

        console.log(`Navigating to ${item.url}...`);
        await send('Page.navigate', { url: item.url });
        await new Promise((r) => setTimeout(r, 2000));

        // Set theme mode explicitly
        if (item.theme === 'light') {
          await send('Runtime.evaluate', {
            expression: `
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light');
              localStorage.setItem('ahmed_portfolio_theme', 'light');
              window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: 'light' } }));
            `,
          });
          await new Promise((r) => setTimeout(r, 500));
        } else {
          await send('Runtime.evaluate', {
            expression: `
              document.documentElement.classList.remove('light');
              document.documentElement.classList.add('dark');
              localStorage.setItem('ahmed_portfolio_theme', 'dark');
              window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: 'dark' } }));
            `,
          });
          await new Promise((r) => setTimeout(r, 500));
        }

        const shot = await send('Page.captureScreenshot', { format: 'png' });
        const filePath = path.join(outDir, item.name);
        fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
        console.log(`Successfully saved ${filePath} (${Buffer.from(shot.data, 'base64').length} bytes)`);
      }

      ws.close();
      chromeProcess.kill();
      console.log('All QA screenshots captured successfully!');
      process.exit(0);
    };
  } catch (err) {
    console.error('Error during QA capture:', err);
    chromeProcess.kill();
    process.exit(1);
  }
})();
