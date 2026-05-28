<<<<<<< HEAD
    // ============ THEME TOGGLE ============
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    // Check saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
      const isDark = htmlEl.getAttribute('data-theme') === 'dark';
      if (isDark) {
        htmlEl.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        htmlEl.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });

    // ============ TRANSLATIONS ============
    const i18n = {
      fr: {
        nav_about: "À propos", nav_skills: "Compétences", nav_experience: "Expérience", nav_projects: "Projets", nav_contact: "Contact",
        hero_badge: "Disponible — Open to work",
        hero_role: "Développeuse Web",
        hero_title: "<strong>Data Analyst Junior</strong> · Développeuse Web",
        hero_desc: "Intéressée par l’analyse de données et les technologies liées à la data, je développe mes compétences en SQL, Excel, Python et Power BI, avec une attention particulière portée à la qualité des données et à la clarté des analyses.",
        hero_cta_contact: "Me contacter", hero_cta_projects: "Voir mes projets",
        stat_internships: "Projets web", stat_repos: "Projets data", stat_techs: "ans d'expérience développeur web",
        about_label: "À propos de moi",
        about_title: "Data Analyst Junior<br>", //passionnée & curieuse",
        about_p1: "Je suis <strong>Laura DEHOURS</strong>, étudiante en Data Analyst avec OpenClassRooms. Depuis le début de mon parcours, j’ai eu l’opportunité de travailler sur des projets concrets autour de l’analyse de données, de la visualisation et de l’exploitation d’informations issues de jeux de données variés. Ces expériences m’ont permis de développer une approche structurée de la donnée, allant de sa préparation à son interprétation.",
        about_p2: "Mes compétences couvrent principalement <strong>SQL</strong>  pour la manipulation de bases de données, ainsi que <strong>Python</strong> et <strong>Excel</strong> pour l’analyse et le traitement des données. J’utilise également des outils de data visualisation comme <strong>Power BI</strong> pour transformer les données en tableaux de bord clairs et exploitables. ",
        about_p3: "Actuellement en formation, je développe progressivement mon expérience à travers des projets pratiques et de futures expériences professionnelles dans le domaine de l’analyse de données.",
        about_highlight: "🎯 Axée sur l’analyse de données, la qualité de l’information et les technologies modernes liées à la data.",
        info_edu_label: "Formation", info_edu_val: "Data Analyst",
        //info_loc_label: "Localisation", info_loc_val: "Rabat, Maroc",
        //info_email_label: "Email", /*info_phone_label: "Téléphone",
        info_lang_label: "Langues", info_lang_val: "Français · Anglais",
        skills_label: "Compétences techniques", skills_title: "Stack technologique",
        skills_subtitle: "Des technologies que j'utilise au quotidien pour créer des applications robustes et performantes.",
        sk_lang: "Langages", sk_fw: "Frameworks", sk_db: "Bases de données",
        sk_tools: "Outils & DevOps", sk_arch: "Architecture", sk_learn: "En apprentissage",
        sk_lang_human: "Langues",
        lang_fr: "Français", lang_en: "Anglais",
        native: "Natif",
        fluent: "Courant",
        timeline_tag_testplan: "Plan de test",
        skills_tools1: "Analyse de données",
        skills_tools2: "Visualisation de données",
        skills_tools3: "Graphiques (boxplot, courbes, barres)",

        // ============ PARCOURS PROFESSIONNEL ============
        exp_label: "Parcours professionnel", exp_title: "Expériences",
        exp_subtitle: "Chaque expérience professionnelle m’a permis de développer des compétences concrètes à travers des projets réels en entreprise.",
        
        // --- Experience 1 ---
        exp1_period: "Mai 2022 — Nov. 2024", exp1_company: "DIMMBIZZ LIMITED — Goes,Pays-Bas",
        exp1_role: "Dévelopeuse Web",
        exp1_d1: "Développement de sites web sous WordPress (Wordpress, PHP, CSS)",
        exp1_d2: "Création d'un projet de réservation en ligne en React avec Bootstrap.",
        exp1_d3: "Correction de bugs, optimisation du code et participation aux plans de tests avant déploiement.",
        
        // --- Experience 2 ---
        exp2_period: "Oct. 2020 — Jan. 2022", exp2_company: "Ginkoia (Orisha) — Passy, France",
        exp2_role: "Support technique",
        exp2_d1: "Support client pour une solution SaaS B2B utilisée par des magasins de sport connectés à des centrales d’achat (Sport 2000, Intersport, Courir...).",
        exp2_d2: "Requêtes SQL pour analyser, corriger ou extraire des données en base.",
        exp2_d3: "Participation aux plans de tests fonctionnels avant le déploiement de nouvelles versions logicielles.",
        
        // --- Experience 3 ---
        exp3_period: "Juin 2016 — Août 2016", exp3_company: "United Arab Emirates, France",
        exp3_role: "Femme de chambre",
        exp3_d1: "Nettoyage et entretien des chambres.",
        // exp3_d2: "Développement avec Python (Flask), HTML, CSS, JavaScript et le moteur de template Jinja.",
        //exp3_d3: "Gestion d'une base de données MySQL pour le stockage et l'accès aux données fiscales.",
        
        // --- Experience 4 ---
        exp4_period: "Déc. 2008 — Juil. 2012", exp4_company: "Ginkoia (Orisha) — Passy, France",
        exp4_role: "Assistante support informatique",
        exp4_d1: "Assistance client et diagnostic des incidents techniques et fonctionnels.",
        exp4_d2: "Passage de requêtes SQL pour corrections et extractions de données.",
        exp4_d3: "Rédaction de fiches d'incidents pour enrichir la base de connaissances.",
        
        // --- Projets ---
        proj_label: "Mes réalisations", proj_title: "Projets personnels",
        proj_subtitle: "Une sélection de projets :",
        p1_name: "Rapport de performance marketing", p1_desc: "Analyse des performances marketing à partir de données Excel afin de comprendre les ventes, le comportement client et les tendances de consommation.",
        p2_name: "Sécurité alimentaire mondiale", p2_desc: "Analyse de la sécurité alimentaire mondiale afin d’étudier les inégalités de disponibilité alimentaire et la sous-nutrition entre les pays.",
        p3_name: "Analyse du marché immobilier français", p3_desc: "Création et exploitation d’une base de données relationnelle afin d’analyser le marché immobilier français à l’aide de requêtes SQL et de données structurées.",
        p4_name: "Optimisation et analyse des données d’une boutique", p4_desc: "Nettoyage, fusion et analyse de données commerciales afin d’optimiser le suivi des ventes, des stocks et des performances produits avec Python.",
        p5_name: "Resto-Universitaire", p5_desc: "Application de gestion centralisée pour la restauration universitaire, incluant le suivi des repas et la facturation.",
        proj_more: "Voir tous les projets",

        // --- Contact ---
        contact_label: "Restons en contact", contact_title: "Travailler ensemble ?",
        contact_desc: "Je suis actuellement disponible pour des opportunités de stage, ou alternance. N'hésitez pas à me contacter — je réponds rapidement !",
        contact_email: "Email", contact_phone: "Téléphone",
        cta_title: "Discutons de votre projet 💬",
        cta_sub: "Toujours partant pour de nouveaux défis techniques et des projets innovants.",
        cta_btn: "Envoyer un email",
        cta_time: "⚡ Temps de réponse moyen : < 24h",
        footer_copy: "Conçu & développé avec ❤️ par"
      },

      /*ar: {
        nav_about: "من أنا", nav_skills: "المهارات", nav_experience: "الخبرة", nav_projects: "المشاريع", nav_contact: "التواصل",
        hero_badge: "متاح للعمل",
        hero_title: "<strong>مهندس برمجيات</strong> · مطوّر Full-Stack",
        hero_desc: "شغوف بإنشاء حلول ويب مبتكرة، أصمم تطبيقات متينة تجمع بين الأداء العالي والهندسة النظيفة وتجربة المستخدم المتميزة.",
        hero_cta_contact: "تواصل معي", hero_cta_projects: "مشاريعي",
        stat_internships: "تدريبات", stat_repos: "مستودعات", stat_techs: "تقنيات",
        about_label: "نبذة عني",
        about_title: "مهندس Full-Stack<br>شغوف وفضولي",
        about_p1: "أنا <strong>بهاء الدين العساوي</strong>، طالب في هندسة البرمجيات بالجامعة الدولية بالرباط. خلال مسيرتي، أتيحت لي فرصة العمل على مشاريع حقيقية في بيئات مهنية متنوعة.",
        about_p2: "تخصصي يغطي تطوير <strong>Full-Stack</strong> مع خبرة خاصة في Java/Spring Boot للـ back-end وJavaScript/React للـ front-end، مع إتقان قواعد البيانات العلائقية.",
        about_p3: "حالياً أتدرب في <strong>إدارة الجمارك والضرائب غير المباشرة</strong>، أعمل على منصة مراقبة في الوقت الفعلي باستخدام WebSockets وQuartz Scheduler.",
        about_highlight: "🎯 شغوف بالهندسة البرمجية النظيفة وأداء التطبيقات والتقنيات الحديثة كـ Docker والـ microservices.",
        info_edu_label: "التعليم", info_edu_val: "هندسة البرمجيات — UIR الرباط",
        info_loc_label: "الموقع", info_loc_val: "الرباط، المغرب",
        info_email_label: "البريد الإلكتروني", info_phone_label: "الهاتف",
        info_lang_label: "اللغات", info_lang_val: "العربية · الفرنسية · الإنجليزية · الإيطالية",
        skills_label: "المهارات التقنية", skills_title: "مجموعة تقنياتي",
        skills_subtitle: "التقنيات التي أستخدمها يومياً لبناء تطبيقات قوية وعالية الأداء.",
        sk_lang: "لغات البرمجة", sk_fw: "الأطر البرمجية", sk_db: "قواعد البيانات",
        sk_tools: "الأدوات و DevOps", sk_arch: "الهندسة المعمارية", sk_learn: "قيد التعلم",
        sk_lang_human: "اللغات البشرية",
        lang_ar: "العربية", lang_fr: "الفرنسية", lang_en: "الإنجليزية", lang_it: "الإيطالية",
        exp_label: "المسار المهني", exp_title: "التجارب والتدريبات",
        exp_subtitle: "كل تدريب منحني مهارات عملية على مشاريع حقيقية في بيئة مهنية.",
        exp1_period: "فبراير 2026 — حالياً", exp1_company: "إدارة الجمارك والضرائب غير المباشرة — الرباط، المغرب",
        exp1_role: "تدريب نهاية الدراسة",
        exp1_d1: "تصميم وتطوير منصة Full-Stack (Spring Boot, React 19, MySQL) لجدولة ومراقبة تدفقات Talend Jobs في الوقت الفعلي.",
        exp1_d2: "تطبيق محرك جدولة ديناميكي باستخدام Quartz Scheduler مع إدارة تعبيرات CRON المعقدة.",
        exp1_d3: "تطوير لوحة مراقبة في الوقت الفعلي عبر WebSockets (STOMP) و Chart.js.",
        exp2_period: "يونيو 2025 — يوليو 2025", exp2_company: "DXC Technology Morocco — الرباط، المغرب",
        exp2_role: "تدريب مطوّر ويب",
        exp2_d1: "تطوير تطبيق ويب داخلي لإدارة المتدربين في DXC Technology المغرب.",
        exp2_d2: "واجهة مستخدم بـ HTML وCSS وJavaScript مع تنقل سلس وإدارة النماذج.",
        exp2_d3: "Backend بـ Java مع Spring Boot وThymeleaf؛ قاعدة بيانات MySQL عبر JDBC مع رفع السير الذاتية.",
        exp3_period: "يونيو 2024 — يوليو 2024", exp3_company: "المديرية العامة للضرائب — الرباط، المغرب",
        exp3_role: "تدريب مطوّر ويب",
        exp3_d1: "إنشاء تطبيق ويب لإدارة وتحليل البيانات الضريبية مع صفحة مصادقة آمنة.",
        exp3_d2: "تطوير التطبيق باستخدام Python (Flask) وHTML وCSS وJavaScript وJinja.",
        exp3_d3: "إدارة قاعدة بيانات MySQL لتخزين البيانات الضريبية والوصول إليها.",
        exp4_period: "يونيو 2023 — يوليو 2023", exp4_company: "WEBAXUS — تمارة، المغرب",
        exp4_role: "تدريب استخلاص البيانات",
        exp4_d1: "استخلاص آلي للبيانات من الويب باستخدام Python مع Selenium وBeautifulSoup.",
        exp4_d2: "تحليل وهيكلة البيانات المجمعة وفق احتياجات المشاريع.",
        exp4_d3: "نصوص برمجية لأتمتة جمع المعلومات، مما حسّن كفاءة الفريق.",
        proj_label: "إنجازاتي", proj_title: "مشاريع شخصية",
        proj_subtitle: "مجموعة مختارة من المشاريع التي طورتها بدافع الفضول والشغف بالبرمجة.",
        p1_name: "Vroom Application", p1_desc: "منصة مبتكرة لتأجير وإدارة السيارات توفر واجهة مستخدم سلسة ونظام خلفي قوي.",
        p2_name: "Covoiturage Mobile", p2_desc: "تطبيق جوال لمشاركة السيارات مصمم لتسهيل الرحلات المشتركة بطريقة آمنة وبديهية.",
        p3_name: "ServicePro", p3_desc: "منصة تواصل تتيح للمستخدمين العثور على الخدمات المهنية وحجزها بسهولة.",
        p4_name: "BankApp", p4_desc: "تطبيق بنكي صغير لإدارة الحسابات والعمليات المالية مع تخزين آمن للبيانات.",
        p5_name: "Resto-Universitaire", p5_desc: "تطبيق إدارة مركزي للمطاعم الجامعية، يشمل تتبع الوجبات وإدارة الفواتير.",
        proj_more: "عرض جميع المشاريع",
        contact_label: "ابقَ على تواصل", contact_title: "نعمل معاً؟",
        contact_desc: "متاح حالياً للتدريبات والتعاون وفرص العمل. لا تتردد في التواصل معي — أرد بسرعة!",
        contact_email: "البريد الإلكتروني", contact_phone: "الهاتف",
        cta_title: "لنتحدث عن مشروعك 💬",
        cta_sub: "دائماً مستعد لتحديات تقنية جديدة ومشاريع مبتكرة.",
        cta_btn: "إرسال بريد إلكتروني",
        cta_time: "⚡ متوسط وقت الرد: أقل من 24 ساعة",
        footer_copy: "صُمّم وطُوِّر بـ ❤️ بواسطة"
      },*/

      en: {
        nav_about: "About", nav_skills: "Skills", nav_experience: "Experience", nav_projects: "Projects", nav_contact: "Contact",
        hero_badge: "Available — Open to work",
        hero_role: "Web Developer",
        hero_title: "<strong>Junior Data Analyst</strong> · Web Developer",
        hero_desc: "Interested in data analysis and data-related technologies, I'm developing my skills in SQL, Excel, Python, and Power BI, with particular attention to data quality and the clarity of analyses.",
        hero_cta_contact: "Get in touch", hero_cta_projects: "View my projects",
        stat_internships: "Web projects", stat_repos: "Data projects", stat_techs: "years of web development experience",
        about_label: "About me",
        about_title: "Junior Data Analyst<br>",
        about_p1: "I'm <strong>Laura DEHOURS</strong>, Data Analyst student with OpenClassrooms. Since the beginning of my journey, I have had the opportunity to work on concrete projects around data analysis, visualization, and the use of information from various datasets. These experiences have allowed me to develop a structured approach to data, from its preparation to its interpretation.",
        about_p2: "My skills mainly cover <strong>SQL</strong> for database manipulation, as well as <strong>Python</strong> and <strong>Excel</strong> for data analysis and processing. I also use data visualization tools such as <strong>Power BI</strong> to turn data into clear and actionable dashboards.",
        about_p3: "Currently in training, I'm progressively building my experience through practical projects and future professional experience in the field of data analysis.",
        about_highlight: "🎯 Focused on data analysis, data quality, and modern data-related technologies.",
        info_edu_label: "Education", info_edu_val: "Data Analyst",
        //info_loc_label: "Location", info_loc_val: "Rabat, Morocco",
        info_email_label: "Email", //info_phone_label: "Phone",
        info_lang_label: "Languages", info_lang_val: "French · English",
        skills_label: "Technical Skills", skills_title: "Technology stack",
        skills_subtitle: "Technologies I use daily to build robust and high-performance applications.",
        sk_lang: "Languages", sk_fw: "Frameworks", sk_db: "Databases",
        sk_tools: "Tools & DevOps", sk_arch: "Architecture", sk_learn: "Currently learning",
        sk_lang_human: "Languages",
        lang_fr: "French", lang_en: "English",
        native: "Native",
        fluent: "Fluent",
        timeline_tag_testplan: "Test plan",
        skills_tools1: "data analysis",
        skills_tools2: "Data visualization",
        skills_tools3: "Charts (boxplots, line charts, bar charts)",

        // ============ PROFESSIONAL EXPERIENCE ============
        exp_label: "Professional journey", exp_title: "Experience",
        exp_subtitle: "Each professional experience allowed me to develop concrete skills through real projects in a company environment.",

        // --- Experience 1 ---
        exp1_period: "May 2022 — Nov. 2024", exp1_company: "DIMMBIZZ LIMITED — Goes, Netherlands",
        exp1_role: "Web Developer",
        exp1_d1: "Website development using WordPress (WordPress, PHP, CSS).",
        exp1_d2: "Built an online booking project using React and Bootstrap.",
        exp1_d3: "Bug fixing, code optimization, and participation in testing phases before deployment.",
        
        // --- Experience 2 ---
        exp2_period: "Oct. 2020 — Jan. 2022", exp2_company: "Ginkoia (Orisha) — Passy, France",
        exp2_role: "Technical Support",
        exp2_d1: "Customer support for a B2B SaaS solution used by connected sports retail stores (Sport 2000, Intersport, Courir...).",
        exp2_d2: "SQL queries to analyze, correct, and extract database information.",
        exp2_d3: "Participation in functional testing before new software releases.",
        
        // --- Experience 3 ---
        exp3_period: "June 2016 — August 2016", exp3_company: "United Arab Emirates — France",
        exp3_role: "Housekeeping Attendant",
        exp3_d1: "Cleaning and maintaining rooms.",
        //exp3_d2: "Developed using Python (Flask), HTML, CSS, JavaScript, and the Jinja template engine.",
        //exp3_d3: "MySQL database management for storing and easily accessing tax data.",
        
        // --- Experience 4 ---
        exp4_period: "Dec. 2008 — July 2012", exp4_company: "Ginkoia (Orisha) — Passy, France",
        exp4_role: "IT Support Assistant",
        exp4_d1: "Customer assistance and diagnosis of technical and functional issues.",
        exp4_d2: "SQL queries for data correction and extraction.",
        exp4_d3: "Writing incident reports to improve the knowledge base.",

        // --- Projects ---
        proj_label: "My work", proj_title: "Personal Projects",
        proj_subtitle: "A selection of projects :",
        p1_name: "Marketing performance analysis", p1_desc: "Marketing performance analysis using Excel data to understand sales, customer behavior, and consumption trends.",
        p2_name: "World food security analysis", p2_desc: "Global food security analysis to study inequalities in food availability and undernutrition across countries.",
        p3_name: "French real estate market analysis", p3_desc: "Creation and analysis of a relational database to explore the french real estate market using SQL queries and structured datasets.",
        p4_name: "Retail data optimization and analysis", p4_desc: "Data cleaning, merging, and business analysis to optimize sales, stock monitoring, and product performance using Python.",
        p5_name: "Resto-Universitaire", p5_desc: "Centralized management application for university dining, including meal tracking and billing.",
        proj_more: "View all projects",

        // --- Contact ---
        contact_label: "Let's connect", contact_title: "Work together?",
        contact_desc: "I'm currently available for internship or apprenticeship opportunities. Don't hesitate to reach out — I respond quickly!",
        contact_email: "Email", contact_phone: "Phone",
        cta_title: "Let's discuss your project 💬",
        cta_sub: "Always up for new technical challenges and innovative projects.",
        cta_btn: "Send an email",
        cta_time: "⚡ Average response time: < 24h",
        footer_copy: "Designed & built with ❤️ by"
      }
    };

    let currentLang = 'fr';

    function setLang(lang) {
      currentLang = lang;
      const html = document.documentElement;
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      // Update buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');

      // Update all translated elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key] !== undefined) {
          el.innerHTML = i18n[lang][key];
        }
      });
    }

    // ============ NAVBAR SCROLL ============
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ============ MOBILE MENU ============
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ============ SCROLL REVEAL ============
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ============ LANGUAGE BAR ANIMATION ============
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.lang-bar-fill');
          fills.forEach(fill => {
            const w = fill.getAttribute('data-width');
            fill.style.width = (parseFloat(w) * 100) + '%';
            fill.classList.add('animate');
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.lang-skills').forEach(el => barObserver.observe(el));

    // Ensure bar fills take actual width
    document.querySelectorAll('.lang-bar-fill').forEach(fill => {
      const w = fill.getAttribute('data-width');
      fill.style.width = (parseFloat(w) * 100) + '%';
      fill.style.transform = 'scaleX(0)';
    });

    // ============ PROJECT CARD GLOW ============
    function cardGlow(e, card) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    }

    // ============ SMOOTH ANCHOR ============
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
=======
    // ============ THEME TOGGLE ============
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    // Check saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
      const isDark = htmlEl.getAttribute('data-theme') === 'dark';
      if (isDark) {
        htmlEl.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        htmlEl.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });

    // ============ TRANSLATIONS ============
    const i18n = {
      fr: {
        nav_about: "À propos", nav_skills: "Compétences", nav_experience: "Expérience", nav_projects: "Projets", nav_contact: "Contact",
        hero_badge: "Disponible — Open to work",
        hero_role: "Développeuse Web",
        hero_title: "<strong>Data Analyst Junior</strong> · Développeuse Web",
        hero_desc: "Intéressée par l’analyse de données et les technologies liées à la data, je développe mes compétences en SQL, Excel, Python et Power BI, avec une attention particulière portée à la qualité des données et à la clarté des analyses.",
        hero_cta_contact: "Me contacter", hero_cta_projects: "Voir mes projets",
        stat_internships: "Projets web", stat_repos: "Projets data", stat_techs: "ans d'expérience développeur web",
        about_label: "À propos de moi",
        about_title: "Data Analyst Junior<br>", //passionnée & curieuse",
        about_p1: "Je suis <strong>Laura DEHOURS</strong>, étudiante en Data Analyst avec OpenClassRooms. Depuis le début de mon parcours, j’ai eu l’opportunité de travailler sur des projets concrets autour de l’analyse de données, de la visualisation et de l’exploitation d’informations issues de jeux de données variés. Ces expériences m’ont permis de développer une approche structurée de la donnée, allant de sa préparation à son interprétation.",
        about_p2: "Mes compétences couvrent principalement <strong>SQL</strong>  pour la manipulation de bases de données, ainsi que <strong>Python</strong> et <strong>Excel</strong> pour l’analyse et le traitement des données. J’utilise également des outils de data visualisation comme <strong>Power BI</strong> pour transformer les données en tableaux de bord clairs et exploitables. ",
        about_p3: "Actuellement en formation, je développe progressivement mon expérience à travers des projets pratiques et de futures expériences professionnelles dans le domaine de l’analyse de données.",
        about_highlight: "🎯 Axée sur l’analyse de données, la qualité de l’information et les technologies modernes liées à la data.",
        info_edu_label: "Formation", info_edu_val: "Data Analyst",
        //info_loc_label: "Localisation", info_loc_val: "Rabat, Maroc",
        //info_email_label: "Email", /*info_phone_label: "Téléphone",
        info_lang_label: "Langues", info_lang_val: "Français · Anglais",
        skills_label: "Compétences techniques", skills_title: "Stack technologique",
        skills_subtitle: "Des technologies que j'utilise au quotidien pour créer des applications robustes et performantes.",
        sk_lang: "Langages", sk_fw: "Frameworks", sk_db: "Bases de données",
        sk_tools: "Outils & DevOps", sk_arch: "Architecture", sk_learn: "En apprentissage",
        sk_lang_human: "Langues",
        lang_fr: "Français", lang_en: "Anglais",
        native: "Natif",
        fluent: "Courant",
        timeline_tag_testplan: "Plan de test",
        skills_tools1: "Analyse de données",
        skills_tools2: "Visualisation de données",
        skills_tools3: "Graphiques (boxplot, courbes, barres)",

        // ============ PARCOURS PROFESSIONNEL ============
        exp_label: "Parcours professionnel", exp_title: "Expériences",
        exp_subtitle: "Chaque expérience professionnelle m’a permis de développer des compétences concrètes à travers des projets réels en entreprise.",
        
        // --- Experience 1 ---
        exp1_period: "Mai 2022 — Nov. 2024", exp1_company: "DIMMBIZZ LIMITED — Goes,Pays-Bas",
        exp1_role: "Dévelopeuse Web",
        exp1_d1: "Développement de sites web sous WordPress (Wordpress, PHP, CSS)",
        exp1_d2: "Création d'un projet de réservation en ligne en React avec Bootstrap.",
        exp1_d3: "Correction de bugs, optimisation du code et participation aux plans de tests avant déploiement.",
        
        // --- Experience 2 ---
        exp2_period: "Oct. 2020 — Jan. 2022", exp2_company: "Ginkoia (Orisha) — Passy, France",
        exp2_role: "Support technique",
        exp2_d1: "Support client pour une solution SaaS B2B utilisée par des magasins de sport connectés à des centrales d’achat (Sport 2000, Intersport, Courir...).",
        exp2_d2: "Requêtes SQL pour analyser, corriger ou extraire des données en base.",
        exp2_d3: "Participation aux plans de tests fonctionnels avant le déploiement de nouvelles versions logicielles.",
        
        // --- Experience 3 ---
        exp3_period: "Juin 2016 — Août 2016", exp3_company: "United Arab Emirates, France",
        exp3_role: "Femme de chambre",
        exp3_d1: "Nettoyage et entretien des chambres.",
        // exp3_d2: "Développement avec Python (Flask), HTML, CSS, JavaScript et le moteur de template Jinja.",
        //exp3_d3: "Gestion d'une base de données MySQL pour le stockage et l'accès aux données fiscales.",
        
        // --- Experience 4 ---
        exp4_period: "Déc. 2008 — Juil. 2012", exp4_company: "Ginkoia (Orisha) — Passy, France",
        exp4_role: "Assistante support informatique",
        exp4_d1: "Assistance client et diagnostic des incidents techniques et fonctionnels.",
        exp4_d2: "Passage de requêtes SQL pour corrections et extractions de données.",
        exp4_d3: "Rédaction de fiches d'incidents pour enrichir la base de connaissances.",
        
        // --- Projets ---
        proj_label: "Mes réalisations", proj_title: "Projets personnels",
        proj_subtitle: "Une sélection de projets:",
        p1_name: "Rapport de performance marketing", p1_desc: "Analyse des performances marketing à partir de données Excel afin de comprendre les ventes, le comportement client et les tendances de consommation.",
        p2_name: "Sécurité alimentaire mondiale", p2_desc: "Analyse de la sécurité alimentaire mondiale afin d’étudier les inégalités de disponibilité alimentaire et la sous-nutrition entre les pays.",
        p3_name: "Analyse du marché immobilier français", p3_desc: "Création et exploitation d’une base de données relationnelle afin d’analyser le marché immobilier français à l’aide de requêtes SQL et de données structurées.",
        p4_name: "Optimisation et analyse des données d’une boutique", p4_desc: "Nettoyage, fusion et analyse de données commerciales afin d’optimiser le suivi des ventes, des stocks et des performances produits avec Python.",
        p5_name: "Resto-Universitaire", p5_desc: "Application de gestion centralisée pour la restauration universitaire, incluant le suivi des repas et la facturation.",
        proj_more: "Voir tous les projets",

        // --- Contact ---
        contact_label: "Restons en contact", contact_title: "Travailler ensemble ?",
        contact_desc: "Je suis actuellement disponible pour des opportunités de stage, ou alternance. N'hésitez pas à me contacter — je réponds rapidement !",
        contact_email: "Email", contact_phone: "Téléphone",
        cta_title: "Discutons de votre projet 💬",
        cta_sub: "Toujours partant pour de nouveaux défis techniques et des projets innovants.",
        cta_btn: "Envoyer un email",
        cta_time: "⚡ Temps de réponse moyen : < 24h",
        footer_copy: "Conçu & développé avec ❤️ par"
      },

      /*ar: {
        nav_about: "من أنا", nav_skills: "المهارات", nav_experience: "الخبرة", nav_projects: "المشاريع", nav_contact: "التواصل",
        hero_badge: "متاح للعمل",
        hero_title: "<strong>مهندس برمجيات</strong> · مطوّر Full-Stack",
        hero_desc: "شغوف بإنشاء حلول ويب مبتكرة، أصمم تطبيقات متينة تجمع بين الأداء العالي والهندسة النظيفة وتجربة المستخدم المتميزة.",
        hero_cta_contact: "تواصل معي", hero_cta_projects: "مشاريعي",
        stat_internships: "تدريبات", stat_repos: "مستودعات", stat_techs: "تقنيات",
        about_label: "نبذة عني",
        about_title: "مهندس Full-Stack<br>شغوف وفضولي",
        about_p1: "أنا <strong>بهاء الدين العساوي</strong>، طالب في هندسة البرمجيات بالجامعة الدولية بالرباط. خلال مسيرتي، أتيحت لي فرصة العمل على مشاريع حقيقية في بيئات مهنية متنوعة.",
        about_p2: "تخصصي يغطي تطوير <strong>Full-Stack</strong> مع خبرة خاصة في Java/Spring Boot للـ back-end وJavaScript/React للـ front-end، مع إتقان قواعد البيانات العلائقية.",
        about_p3: "حالياً أتدرب في <strong>إدارة الجمارك والضرائب غير المباشرة</strong>، أعمل على منصة مراقبة في الوقت الفعلي باستخدام WebSockets وQuartz Scheduler.",
        about_highlight: "🎯 شغوف بالهندسة البرمجية النظيفة وأداء التطبيقات والتقنيات الحديثة كـ Docker والـ microservices.",
        info_edu_label: "التعليم", info_edu_val: "هندسة البرمجيات — UIR الرباط",
        info_loc_label: "الموقع", info_loc_val: "الرباط، المغرب",
        info_email_label: "البريد الإلكتروني", info_phone_label: "الهاتف",
        info_lang_label: "اللغات", info_lang_val: "العربية · الفرنسية · الإنجليزية · الإيطالية",
        skills_label: "المهارات التقنية", skills_title: "مجموعة تقنياتي",
        skills_subtitle: "التقنيات التي أستخدمها يومياً لبناء تطبيقات قوية وعالية الأداء.",
        sk_lang: "لغات البرمجة", sk_fw: "الأطر البرمجية", sk_db: "قواعد البيانات",
        sk_tools: "الأدوات و DevOps", sk_arch: "الهندسة المعمارية", sk_learn: "قيد التعلم",
        sk_lang_human: "اللغات البشرية",
        lang_ar: "العربية", lang_fr: "الفرنسية", lang_en: "الإنجليزية", lang_it: "الإيطالية",
        exp_label: "المسار المهني", exp_title: "التجارب والتدريبات",
        exp_subtitle: "كل تدريب منحني مهارات عملية على مشاريع حقيقية في بيئة مهنية.",
        exp1_period: "فبراير 2026 — حالياً", exp1_company: "إدارة الجمارك والضرائب غير المباشرة — الرباط، المغرب",
        exp1_role: "تدريب نهاية الدراسة",
        exp1_d1: "تصميم وتطوير منصة Full-Stack (Spring Boot, React 19, MySQL) لجدولة ومراقبة تدفقات Talend Jobs في الوقت الفعلي.",
        exp1_d2: "تطبيق محرك جدولة ديناميكي باستخدام Quartz Scheduler مع إدارة تعبيرات CRON المعقدة.",
        exp1_d3: "تطوير لوحة مراقبة في الوقت الفعلي عبر WebSockets (STOMP) و Chart.js.",
        exp2_period: "يونيو 2025 — يوليو 2025", exp2_company: "DXC Technology Morocco — الرباط، المغرب",
        exp2_role: "تدريب مطوّر ويب",
        exp2_d1: "تطوير تطبيق ويب داخلي لإدارة المتدربين في DXC Technology المغرب.",
        exp2_d2: "واجهة مستخدم بـ HTML وCSS وJavaScript مع تنقل سلس وإدارة النماذج.",
        exp2_d3: "Backend بـ Java مع Spring Boot وThymeleaf؛ قاعدة بيانات MySQL عبر JDBC مع رفع السير الذاتية.",
        exp3_period: "يونيو 2024 — يوليو 2024", exp3_company: "المديرية العامة للضرائب — الرباط، المغرب",
        exp3_role: "تدريب مطوّر ويب",
        exp3_d1: "إنشاء تطبيق ويب لإدارة وتحليل البيانات الضريبية مع صفحة مصادقة آمنة.",
        exp3_d2: "تطوير التطبيق باستخدام Python (Flask) وHTML وCSS وJavaScript وJinja.",
        exp3_d3: "إدارة قاعدة بيانات MySQL لتخزين البيانات الضريبية والوصول إليها.",
        exp4_period: "يونيو 2023 — يوليو 2023", exp4_company: "WEBAXUS — تمارة، المغرب",
        exp4_role: "تدريب استخلاص البيانات",
        exp4_d1: "استخلاص آلي للبيانات من الويب باستخدام Python مع Selenium وBeautifulSoup.",
        exp4_d2: "تحليل وهيكلة البيانات المجمعة وفق احتياجات المشاريع.",
        exp4_d3: "نصوص برمجية لأتمتة جمع المعلومات، مما حسّن كفاءة الفريق.",
        proj_label: "إنجازاتي", proj_title: "مشاريع شخصية",
        proj_subtitle: "مجموعة مختارة من المشاريع التي طورتها بدافع الفضول والشغف بالبرمجة.",
        p1_name: "Vroom Application", p1_desc: "منصة مبتكرة لتأجير وإدارة السيارات توفر واجهة مستخدم سلسة ونظام خلفي قوي.",
        p2_name: "Covoiturage Mobile", p2_desc: "تطبيق جوال لمشاركة السيارات مصمم لتسهيل الرحلات المشتركة بطريقة آمنة وبديهية.",
        p3_name: "ServicePro", p3_desc: "منصة تواصل تتيح للمستخدمين العثور على الخدمات المهنية وحجزها بسهولة.",
        p4_name: "BankApp", p4_desc: "تطبيق بنكي صغير لإدارة الحسابات والعمليات المالية مع تخزين آمن للبيانات.",
        p5_name: "Resto-Universitaire", p5_desc: "تطبيق إدارة مركزي للمطاعم الجامعية، يشمل تتبع الوجبات وإدارة الفواتير.",
        proj_more: "عرض جميع المشاريع",
        contact_label: "ابقَ على تواصل", contact_title: "نعمل معاً؟",
        contact_desc: "متاح حالياً للتدريبات والتعاون وفرص العمل. لا تتردد في التواصل معي — أرد بسرعة!",
        contact_email: "البريد الإلكتروني", contact_phone: "الهاتف",
        cta_title: "لنتحدث عن مشروعك 💬",
        cta_sub: "دائماً مستعد لتحديات تقنية جديدة ومشاريع مبتكرة.",
        cta_btn: "إرسال بريد إلكتروني",
        cta_time: "⚡ متوسط وقت الرد: أقل من 24 ساعة",
        footer_copy: "صُمّم وطُوِّر بـ ❤️ بواسطة"
      },*/

      en: {
        nav_about: "About", nav_skills: "Skills", nav_experience: "Experience", nav_projects: "Projects", nav_contact: "Contact",
        hero_badge: "Available — Open to work",
        hero_role: "Web Developer",
        hero_title: "<strong>Junior Data Analyst</strong> · Web Developer",
        hero_desc: "Interested in data analysis and data-related technologies, I'm developing my skills in SQL, Excel, Python, and Power BI, with particular attention to data quality and the clarity of analyses.",
        hero_cta_contact: "Get in touch", hero_cta_projects: "View my projects",
        stat_internships: "Web projects", stat_repos: "Data projects", stat_techs: "years of web development experience",
        about_label: "About me",
        about_title: "Junior Data Analyst<br>",
        about_p1: "I'm <strong>Laura DEHOURS</strong>, Data Analyst student with OpenClassrooms. Since the beginning of my journey, I have had the opportunity to work on concrete projects around data analysis, visualization, and the use of information from various datasets. These experiences have allowed me to develop a structured approach to data, from its preparation to its interpretation.",
        about_p2: "My skills mainly cover <strong>SQL</strong> for database manipulation, as well as <strong>Python</strong> and <strong>Excel</strong> for data analysis and processing. I also use data visualization tools such as <strong>Power BI</strong> to turn data into clear and actionable dashboards.",
        about_p3: "Currently in training, I'm progressively building my experience through practical projects and future professional experience in the field of data analysis.",
        about_highlight: "🎯 Focused on data analysis, data quality, and modern data-related technologies.",
        info_edu_label: "Education", info_edu_val: "Data Analyst",
        //info_loc_label: "Location", info_loc_val: "Rabat, Morocco",
        info_email_label: "Email", //info_phone_label: "Phone",
        info_lang_label: "Languages", info_lang_val: "French · English",
        skills_label: "Technical Skills", skills_title: "Technology stack",
        skills_subtitle: "Technologies I use daily to build robust and high-performance applications.",
        sk_lang: "Languages", sk_fw: "Frameworks", sk_db: "Databases",
        sk_tools: "Tools & DevOps", sk_arch: "Architecture", sk_learn: "Currently learning",
        sk_lang_human: "Languages",
        lang_fr: "French", lang_en: "English",
        native: "Native",
        fluent: "Fluent",
        timeline_tag_testplan: "Test plan",
        skills_tools1: "data analysis",
        skills_tools2: "Data visualization",
        skills_tools3: "Charts (boxplots, line charts, bar charts)",

        // ============ PROFESSIONAL EXPERIENCE ============
        exp_label: "Professional journey", exp_title: "Experience",
        exp_subtitle: "Each professional experience allowed me to develop concrete skills through real projects in a company environment.",

        // --- Experience 1 ---
        exp1_period: "May 2022 — Nov. 2024", exp1_company: "DIMMBIZZ LIMITED — Goes, Netherlands",
        exp1_role: "Web Developer",
        exp1_d1: "Website development using WordPress (WordPress, PHP, CSS).",
        exp1_d2: "Built an online booking project using React and Bootstrap.",
        exp1_d3: "Bug fixing, code optimization, and participation in testing phases before deployment.",
        
        // --- Experience 2 ---
        exp2_period: "Oct. 2020 — Jan. 2022", exp2_company: "Ginkoia (Orisha) — Passy, France",
        exp2_role: "Technical Support",
        exp2_d1: "Customer support for a B2B SaaS solution used by connected sports retail stores (Sport 2000, Intersport, Courir...).",
        exp2_d2: "SQL queries to analyze, correct, and extract database information.",
        exp2_d3: "Participation in functional testing before new software releases.",
        
        // --- Experience 3 ---
        exp3_period: "June 2016 — August 2016", exp3_company: "United Arab Emirates — France",
        exp3_role: "Housekeeping Attendant",
        exp3_d1: "Cleaning and maintaining rooms.",
        //exp3_d2: "Developed using Python (Flask), HTML, CSS, JavaScript, and the Jinja template engine.",
        //exp3_d3: "MySQL database management for storing and easily accessing tax data.",
        
        // --- Experience 4 ---
        exp4_period: "Dec. 2008 — July 2012", exp4_company: "Ginkoia (Orisha) — Passy, France",
        exp4_role: "IT Support Assistant",
        exp4_d1: "Customer assistance and diagnosis of technical and functional issues.",
        exp4_d2: "SQL queries for data correction and extraction.",
        exp4_d3: "Writing incident reports to improve the knowledge base.",

        // --- Projects ---
        proj_label: "My work", proj_title: "Personal Projects",
        proj_subtitle: "A selection of projects:",
        p1_name: "Marketing performance analysis", p1_desc: "Marketing performance analysis using Excel data to understand sales, customer behavior, and consumption trends.",
        p2_name: "World food security analysis", p2_desc: "Global food security analysis to study inequalities in food availability and undernutrition across countries.",
        p3_name: "French real estate market analysis", p3_desc: "Creation and analysis of a relational database to explore the french real estate market using SQL queries and structured datasets.",
        p4_name: "Retail data optimization and analysis", p4_desc: "Data cleaning, merging, and business analysis to optimize sales, stock monitoring, and product performance using Python.",
        p5_name: "Resto-Universitaire", p5_desc: "Centralized management application for university dining, including meal tracking and billing.",
        proj_more: "View all projects",

        // --- Contact ---
        contact_label: "Let's connect", contact_title: "Work together?",
        contact_desc: "I'm currently available for internship or apprenticeship opportunities. Don't hesitate to reach out — I respond quickly!",
        contact_email: "Email", contact_phone: "Phone",
        cta_title: "Let's discuss your project 💬",
        cta_sub: "Always up for new technical challenges and innovative projects.",
        cta_btn: "Send an email",
        cta_time: "⚡ Average response time: < 24h",
        footer_copy: "Designed & built with ❤️ by"
      }
    };

    let currentLang = 'fr';

    function setLang(lang) {
      currentLang = lang;
      const html = document.documentElement;
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      // Update buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');

      // Update all translated elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key] !== undefined) {
          el.innerHTML = i18n[lang][key];
        }
      });
    }

    // ============ NAVBAR SCROLL ============
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ============ MOBILE MENU ============
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ============ SCROLL REVEAL ============
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ============ LANGUAGE BAR ANIMATION ============
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.lang-bar-fill');
          fills.forEach(fill => {
            const w = fill.getAttribute('data-width');
            fill.style.width = (parseFloat(w) * 100) + '%';
            fill.classList.add('animate');
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.lang-skills').forEach(el => barObserver.observe(el));

    // Ensure bar fills take actual width
    document.querySelectorAll('.lang-bar-fill').forEach(fill => {
      const w = fill.getAttribute('data-width');
      fill.style.width = (parseFloat(w) * 100) + '%';
      fill.style.transform = 'scaleX(0)';
    });

    // ============ PROJECT CARD GLOW ============
    function cardGlow(e, card) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    }

    // ============ SMOOTH ANCHOR ============
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
>>>>>>> 61e943a69ccb6c24812fdd12de95196c4d595e3f
    });