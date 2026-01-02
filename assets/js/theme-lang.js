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
            aboutUs: "About",
            ourPortfolio: "Portfolio",
            contactUs: "Contact",
            getStarted: "Get Started",
            services: "Services",
            presentation: "Presentation",
            teamJC: "JC Team",
            webMobileDev: "Web & Mobile Development",
            softwareDev: "Software Solutions",
            itSecurity: "IT Security",
            supportMaintenance: "Support & Maintenance",
            training: "Training",
            
            // Banner
            bannerBadge: "Welcome to Jysser Connect",
            bannerTitle: "The future has landed",
            bannerText: "And there are no hoverboards or flying cars.<br />Just apps. Lots of mother flipping apps.",
            explorePortfolio: "Explore Portfolio",
            
            // Section One - About
            sectionOneTitle: "Engineering & Consulting Excellence",
            sectionOneSubtitle: "Your partner for digital transformation",
            sectionOneP1: "Founded on the desire to innovate and meet market challenges, Jysser Connect (JC) positions itself as an engineering and consulting firm dedicated to providing top-tier services in engineering and management.",
            sectionOneP2: "In a context of increasing competition, where digitalization has become essential and business management in terms of strategy no longer tolerates errors, technical and strategic support can foster your company's development. This is why we commit to offering solutions tailored to your ambitions.",
            
            // Section Two
            sectionTwoTitle: "Innovative Solutions",
            sectionTwoSubtitle: "Tailored to meet your specific needs",
            sectionTwoText: "We provide innovative and advanced solutions to meet all your business needs. Our specialized team works to deliver the best technical services and solutions.",
            learnMore: "Learn More",
            
            // Section Three
            sectionThreeTitle: "Advanced Technology Solutions",
            sectionThreeSubtitle: "Modern technology to achieve your goals",
            sectionThreeText: "We use the latest technologies and tools to provide innovative solutions that help our clients succeed and excel in their fields.",
            
            // Section Four - Portfolio
            sectionFourTitle: "Our Portfolio",
            sectionFourSubtitle: "Discover our collection of successful projects and innovations",
            portfolioMmasTitle: "MMAS",
            portfolioMmasDesc: "A comprehensive management and automation system designed to streamline business operations and enhance productivity.",
            portfolioFithouseTitle: "FITHOUSE",
            portfolioFithouseDesc: "A modern fitness center management platform with member tracking, class scheduling, and performance analytics.",
            portfolioMciTitle: "MCI",
            portfolioMciDesc: "An innovative communication and integration platform connecting businesses with cutting-edge technology solutions.",
            portfolioSportxTitle: "SPORTX",
            portfolioSportxDesc: "A sports management and analytics platform for teams, athletes, and sports organizations worldwide.",
            viewDetails: "View Details",
            
            // Section Five - Contact
            sectionFiveTitle: "Get In Touch",
            sectionFiveSubtitle: "Ready to start your project? Contact us today",
            emailPlaceholder: "Enter your email address",
            contactNote: "We respect your privacy. Unsubscribe at any time.",
            
            // Footer
            copyright: "&copy; 2025 Jysser Connect. All rights reserved.",
            footerTagline: "Connecting ideas, building solutions.",
            quickLinks: "Quick Links",
            followUs: "Follow Us",
            getInTouch: "Get In Touch",
            location: "Morocco",
            
            // Theme
            lightMode: "Light Mode",
            darkMode: "Dark Mode",
            
            // About - Presentation Page
            whoAreWe: "Who Are We?",
            presentationSubtitle: "Presentation of Jysser Connect",
            aboutJCTitle: "Jysser Connect - Engineering & Consulting Firm",
            aboutJCText: "Founded on the desire to innovate and meet market challenges, Jysser Connect (JC) positions itself as an engineering and consulting firm dedicated to providing top-tier services in engineering and management.",
            aboutJCText2: "In a context of increasing competition, where digitalization has become essential and business management in terms of strategy no longer tolerates errors, technical and strategic support can foster your company's development.",
            aboutJCText3: "This is why we commit to offering solutions tailored to your ambitions.",
            innovationTitle: "Innovation",
            innovationDesc: "Innovative solutions adapted to modern market needs.",
            expertiseTitle: "Expertise",
            expertiseDesc: "A team of qualified experts in engineering and consulting.",
            commitmentTitle: "Commitment",
            commitmentDesc: "Customized support for your success.",
            
            // About - Team Page
            teamJCTitle: "The JC Team",
            teamJCSubtitle: "Passionate experts dedicated to your success",
            teamMember1Name: "AFA",
            teamMember1Role: "Co-founder & Technical Expert",
            teamMember1Desc: "Software engineering expert with extensive experience in developing innovative solutions. Specialized in complex system architecture and technical project management.",
            teamMember2Name: "ADD",
            teamMember2Role: "Co-founder & Consulting Expert",
            teamMember2Desc: "Senior consultant with deep expertise in business strategy and management. Supports organizations in their digital transformation and development.",
            ourValuesTitle: "Our Values",
            valueInnovation: "Innovation",
            valueInnovationDesc: "We constantly seek new solutions to meet market challenges.",
            valueExcellence: "Excellence",
            valueExcellenceDesc: "Quality is at the heart of everything we do, without compromise.",
            valueCollaboration: "Collaboration",
            valueCollaborationDesc: "We work in close partnership with our clients to ensure their success.",
            
            // Web & Mobile Development Page
            webMobileTitle: "Web and Mobile Development",
            webMobileSubtitle: "Specific advances in web and mobile development",
            webDevTitle: "Web Development for Your Projects",
            webDevDesc: "To meet the requirements of complex projects involving specific web developments such as synchronization with your ERP, creation of a product configurator, or implementation of a complex business intranet, our technical teams design personalized solutions adapted to your needs.",
            designTitle: "Let Our Designers Amaze You",
            designDesc: "A website essentially represents the reflection of your company. Our designers strive to highlight your visual identity and graphic charter, creating a website that showcases your products and services with care.",
            mobileDevTitle: "Mobile Development",
            mobileDevDesc: "Having a mobile application is now almost essential for many businesses. However, finding a company capable of designing a mobile application can be a complex and arduous challenge. Jysser Connect, specialized in custom development of web and mobile applications, brings your mobile application development projects to life.",
            ourExpertise: "Our Expertise",
            frontendDev: "Frontend Development",
            frontendDevDesc: "React, Vue.js, Angular and other modern frameworks.",
            backendDev: "Backend Development",
            backendDevDesc: "Node.js, Python, PHP, Java and robust architectures.",
            mobileApps: "Mobile Applications",
            mobileAppsDesc: "iOS, Android and cross-platform solutions.",
            startProject: "Start your project",
            
            // Software Development Page
            softwareTitle: "Software Solutions Development",
            softwareSubtitle: "JC is specialized in custom software development",
            softwareDesc1: "Nowadays, the search for business software that meets the specific needs of each company has become crucial to ensure the company's success. However, given that needs and work methods vary from one company to another, it becomes particularly complicated to find perfectly adapted software without resorting to custom development.",
            softwareDesc2: "Our company chooses the best technologies to design the software best suited to your needs, in terms of speed, reliability, and ease of use.",
            softwareDesc3: "Our team is meticulously selected to eliminate any unpredictability with the goal of designing management software to simplify your daily professional tasks, while placing particular emphasis on the quality of the output and its precision.",
            whatWeOffer: "What We Offer",
            customSoftware: "Custom Software",
            customSoftwareDesc: "Development of solutions adapted to your unique business processes.",
            performance: "Performance",
            performanceDesc: "Fast and reliable applications for optimal productivity.",
            userFriendly: "Ease of Use",
            userFriendlyDesc: "Intuitive interfaces for quick adoption.",
            technologies: "Technologies Used",
            
            // Security Page
            securityTitle: "IT Security",
            securitySubtitle: "Protect your infrastructure and data",
            securityDesc: "For any company with an IT infrastructure responsible for managing its data, IT security must be at the center of its concerns. Jysser Connect offers its clients complete solutions to secure their systems and protect their sensitive data.",
            ourSecurityServices: "Our Security Services",
            webSecurityAudit: "Website Security Assessment",
            webSecurityAuditDesc: "Complete security analysis of your web applications to identify potential vulnerabilities.",
            vulnerabilityAnalysis: "Vulnerability Analysis",
            vulnerabilityAnalysisDesc: "In-depth examination of systems and infrastructures to detect security flaws.",
            penetrationTesting: "Penetration Testing",
            penetrationTestingDesc: "Simulation of real attacks to evaluate your systems' resistance to threats.",
            appSecurityAudit: "Application Security Audit",
            appSecurityAuditDesc: "Code and process review to ensure the security of your business applications.",
            whySecurity: "Why IT Security?",
            securityBenefit1: "Protection against cyberattacks and threats",
            securityBenefit2: "Compliance with current regulations",
            securityBenefit3: "Protection of sensitive company data",
            securityBenefit4: "Maintaining client and partner trust",
            requestAudit: "Request an audit",
            
            // Support & Maintenance Page
            supportTitle: "IT Support and Maintenance",
            supportSubtitle: "Ensure the continuity and performance of your systems",
            networkMaintenanceTitle: "Network Maintenance",
            networkMaintenanceDesc: "For most companies, business operations largely depend on network performance. That's why JC offers:",
            networkService1: "Network infrastructure study and installation",
            networkService2: "Network and IT equipment maintenance",
            webAppMaintenanceTitle: "Website and Application Maintenance",
            webAppMaintenanceDesc: "Websites and applications, like network infrastructure, require regular maintenance:",
            webAppService1: "Full or partial website redesign",
            webAppService2: "Modification of existing websites",
            webAppService3: "Bug management and correction on business applications",
            webAppService4: "Software and ERP reconfiguration",
            whyChooseUs: "Why Choose Us?",
            reactiveSupport: "Reactive Support",
            reactiveSupportDesc: "A team available to respond quickly to your needs.",
            preventiveMaintenance: "Preventive Maintenance",
            preventiveMaintenanceDesc: "Anticipate problems before they affect your activity.",
            optimization: "Optimization",
            optimizationDesc: "Continuously improve your systems' performance.",
            requestSupport: "Request support",
            
            // Training Page
            trainingTitle: "Training",
            trainingSubtitle: "Develop your teams' skills",
            itTrainingTitle: "IT Training Programs",
            itTrainingDesc: "We offer training and certifications covering various IT professions:",
            itTraining1: "IT Project Management",
            itTraining2: "IT Security",
            itTraining3: "Software Development",
            itTraining4: "Systems and Networks",
            itTraining5: "Web Marketing",
            itTraining6: "Office Automation",
            managementTrainingTitle: "Management Training",
            managementTrainingDesc: "For management-focused training, we offer programs in the following areas:",
            mgmtTraining1: "Human Resources Management",
            mgmtTraining2: "Team Management",
            mgmtTraining3: "Management Control",
            mgmtTraining4: "Strategy",
            whyTrainWithUs: "Why Train with JC?",
            expertTrainers: "Expert Trainers",
            expertTrainersDesc: "Experienced professionals who share their expertise.",
            certifications: "Certifications",
            certificationsDesc: "Industry-recognized certified training.",
            practicalApproach: "Practical Approach",
            practicalApproachDesc: "Case studies and practical exercises for better understanding.",
            requestTraining: "Request training"
        },
        ar: {
            // Navigation
            aboutUs: "من نحن",
            ourPortfolio: "أعمالنا",
            contactUs: "اتصل بنا",
            getStarted: "ابدأ الآن",
            services: "الخدمات",
            presentation: "تقديم",
            teamJC: "فريق JC",
            webMobileDev: "تطوير الويب والموبايل",
            softwareDev: "حلول البرمجيات",
            itSecurity: "أمن المعلومات",
            supportMaintenance: "الدعم والصيانة",
            training: "التدريب",
            
            // Banner
            bannerBadge: "مرحباً بكم في Jysser Connect",
            bannerTitle: "المستقبل قد حل",
            bannerText: "ولا توجد ألواح تحليق أو سيارات طائرة.<br />فقط تطبيقات. الكثير من التطبيقات.",
            explorePortfolio: "استكشف أعمالنا",
            
            // Section One
            sectionOneTitle: "التميز في الهندسة والاستشارات",
            sectionOneSubtitle: "شريككم للتحول الرقمي",
            sectionOneP1: "تأسست Jysser Connect (JC) على رغبة الابتكار ومواجهة تحديات السوق، وتضع نفسها كشركة هندسة واستشارات مكرسة لتقديم خدمات عالية المستوى في الهندسة والإدارة.",
            sectionOneP2: "في سياق المنافسة المتزايدة، حيث أصبحت الرقمنة ضرورية وإدارة الأعمال من حيث الاستراتيجية لا تتحمل الأخطاء، يمكن للدعم التقني والاستراتيجي أن يعزز تطوير شركتكم. لهذا نلتزم بتقديم حلول تناسب طموحاتكم.",
            
            // Section Two
            sectionTwoTitle: "حلول مبتكرة",
            sectionTwoSubtitle: "مصممة لتلبية احتياجاتكم",
            sectionTwoText: "نقدم حلولاً مبتكرة ومتقدمة لتلبية جميع احتياجات عملكم. فريقنا المتخصص يعمل على تقديم أفضل الخدمات والحلول التقنية.",
            learnMore: "اعرف المزيد",
            
            // Section Three
            sectionThreeTitle: "حلول تقنية متقدمة",
            sectionThreeSubtitle: "تكنولوجيا حديثة لتحقيق أهدافكم",
            sectionThreeText: "نستخدم أحدث التقنيات والأدوات لتقديم حلول مبتكرة تساعد عملائنا على النجاح والتميز.",
            
            // Section Four - Portfolio
            sectionFourTitle: "معرض أعمالنا",
            sectionFourSubtitle: "اكتشف مجموعة مشاريعنا الناجحة",
            portfolioMmasTitle: "MMAS",
            portfolioMmasDesc: "نظام إدارة وأتمتة شامل مصمم لتبسيط العمليات التجارية وتعزيز الإنتاجية.",
            portfolioFithouseTitle: "FITHOUSE",
            portfolioFithouseDesc: "منصة حديثة لإدارة مراكز اللياقة البدنية.",
            portfolioMciTitle: "MCI",
            portfolioMciDesc: "منصة اتصالات وتكامل مبتكرة.",
            portfolioSportxTitle: "SPORTX",
            portfolioSportxDesc: "منصة إدارة وتحليلات رياضية.",
            viewDetails: "عرض التفاصيل",
            
            // Section Five - Contact
            sectionFiveTitle: "تواصل معنا",
            sectionFiveSubtitle: "هل أنت مستعد لبدء مشروعك؟",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            contactNote: "نحن نحترم خصوصيتك.",
            
            // Footer
            copyright: "&copy; 2025 Jysser Connect. جميع الحقوق محفوظة.",
            footerTagline: "نربط الأفكار، نبني الحلول.",
            quickLinks: "روابط سريعة",
            followUs: "تابعنا",
            getInTouch: "تواصل معنا",
            location: "المغرب",
            
            // Theme
            lightMode: "الوضع الفاتح",
            darkMode: "الوضع الداكن",
            
            // Service pages - Arabic
            whoAreWe: "من نحن؟",
            presentationSubtitle: "تقديم شركة Jysser Connect",
            aboutJCTitle: "Jysser Connect - شركة هندسة واستشارات",
            aboutJCText: "تأسست على رغبة الابتكار ومواجهة تحديات السوق، تضع Jysser Connect نفسها كشركة هندسة واستشارات مكرسة لتقديم خدمات عالية المستوى.",
            aboutJCText2: "في سياق المنافسة المتزايدة، حيث أصبحت الرقمنة ضرورية، يمكن للدعم التقني والاستراتيجي أن يعزز تطوير شركتكم.",
            aboutJCText3: "لهذا نلتزم بتقديم حلول تناسب طموحاتكم.",
            innovationTitle: "الابتكار",
            innovationDesc: "حلول مبتكرة تتناسب مع احتياجات السوق الحديثة.",
            expertiseTitle: "الخبرة",
            expertiseDesc: "فريق من الخبراء المؤهلين في الهندسة والاستشارات.",
            commitmentTitle: "الالتزام",
            commitmentDesc: "دعم مخصص لنجاحكم.",
            teamJCTitle: "فريق JC",
            teamJCSubtitle: "خبراء متحمسون مكرسون لنجاحكم",
            webMobileTitle: "تطوير الويب والموبايل",
            webMobileSubtitle: "التطورات المتقدمة في تطوير الويب والموبايل",
            softwareTitle: "تطوير حلول البرمجيات",
            softwareSubtitle: "JC متخصصة في تطوير البرمجيات المخصصة",
            securityTitle: "أمن المعلومات",
            securitySubtitle: "حماية بنيتكم التحتية وبياناتكم",
            supportTitle: "الدعم والصيانة",
            supportSubtitle: "ضمان استمرارية وأداء أنظمتكم",
            trainingTitle: "التدريب",
            trainingSubtitle: "تطوير مهارات فرقكم",
            startProject: "ابدأ مشروعك",
            requestAudit: "اطلب تدقيقاً",
            requestSupport: "اطلب الدعم",
            requestTraining: "اطلب تدريباً"
        },
        fr: {
            // Navigation
            aboutUs: "À propos",
            ourPortfolio: "Portfolio",
            contactUs: "Contact",
            getStarted: "Commencer",
            services: "Services",
            presentation: "Présentation",
            teamJC: "L'équipe JC",
            webMobileDev: "Développement Web et Mobile",
            softwareDev: "Solutions Logiciels",
            itSecurity: "Sécurité Informatique",
            supportMaintenance: "Support et Maintenance",
            training: "Formation",
            
            // Banner
            bannerBadge: "Bienvenue chez Jysser Connect",
            bannerTitle: "Le futur est arrivé",
            bannerText: "Et il n'y a pas de hoverboards ou de voitures volantes.<br />Juste des applications. Beaucoup d'applications.",
            explorePortfolio: "Explorer le Portfolio",
            
            // Section One - About
            sectionOneTitle: "Excellence en Ingénierie et Conseil",
            sectionOneSubtitle: "Votre partenaire pour la transformation digitale",
            sectionOneP1: "Fondée sur la volonté d'entreprendre et de relever les défis du marché, Jysser Connect (JC) se positionne en tant que cabinet d'ingénierie et de conseil dédié à fournir des services de premier ordre en ingénierie et en gestion.",
            sectionOneP2: "Dans un contexte de concurrence croissante, où la digitalisation est devenue indispensable et où la gestion des entreprises en termes de management et de stratégie n'admet plus d'erreur, un soutien technique et stratégique peut favoriser le développement de votre entreprise. C'est dans cette optique que nous nous engageons à vous proposer des solutions à la mesure de vos ambitions.",
            
            // Section Two
            sectionTwoTitle: "Solutions Innovantes",
            sectionTwoSubtitle: "Adaptées à vos besoins spécifiques",
            sectionTwoText: "Nous proposons des solutions innovantes et avancées pour répondre à tous les besoins de votre entreprise. Notre équipe spécialisée travaille à fournir les meilleurs services et solutions techniques.",
            learnMore: "En savoir plus",
            
            // Section Three
            sectionThreeTitle: "Solutions Technologiques Avancées",
            sectionThreeSubtitle: "Technologie moderne pour atteindre vos objectifs",
            sectionThreeText: "Nous utilisons les dernières technologies et outils pour fournir des solutions innovantes qui aident nos clients à réussir et à exceller dans leurs domaines.",
            
            // Section Four - Portfolio
            sectionFourTitle: "Notre Portfolio",
            sectionFourSubtitle: "Découvrez notre collection de projets réussis et d'innovations",
            portfolioMmasTitle: "MMAS",
            portfolioMmasDesc: "Un système complet de gestion et d'automatisation conçu pour rationaliser les opérations commerciales et améliorer la productivité.",
            portfolioFithouseTitle: "FITHOUSE",
            portfolioFithouseDesc: "Une plateforme moderne de gestion de centres de fitness avec suivi des membres, planification des cours et analyses de performance.",
            portfolioMciTitle: "MCI",
            portfolioMciDesc: "Une plateforme de communication et d'intégration innovante connectant les entreprises aux solutions technologiques de pointe.",
            portfolioSportxTitle: "SPORTX",
            portfolioSportxDesc: "Une plateforme de gestion et d'analyse sportive pour les équipes, les athlètes et les organisations sportives du monde entier.",
            viewDetails: "Voir les détails",
            
            // Section Five - Contact
            sectionFiveTitle: "Contactez-nous",
            sectionFiveSubtitle: "Prêt à démarrer votre projet ? Contactez-nous aujourd'hui",
            emailPlaceholder: "Entrez votre adresse e-mail",
            contactNote: "Nous respectons votre vie privée. Désabonnez-vous à tout moment.",
            
            // Footer
            copyright: "&copy; 2025 Jysser Connect. Tous droits réservés.",
            footerTagline: "Connecter les idées, construire des solutions.",
            quickLinks: "Liens Rapides",
            followUs: "Suivez-nous",
            getInTouch: "Nous Contacter",
            location: "Maroc",
            
            // Theme
            lightMode: "Mode clair",
            darkMode: "Mode sombre",
            
            // About - Presentation Page
            whoAreWe: "Qui Sommes-Nous ?",
            presentationSubtitle: "Présentation de l'entreprise Jysser Connect",
            aboutJCTitle: "Jysser Connect - Cabinet d'Ingénierie et de Conseil",
            aboutJCText: "Fondée sur la volonté d'entreprendre et de relever les défis du marché, Jysser Connect (JC) se positionne en tant que cabinet d'ingénierie et de conseil dédié à fournir des services de premier ordre en ingénierie et en gestion.",
            aboutJCText2: "Dans un contexte de concurrence croissante, où la digitalisation est devenue indispensable et où la gestion des entreprises en termes de management et de stratégie n'admet plus d'erreur, un soutien technique et stratégique peut favoriser le développement de votre entreprise.",
            aboutJCText3: "C'est dans cette optique que nous nous engageons à vous proposer des solutions à la mesure de vos ambitions.",
            innovationTitle: "Innovation",
            innovationDesc: "Des solutions innovantes adaptées aux besoins du marché moderne.",
            expertiseTitle: "Expertise",
            expertiseDesc: "Une équipe d'experts qualifiés en ingénierie et conseil.",
            commitmentTitle: "Engagement",
            commitmentDesc: "Un accompagnement sur mesure pour votre réussite.",
            
            // About - Team Page
            teamJCTitle: "L'équipe JC",
            teamJCSubtitle: "Des experts passionnés au service de votre réussite",
            teamMember1Name: "AFA",
            teamMember1Role: "Co-fondateur & Expert Technique",
            teamMember1Desc: "Expert en ingénierie logicielle avec une vaste expérience dans le développement de solutions innovantes. Spécialisé dans l'architecture de systèmes complexes et la gestion de projets techniques.",
            teamMember2Name: "ADD",
            teamMember2Role: "Co-fondateur & Expert Conseil",
            teamMember2Desc: "Consultant senior avec une expertise approfondie en stratégie d'entreprise et en management. Accompagne les organisations dans leur transformation digitale et leur développement.",
            ourValuesTitle: "Nos Valeurs",
            valueInnovation: "Innovation",
            valueInnovationDesc: "Nous recherchons constamment de nouvelles solutions pour répondre aux défis du marché.",
            valueExcellence: "Excellence",
            valueExcellenceDesc: "La qualité est au cœur de tout ce que nous faisons, sans compromis.",
            valueCollaboration: "Collaboration",
            valueCollaborationDesc: "Nous travaillons en partenariat étroit avec nos clients pour garantir leur succès.",
            
            // Web & Mobile Development Page
            webMobileTitle: "Développement Web et Mobile",
            webMobileSubtitle: "Les avancées spécifiques en développement web et mobile",
            webDevTitle: "Développement Web pour vos Projets",
            webDevDesc: "Pour répondre aux exigences de projets complexes impliquant des développements web spécifiques tels que la synchronisation avec votre ERP, la création d'un configurateur de produits ou la mise en place d'un intranet métier complexe, nos équipes techniques conçoivent des solutions personnalisées adaptées à vos besoins.",
            designTitle: "Laissez nos Designers vous Épater",
            designDesc: "Un site web représente essentiellement le reflet de votre entreprise. Nos designers s'efforcent de mettre en avant votre identité visuelle et votre charte graphique, créant ainsi un site web qui valorise vos produits et services avec soin.",
            mobileDevTitle: "Développement Mobile",
            mobileDevDesc: "Présenter une application mobile est aujourd'hui presque incontournable pour de nombreuses entreprises. Cependant, dénicher une société capable de concevoir une application mobile peut représenter un défi complexe et ardu. Jysser Connect, spécialisé dans le développement sur mesure d'applications web et mobiles, concrétise vos projets de développement d'applications mobiles.",
            ourExpertise: "Notre Expertise",
            frontendDev: "Développement Frontend",
            frontendDevDesc: "React, Vue.js, Angular et autres frameworks modernes.",
            backendDev: "Développement Backend",
            backendDevDesc: "Node.js, Python, PHP, Java et architectures robustes.",
            mobileApps: "Applications Mobiles",
            mobileAppsDesc: "iOS, Android et solutions cross-platform.",
            startProject: "Démarrer votre projet",
            
            // Software Development Page
            softwareTitle: "Développement de Solutions Logiciels",
            softwareSubtitle: "JC est spécialisé dans le développement de logiciels sur mesure",
            softwareDesc1: "De nos jours, la recherche d'un logiciel métier correspondant aux besoins spécifiques de chaque entreprise est devenue cruciale pour assurer le succès de la société. Cependant, étant donné que les besoins et les méthodes de travail varient d'une entreprise à l'autre, il devient particulièrement compliqué de trouver un logiciel parfaitement adapté sans recourir au développement sur mesure.",
            softwareDesc2: "Notre entreprise choisit les meilleures technologies pour concevoir le logiciel le plus adapté à vos besoins, en terme de rapidité, fiabilité et facilité d'utilisation.",
            softwareDesc3: "Notre équipe est minutieusement sélectionnée pour éliminer toute imprévisibilité dans l'objectif de concevoir un logiciel de gestion visant à simplifier vos tâches professionnelles quotidiennes, tout en mettant un accent particulier sur la qualité du rendu et sa précision.",
            whatWeOffer: "Ce que nous offrons",
            customSoftware: "Logiciels sur mesure",
            customSoftwareDesc: "Développement de solutions adaptées à vos processus métier uniques.",
            performance: "Performance",
            performanceDesc: "Des applications rapides et fiables pour une productivité optimale.",
            userFriendly: "Facilité d'utilisation",
            userFriendlyDesc: "Interfaces intuitives pour une prise en main rapide.",
            technologies: "Technologies utilisées",
            
            // Security Page
            securityTitle: "Sécurité Informatique",
            securitySubtitle: "Protégez votre infrastructure et vos données",
            securityDesc: "Pour toute entreprise dotée d'une infrastructure informatique responsable de la gestion de ses données, la sécurité informatique doit être au centre de ses préoccupations. Jysser Connect propose à ses clients des solutions complètes pour sécuriser leurs systèmes et protéger leurs données sensibles.",
            ourSecurityServices: "Nos Services de Sécurité",
            webSecurityAudit: "Évaluation de la sécurité des sites web",
            webSecurityAuditDesc: "Analyse complète de la sécurité de vos applications web pour identifier les vulnérabilités potentielles.",
            vulnerabilityAnalysis: "Analyse des vulnérabilités",
            vulnerabilityAnalysisDesc: "Examen approfondi des systèmes et des infrastructures pour détecter les failles de sécurité.",
            penetrationTesting: "Tests d'intrusion",
            penetrationTestingDesc: "Simulation d'attaques réelles pour évaluer la résistance de vos systèmes face aux menaces.",
            appSecurityAudit: "Audit de la sécurité applicative",
            appSecurityAuditDesc: "Révision du code et des processus pour garantir la sécurité de vos applications métier.",
            whySecurity: "Pourquoi la sécurité informatique ?",
            securityBenefit1: "Protection contre les cyberattaques et les menaces",
            securityBenefit2: "Conformité aux réglementations en vigueur",
            securityBenefit3: "Protection des données sensibles de l'entreprise",
            securityBenefit4: "Maintien de la confiance des clients et partenaires",
            requestAudit: "Demander un audit",
            
            // Support & Maintenance Page
            supportTitle: "Support et Maintenance Informatique",
            supportSubtitle: "Assurez la continuité et la performance de vos systèmes",
            networkMaintenanceTitle: "Entretien du Réseau Informatique",
            networkMaintenanceDesc: "Pour la plupart des entreprises, le bon fonctionnement de l'activité repose largement sur la performance du réseau informatique. C'est pourquoi JC propose :",
            networkService1: "Étude et installation d'infrastructures réseau",
            networkService2: "Maintenance des réseaux et des équipements informatiques",
            webAppMaintenanceTitle: "Entretien de Sites Web et d'Applications",
            webAppMaintenanceDesc: "Les sites web et applications, tout comme l'infrastructure réseau, requièrent un entretien régulier :",
            webAppService1: "Refonte totale ou partielle des sites web",
            webAppService2: "Modification des sites web existants",
            webAppService3: "Gestion et correction des bugs sur les applications métier",
            webAppService4: "Reconfiguration des logiciels et des ERP",
            whyChooseUs: "Pourquoi nous choisir ?",
            reactiveSupport: "Support Réactif",
            reactiveSupportDesc: "Une équipe disponible pour répondre rapidement à vos besoins.",
            preventiveMaintenance: "Maintenance Préventive",
            preventiveMaintenanceDesc: "Anticipez les problèmes avant qu'ils n'affectent votre activité.",
            optimization: "Optimisation",
            optimizationDesc: "Améliorez continuellement les performances de vos systèmes.",
            requestSupport: "Demander un support",
            
            // Training Page
            trainingTitle: "Formation",
            trainingSubtitle: "Développez les compétences de vos équipes",
            itTrainingTitle: "Formations dans le Domaine de l'Informatique",
            itTrainingDesc: "Nous offrons des formations et certifications couvrant divers métiers de l'informatique :",
            itTraining1: "Gestion de projets informatiques",
            itTraining2: "Sécurité informatique",
            itTraining3: "Développement informatique",
            itTraining4: "Systèmes et réseaux",
            itTraining5: "Web Marketing",
            itTraining6: "Bureautique",
            managementTrainingTitle: "Formations en Management",
            managementTrainingDesc: "Pour les formations axées sur le management, nous proposons des programmes dans les domaines suivants :",
            mgmtTraining1: "Gestion des ressources humaines",
            mgmtTraining2: "Gestion d'équipes",
            mgmtTraining3: "Contrôle de gestion",
            mgmtTraining4: "Stratégie",
            whyTrainWithUs: "Pourquoi se former avec JC ?",
            expertTrainers: "Formateurs Experts",
            expertTrainersDesc: "Des professionnels expérimentés qui partagent leur savoir-faire.",
            certifications: "Certifications",
            certificationsDesc: "Des formations certifiantes reconnues dans l'industrie.",
            practicalApproach: "Approche Pratique",
            practicalApproachDesc: "Des cas pratiques et exercices concrets pour une meilleure assimilation.",
            requestTraining: "Demander une formation"
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
    // HEADER SCROLL BEHAVIOR
    // Show header when scrolling up, hide when scrolling down
    // =====================
    let lastScrollTop = 0;
    let scrollThreshold = 10; // Minimum scroll amount before triggering
    let ticking = false;
    
    function initHeaderScroll() {
        const header = document.getElementById('header');
        if (!header) return;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    handleScroll(header);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
    
    function handleScroll(header) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when past the banner
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
            return;
        }
        
        // Determine scroll direction
        const scrollDifference = Math.abs(currentScroll - lastScrollTop);
        
        // Only trigger if we've scrolled more than the threshold
        if (scrollDifference < scrollThreshold) {
            return;
        }
        
        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN - hide header
            header.classList.remove('header-visible');
            header.classList.add('header-hidden');
        } else {
            // Scrolling UP - show header
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    // =====================
    // HAMBURGER MENU
    // =====================
    function initHamburgerMenu() {
        const hamburgerBtn = document.getElementById('hamburger-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
        
        if (!hamburgerBtn || !mobileMenu) return;
        
        // Toggle menu on hamburger click
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Mobile language switcher
        mobileLangBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                setLanguage(this.getAttribute('data-lang'));
                // Update active state for mobile lang buttons
                mobileLangBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when resizing to larger screen
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    function updateMobileLangButtonsInMenu() {
        const currentLang = localStorage.getItem('language') || 'en';
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
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
        updateMobileLangButtonsInMenu();
        initHeaderScroll();
        initHamburgerMenu();
    });

})();
