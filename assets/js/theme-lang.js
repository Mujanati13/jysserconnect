/*
 * Theme & Language Switcher
 * Light/Dark mode and Multi-language support (EN, AR, FR)
 */

(function() {
    'use strict';

    // =====================
    // TRANSLATIONS
    // =====================
    const translations = {
        en: {
            // Navigation
            aboutUs: "About Us",
            ourProjects: "Our Projects",
            contactUs: "Contact Us",
            
            // Banner
            bannerBadge: "Welcome to Jysser Connect",
            bannerTitle: "The future has landed",
            bannerText: "And there are no hoverboards or flying cars.<br />Just apps. Lots of mother flipping apps.",
            exploreProjects: "Explore Projects",
            
            // Section One
            sectionOneTitle: "Odio faucibus ipsum integer consequat",
            sectionOneSubtitle: "Nascetur eu nibh vestibulum amet gravida nascetur praesent",
            sectionOneP1: "Feugiat accumsan lorem eu ac lorem amet sed accumsan donec. Blandit orci porttitor semper. Arcu phasellus tortor enim mi nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor accumsan consequat adipiscing lorem dolor.",
            sectionOneP2: "Morbi enim nascetur et placerat lorem sed iaculis neque ante adipiscing adipiscing metus massa. Blandit orci porttitor semper. Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem ipsum dolor nullam.",
            
            // Section Two
            sectionTwoTitle: "Interdum amet non magna accumsan",
            sectionTwoSubtitle: "Nunc commodo accumsan eget id nisi eu col volutpat magna",
            sectionTwoText: "Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.",
            learnMore: "Learn More",
            
            // Section Three
            sectionThreeTitle: "Interdum felis blandit praesent sed augue",
            sectionThreeSubtitle: "Accumsan integer ultricies aliquam vel massa sapien phasellus",
            sectionThreeText: "Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.",
            
            // Section Four - Projects
            sectionFourTitle: "Our Projects",
            sectionFourSubtitle: "Discover our portfolio of successful projects and innovations",
            projectMmasTitle: "MMAS",
            projectMmasDesc: "A comprehensive management and automation system designed to streamline business operations and enhance productivity.",
            projectFithouseTitle: "FITHOUSE",
            projectFithouseDesc: "A modern fitness center management platform with member tracking, class scheduling, and performance analytics.",
            projectMciTitle: "MCI",
            projectMciDesc: "An innovative communication and integration platform connecting businesses with cutting-edge technology solutions.",
            projectSportxTitle: "SPORTX",
            projectSportxDesc: "A sports management and analytics platform for teams, athletes, and sports organizations worldwide.",
            viewProject: "View Project",
            
            // Section Five - Contact
            sectionFiveTitle: "Get In Touch",
            sectionFiveSubtitle: "Subscribe to our newsletter and stay updated with our latest news",
            emailPlaceholder: "Enter your email address",
            getStarted: "Subscribe",
            contactNote: "We respect your privacy. Unsubscribe at any time.",
            
            // Footer
            copyright: "&copy; 2025 Jysser Connect. All rights reserved.",
            footerTagline: "Connecting ideas, building solutions.",
            quickLinks: "Quick Links",
            followUs: "Follow Us",
            getInTouch: "Get In Touch",
            location: "New York, USA",
            
            // Theme
            lightMode: "Light Mode",
            darkMode: "Dark Mode"
        },
        ar: {
            // Navigation
            aboutUs: "من نحن",
            ourProjects: "مشاريعنا",
            contactUs: "اتصل بنا",
            
            // Banner
            bannerBadge: "مرحباً بكم في Jysser Connect",
            bannerTitle: "المستقبل قد حل",
            bannerText: "ولا توجد ألواح تحليق أو سيارات طائرة.<br />فقط تطبيقات. الكثير من التطبيقات.",
            exploreProjects: "استكشف المشاريع",
            
            // Section One
            sectionOneTitle: "حلول مبتكرة لعملك",
            sectionOneSubtitle: "نقدم خدمات متميزة تلبي احتياجاتك",
            sectionOneP1: "نحن نقدم حلولاً مبتكرة ومتطورة لتلبية جميع احتياجات عملك. فريقنا المتخصص يعمل على تقديم أفضل الخدمات والحلول التقنية.",
            sectionOneP2: "نؤمن بأهمية الجودة والابتكار في كل ما نقدمه. نسعى دائماً لتحقيق رضا عملائنا وتجاوز توقعاتهم.",
            
            // Section Two
            sectionTwoTitle: "خدمات متميزة",
            sectionTwoSubtitle: "نقدم أفضل الحلول لاحتياجاتك",
            sectionTwoText: "نحن نعمل على تقديم خدمات عالية الجودة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم بكفاءة وفعالية.",
            learnMore: "اعرف المزيد",
            
            // Section Three
            sectionThreeTitle: "حلول تقنية متقدمة",
            sectionThreeSubtitle: "تكنولوجيا حديثة لتحقيق أهدافك",
            sectionThreeText: "نستخدم أحدث التقنيات والأدوات لتقديم حلول مبتكرة تساعد عملائنا على النجاح والتميز في مجالاتهم.",
            
            // Section Four - Projects
            sectionFourTitle: "مشاريعنا",
            sectionFourSubtitle: "اكتشف محفظة مشاريعنا الناجحة والابتكارات",
            projectMmasTitle: "MMAS",
            projectMmasDesc: "نظام إدارة وأتمتة شامل مصمم لتبسيط العمليات التجارية وتعزيز الإنتاجية.",
            projectFithouseTitle: "FITHOUSE",
            projectFithouseDesc: "منصة حديثة لإدارة مراكز اللياقة البدنية مع تتبع الأعضاء وجدولة الفصول وتحليلات الأداء.",
            projectMciTitle: "MCI",
            projectMciDesc: "منصة اتصالات وتكامل مبتكرة تربط الشركات بحلول التكنولوجيا المتطورة.",
            projectSportxTitle: "SPORTX",
            projectSportxDesc: "منصة إدارة وتحليلات رياضية للفرق والرياضيين والمنظمات الرياضية حول العالم.",
            viewProject: "عرض المشروع",
            
            // Section Five - Contact
            sectionFiveTitle: "تواصل معنا",
            sectionFiveSubtitle: "اشترك في نشرتنا البريدية وابقَ على اطلاع بآخر أخبارنا",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            getStarted: "اشترك",
            contactNote: "نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.",
            
            // Footer
            copyright: "&copy; 2025 Jysser Connect. جميع الحقوق محفوظة.",
            footerTagline: "نربط الأفكار، نبني الحلول.",
            quickLinks: "روابط سريعة",
            followUs: "تابعنا",
            getInTouch: "تواصل معنا",
            location: "نيويورك، الولايات المتحدة",
            
            // Theme
            lightMode: "الوضع الفاتح",
            darkMode: "الوضع الداكن"
        },
        fr: {
            // Navigation
            aboutUs: "À propos",
            ourProjects: "Nos Projets",
            contactUs: "Contactez-nous",
            
            // Banner
            bannerBadge: "Bienvenue chez Jysser Connect",
            bannerTitle: "Le futur est arrivé",
            bannerText: "Et il n'y a pas de hoverboards ou de voitures volantes.<br />Juste des applications. Beaucoup d'applications.",
            exploreProjects: "Explorer les Projets",
            
            // Section One
            sectionOneTitle: "Solutions innovantes pour votre entreprise",
            sectionOneSubtitle: "Nous offrons des services exceptionnels pour répondre à vos besoins",
            sectionOneP1: "Nous proposons des solutions innovantes et avancées pour répondre à tous les besoins de votre entreprise. Notre équipe spécialisée travaille à fournir les meilleurs services et solutions techniques.",
            sectionOneP2: "Nous croyons en l'importance de la qualité et de l'innovation dans tout ce que nous offrons. Nous nous efforçons toujours de satisfaire nos clients et de dépasser leurs attentes.",
            
            // Section Two
            sectionTwoTitle: "Services exceptionnels",
            sectionTwoSubtitle: "Nous offrons les meilleures solutions pour vos besoins",
            sectionTwoText: "Nous travaillons à fournir des services de haute qualité qui répondent aux besoins de nos clients et les aident à atteindre leurs objectifs efficacement.",
            learnMore: "En savoir plus",
            
            // Section Three
            sectionThreeTitle: "Solutions technologiques avancées",
            sectionThreeSubtitle: "Technologie moderne pour atteindre vos objectifs",
            sectionThreeText: "Nous utilisons les dernières technologies et outils pour fournir des solutions innovantes qui aident nos clients à réussir et à exceller dans leurs domaines.",
            
            // Section Four - Projects
            sectionFourTitle: "Nos Projets",
            sectionFourSubtitle: "Découvrez notre portfolio de projets réussis et d'innovations",
            projectMmasTitle: "MMAS",
            projectMmasDesc: "Un système complet de gestion et d'automatisation conçu pour rationaliser les opérations commerciales et améliorer la productivité.",
            projectFithouseTitle: "FITHOUSE",
            projectFithouseDesc: "Une plateforme moderne de gestion de centres de fitness avec suivi des membres, planification des cours et analyses de performance.",
            projectMciTitle: "MCI",
            projectMciDesc: "Une plateforme de communication et d'intégration innovante connectant les entreprises aux solutions technologiques de pointe.",
            projectSportxTitle: "SPORTX",
            projectSportxDesc: "Une plateforme de gestion et d'analyse sportive pour les équipes, les athlètes et les organisations sportives du monde entier.",
            viewProject: "Voir le projet",
            
            // Section Five - Contact
            sectionFiveTitle: "Contactez-nous",
            sectionFiveSubtitle: "Abonnez-vous à notre newsletter et restez informé de nos dernières actualités",
            emailPlaceholder: "Entrez votre adresse e-mail",
            getStarted: "S'abonner",
            contactNote: "Nous respectons votre vie privée. Désabonnez-vous à tout moment.",
            
            // Footer
            copyright: "&copy; 2025 Jysser Connect. Tous droits réservés.",
            footerTagline: "Connecter les idées, construire des solutions.",
            quickLinks: "Liens Rapides",
            followUs: "Suivez-nous",
            getInTouch: "Nous Contacter",
            location: "New York, États-Unis",
            
            // Theme
            lightMode: "Mode clair",
            darkMode: "Mode sombre"
        }
    };

    // =====================
    // THEME SWITCHER
    // =====================
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            const icon = themeBtn.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // =====================
    // LANGUAGE SWITCHER
    // =====================
    function initLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Set RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Apply translations
        applyTranslations(lang);
    }

    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' && el.type !== 'submit') {
                    el.placeholder = t[key];
                } else {
                    el.innerHTML = t[key];
                }
            }
        });
        
        // Update elements with data-i18n-value attribute (for submit buttons)
        document.querySelectorAll('[data-i18n-value]').forEach(el => {
            const key = el.getAttribute('data-i18n-value');
            if (t[key]) {
                el.value = t[key];
            }
        });
    }

    // =====================
    // CREATE MOBILE CONTROLS
    // =====================
    function createMobileControls() {
        // Create mobile floating controls for small screens
        const mobileControlsHTML = `
            <div id="mobile-controls">
                <button id="mobile-theme-toggle" class="mobile-control-btn" title="Toggle Theme">
                    <i class="fas fa-sun"></i>
                </button>
                <div id="mobile-lang-switcher">
                    <button class="mobile-lang-btn" data-lang="en">EN</button>
                    <button class="mobile-lang-btn" data-lang="ar">AR</button>
                    <button class="mobile-lang-btn" data-lang="fr">FR</button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', mobileControlsHTML);
        
        // Mobile theme toggle event
        document.getElementById('mobile-theme-toggle').addEventListener('click', function() {
            toggleTheme();
            updateMobileThemeIcon();
        });
        
        // Mobile language buttons events
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                setLanguage(this.getAttribute('data-lang'));
                updateMobileLangButtons();
            });
        });
    }
    
    function updateMobileThemeIcon() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const mobileBtn = document.getElementById('mobile-theme-toggle');
        if (mobileBtn) {
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }
    
    function updateMobileLangButtons() {
        const currentLang = localStorage.getItem('language') || 'en';
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
    }

    // =====================
    // SETUP HEADER CONTROLS
    // =====================
    function setupHeaderControls() {
        // Theme toggle event - use existing button in header
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Language buttons events - use existing buttons in header
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                setLanguage(this.getAttribute('data-lang'));
            });
        });
    }

    // =====================
    // INITIALIZE
    // =====================
    document.addEventListener('DOMContentLoaded', function() {
        setupHeaderControls();
        createMobileControls();
        initTheme();
        initLanguage();
        updateMobileThemeIcon();
        updateMobileLangButtons();
    });

})();
