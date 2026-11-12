import { ProjectData } from '@/lib/types';

export const PROJECTS: ProjectData[] = [
  {
    slug: 'al-awad-solutions',
    title: {
      ar: 'حلول العواد السكنية والتجارية والصناعية',
      en: 'Al Awad Residential, Commercial & Industrial Solutions',
    },
    subtitle: {
      ar: 'هيكلة رقمية ثنائية اللغة لمنظومة خدمات إنشائية وصناعية كويتية متعددة القطاعات',
      en: 'Bilingual digital architecture for a multi-division Kuwait contracting and solutions provider',
    },
    summary: {
      ar: 'موقع إلكتروني تجاري متكامل ثنائي اللغة، يترجم مجالات الأعمال المتشعبة لشركة مقاولات وحلول هندسية كبرى إلى مسارات تصفح منضبطة وتجربة تواصل تجاري مباشرة.',
      en: 'A comprehensive bilingual commercial website translating complex multi-sector contracting operations into structured navigation paths and seamless commercial inquiry flows.',
    },
    sector: {
      key: 'commercial-contracting',
      label: {
        ar: 'المقاولات والحلول الإنشائية والتجارية',
        en: 'Commercial & Residential Contracting',
      },
    },
    classification: {
      key: 'client-project',
      label: {
        ar: 'مشروع عميل · تعاون مع وكالة',
        en: 'Client Project · Agency Collaboration',
      },
    },
    market: {
      ar: 'الكويت',
      en: 'Kuwait',
    },
    languages: {
      ar: 'العربية (RTL) والإنجليزية (LTR)',
      en: 'Arabic (RTL) & English (LTR)',
    },
    role: {
      ar: 'تنفيذ وتطوير الواجهة الأمامية وهندسة المحاذاة ثنائية اللغة بناءً على مواصفات الوكالة المعتمدة',
      en: 'Front-End Implementation & Bilingual Layout Engineering based on agency-approved specifications',
    },
    liveUrl: 'https://alawad-arch.com/',
    previewImage: '/images/projects/alawad.png',
    galleryImages: ['/images/projects/alawad.png'],
    featured: true,
    order: 1,
    year: '2025',
    overview: {
      ar: 'تم تطوير هذا الموقع المؤسسي لصالح شركة حلول ومقاولات رائدة في دولة الكويت من خلال شراكة عمل مع وكالة تسويق رقمي إقليمية، حيث تطلب المشروع استيعاب قطاعات عمل متباينة تشمل الحلول السكنية، التجارية، والمنشآت الصناعية.',
      en: 'Engineered as a white-label agency collaboration for a premier Kuwait solutions provider, this corporate digital platform required structuring disparate business divisions—residential, commercial, and industrial facilities—into an intuitive, authoritative presence.',
    },
    context: {
      ar: 'تتميز شركات المقاولات والحلول الإنشائية الكبرى بتعدد خدماتها وتنوع جمهورها المستهدف بين الأفراد الباحثين عن حلول سكنية والمستثمرين ومدراء المشاريع في القطاعات التجارية والصناعية. كان التحدي يكمن في تقديم هذا الزخم الخدمي دون تشتيت الزائر أو إرباك مسار اتخاذ القرار.',
      en: 'Large-scale contracting firms cater to diverse audiences ranging from individual homeowners to corporate project managers and industrial developers. The core operational imperative was organizing this breadth of capabilities without overwhelming visitors or clouding conversion paths.',
    },
    challenge: {
      ar: 'تنظيم ثلاث قطاعات تشغيلية مستقلة في واجهة واحدة موحدة تضمن التدفق المنطقي للمعلومة، مع الحفاظ على التكافؤ البصري والطباعي الصارم بين النسختين العربية (من اليمين إلى اليسار) والإنجليزية (من اليسار إلى اليمين)، دون الاعتماد على الانعكاس التلقائي المشوه للمحاذاة.',
      en: 'Harmonizing three distinct operational sectors within a singular design system while maintaining rigorous visual and typographic equilibrium across Arabic (RTL) and English (LTR) presentations without relying on fragile automated mirroring.',
    },
    strategy: {
      description: {
        ar: 'بناء مراكز استكشاف قطاعية (Service Hubs) مستقلة تسمح لكل فئة من العملاء بالوصول الفوري لما تبحث عنه، مع إبراز نقاط الاتصال التجاري المباشر وتنسيق الهيكل ثنائي الاتجاه.',
        en: 'Creating dedicated sector capability hubs that route enterprise clients and residential owners directly to relevant solutions, flanked by prominent contextual inquiry triggers.',
      },
      points: [
        {
          ar: 'تخصيص مسار تصفح مستقل ومحدد المعالم لكل من القطاع السكني، التجاري، والصناعي.',
          en: 'Independent navigation pathways dedicated to residential, commercial, and industrial offerings.',
        },
        {
          ar: 'معالجة طباعية وهوية بصرية مستقلة لاتجاه القراءة العربي RTL لضمان انسيابية المطالعة ونبرة الوقار المؤسسي.',
          en: 'Directional typographic tuning ensuring native Arabic reading flow alongside balanced English rhythm.',
        },
        {
          ar: 'تكامل قنوات المراسلة المباشرة وتطبيق واتساب التجاري عند كل نقطة استعراض للخدمة لتسريع وتيرة التواصل.',
          en: 'Strategic placement of instant WhatsApp and corporate inquiry points beside all technical specifications.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'تصميم واجهة متزنة تعتمد الكتل الهيكلية الواضحة، التباين العالي بين عناصر القراءة، والتنقل السلس عبر الأجهزة المحمولة التي تمثل النسبة العظمى من زيارات السوق الخليجي.',
        en: 'A structured editorial aesthetic emphasizing clear compartmentalization, high typographic contrast, and frictionless mobile navigation tailored to Gulf browsing habits.',
      },
      points: [
        {
          ar: 'تسلسل بصري متدرج ينقل الزائر من المفهوم العام للحلول إلى المواصفات التفصيلية ثم قنوات الطلب.',
          en: 'Progressive disclosure leading from high-level capabilities to detailed execution specs and contact actions.',
        },
        {
          ar: 'تعديل المسافات البينية وهوامش البطاقات لضمان استقرار الهيكل على مختلف قياسات الشاشات والأجهزة اللوحية.',
          en: 'Calibrated spacing grids preventing content overflow and maintaining visual stability across breakpoints.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تطبيق بنية الواجهات وفق أعلى معايير ضبط الجودة والتوافق مع متطلبات الوكالة والشاشات الحديثة.',
        en: 'Execution focused on modular interface delivery adhering strictly to agency design guidelines and multi-device compliance.',
      },
      points: [
        {
          ar: 'بناء محاور الخدمات وتنسيق الأنماط البرمجية المخصصة لضبط الاتجاهين LTR و RTL.',
          en: 'Custom layout engineering accommodating bidirectional rendering without alignment anomalies.',
        },
        {
          ar: 'تحسين سرعة تحميل الوسائط والصور الميدانية لضمان استجابة سريعة عبر شبكات الاتصال المتنقلة.',
          en: 'Optimization of heavy structural imagery to ensure rapid loading on cellular connections.',
        },
      ],
    },
    deliverables: {
      ar: [
        'موقع مؤسسي تفاعلي متكامل ثنائي اللغة (عربي / إنجليزي)',
        'هندسة مسارات تصفح متخصصة للحلول السكنية والتجارية والصناعية',
        'تكامل كامل لقنوات الاستفسار السريع عبر واتساب والبريد المؤسسي',
        'تخطيط متجاوب بنسبة 100% للشاشات المكتبية واللوحية والهواتف الذكية',
        'بنية محايدة ومهيأة لمحركات البحث والترميز المؤسسي الصحيح',
      ],
      en: [
        'Complete bilingual corporate website (Arabic RTL / English LTR)',
        'Dedicated capability hubs for residential, commercial, and industrial offerings',
        'Direct WhatsApp and regional corporate inquiry integration',
        'Fully responsive multi-breakpoint layout architecture',
        'SEO-ready semantic structure and metadata foundations',
      ],
    },
    observations: {
      ar: 'تم تنفيذ المشروع ضمن إطار تعاقدي كشريك واجهة أمامية (White-label) مع وكالة تسويق رقمي في الكويت، حيث قام أحمد بتنفيذ وتطوير بنية الموقع وضبط التجاوب ودقة المحاذاة استناداً إلى النماذج المعتمدة من العميل والوكالة.',
      en: 'Delivered on a white-label basis for a Kuwait digital marketing agency. Ahmed engineered the front-end layout, responsive typography, and bilingual alignment based on agency-approved design specifications.',
    },
    outcomeNotes: {
      ar: 'أثمر العمل عن إطلاق بوابة رقمية موحدة تعكس ثقل الشركة الإنشائي، وتسهل على صانعي القرار في المشاريع الكبرى طلب عروض الأسعار واستعراض سابقة الأعمال بثقة ووضوح.',
      en: 'Delivered an authoritative corporate destination that crystallizes the company’s contracting stature, enabling regional commercial decision-makers to inspect capabilities and initiate inquiries seamlessly.',
    },
  },
  {
    slug: 'mithaq-legal',
    title: {
      ar: 'مِيثاق | المحاماة والاستشارات القانونية',
      en: 'Mithaq | Legal Firm & Strategic Consultations',
    },
    subtitle: {
      ar: 'منصة قانونية متقدمة تجسد الهيبة المؤسسية والتحليل الاستراتيجي عبر تجربة بصرية وبنائية غامرة',
      en: 'Advanced institutional legal platform conveying authority and strategic foresight through an immersive spatial build',
    },
    summary: {
      ar: 'مفهوم وبناء تطبيقي متقدم لموقع مؤسسة قانونية استشارية رفيعة المستوى، يدمج بين الرصانة الطباعية الصارمة، العناصر البعدية التفاعلية، والتدرج الحكائي لتعزيز هيبة الكيان وموثوقيته.',
      en: 'An advanced custom-engineered legal institution concept combining rigorous classical typography, subtle spatial 3D elements, and editorial scroll progression to project supreme institutional credibility.',
    },
    sector: {
      key: 'legal-professional',
      label: {
        ar: 'الخدمات القانونية والمؤسسية',
        en: 'Legal & Professional Services',
      },
    },
    classification: {
      key: 'independent-concept',
      label: {
        ar: 'مفهوم وبناء تطبيقي متقدم',
        en: 'Independent Concept · Experimental Build',
      },
    },
    market: {
      ar: 'المملكة العربية السعودية والخليج العربي',
      en: 'Saudi Arabia & Gulf Region',
    },
    languages: {
      ar: 'العربية (RTL متقدمة)',
      en: 'Arabic (Advanced RTL Typography)',
    },
    role: {
      ar: 'التوجيه الإبداعي، تصميم الواجهات، والتطوير الأمامي التفاعلي بالكامل بتقنيات WebGL و Three.js و GSAP',
      en: 'Creative Direction, UI/UX Design, and Full Interactive Front-End Engineering with WebGL, Three.js & GSAP',
    },
    liveUrl: 'https://the-legal-profession-swj43.vercel.app/',
    previewImage: '/images/projects/mithaq-preview.png',
    galleryImages: [
      '/images/projects/mithaq/shot-about.png',
      '/images/projects/mithaq/shot-why-us.png',
      '/images/projects/mithaq/shot-services.png',
      '/images/projects/mithaq/shot-methodology.png',
      '/images/projects/mithaq/shot-insights.png',
      '/images/projects/mithaq/shot-team.png',
      '/images/projects/mithaq/shot-positioning.png',
      '/images/projects/mithaq/shot-values.png',
      '/images/projects/mithaq/shot-faq.png',
    ],
    featured: true,
    order: 2,
    year: '2026',
    overview: {
      ar: 'يعد مشروع مِيثاق من أبرز الأعمال البنائية المستقلة في معرض أعمال أحمد؛ حيث يجسد الدمج الحقيقي بين الفهم العميق لخصوصية قطاع المحاماة والاستشارات الاستراتيجية في الخليج العربي، وبين أحدث تقنيات الويب التفاعلية ثلاثية الأبعاد.',
      en: 'Mithaq stands as a pinnacle experimental build in Ahmed’s portfolio, demonstrating how high-stakes corporate legal practices can transcend boilerplate brochure sites through purposeful interactive 3D, architectural layouts, and commanding Arabic typography.',
    },
    context: {
      ar: 'تعاني مواقع المكاتب القانونية التقليدية من النمطية المفرطة؛ بطاقات متكررة، موازين عدالة مكرورة، ونصوص جامدة تفقد الكيان هيبته التنافسية. كان الهدف هنا ابتكار لغة رقمية تعكس "الحصانة القانونية الاستباقية" وعمق الاستشارة المؤسسية قبل حدوث النزاع.',
      en: 'Conventional law firm websites often languish in clichéd visuals, generic scale icons, and dry text blocks that fail to convey modern commercial sophistication. The goal was to articulate "proactive legal immunity" through architectural dignity and digital craftsmanship.',
    },
    challenge: {
      ar: 'الموازنة الدقيقة بين هيبة التقاليد القانونية الصارمة وبين التطور التقني العصري؛ فالموقع يجب ألا يبدو متكلفاً كأنه لعبة إلكترونية، بل صرحاً رقمياً رصيناً ينبض بالدقة، مع الحفاظ على سرعة الاستجابة وسلاسة الحركة عبر مختلف سرعات المعالجة.',
      en: 'Striking a delicate balance between institutional gravitas and cutting-edge digital expression—avoiding gimmicky novelty while harnessing 3D physics and kinetic typography to command supreme executive respect.',
    },
    strategy: {
      description: {
        ar: 'بناء سردية بصرية متماسكة تنطلق من شعار "حين تكون التفاصيل فارقة، تبدأ قوة الموقف"، وتقود الزائر عبر محطات فكرية تفكك الفلسفة المؤسسية، مجالات الممارسة، والتحليل القضائي المقارن.',
        en: 'Crafting a cohesive visual narrative centered on strategic foresight, guiding C-suite executives through institutional philosophy, proactive immunity pillars, and practice disciplines.',
      },
      points: [
        {
          ar: 'توظيف مشهد تفاعلي ثلاثي الأبعاد يعبر عن توازن الأركان ودقة تلاقي الحجج القانونية في صدر الصفحة الرئيسية.',
          en: 'A bespoke 3D geometric centerpiece symbolizing equilibrium, foundational firmness, and analytical precision.',
        },
        {
          ar: 'صياغة طباعية عربية صارمة تستند إلى خطوط أصيلة مع ضبط دقيق لارتفاعات الأسطر وهوامش القراءة.',
          en: 'Rigorous Arabic typographic hierarchy ensuring pristine readability for dense analytical texts.',
        },
        {
          ar: 'مصفوفة مقارنة تفاعلية تبرز الفارق بين النهج القانوني الدفاعي التقليدي والنهج الاستباقي الحصين لمِيثاق.',
          en: 'An interactive comparative framework illustrating reactive dispute defense versus proactive immunity.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'استلهام لوحة ألوان مستوحاة من وقار المكاتب السيادية (درجات الكحلي العميق، الذهب البرونزي المطفي، وورق البرشمان العاجي)، مع حركات انتقال هادئة ومحسوبة بالمليمتر.',
        en: 'A sovereign palette of deep imperial navy, warm muted bronze-gold, and architectural ivory parchment, paired with measured, mathematically timed scroll transitions.',
      },
      points: [
        {
          ar: 'بطاقات مجالات الممارسة ذات الكشف التدريجي المنظم والتفاصيل الاستشارية الدقيقة.',
          en: 'Progressive disclosure cards for practice areas with rich contextual scopes and advisory tracks.',
        },
        {
          ar: 'قسم الرؤى والمنشورات القانونية المصمم بأسلوب النشر الدوري الفاخر لتعزيز المكانة الفكرية للكيان.',
          en: 'Editorial insights and jurisprudence publications styled after elite institutional research digests.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تطوير الموقع كحزمة متكاملة توظف محرك Three.js المخصص مع إدارة دقيقة لحلقات التصيير وذاكرة الرسومات (WebGL Memory Optimization).',
        en: 'Engineered as a full interactive build leveraging Three.js and GSAP timelines with strict WebGL lifecycle cleanup and 60fps mobile execution.',
      },
      points: [
        {
          ar: 'هندسة حركات الانسياب والتحكم في ظهور الأقسام عبر GSAP ScrollTrigger مع دعم تفضيلات تقليل الحركة.',
          en: 'Deterministic scroll-bound sequencing via GSAP ScrollTrigger with comprehensive reduced-motion fallbacks.',
        },
        {
          ar: 'تحقيق تكيف استثنائي مع مختلف مقاسات الهواتف دون فقدان عمق المشهد أو وضوح العبارات القانونية.',
          en: 'Flawless responsive adaptation preserving visual depth without compromising mobile text legibility.',
        },
      ],
    },
    deliverables: {
      ar: [
        'منصة تفاعلية متكاملة تضم 9 أقسام هيكلية متخصصة للمنظومة القانونية',
        'مشهد مركزي ثلاثي الأبعاد تفاعلي مبني بتقنية Three.js و WebGL',
        'نظام حركة وانتقالات نصوص متقدم قائم على مكتبة GSAP الاحترافية',
        'واجهة عربية أصيلة بنسبة 100% مصممة خصيصاً لسياق الأعمال الخليجي',
        'معمارية كود معيارية عالية الأداء وقابلة للتوسع المؤسسي المباشر',
      ],
      en: [
        'Complete interactive legal platform comprising 9 strategic institutional sections',
        'Custom interactive 3D spatial scene engineered with Three.js and WebGL',
        'Advanced kinetic typography and scroll choreography driven by GSAP',
        'Native Arabic typography calibrated for Saudi and GCC commercial conventions',
        'Production-grade, highly optimized codebase with sub-second loading states',
      ],
    },
    observations: {
      ar: 'هذا المشروع هو بناء مفاهيمي وتجريبي مستقل بالكامل نفذه أحمد بهدف استعراض أقصى إمكانيات التصميم البصري الرفيع والتطوير التفاعلي للقطاعات السيادية والمهنية الحساسة، ولا يمثل تعاقداً حياً مع مكتب قائم.',
      en: 'This project is an independent conceptual and technical experimental build created by Ahmed to push the boundaries of spatial design and interactive development for elite professional firms. It is not an active commercial firm engagement.',
    },
    outcomeNotes: {
      ar: 'يقدم المشروع دليلاً ملموساً على قدرة أحمد على إخراج مشاريع رقمية تتفوق في مقاييس الإبهار البصري والانضباط المعماري، وتبرز إمكانية تحويل القطاعات المهنية التقليدية إلى تجارب رقمية تأسر العقول.',
      en: 'Serves as an undeniable testament to Ahmed’s capacity to envision and engineer digital flagship experiences that rival premier global design agencies in sophistication and technical finesse.',
    },
  },
  {
    slug: 'safeer-al-oamara',
    title: {
      ar: 'سفير الأمراء للمستلزمات والأزياء الرجالية التراثية',
      en: 'Safeer Al Oamara Traditional Attire & Luxury Menswear',
    },
    subtitle: {
      ar: 'واجهة رقمية راقية تعكس عراقة المستلزمات التراثية وتسهل الاستفسار والطلب المباشر',
      en: 'Refined digital retail showcase celebrating Kuwaiti heritage menswear with seamless direct purchasing paths',
    },
    summary: {
      ar: 'موقع كتالوج بصري فخم لعلامة تجارية كويتية متخصصة في الأزياء التراثية والمستلزمات الرجالية، يركز على جودة الخامات والتفاصيل وأناقة العرض مع تفعيل الطلب المباشر عبر واتساب.',
      en: 'A luxurious visual catalog and brand showcase for a distinguished Kuwait menswear label, highlighting premium fabric textures, bespoke craftsmanship, and frictionless WhatsApp sales ordering.',
    },
    sector: {
      key: 'retail-heritage',
      label: {
        ar: 'التجزئة والأزياء والمستلزمات التراثية',
        en: 'Retail, Fashion & Heritage Attire',
      },
    },
    classification: {
      key: 'client-project',
      label: {
        ar: 'مشروع عميل · تعاون مع وكالة',
        en: 'Client Project · Agency Collaboration',
      },
    },
    market: {
      ar: 'الكويت',
      en: 'Kuwait',
    },
    languages: {
      ar: 'العربية (RTL)',
      en: 'Arabic (RTL)',
    },
    role: {
      ar: 'تنفيذ الواجهة الأمامية وهيكلة كتالوج المنتجات وتكامل مسار الشراء المباشر مع الوكالة',
      en: 'Front-End Implementation, Catalog Structuring & Direct Sales Pathway Integration',
    },
    liveUrl: 'https://safiralamara.com/',
    previewImage: '/images/projects/safer.png',
    galleryImages: ['/images/projects/safer.png'],
    featured: true,
    order: 3,
    year: '2025',
    overview: {
      ar: 'تم بناء هذا الموقع كحل رقمي أنيق لمتجر كويتي عريق في مجال الأزياء والمستلزمات الرجالية التقليدية، حيث كان التحدي هو نقل الفخامة والخصوصية التراثية إلى الشاشة دون تعقيد مسار الشراء المباشر للعميل الخليجي.',
      en: 'Engineered as an agency partnership project for a prominent Kuwaiti traditional menswear outfitter, translating tactile craftsmanship and cultural prestige into an effortless digital catalog with direct mobile commerce.',
    },
    context: {
      ar: 'في قطاع المستلزمات الرجالية الفاخرة (الدشاديش، الأشمغة، البشوت، والإكسسوارات)، يفضل جمهور المستهلكين في الكويت والخليج التواصل الفوري والاستفسار عن التفاصيل والقياسات عبر المحادثة المباشرة بدلاً من إجراءات الشراء المعقدة عبر بوابات الدفع التقليدية.',
      en: 'In premium Gulf heritage apparel, buyers demand personalized service, size consultations, and direct dialogue before committing. The digital experience needed to replicate the private tailoring consultation online.',
    },
    challenge: {
      ar: 'إبراز القيمة العالية للمنتجات والأقمشة من خلال تجربة تصفح بصرية مريحة للعين، مع ضمان سرعة تنقل المستخدم من استعراض القطعة إلى بدء محادثة الطلب على واتساب مع تفاصيل القطعة المحددة بنقرة واحدة.',
      en: 'Presenting high-resolution textile details and product collections with editorial restraint while reducing friction to zero for launching pre-filled WhatsApp purchasing inquiries.',
    },
    strategy: {
      description: {
        ar: 'اعتماد نمط المعرض البصري الفاخر (Editorial Lookbook) الذي يمنح كل تشكيلة مساحتها الكافية، وربط كل منتج بزر اتصال ذكي يرسل اسم المنتج ونوعه تلقائياً لممثل المبيعات.',
        en: 'Deploying an editorial lookbook architecture that accords generous breathing room to artisanal collections, backed by dynamic intent-coded WhatsApp triggers.',
      },
      points: [
        {
          ar: 'تصنيف المنتجات إلى مجموعات واضحة تشمل المستلزمات الرئيسية، الأقمشة، والكماليات التراثية.',
          en: 'Categorized collections distinguishing core garments, artisanal fabrics, and seasonal accessories.',
        },
        {
          ar: 'استخدام ألوان هادئة وهوامش واسعة تبرز تفاصيل صور المنتجات دون شوشرة بصرية.',
          en: 'Subdued tonal backgrounds and spacious grids allowing product photography to command full focus.',
        },
        {
          ar: 'تضمين أزرار طلب واضحة في كل شاشات الجوال لتعظيم معدلات التحويل للطلب الفعلي.',
          en: 'Sticky mobile contact triggers maximizing inbound inquiry volume for the sales team.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'تصميم يمزج بين الأناقة العربية المعاصرة وبساطة الاستخدام لكافة الفئات العمرية من العملاء.',
        en: 'Blending contemporary Arabic typography with intuitive single-thumb ergonomics for effortless mobile browsing.',
      },
      points: [
        {
          ar: 'معالجة انسيابية لحركة الكتالوج وسهولة العودة للمجموعات الرئيسية.',
          en: 'Fluid browsing mechanics enabling easy returns to category overviews.',
        },
        {
          ar: 'استعراض مكبر لتفاصيل القطع يبرز جودة الحياكة ونوعية النسيج.',
          en: 'Optimized zoom and detail cards revealing stitching finesse and fabric drape.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تنفيذ بنية العرض وضبط التجاوب التام للشاشات الصغيرة والمتوسطة.',
        en: 'Implementation of the responsive product catalog and fast-routing inquiry architecture.',
      },
      points: [
        {
          ar: 'توليد روابط واتساب المشفرة تلقائياً مع معرّف المنتج لتقليل وقت معالجة الطلبات.',
          en: 'Automated intent-encoded WhatsApp links including product references.',
        },
        {
          ar: 'تحسين أحجام الصور وعرضها بصيغ حديثة لتفادي بطء التحميل على الشبكات اللاسلكية.',
          en: 'Next-gen image delivery ensuring immediate rendering on mobile connections.',
        },
      ],
    },
    deliverables: {
      ar: [
        'موقع استعراض تجاري وكتالوج منتجات راقٍ باللغة العربية',
        'نظام تصنيف وتصفح ذكي لمجموعات الأزياء والمستلزمات الرجالية',
        'تكامل كامل للطلب الفوري عبر محادثات واتساب المباشرة',
        'تصميم متجاوب متوافق مع كافة الهواتف الذكية بنسبة 100%',
      ],
      en: [
        'Luxury Arabic retail catalog and brand showcase website',
        'Intuitive categorization system for traditional menswear collections',
        'Direct WhatsApp inquiry and ordering integration with pre-filled items',
        'Mobile-first responsive presentation optimized for regional smartphones',
      ],
    },
    observations: {
      ar: 'مشروع حقيقي تم تنفيذه ضمن شراكة مع وكالة إعلانية كويتية، واقتصر دور أحمد على تطوير وبناء واجهة الموقع وضبط الأنماط وتجربة المستخدم وفق التوجيهات المعتمدة.',
      en: 'Real commercial delivery executed in partnership with a Kuwaiti creative agency. Ahmed handled front-end development, styling, and conversion integration.',
    },
    outcomeNotes: {
      ar: 'أتاح الموقع للمتجر تحويل جزء كبير من استفسارات وسائل التواصل المشتتة إلى قناة تواصل رقمية موحدة ومنظمة تزيد من ثقة العملاء وسرعة إتمام المبيعات.',
      en: 'Enabled the retail brand to channel fragmented social traffic into a coherent, prestigious catalog that accelerated direct sales discussions.',
    },
  },
  {
    slug: 'mobile-car-wash-kuwait',
    title: {
      ar: 'غسيل وتلميع السيارات المتنقل في الكويت (A2Z Wash)',
      en: 'Mobile Car Wash Kuwait (A2Z Wash) On-Demand Detailing',
    },
    subtitle: {
      ar: 'منصة خدمات متنقلة مصممة خصيصاً للهواتف الذكية لتحويل الزوار إلى حجوزات فورية',
      en: 'Conversion-focused mobile service hub driving on-demand vehicle detailing bookings across Kuwait',
    },
    summary: {
      ar: 'موقع خدمي مكثف وسريع التفاعل لشركة غسيل وعناية بالسيارات متنقلة في الكويت، صُمم لتقديم باقات الخدمة بوضوح قاطع وتسهيل اتخاذ قرار الحجز الفوري عبر واتساب بأقل قدر ممكن من الخطوات.',
      en: 'A high-conversion mobile-first service website for an on-demand automotive detailing operator in Kuwait, built to present service packages with clarity and reduce the steps between visitor intent and WhatsApp booking.',
    },
    sector: {
      key: 'consumer-services',
      label: {
        ar: 'خدمات العناية المتنقلة بالسيارات',
        en: 'Automotive Detailing & On-Demand Services',
      },
    },
    classification: {
      key: 'client-project',
      label: {
        ar: 'مشروع عميل · تعاون مع وكالة',
        en: 'Client Project · Agency Collaboration',
      },
    },
    market: {
      ar: 'الكويت',
      en: 'Kuwait',
    },
    languages: {
      ar: 'العربية (RTL مخصصة للهواتف)',
      en: 'Arabic (Mobile RTL Focus)',
    },
    role: {
      ar: 'تطوير وهندسة واجهة الهبوط وبطاقات الباقات وتكامل قنوات الحجز الفوري',
      en: 'Front-End Development, Pricing Tier Architecture & WhatsApp Booking Pathway',
    },
    liveUrl: 'https://a2zwash.goonline.asia/',
    previewImage: '/images/projects/car-wash.png',
    galleryImages: ['/images/projects/car-wash.png'],
    featured: true,
    order: 4,
    year: '2025',
    overview: {
      ar: 'تم تصميم وتطوير هذه المنصة الخدمية للتعامل مع الطبيعة السريعة لخدمات غسيل وتلميع السيارات عند المنزل أو العمل في الكويت؛ حيث يبحث المستخدم عادةً عن الباقة والسعر والاتصال بأسرع وقت ممكن.',
      en: 'Engineered as an agile service portal addressing the fast-paced nature of doorstep vehicle detailing in Kuwait, where mobile searchers prioritize clear pricing tiers and immediate service dispatches.',
    },
    context: {
      ar: 'يتميز سوق خدمات غسيل السيارات المتنقلة بالمنافسة العالية وحساسية العميل للسرعة. أي موقع يتطلب ملء استمارات طويلة أو تصفح صفحات متعددة يؤدي إلى مغادرة الزائر فوراً. لذلك كان التركيز على صفحة رئيسية مكثفة تعرض الباقات بوضوح قاطع.',
      en: 'The on-demand car detailing market is fiercely competitive. Complex multi-step forms result in heavy bounce rates. The solution demanded a hyper-focused, single-page presentation with explicit service deliverables.',
    },
    challenge: {
      ar: 'عرض باقات الغسيل الداخلي والخارجي والتلميع الساطع مع أسعارها ومميزاتها بشكل مقارن وسهل الفهم على الشاشات الصغيرة، مع إزالة كافة الحواجز أمام طلب الحجز.',
      en: 'Presenting multi-tier interior, exterior, and ceramic polishing packages with transparent pricing on compact mobile screens, minimizing taps to dispatch a service van.',
    },
    strategy: {
      description: {
        ar: 'تصميم هيكل بطاقات تسعير عمودية مع إبراز "الباقة الأكثر طلباً"، وربط كل باقة برابط مباشر يفتح محادثة واتساب متضمنة اسم الباقة المطلوبة تلقائياً.',
        en: 'Deploying structured vertical pricing cards with a distinct "Most Popular" visual anchor, linked directly to dedicated WhatsApp dispatch lines.',
      },
      points: [
        {
          ar: 'توضيح مكونات كل باقة (عدد الخطوات، المواد المستخدمة، الوقت التقريبي) بنقاط موجزة.',
          en: 'Granular breakdown of each detailing package (steps, cleaning agents, estimated duration).',
        },
        {
          ar: 'زر اتصال وحجز عائم يرافق المستخدم أثناء التمرير في أي مكان على الصفحة.',
          en: 'Floating persistent CTA bar ensuring immediate booking accessibility during scroll.',
        },
        {
          ar: 'إبراز ضمان الجودة والمعدات الاحترافية لبناء الثقة الفورية لدى العميل.',
          en: 'Prominent trust badges emphasizing commercial-grade equipment and satisfaction guarantees.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'واجهة مفعمة بالحيوية تعتمد التباين اللوني الجذاب لقطاع السيارات (الأزرق النظيف والرمادي الداكن) مع أزرار لمس كبيرة تناسب الاستخدام بيد واحدة أثناء التنقل.',
        en: 'An energetic automotive aesthetic using clean oceanic blues and dark slate, engineered with generous 48px+ touch targets for effortless one-handed thumb interaction.',
      },
      points: [
        {
          ar: 'تقليل النصوص الطويلة واستبدالها بأيقونات وعلامات صح تشير إلى المزايا.',
          en: 'Replacing dense copy with intuitive checklist indicators for rapid visual scanning.',
        },
        {
          ar: 'سرعة استجابة فائقة عند النقر دون أي تأخير.',
          en: 'Sub-100ms interaction feedback with zero layout jank on entry.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تنفيذ بنية الصفحة الواحدة السريعة مع تهيئة أكواد التتبع ونماذج الطلب المحمولة.',
        en: 'Implementation of a lightweight, highly responsive single-page architecture built for fast cellular networks.',
      },
      points: [
        {
          ar: 'هندسة بطاقات الباقات لتتكيف تلقائياً مع مختلف شاشات أندرويد وآيفون.',
          en: 'Adaptive responsive cards auto-adjusting to all Android and iOS display densities.',
        },
        {
          ar: 'ضبط مسار الرسائل الواردة لتقليل الأسئلة المتكررة وتسهيل معرفة عنوان العميل وموقعه.',
          en: 'Structured message syntax prompting users for location and preferred time slot.',
        },
      ],
    },
    deliverables: {
      ar: [
        'صفحة هبوط تسويقية متكاملة موجهة للهواتف الذكية بنسبة 100%',
        'مصفوفة باقات تسعير تفاعلية مع إبراز القيمة والخدمات المشمولة',
        'تكامل كامل لمنظومة الحجز الفوري عبر تطبيق واتساب ورقم الاتصال',
        'بنية فائقة السرعة تضمن التحميل الفوري عبر شبكات 4G و 5G',
      ],
      en: [
        'High-converting mobile-first marketing landing page',
        'Interactive pricing matrix detailing wash and detailing inclusions',
        'Direct WhatsApp and cellular one-tap dispatch integration',
        'Lightweight build optimized for instantaneous loading on 4G/5G networks',
      ],
    },
    observations: {
      ar: 'مشروع عميل تم تنفيذه ضمن تسليمات الوكالة الرقمية، قام أحمد بهندسة الواجهة الأمامية وضبط التفاعل ومسارات التحويل استناداً إلى المواصفات التسويقية المعتمدة.',
      en: 'Client delivery executed through agency collaboration. Ahmed engineered the mobile front-end layout, responsive pricing cards, and instant conversion triggers.',
    },
    outcomeNotes: {
      ar: 'حققت الصفحة هدفها الأساسي المتمثل في اختصار وقت التفكير للزائر ونقله مباشرة إلى خط المحادثة مع فريق العمل لتأكيد الموعد وإرسال السيارة الخدمية.',
      en: 'Achieved the primary commercial goal of minimizing customer decision latency, routing high-intent mobile visitors straight into WhatsApp dispatch chats.',
    },
  },
  {
    slug: 'al-nser-grills',
    title: {
      ar: 'مشويات ومطعم النسر الفضي للمأكولات الأصيلة',
      en: 'Al Nser Al Fadhi Grills & Traditional Kuwaiti Cuisine',
    },
    subtitle: {
      ar: 'قائمة طعام رقمية تفاعلية وتجربة طلب مباشر مصممة لقطاع الضيافة والمطاعم',
      en: 'Interactive digital culinary menu and direct ordering experience tailored for Kuwait dining hospitality',
    },
    summary: {
      ar: 'موقع وتطبيق قائمة طعام تفاعلي لمطعم مشويات كويتي معروف، يركز على تيسير استعراض الأصناف، تقسيم الأقسام (مشويات، مقبلات، وجبات عائلية)، وتسريع الطلب المنزلي والتوصيل.',
      en: 'An interactive digital menu and hospitality portal for a well-known Kuwait grill restaurant, streamlining category browsing (grills, appetizers, family feasts) and home delivery ordering.',
    },
    sector: {
      key: 'culinary-hospitality',
      label: {
        ar: 'الضيافة والمطاعم والمأكولات',
        en: 'Food, Hospitality & Restaurants',
      },
    },
    classification: {
      key: 'client-project',
      label: {
        ar: 'مشروع عميل · تعاون مع وكالة',
        en: 'Client Project · Agency Collaboration',
      },
    },
    market: {
      ar: 'الكويت',
      en: 'Kuwait',
    },
    languages: {
      ar: 'العربية (RTL)',
      en: 'Arabic (RTL)',
    },
    role: {
      ar: 'تطوير الواجهة الأمامية وهيكلة المنيو الرقمي وتكامل قنوات الطلب الهاتفي وواتساب',
      en: 'Front-End Development, Digital Menu Categorization & WhatsApp Order Integration',
    },
    liveUrl: 'https://silver-eagle.goonline.asia/',
    previewImage: '/images/projects/resturant.png',
    galleryImages: ['/images/projects/resturant.png'],
    featured: false,
    order: 5,
    year: '2025',
    overview: {
      ar: 'مشروع واجهة رقمية لمطعم مشويات شهير في الكويت يهدف إلى تحويل القائمة الورقية المحدودة إلى منيو تفاعلي عالي الوضوح يمكن للزبائن تصفحه واختيار وجباتهم منه بسهولة تامة.',
      en: 'A dedicated digital menu project for a popular Kuwaiti grill establishment, modernizing printed paper menus into a high-visibility interactive catalog for quick mobile ordering.',
    },
    context: {
      ar: 'في قطاع المطاعم السريعة والمشاوي، يحتاج الزائر إلى رؤية الأصناف مقسمة بوضوح مع معرفة المحتويات والأسعار بسرعة، والقدرة على الطلب بنقرة زر دون الحاجة للاتصال المعقد أو التسجيل في تطبيقات خارجية تفرض عمولات باهظة.',
      en: 'Restaurant guests demand rapid category navigation, clear dish descriptions, and immediate ordering without the friction of app downloads or platform commissions.',
    },
    challenge: {
      ar: 'تنظيم عشرات الأصناف المتنوعة في واجهة متناسقة تتيح التبديل السريع بين أقسام المشويات، السندويشات، المقبلات، والمشروبات دون إعادة تحميل الصفحة، وضمان ظهور الصور بشكل شهي وجذاب.',
      en: 'Organizing diverse menu items into categorized tabs allowing instant switching without page reloads, accompanied by appetizing imagery and clear portion sizes.',
    },
    strategy: {
      description: {
        ar: 'بناء شريط تنقل أفقي مخصص للأصناف يثبت أعلى الشاشة أثناء التمرير، مع بطاقات وجبات تحتضن الأسعار وزر طلب سريع يضيف الصنف لرسالة واتساب.',
        en: 'Implementing a sticky horizontal category selector anchored at the viewport top, accompanied by compact dish cards with direct WhatsApp ordering triggers.',
      },
      points: [
        {
          ar: 'شريط تصفية أفقي سريع للأقسام (مشويات على الفحم، مقبلات، أطباق الأرز، عصائر).',
          en: 'Fluid horizontal category scrubber for instant section jumps.',
        },
        {
          ar: 'أزرار اتصال هاتفية ومحادثة واتساب مخصصة لفروع المطعم وأوقات العمل.',
          en: 'Branch-specific call and WhatsApp buttons reflecting operational hours.',
        },
        {
          ar: 'عرض العروض الخاصة والبوكسات العائلية في صدارة الصفحة لزيادة متوسط قيمة الطلب.',
          en: 'Featured family feast combos placed prominently to elevate average order value.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'أجواء بصرية دافئة تعكس طابع الشواء والطهي التقليدي مع بطاقات بيضاء نظيفة تبرز تباين الأسعار والأصناف.',
        en: 'Warm amber and charcoal color tones evoking grillhouse atmosphere, balanced by clean white cards ensuring sharp pricing readability.',
      },
      points: [
        {
          ar: 'تصميم مريح للأعين في الإضاءة الخافتة ليناسب طلبات العشاء والولائم.',
          en: 'Comfortable contrast engineered for low-light evening ordering environments.',
        },
        {
          ar: 'سهولة التمرير والتنقل بين مئات الأصناف في ثوانٍ معدودة.',
          en: 'Smooth scroll mechanics allowing deep menu exploration in seconds.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تطوير الواجهة بنظام متجاوب خفيف الوزن يضمن سرعة الفتح على هواتف زبائن المطعم.',
        en: 'Lightweight front-end development tailored for instant opening from social links and QR codes.',
      },
      points: [
        {
          ar: 'دعم كامل للقراءة الصحيحة من اليمين لليسام للأرقام والأسعار بالدينار الكويتي.',
          en: 'Flawless Arabic RTL numeric formatting with Kuwaiti Dinar currency conventions.',
        },
        {
          ar: 'تجهيز مسارات مسح كود QR لاستخدام المنيو داخل الصالة أو في الطلبات الخارجية.',
          en: 'QR code landing readiness for both dine-in scanning and takeaway ordering.',
        },
      ],
    },
    deliverables: {
      ar: [
        'منيو رقمي تفاعلي كامل مخصص للهواتف الذكية باللغة العربية',
        'نظام تصنيف وتصفح سريع للأصناف والمجموعات الغذائية',
        'تكامل كامل للطلب الفوري عبر واتساب والاتصال الهاتفي المباشر',
        'بنية برمجية مهيأة للربط مع بطاقات QR داخل الصالات',
      ],
      en: [
        'Complete interactive mobile digital menu in Arabic',
        'Instant category filtering and dish browsing framework',
        'Direct WhatsApp ordering and one-touch branch dialer integration',
        'QR-code scan ready architecture for in-restaurant and delivery use',
      ],
    },
    observations: {
      ar: 'مشروع عميل نُفذ بالتعاون مع وكالة إعلانية خليجية، وتولى أحمد خلاله تطوير البنية البرمجية التفاعلية للمنيو وتأمين تجربة تصفح متناسقة وسريعة للزبائن.',
      en: 'Delivered as a white-label agency project. Ahmed implemented the interactive menu interface, category navigation, and WhatsApp conversion logic.',
    },
    outcomeNotes: {
      ar: 'ساعد المنيو الرقمي المطعم على استقبال طلبات الطعام المنزلي بشكل أسرع وأكثر دقة مع تقليل الأخطاء في تسجيل الأصناف عبر الهاتف.',
      en: 'Empowered the restaurant to capture home delivery orders with higher accuracy, eliminating phone miscommunications via structured WhatsApp order summaries.',
    },
  },
  {
    slug: 'al-ibtikar-auto',
    title: {
      ar: 'مركز الابتكار المتخصص لصيانة وهندسة السيارات',
      en: 'Al Ibtikar Auto Maintenance Center & Diagnostic Hub',
    },
    subtitle: {
      ar: 'بوابة رقمية شاملة لاستعراض خدمات الصيانة الميكانيكية والكهربائية وتسهيل حجز المواعيد',
      en: 'Comprehensive automotive service portal and diagnostic inquiry platform for a Kuwait auto center',
    },
    summary: {
      ar: 'موقع متكامل لمركز صيانة سيارات معتمد في الكويت، ينظم الخدمات الدقيقة (فحص كمبيوتر، ميكانيكا، كهرباء، صيانة وقائية) ويقدم لمالكي السيارات مساراً واضحاً لفهم المشكلة والتواصل.',
      en: 'A full-scale service portal for a certified Kuwait auto repair facility, organizing technical capabilities (computer diagnostics, mechanical, electrical, preventive care) with clear booking paths.',
    },
    sector: {
      key: 'automotive-maintenance',
      label: {
        ar: 'خدمات وصيانة وهندسة المركبات',
        en: 'Automotive Engineering & Maintenance',
      },
    },
    classification: {
      key: 'client-project',
      label: {
        ar: 'مشروع عميل · تعاون مع وكالة',
        en: 'Client Project · Agency Collaboration',
      },
    },
    market: {
      ar: 'الكويت',
      en: 'Kuwait',
    },
    languages: {
      ar: 'العربية (RTL)',
      en: 'Arabic (RTL)',
    },
    role: {
      ar: 'تنفيذ وتطوير الواجهة الأمامية وهيكلة أقسام الصيانة وحقول الاستفسار الفني',
      en: 'Front-End Development, Service Hub Architecture & Technical Inquiry Integration',
    },
    liveUrl: 'https://aliabtikar.goonline.asia/',
    previewImage: '/images/projects/car-cur.png',
    galleryImages: ['/images/projects/car-cur.png'],
    featured: false,
    order: 6,
    year: '2025',
    overview: {
      ar: 'مركز الابتكار لصيانة السيارات هو مشروع رقمي يهدف إلى ترسيخ مكانة مركز صيانة حديث كوجهة موثوقة لأصحاب السيارات الألمانية والأمريكية واليابانية في الكويت، عبر إبراز الأجهزة المتطورة وكفاءة الفنيين.',
      en: 'A professional web presence engineered for an advanced Kuwait automotive workshop, positioning the center as a trusted hub for precision diagnostics and mechanical engineering.',
    },
    context: {
      ar: 'يواجه أصحاب السيارات قلقاً مستمراً بشأن موثوقية مراكز الصيانة وتشخيص الأعطال. كان الهدف هو بناء موقع يعكس الاحترافية الهندسية، الشفافية في الفحص، ووضوح الخدمات لتشجيع العميل على زيارة المركز.',
      en: 'Vehicle owners often experience anxiety regarding repair transparency and diagnostic credibility. The digital experience needed to project certified engineering standards and clear repair breakdowns.',
    },
    challenge: {
      ar: 'شرح الخدمات الفنية المعقدة بلغة مبسطة ومباشرة، وتوفير أدوات واضحة للتواصل السريع مع المهندس المناوب، مع مراعاة وصول الزوار أثناء وقوع أعطال مفاجئة على الطريق.',
      en: 'Articulating complex mechanical and diagnostic procedures in approachable terms, with emergency contact access for drivers stranded on roadside situations.',
    },
    strategy: {
      description: {
        ar: 'هيكلة الموقع حول "محاور الصيانة الأربعة": فحص الكمبيوتر، الميكانيكا العامة، كهرباء وتكييف، والصيانة الدورية مع خريطة وصول واضحة للمركز.',
        en: 'Structuring the site around four operational hubs: computer diagnostics, mechanics, AC & electrical, and scheduled services, backed by interactive garage location routing.',
      },
      points: [
        {
          ar: 'بطاقات توضيحية لكل عطل شائع وكيفية تشخيصه بالأجهزة الحديثة.',
          en: 'Diagnostic breakdown cards outlining symptoms and modern computer testing workflows.',
        },
        {
          ar: 'تأكيد الاعتماد والضمان على قطع الغيار وأجور اليد لتعزيز الأمان النفسي.',
          en: 'Trust warranties highlighted for replacement parts and labor durability.',
        },
        {
          ar: 'زر اتصال طوارئ سريع وربط مباشر مع موقع الورشة على خرائط جوجل.',
          en: 'One-touch emergency breakdown dialer and Google Maps directions link.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'تصميم صناعي هندسي يوحي بالقوة والموثوقية، يجمع بين درجات الرمادي الفولاذي والأزرق الفني مع مساحات قراءة واضحة.',
        en: 'An industrial engineering aesthetic pairing steel slates with technical blues, communicating garage rigor and procedural precision.',
      },
      points: [
        {
          ar: 'أيقونات تقنية متخصصة تعبر بدقة عن مكونات المحرك والأنظمة الإلكترونية.',
          en: 'Specialized automotive iconography illustrating engine and electronic subsystems.',
        },
        {
          ar: 'تسلسل سلس من تشخيص العطل إلى حجز فحص الورشة.',
          en: 'Seamless path guiding the customer from symptom discovery to workshop appointment.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تطوير صفحات الموقع وربط أزرار التواصل المباشر مع تطبيق واتساب المخصص للورشة.',
        en: 'Implementation of the responsive front-end layout with structured WhatsApp booking triggers.',
      },
      points: [
        {
          ar: 'ضبط المحاذاة والخطوط العربية التقنية لضمان قراءة مريحة على شاشات الهواتف.',
          en: 'Technical Arabic typography tuned for instant mobile readability.',
        },
        {
          ar: 'تحسين أداء الواجهة لتفتح فوراً حتى في حالات ضعف شبكة الاتصال.',
          en: 'Performance tuning ensuring instantaneous boot even under weak roadside mobile data.',
        },
      ],
    },
    deliverables: {
      ar: [
        'موقع خدمي متكامل لمركز الصيانة باللغة العربية',
        'هيكلة واضحة لأقسام الصيانة والميكانيكا والكهرباء والتشخيص',
        'تكامل كامل لقنوات الاستفسار السريع وتحديد المواعيد وحالات الطوارئ',
        'تكامل موقع المركز على الخرائط لتوجيه العملاء مباشرة إلى الورشة',
      ],
      en: [
        'Complete automotive service website in Arabic',
        'Structured capability hubs covering diagnostics, mechanics, and AC systems',
        'Emergency roadside assistance and appointment dispatch integration',
        'Interactive Google Maps routing guiding motorists directly to the garage',
      ],
    },
    observations: {
      ar: 'مشروع عميل تم تسليمه عبر شراكة الوكالة الرقمية، ركز خلاله أحمد على إنجاز الواجهة الأمامية وتنسيق الأقسام وتسهيل تدفق استفسارات الصيانة.',
      en: 'Delivered as a white-label agency project. Ahmed implemented the front-end interface, layout architecture, and customer inquiry pathways.',
    },
    outcomeNotes: {
      ar: 'مكن الموقع المركز من استقبال اتصالات منتظمة لحجز مواعيد الفحص الدوري والتشخيص المعقد، مما ساعد في رفع كفاءة إشغال ورشة الصيانة.',
      en: 'Enabled the repair facility to capture steady appointments for diagnostic scans and engine overhauls, optimizing garage bay occupancy.',
    },
  },
  {
    slug: 'boomtwon-travel',
    title: {
      ar: 'منصة بوم تاون لاستكشاف الوجهات والسياحة',
      en: 'BoomTwon Travel & Global Tourism Platform Concept',
    },
    subtitle: {
      ar: 'مفهوم تصميمي متقدم لعرض الوجهات العالمية والحزم السياحية بأسلوب بصري ساحر',
      en: 'Editorial travel showcase concept pairing immersive destination imagery with structured vacation itineraries',
    },
    summary: {
      ar: 'مفهوم تطبيقي متطور لمنصة سياحية وسفر، يستعرض الوجهات العالمية وباقات الإجازات من خلال بطاقات تفاعلية أنيقة وتصميم تحفيزي يدفع الزائر لاكتشاف العطلة القادمة والتواصل.',
      en: 'An advanced independent front-end concept for a luxury travel and tour operator, presenting global destinations and holiday packages through curated editorial layouts and seamless discovery cards.',
    },
    sector: {
      key: 'travel-tourism',
      label: {
        ar: 'السياحة والوجهات الترفيهية',
        en: 'Travel & Tourism',
      },
    },
    classification: {
      key: 'independent-concept',
      label: {
        ar: 'مفهوم وتطوير واجهة مستقل',
        en: 'Independent Front-End Concept',
      },
    },
    market: {
      ar: 'دولي / استكشافي',
      en: 'International / Experimental',
    },
    languages: {
      ar: 'الإنجليزية (LTR)',
      en: 'English (LTR)',
    },
    role: {
      ar: 'تصميم الواجهات، البناء الأمامي المخصص، وضبط التفاعل البصري للوجهات',
      en: 'UI Design, Custom Front-End Development & Visual Destination Storytelling',
    },
    liveUrl: 'https://boo-town.vercel.app/',
    previewImage: '/images/projects/BoomTwon.png',
    galleryImages: ['/images/projects/BoomTwon.png'],
    featured: false,
    order: 7,
    year: '2024',
    overview: {
      ar: 'صُمم هذا العمل كمشروع واجهة مستقل لاختبار أحدث أساليب العرض البصري لقطاع السياحة والسفر؛ حيث يتم التركيز على إيقاظ الشغف بالاستكشاف عبر صور غامرة وتفاصيل منظمة لكل وجهة.',
      en: 'Built as an independent conceptual development exploring next-generation travel portals where high-impact destination visuals intersect with organized holiday planning structures.',
    },
    context: {
      ar: 'تحتاج منصات السفر إلى خلق رغبة عاطفية فورية لدى الزائر، متبوعة بمعلومات عملية مباشرة تشمل المدة، التكلفة، وأبرز الأنشطة المشمولة.',
      en: 'Modern travel platforms must evoke visceral wanderlust while providing instant logistical clarity—duration, itinerary highlights, and simple booking avenues.',
    },
    challenge: {
      ar: 'الجمع بين الإبهار البصري الصوري وبين سرعة التحميل وسلاسة التصفح، وتصميم بطاقات عروض لا تزدحم بالمعلومات بل تقدم المهم فقط.',
      en: 'Balancing visually rich photography with fast load times and clean card typography that doesn’t overwhelm prospective travelers.',
    },
    strategy: {
      description: {
        ar: 'توزيع الوجهات في شبكة بصرية متدرجة تتضمن تصنيفات موسمية (شواطئ، مغامرات، استرخاء) مع مسار استفسار فوري.',
        en: 'Curating destinations into thematic journeys (coastal retreats, alpine expeditions, cultural capitals) backed by quick inquiry triggers.',
      },
      points: [
        {
          ar: 'بطاقات وجهات تفاعلية تعرض نبذة ملهمة ومزايا الباقة بنقرة واحدة.',
          en: 'Interactive destination cards unveiling package scopes and highlights upon hover.',
        },
        {
          ar: 'مسار حجز واستفسار استباقي يربط العميل مباشرة مع مستشار السفر.',
          en: 'Proactive inquiry pathways connecting travel inquiries with curated planners.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'تصميم عصري منفتح يعتمد على الصور العريضة والتدرجات الهادئة ومساحات القراءة المريحة.',
        en: 'A breezy editorial design utilizing expansive hero frames, serene negative space, and modern typography.',
      },
      points: [
        {
          ar: 'تنقل سريع بين الوجهات دون تعقيد.',
          en: 'Effortless multi-destination browsing with intuitive category tags.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'بناء واجهات برمجية متجاوبة بالكامل عبر أحدث تقنيات الويب.',
        en: 'Custom front-end code engineered for cross-browser stability and mobile fidelity.',
      },
      points: [
        {
          ar: 'ضبط المحاذاة وتوزيع العناصر عبر مختلف مقاسات الهواتف والأجهزة اللوحية.',
          en: 'Strict grid alignments across tablet, laptop, and mobile viewports.',
        },
      ],
    },
    deliverables: {
      ar: [
        'واجهة استعراض سياحية تفاعلية متكاملة باللغة الإنجليزية',
        'كتالوج وجهات وباقات سفر مصممة بأسلوب تحريري أنيق',
        'تخطيط متجاوب بنسبة 100% لكافة الأجهزة',
      ],
      en: [
        'Complete interactive travel showcase landing concept in English',
        'Editorial destination catalog with curated itinerary structures',
        '100% responsive multi-breakpoint layout architecture',
      ],
    },
    observations: {
      ar: 'مفهوم أمامي وتصميمي مستقل يعكس مقدرة أحمد على ابتكار هويات رقمية متميزة لقطاعات السياحة والضيافة، ولا يرتبط بعميل تجاري مباشر.',
      en: 'An independent front-end design concept created by Ahmed to explore travel showcase aesthetics. Not an active commercial client contract.',
    },
    outcomeNotes: {
      ar: 'يقدم النموذج برهاناً عملياً على صياغة تجارب مستخدم ممتعة وبصرية تناسب الوكالات السياحية ومنظمي الرحلات الفاخرة.',
      en: 'Demonstrates refined visual hierarchy and inspirational UX patterns tailored for high-end tour operators.',
    },
  },
  {
    slug: 'hoobank-financial',
    title: {
      ar: 'منصة هوو بنك للخدمات المالية والمدفوعات الذكية',
      en: 'HooBank Next-Gen Financial Portal & Payments Concept',
    },
    subtitle: {
      ar: 'مفهوم واجهة مالية متقدمة تجسد الأمان والابتكار المصرفي في حلول الدفع الرقمي',
      en: 'Cutting-edge fintech web concept communicating security, frictionless billing, and next-gen financial tools',
    },
    summary: {
      ar: 'مفهوم واجهة تقنية مالية (Fintech) عصري يستعرض حلول بطاقات الدفع الرقمية والتحويلات المشفرة مع رسوم بيانية توضيحية وهيكل تسويقي متزن.',
      en: 'A sophisticated fintech interface concept presenting next-generation digital card solutions, automated billing insights, and enterprise payment integrations.',
    },
    sector: {
      key: 'fintech',
      label: {
        ar: 'التقنية المالية والخدمات المصرفية',
        en: 'Finance & Fintech',
      },
    },
    classification: {
      key: 'independent-concept',
      label: {
        ar: 'مفهوم وتطوير واجهة مستقل',
        en: 'Independent Front-End Concept',
      },
    },
    market: {
      ar: 'عالمي / تقني',
      en: 'Global / Modern Tech',
    },
    languages: {
      ar: 'الإنجليزية (LTR)',
      en: 'English (LTR)',
    },
    role: {
      ar: 'تصميم الواجهات وبناء المكونات الأمامية التفاعلية وعناصر المحاكاة المالية',
      en: 'Front-End Engineering, UI Component Architecture & Financial Visualization Mockups',
    },
    liveUrl: 'https://hoo-bank-cyan-rho.vercel.app/',
    previewImage: '/images/projects/HooBank.png',
    galleryImages: ['/images/projects/HooBank.png'],
    featured: false,
    order: 8,
    year: '2024',
    overview: {
      ar: 'مشروع أمامي مستقل يركز على قطاع التكنولوجيا المالية سريع النمو؛ حيث يتطلب إقناع العميل نقل الثقة والأمان التقني جنباً إلى جنب مع السرعة والسهولة.',
      en: 'An independent front-end development project targeting the fast-evolving fintech arena, communicating rigorous cryptographic security alongside modern digital agility.',
    },
    context: {
      ar: 'تحتاج المواقع المالية إلى كسر الجمود المصرفي التقليدي واستبداله بلغة بصرية مستقبلية تشرح كيفية إدارة الأموال والمدفوعات بذكاء ودون تعقيد.',
      en: 'Fintech portals must transcend legacy banking austerity, adopting futuristic, trust-inspiring visual metaphors that illustrate streamlined financial control.',
    },
    challenge: {
      ar: 'تقديم المنتجات المالية المعقدة (إدارة النفقات، إصدار البطاقات، بوابات الدفع) في واجهة انسيابية جذابة لا تبدو جافة أو مربكة للمستخدم العادي.',
      en: 'Presenting multi-layered financial utilities (expense automation, virtual card issuance, merchant APIs) within an engaging, frictionless landing framework.',
    },
    strategy: {
      description: {
        ar: 'بناء واجهات تعتمد التباين العالي، والبطاقات ثلاثية الأبعاد التوضيحية، وشرح المزايا من خلال مقارنات بصرية مباشرة.',
        en: 'Deploying high-contrast dark spatial themes, layered card mockups, and comparative feature breakdowns to clarify core benefits.',
      },
      points: [
        {
          ar: 'نماذج بصرية لبطاقات الائتمان والمعاملات اللحظية لتقريب الصورة الذهنية.',
          en: 'Virtual card mockups and instant ledger simulations providing tangible product context.',
        },
        {
          ar: 'هيكل تسويقي متدرج يوضح معايير الأمان وشهادات التشفير البنكي.',
          en: 'Security validation sections establishing bank-grade encryption credentials.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'أسلوب بصري تقني مستوحى من كبرى شركات التكنولوجيا المالية في وادي السيليكون.',
        en: 'A high-tech digital craft aesthetic inspired by Silicon Valley fintech pioneers.',
      },
      points: [
        {
          ar: 'أناقة الطباعة ووضوح الرسوم البيانية التوضيحية.',
          en: 'Crisp sans-serif typography paired with intuitive financial diagrams.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تطوير أمامي عالي الكفاءة يدعم التجاوب الكامل دون المساس بنقاء العناصر الرسومية.',
        en: 'Responsive component implementation ensuring pixel-perfect fidelity across devices.',
      },
      points: [
        {
          ar: 'كود معياري منظم وقابل لإعادة الاستخدام في تطبيقات أوسع.',
          en: 'Modular architecture primed for extension into full web applications.',
        },
      ],
    },
    deliverables: {
      ar: [
        'واجهة هبوط تقنية مالية متكاملة باللغة الإنجليزية',
        'مكونات بصرية تفاعلية تحاكي بطاقات الدفع والمعاملات المصرفية',
        'تصميم متجاوب متوافق بنسبة 100% مع كافة الشاشات',
      ],
      en: [
        'Complete fintech landing page concept in English',
        'Interactive UI components simulating digital cards and transaction flows',
        '100% responsive layout across mobile and desktop displays',
      ],
    },
    observations: {
      ar: 'مفهوم واجهة مستقل تماماً ولا يمثل بنكاً حقيقياً أو حلاً مالياً مرخصاً، وتم بناؤه لإثبات مهارات أحمد في تقديم المشاريع التقنية والمالية المعقدة.',
      en: 'An independent conceptual design and front-end build. Not a licensed financial institution or live commercial product.',
    },
    outcomeNotes: {
      ar: 'يقدم النموذج رؤية واضحة لكيفية صياغة واجهات شركات التكنولوجيا المالية الناشئة لجذب المستثمرين والعملاء الأوائل.',
      en: 'Showcases how early-stage fintech ventures can project authoritative maturity and tech superiority from day one.',
    },
  },
  {
    slug: 'urbanbuild-construction',
    title: {
      ar: 'منصة إربان بيلد للتطوير العقاري والمقاولات الحديثة',
      en: 'UrbanBuild Real Estate & Architectural Construction Concept',
    },
    subtitle: {
      ar: 'مفهوم رقمي معماري لعرض المشاريع الإنشائية والتطوير الحضري بأسلوب هندسي متقن',
      en: 'Architectural web concept presenting structural engineering portfolios and property developments',
    },
    summary: {
      ar: 'مفهوم موقع لشركة تطوير عقاري وإنشاءات معمارية، يدمج بين إبراز المشاريع المكتملة، مواصفات البناء، وسردية الخبرة الهندسية في واجهة ذات طابع معماري رصين.',
      en: 'An architectural firm and commercial construction concept marrying completed project showcases, structural specifications, and engineering credibility into a commanding editorial layout.',
    },
    sector: {
      key: 'construction-property',
      label: {
        ar: 'التطوير العقاري والمقاولات الحديثة',
        en: 'Construction & Real Estate',
      },
    },
    classification: {
      key: 'independent-concept',
      label: {
        ar: 'مفهوم وتطوير واجهة مستقل',
        en: 'Independent Front-End Concept',
      },
    },
    market: {
      ar: 'إقليمي / دولي',
      en: 'Regional / International',
    },
    languages: {
      ar: 'الإنجليزية (LTR)',
      en: 'English (LTR)',
    },
    role: {
      ar: 'تصميم الهيكل المعماري للواجهة، البناء الأمامي المخصص، وضبط نسب الشبكة التصميمية',
      en: 'Architectural UI Design, Front-End Development & Spatial Grid Calibration',
    },
    liveUrl: 'https://real-estate-livid-eta.vercel.app/',
    previewImage: '/images/projects/building.png',
    galleryImages: ['/images/projects/building.png'],
    featured: false,
    order: 9,
    year: '2024',
    overview: {
      ar: 'مشروع أمامي مستقل يدرس كيفية استعراض سابقة أعمال المقاولات والتطوير العمراني بأسلوب حديث يبتعد عن رتابة المواقع الإنشائية الكلاسيكية.',
      en: 'An independent development examining how modern civil engineering and architectural firms can showcase their built environments with editorial poise.',
    },
    context: {
      ar: 'يعتمد نجاح شركات المقاولات العقارية على بناء الثقة في دقة التنفيذ والالتزام بالمعايير الهندسية؛ لذا يجب أن يعكس الموقع ذات الدقة والصلابة الهندسية في تصميمه.',
      en: 'Real estate developers trade on trust, structural rigor, and execution fidelity. The digital platform must embody the exact same architectural poise.',
    },
    challenge: {
      ar: 'تنظيم معرض المشاريع الكبرى وتفاصيل المساحات والمخططات في واجهة تتسم بالفخامة والوضوح دون إثقال تجربة التصفح.',
      en: 'Displaying comprehensive project galleries, square footage, and structural specifications without visual congestion.',
    },
    strategy: {
      description: {
        ar: 'استخدام شبكات تصميمية واضحة ومتباينة تعبر عن المخططات الهندسية (Blueprints)، مع كتل عرض عريضة للمباني.',
        en: 'Employing blueprint-inspired grid divisions, robust architectural framing, and prominent inquiry channels.',
      },
      points: [
        {
          ar: 'استعراض للمشاريع قيد الإنشاء والمكتملة مع مؤشرات التقدم والموقع.',
          en: 'Status indicators distinguishing pipeline developments from delivered landmarks.',
        },
        {
          ar: 'مسار اتصال مباشر لحجز الاستشارات المعمارية وجلسات التخطيط.',
          en: 'Direct consultation booking conduits for property investors and commercial partners.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'مزيج من الألوان الهندسية الرصينة (الرمادي الخرساني، الأسود المعماري، ولمسات نحاسية خفيفة).',
        en: 'A palette inspired by raw architectural materials: cured concrete slate, structural black, and subtle bronze accents.',
      },
      points: [
        {
          ar: 'تناغم طباعي يبرز الأرقام والمقاييس الهندسية بوضوح تام.',
          en: 'Balanced typography accentuating structural metrics, areas, and project milestones.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'كود أمامي خفيف وسريع الاستجابة يوفر تجربة تصفح متكاملة على الهواتف والأجهزة المكتبية.',
        en: 'Lightweight front-end architecture delivering crisp responsiveness across screen sizes.',
      },
      points: [
        {
          ar: 'تحسين توزيع الصور الإنشائية عالية الدقة لمنع أي تباطؤ.',
          en: 'Optimized rendering pipelines for heavy architectural imagery.',
        },
      ],
    },
    deliverables: {
      ar: [
        'واجهة هبوط معمارية وتطوير عقاري متكاملة باللغة الإنجليزية',
        'معرض مشاريع إنشائية منظم بأسلوب الكتل الهندسية',
        'تصميم متجاوب بنسبة 100% لكافة الأجهزة',
      ],
      en: [
        'Complete architectural and real estate landing concept in English',
        'Structured landmark portfolio grid with detailed property profiles',
        '100% responsive cross-device layout architecture',
      ],
    },
    observations: {
      ar: 'مفهوم واجهة مستقل تم تصميمه وتطويره كنموذج إرشادي ولا يرتبط بشركة مقاولات حية.',
      en: 'An independent conceptual front-end build created by Ahmed. Not an active commercial client engagement.',
    },
    outcomeNotes: {
      ar: 'يعكس المفهوم إمكانية تقديم قطاع المقاولات والبناء التقليدي بهيئة عصرية تعزز مكانة المطور في أعين المستثمرين.',
      en: 'Proves how conventional contracting firms can command premium positioning through disciplined architectural digital presentation.',
    },
  },
  {
    slug: 'medtro-healthcare',
    title: {
      ar: 'شبكة ميدترو للرعاية الصحية والمراكز الطبية المتكاملة',
      en: 'MedTro Integrated Healthcare Network & Clinical Care Concept',
    },
    subtitle: {
      ar: 'مفهوم منصة طبية ترتكز على طمأنة المريض وتنظيم التخصصات وسهولة حجز الاستشارات',
      en: 'Patient-centric clinical healthcare portal organizing clinical specialties and seamless doctor consultations',
    },
    summary: {
      ar: 'مفهوم واجهة صحية متطورة لمجمع عيادات أو شبكة مستشفيات، ينظم العيادات التخصصية، بطاقات الأطباء، ومسارات حجز المواعيد في تجربة تتسم بالراحة النفسية والوضوح الطبي.',
      en: 'An advanced clinical healthcare concept for multi-specialty medical centers, structuring departments, provider credentials, and outpatient booking flows in an accessible, reassuring environment.',
    },
    sector: {
      key: 'healthcare',
      label: {
        ar: 'الرعاية الصحية والمراكز الطبية',
        en: 'Healthcare & Medical Services',
      },
    },
    classification: {
      key: 'independent-concept',
      label: {
        ar: 'مفهوم وتطوير واجهة مستقل',
        en: 'Independent Front-End Concept',
      },
    },
    market: {
      ar: 'إقليمي / عالمي',
      en: 'Regional / Global Care',
    },
    languages: {
      ar: 'الإنجليزية (LTR)',
      en: 'English (LTR)',
    },
    role: {
      ar: 'تصميم تجربة المريض، البناء الأمامي المخصص، وهيكلة واجهات حجز المواعيد',
      en: 'Patient-Journey UI Design, Front-End Engineering & Consultation Booking Architecture',
    },
    liveUrl: 'https://clinic-app-theta.vercel.app/',
    previewImage: '/images/projects/MedTro.png',
    galleryImages: ['/images/projects/MedTro.png'],
    featured: false,
    order: 10,
    year: '2024',
    overview: {
      ar: 'مشروع أمامي مستقل يستهدف قطاع الرعاية الصحية والمجمعات الطبية؛ حيث يمثل التيسير على المريض والوضوح التام في استعراض الكوادر الطبية عاملاً حاسماً في بناء الأمان النفسي.',
      en: 'An independent conceptual development focusing on outpatient healthcare ecosystems, where clarity, clinical reassurance, and accessible scheduling form the bedrock of patient trust.',
    },
    context: {
      ar: 'غالباً ما تكون المواقع الطبية محشوة بمصطلحات معقدة تجعل المريض عاجزاً عن معرفة العيادة المناسبة لحالته. ركز المفهوم على تفكيك الأقسام وربط كل تخصص بالأطباء المشرفين.',
      en: 'Healthcare sites often suffer from clinical jargon and labyrinthine navigation that frustrates anxious patients seeking timely specialist care.',
    },
    challenge: {
      ar: 'تصميم واجهة تحقق أعلى معايير سهولة الوصول (Accessibility) لجميع الفئات العمرية، مع تبسيط خطوات طلب الموعد الطبي إلى الحد الأدنى.',
      en: 'Achieving rigorous accessibility standards across age demographics while condensing clinical appointment requests into intuitive steps.',
    },
    strategy: {
      description: {
        ar: 'تنظيم الصفحة وفق محاور الرعاية الأساسية: التخصصات الطبية، كبار الاستشاريين، والخدمات التشخيصية مع بطاقات مواعيد واضحة.',
        en: 'Organizing the interface around primary care pillars: medical specialties, accredited consultants, and immediate outpatient booking portals.',
      },
      points: [
        {
          ar: 'بطاقات تعريفية للأطباء تسلط الضوء على الخبرات وسنوات الاعتماد.',
          en: 'Doctor credential profiles detailing fellowship accreditations and clinical specializations.',
        },
        {
          ar: 'مسار حجز سريع يتيح اختيار القسم والتاريخ والوقت بسهولة.',
          en: 'Streamlined scheduling workflow for selecting departments and consultation windows.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'ألوان طبية مريحة تعتمد الأزرق السماوي والأخضر المهدئ مع خلفيات ناصعة ومسافات رحبة.',
        en: 'A soothing clinical palette of serene cyan and restorative sage green set against airy clinical white.',
      },
      points: [
        {
          ar: 'عناصر قراءة بحجم ملائم يراعي متطلبات كبار السن وسهولة التفاعل.',
          en: 'Generous typography and high-contrast labels accommodating senior accessibility requirements.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'تطوير أمامي مرن يضمن التجاوب الفوري والأداء السلس على كافة المتصفحات.',
        en: 'Lightweight, standards-compliant front-end code built for seamless cross-device performance.',
      },
      points: [
        {
          ar: 'مراعاة سرعة الاستجابة على هواتف المرضى دون أي تعليق.',
          en: 'Zero-latency mobile navigation facilitating emergency contact and department lookups.',
        },
      ],
    },
    deliverables: {
      ar: [
        'واجهة رعاية صحية ومجمع عيادات متكاملة باللغة الإنجليزية',
        'هيكلة واضحة للتخصصات الطبية والأطباء والاستشارات',
        'تصميم متجاوب بنسبة 100% ومتوافق مع معايير الوصولية',
      ],
      en: [
        'Complete healthcare network and clinical clinic landing concept in English',
        'Structured departmental hierarchy with physician profiles and scheduling UI',
        '100% responsive, accessibility-conscious design across all devices',
      ],
    },
    observations: {
      ar: 'مفهوم واجهة مستقل صممه وطوره أحمد لدراسة أفضل ممارسات تجربة المستخدم في القطاع الطبي والعيادات.',
      en: 'An independent conceptual build crafted by Ahmed to investigate optimal patient-journey UX in healthcare portals.',
    },
    outcomeNotes: {
      ar: 'يبرز العمل فهم أحمد الدقيق لمتطلبات القطاعات الحيوية التي تتطلب درجة عالية من الحساسية والموثوقية في التصميم والتطوير.',
      en: 'Illustrates disciplined design thinking applied to mission-critical industries where trust and accessibility are paramount.',
    },
  },
  {
    slug: 'saas-productivity',
    title: {
      ar: 'منصة فلو سينك للإنتاجية وإدارة العمليات السحابية',
      en: 'FlowSync Cloud Productivity & Workflow SaaS Concept',
    },
    subtitle: {
      ar: 'مفهوم صفحة هبوط تسويقية لمنتج سحابي يركز على تدفق العمل وأتمتة المهام الجماعية',
      en: 'Modern SaaS marketing platform concept showcasing automated team workflows and product interface mockups',
    },
    summary: {
      ar: 'مفهوم تسويقي تفاعلي لمنتج برمجي سحابي (SaaS)، يبرز مميزات المنصة، تكامل أدوات الفريق، ومحاكاة واجهة الاستخدام بهدف تحويل زوار الإطلاق إلى مستخدمين نشطين.',
      en: 'A high-impact SaaS marketing concept showcasing workflow automation, team collaboration pipelines, and interactive dashboard mockups to maximize trial conversions.',
    },
    sector: {
      key: 'saas-tech',
      label: {
        ar: 'البرمجيات السحابية والتقنية',
        en: 'Technology & SaaS',
      },
    },
    classification: {
      key: 'independent-concept',
      label: {
        ar: 'مفهوم وتطوير واجهة مستقل',
        en: 'Independent Front-End Concept',
      },
    },
    market: {
      ar: 'عالمي / تقني سحابي',
      en: 'Global / B2B SaaS',
    },
    languages: {
      ar: 'الإنجليزية (LTR)',
      en: 'English (LTR)',
    },
    role: {
      ar: 'تصميم الواجهات، البناء الأمامي المخصص، وتجسيد نماذج البرمجيات التفاعلية',
      en: 'SaaS UI Design, Custom Front-End Engineering & Product Interface Visualization',
    },
    liveUrl: 'https://saas-landing-page-sigma-mauve.vercel.app/',
    previewImage: '/images/projects/SaaS.png',
    galleryImages: ['/images/projects/SaaS.png'],
    featured: false,
    order: 11,
    year: '2024',
    overview: {
      ar: 'مشروع أمامي مستقل يدرس أفضل الممارسات العالمية في تصميم صفحات الهبوط للبرمجيات السحابية (B2B SaaS)؛ حيث يكمن التحدي في شرح القيمة البرمجية خلال الثواني الأولى.',
      en: 'An independent front-end exploration into premier B2B SaaS landing page conventions, centered on instantaneous value proposition communication and product mockup clarity.',
    },
    context: {
      ar: 'في سوق البرمجيات المزدحم، تفشل أغلب صفحات الهبوط بسبب الغموض والاعتماد على مصطلحات تسويقية مجردة بدلاً من إظهار المنتج الفعلي وكيف يحل مشاكل فرق العمل اليومية.',
      en: 'SaaS marketing pages frequently stumble by relying on abstract buzzwords rather than revealing the actual software interface solving daily operational friction.',
    },
    challenge: {
      ar: 'عرض إمكانيات الأتمتة ولوحة التحكم السحابية بشكل مرئي مشوق يدمج بين الرسوم التوضيحية وتجربة التصفح المتجاوبة عبر الشاشات المختلفة.',
      en: 'Visualizing workflow automations and cloud dashboard metrics through persuasive interface mockups across responsive screen sizes.',
    },
    strategy: {
      description: {
        ar: 'تصميم سردي يبدأ بلقطة واجهة المنتج في صدر الصفحة، متبوعاً بشرح المزايا الرئيسية الثلاث (التنظيم، الأتمتة، والتحليلات).',
        en: 'A structured narrative opening with a commanding product UI hero, followed by three pillars of enterprise value: orchestration, automation, and analytics.',
      },
      points: [
        {
          ar: 'محاكاة تفاعلية للوحة تحكم المهام ومؤشرات الإنجاز المباشرة.',
          en: 'Interactive task management and real-time velocity dashboard mockups.',
        },
        {
          ar: 'جدول مقارنة شفاف للباقات والاشتراكات الشهرية والسنوية.',
          en: 'Transparent tier comparison matrix detailing monthly and annual licensing options.',
        },
      ],
    },
    designAndUx: {
      description: {
        ar: 'تصميم تقني مظلم أنيق (Dark Tech Aesthetic) مع لمسات نيون ناعمة تبرز عناصر التفاعل وأزرار البدء.',
        en: 'A polished dark tech canvas accented by targeted neon micro-gradients emphasizing primary CTA buttons.',
      },
      points: [
        {
          ar: 'تنقل سريع وتسلسل منطقي يقود نحو زر بدء التجربة المجانية.',
          en: 'Frictionless section flow steering the user toward high-intent free trial signups.',
        },
      ],
    },
    execution: {
      description: {
        ar: 'بناء واجهة برمجية متطورة وسريعة وخالية من العناصر غير الضرورية.',
        en: 'High-performance front-end code built without superfluous bloated dependencies.',
      },
      points: [
        {
          ar: 'توافق كامل مع متطلبات محركات البحث والتحميل الفوري.',
          en: 'Optimized asset delivery and semantic markup ready for enterprise search indexing.',
        },
      ],
    },
    deliverables: {
      ar: [
        'صفحة هبوط تسويقية متكاملة لمنتج سحابي باللغة الإنجليزية',
        'مكونات بصرية تفاعلية تحاكي واجهات البرمجيات ولوحات التحكم',
        'تصميم متجاوب بنسبة 100% عبر كافة الشاشات والمتصفحات',
      ],
      en: [
        'Complete B2B SaaS product landing page concept in English',
        'Interactive interface visualizers simulating cloud workflows and analytics',
        '100% responsive cross-platform layout architecture',
      ],
    },
    observations: {
      ar: 'مفهوم تسويقي وبرمجي مستقل تماماً صممه أحمد لاستعراض قدرته على بناء واجهات شركات التقنية السحابية الرائدة.',
      en: 'An independent conceptual design and front-end development project. Not an active commercial SaaS entity.',
    },
    outcomeNotes: {
      ar: 'يقدم النموذج معياراً ممتازاً لما يجب أن تكون عليه مواقع المنتجات البرمجية الحديثة التي توازن بين الجاذبية البصرية والهدف التجاري.',
      en: 'Sets a high benchmark for modern software landing pages that harmonize aesthetic digital craft with commercial conversion clarity.',
    },
  },
];

export const BUSINESS_SECTORS = [
  { key: 'all', label: { ar: 'كافة القطاعات', en: 'All Sectors' } },
  { key: 'commercial-contracting', label: { ar: 'المقاولات والحلول الإنشائية', en: 'Commercial & Contracting' } },
  { key: 'legal-professional', label: { ar: 'الخدمات القانونية والمؤسسية', en: 'Legal & Professional Services' } },
  { key: 'retail-heritage', label: { ar: 'التجزئة والمستلزمات التراثية', en: 'Retail & Heritage' } },
  { key: 'consumer-services', label: { ar: 'خدمات العناية المتنقلة', en: 'On-Demand Services' } },
  { key: 'culinary-hospitality', label: { ar: 'الضيافة والمطاعم', en: 'Hospitality & Dining' } },
  { key: 'automotive-maintenance', label: { ar: 'صيانة وهندسة السيارات', en: 'Automotive Engineering' } },
  { key: 'travel-tourism', label: { ar: 'السياحة والسفر', en: 'Travel & Tourism' } },
  { key: 'fintech', label: { ar: 'التقنية المالية والتمويل', en: 'Fintech & Banking' } },
  { key: 'construction-property', label: { ar: 'التطوير العقاري والمعماري', en: 'Real Estate & Architecture' } },
  { key: 'healthcare', label: { ar: 'الرعاية الصحية والطبية', en: 'Healthcare & Clinical' } },
  { key: 'saas-tech', label: { ar: 'البرمجيات السحابية والتقنية', en: 'Technology & SaaS' } },
];
