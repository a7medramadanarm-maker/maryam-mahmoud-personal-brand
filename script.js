document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       Maryam Mahmoud
       Therapist / Life Coach Website
       Arabic / English
    ========================================================= */

    const html = document.documentElement;
    const languageToggle = document.getElementById("languageToggle");


    /* =========================================================
       TRANSLATIONS
    ========================================================= */

    const translations = {

        ar: {

            /* =========================
               Brand
            ========================= */

            "brand-name": "مريم محمود",
            "brand-subtitle": "دعم نفسي وتطوير ذات",


            /* =========================
               Navigation
            ========================= */

            "nav-home": "الرئيسية",
            "nav-about": "عن مريم",
            "nav-services": "الخدمات",
            "nav-support": "مجالات الدعم",
            "nav-how": "كيف نبدأ",
            "nav-faq": "الأسئلة الشائعة",
            "nav-contact": "تواصل معنا",
            "nav-book": "احجز جلسة",


            /* =========================
               Hero
            ========================= */

            "hero-eyebrow":
                "مساحة آمنة لفهم نفسك والبدء من جديد",

            "hero-title":
                "خطوة نحو حياة أكثر هدوءًا وتوازنًا",

            "hero-description":
                "مع مريم محمود، يمكنك الحصول على مساحة آمنة وهادئة للتعبير عن مشاعرك، فهم أفكارك، والتعامل مع التحديات النفسية بخطوات عملية وإنسانية.",

            "hero-primary":
                "احجز جلسة",

            "hero-secondary":
                "تعرف على المزيد",

            "hero-note":
                "سرية تامة • خصوصية • دعم إنساني",

            "hero-card-label":
                "Maryam Mahmoud",

            "hero-card-title":
                "مساحة تبدأ فيها أنت",

            "hero-card-text":
                "استمع لنفسك، افهم مشاعرك، وخذ الخطوة المناسبة.",


            /* =========================
               Trust
            ========================= */

            "trust-1":
                "خصوصية وسرية",

            "trust-2":
                "مساحة بدون أحكام",

            "trust-3":
                "اهتمام باحتياجاتك",

            "trust-4":
                "خطوات نحو التغيير",


            /* =========================
               About
            ========================= */

            "about-label":
                "عن مريم",

            "about-title":
                "مساحة آمنة تبدأ فيها رحلة التغيير",

            "about-small-title":
                "About Maryam",

            "about-text":
                "الهدف هو توفير بيئة مريحة وآمنة تساعدك على فهم نفسك ومشاعرك بصورة أعمق، والتعامل مع الضغوط والتحديات اليومية بطريقة أكثر توازنًا.",

            "about-text-2":
                "كل شخص لديه تجربته الخاصة، لذلك يتم التعامل مع كل حالة باهتمام وخصوصية، مع التركيز على احتياجات الشخص وأهدافه.",

            "feature-1-title":
                "سرية وخصوصية",

            "feature-1-text":
                "احترام كامل لخصوصيتك ومعلوماتك الشخصية.",

            "feature-2-title":
                "استماع بدون أحكام",

            "feature-2-text":
                "مساحة تستطيع فيها التعبير عن نفسك بأمان.",

            "feature-3-title":
                "خطوات عملية",

            "feature-3-text":
                "العمل معًا على فهم التحديات وبناء خطوات مناسبة.",


            /* =========================
               Recognition
            ========================= */

            "recognition-label":
                "ربما أنت هنا لأن...",

            "recognition-title":
                "هناك شيء بداخلك يحتاج إلى مساحة",

            "recognition-description":
                "أحيانًا لا نحتاج إلى إجابة فورية، بل نحتاج إلى فهم ما يحدث بداخلنا.",

            "recognition-1-title":
                "تفكر كثيرًا",

            "recognition-1-text":
                "تجد صعوبة في إيقاف التفكير والقلق بشأن المستقبل.",

            "recognition-2-title":
                "تشعر بالضغط",

            "recognition-2-text":
                "المسؤوليات والدراسة والعمل أصبحت أكثر من قدرتك على التحمل.",

            "recognition-3-title":
                "تريد فهم نفسك",

            "recognition-3-text":
                "ترغب في فهم مشاعرك وردود أفعالك بصورة أفضل.",

            "recognition-4-title":
                "تبحث عن اتجاه",

            "recognition-4-text":
                "لديك قرارات أو تغييرات في حياتك وتحتاج إلى مساحة للتفكير.",


            /* =========================
               Services
            ========================= */

            "services-label":
                "الخدمات",

            "services-title":
                "جلسات مصممة حول احتياجاتك",

            "services-description":
                "اختيار نوع الجلسة يعتمد على احتياجاتك والموضوعات التي ترغب في العمل عليها.",

            "service-1-title":
                "الجلسات الفردية",

            "service-1-text":
                "جلسات فردية تساعدك على فهم مشاعرك وأفكارك والتعامل مع الضغوط والتحديات.",

            "service-2-title":
                "الدعم النفسي",

            "service-2-text":
                "مساحة آمنة للتعبير عن المشاعر والحصول على الدعم خلال الفترات الصعبة.",

            "service-3-title":
                "إدارة الضغوط",

            "service-3-text":
                "التعرف على مصادر الضغط وتطوير طرق أكثر توازنًا للتعامل معها.",

            "service-4-title":
                "تطوير الذات",

            "service-4-text":
                "العمل على فهم الذات وبناء عادات ومهارات تساعدك في حياتك اليومية.",

            "service-link":
                "اعرف المزيد",


            /* =========================
               Support
            ========================= */

            "support-label":
                "مجالات الدعم",

            "support-title":
                "موضوعات يمكن العمل عليها",

            "support-description":
                "يمكن أن تختلف احتياجات كل شخص، لذلك يتم تحديد الأولويات خلال الجلسات.",

            "support-button":
                "ابدأ الآن",

            "support-1":
                "القلق والتوتر",

            "support-2":
                "الضغوط اليومية",

            "support-3":
                "تقدير الذات",

            "support-4":
                "العلاقات والتواصل",

            "support-5":
                "المشاعر الصعبة",

            "support-6":
                "التغيير والقرارات",

            "support-7":
                "الضغوط الدراسية",

            "support-8":
                "التوازن النفسي",


            /* =========================
               Why
            ========================= */

            "why-label":
                "لماذا هذه المساحة؟",

            "why-title":
                "لأن رحلتك تستحق أن تُسمع",

            "why-1-title":
                "استماع حقيقي",

            "why-1-text":
                "مساحة للتعبير عما تشعر به دون الحاجة إلى إخفاء ما بداخلك.",

            "why-2-title":
                "تعامل إنساني",

            "why-2-text":
                "الاهتمام بالشخص نفسه وليس فقط بالمشكلة التي يمر بها.",

            "why-3-title":
                "وضوح في الرحلة",

            "why-3-text":
                "فهم الخطوات القادمة بدل الشعور بأنك لا تعرف من أين تبدأ.",


            /* =========================
               How It Works
            ========================= */

            "how-label":
                "كيف نبدأ",

            "how-title":
                "رحلتك تبدأ بخطوة بسيطة",

            "step-1-title":
                "احجز موعدك",

            "step-1-text":
                "اختر الطريقة المناسبة للتواصل وحدد الوقت المناسب للجلسة.",

            "step-2-title":
                "الجلسة الأولى",

            "step-2-text":
                "نتعرف على احتياجاتك والموضوعات التي ترغب في العمل عليها.",

            "step-3-title":
                "خطة مناسبة",

            "step-3-text":
                "نحدد معًا الخطوات المناسبة بناءً على أهدافك واحتياجاتك.",


            /* =========================
               Booking
            ========================= */

            "booking-label":
                "احجز الآن",

            "booking-title":
                "ابدأ بخطوة بسيطة",

            "booking-description":
                "املأ البيانات التالية وسنتواصل معك لتأكيد الموعد والتفاصيل.",

            "booking-name":
                "الاسم",

            "booking-name-placeholder":
                "اكتب اسمك",

            "booking-phone":
                "رقم الهاتف",

            "booking-phone-placeholder":
                "اكتب رقم الهاتف",

            "booking-email":
                "البريد الإلكتروني",

            "booking-email-placeholder":
                "example@email.com",

            "booking-type":
                "نوع الجلسة",

            "booking-select":
                "اختر نوع الجلسة",

            "booking-individual":
                "جلسة فردية",

            "booking-support":
                "دعم نفسي",

            "booking-consultation":
                "استشارة أولية",

            "booking-date":
                "التاريخ المفضل",

            "booking-message":
                "رسالة إضافية",

            "booking-message-placeholder":
                "اكتب أي تفاصيل ترغب في مشاركتها...",

            "booking-submit":
                "إرسال طلب الحجز",

            "booking-benefit-1":
                "خصوصية واحترام",

            "booking-benefit-2":
                "موعد مناسب",

            "booking-benefit-3":
                "تواصل واضح",


            /* =========================
               FAQ
            ========================= */

            "faq-label":
                "الأسئلة الشائعة",

            "faq-title":
                "أسئلة قد تهمك",

            "faq-q1":
                "كيف يمكن حجز جلسة؟",

            "faq-a1":
                "يمكنك إرسال طلب الحجز من خلال النموذج الموجود في الموقع، وسيتم التواصل معك لتأكيد التفاصيل.",

            "faq-q2":
                "هل الجلسات سرية؟",

            "faq-a2":
                "يتم التعامل مع المعلومات التي تتم مشاركتها خلال التواصل والجلسات باحترام للخصوصية والسرية.",

            "faq-q3":
                "ماذا يحدث في الجلسة الأولى؟",

            "faq-a3":
                "تكون الجلسة الأولى فرصة للتعرف على احتياجاتك والموضوعات التي ترغب في مناقشتها ووضع تصور مناسب للخطوات القادمة.",

            "faq-q4":
                "هل يمكن أن تكون الجلسات أونلاين؟",

            "faq-a4":
                "يمكن تحديد طريقة الجلسة والتفاصيل المتاحة عند التواصل وحجز الموعد.",


            /* =========================
               Contact
            ========================= */

            "contact-label":
                "تواصل معنا",

            "contact-title":
                "هل لديك سؤال؟",

            "contact-description":
                "إذا كنت ترغب في معرفة المزيد أو الاستفسار عن الجلسات، يمكنك التواصل معنا.",

            "contact-phone":
                "الهاتف",

            "contact-whatsapp":
                "واتساب",

            "contact-email":
                "البريد الإلكتروني",


            /* =========================
               Footer
            ========================= */

            "footer-description":
                "مساحة آمنة للدعم النفسي وفهم الذات والبدء بخطوات أكثر توازنًا.",

            "footer-links":
                "روابط سريعة",

            "footer-contact":
                "تواصل معنا",

            "footer-rights":
                "جميع الحقوق محفوظة.",

            "footer-made":
                "Prepared By: Eng Ahmad Ramadan"
        },


        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            /* Brand */

            "brand-name":
                "Maryam Mahmoud",

            "brand-subtitle":
                "Therapy & Personal Growth",


            /* Navigation */

            "nav-home":
                "Home",

            "nav-about":
                "About Maryam",

            "nav-services":
                "Services",

            "nav-support":
                "Areas of Support",

            "nav-how":
                "How It Works",

            "nav-faq":
                "FAQ",

            "nav-contact":
                "Contact",

            "nav-book":
                "Book a Session",


            /* Hero */

            "hero-eyebrow":
                "A safe space to understand yourself and move forward",

            "hero-title":
                "A step toward a calmer and more balanced life",

            "hero-description":
                "With Maryam Mahmoud, you can have a safe and calm space to express your feelings, understand your thoughts, and deal with life's challenges in a practical and compassionate way.",

            "hero-primary":
                "Book a Session",

            "hero-secondary":
                "Learn More",

            "hero-note":
                "Privacy • Confidentiality • Human Support",

            "hero-card-label":
                "Maryam Mahmoud",

            "hero-card-title":
                "A space that starts with you",

            "hero-card-text":
                "Listen to yourself, understand your emotions, and take the next step.",


            /* Trust */

            "trust-1":
                "Privacy & Confidentiality",

            "trust-2":
                "A Judgment-Free Space",

            "trust-3":
                "Personalized Attention",

            "trust-4":
                "Steps Toward Change",


            /* About */

            "about-label":
                "About Maryam",

            "about-title":
                "A safe space where your journey begins",

            "about-small-title":
                "About Maryam",

            "about-text":
                "The goal is to provide a comfortable and safe environment that helps you understand yourself and your emotions more deeply and deal with daily challenges in a more balanced way.",

            "about-text-2":
                "Everyone has a unique experience, so every person is treated with care and privacy while focusing on their individual needs and goals.",

            "feature-1-title":
                "Privacy & Confidentiality",

            "feature-1-text":
                "Respect for your privacy and personal information.",

            "feature-2-title":
                "No Judgment",

            "feature-2-text":
                "A safe space where you can express yourself freely.",

            "feature-3-title":
                "Practical Steps",

            "feature-3-text":
                "Working together to understand challenges and build suitable steps.",


            /* Recognition */

            "recognition-label":
                "Maybe you are here because...",

            "recognition-title":
                "Something inside you needs space",

            "recognition-description":
                "Sometimes we do not need an immediate answer. We need space to understand what is happening inside us.",

            "recognition-1-title":
                "You Overthink",

            "recognition-1-text":
                "You find it difficult to stop thinking and worrying about the future.",

            "recognition-2-title":
                "You Feel Overwhelmed",

            "recognition-2-text":
                "Responsibilities, studying, or work may feel harder than you can handle.",

            "recognition-3-title":
                "You Want to Understand Yourself",

            "recognition-3-text":
                "You want to better understand your emotions and reactions.",

            "recognition-4-title":
                "You Are Looking for Direction",

            "recognition-4-text":
                "You are facing decisions or changes and need space to think clearly.",


            /* Services */

            "services-label":
                "Services",

            "services-title":
                "Sessions designed around your needs",

            "services-description":
                "The type of session depends on your needs and the topics you would like to work on.",

            "service-1-title":
                "Individual Sessions",

            "service-1-text":
                "Individual sessions to help you understand your emotions, thoughts, stress, and personal challenges.",

            "service-2-title":
                "Emotional Support",

            "service-2-text":
                "A safe space to express your feelings and receive support during difficult periods.",

            "service-3-title":
                "Stress Management",

            "service-3-text":
                "Understanding sources of stress and developing healthier ways to manage them.",

            "service-4-title":
                "Personal Growth",

            "service-4-text":
                "Working on self-understanding and building habits and skills for everyday life.",

            "service-link":
                "Learn More",


            /* Support */

            "support-label":
                "Areas of Support",

            "support-title":
                "Topics we can work on",

            "support-description":
                "Every person's needs are different, so priorities are discussed during the sessions.",

            "support-button":
                "Get Started",

            "support-1":
                "Anxiety & Stress",

            "support-2":
                "Daily Pressure",

            "support-3":
                "Self-Esteem",

            "support-4":
                "Relationships & Communication",

            "support-5":
                "Difficult Emotions",

            "support-6":
                "Change & Decisions",

            "support-7":
                "Academic Stress",

            "support-8":
                "Emotional Balance",


            /* Why */

            "why-label":
                "Why This Space?",

            "why-title":
                "Because your journey deserves to be heard",

            "why-1-title":
                "Real Listening",

            "why-1-text":
                "A space where you can express what you feel without hiding what is inside.",

            "why-2-title":
                "A Human Approach",

            "why-2-text":
                "Focusing on the person, not only on the challenge they are facing.",

            "why-3-title":
                "Clarity Along the Way",

            "why-3-text":
                "Understanding the next steps instead of feeling unsure where to begin.",


            /* How It Works */

            "how-label":
                "How It Works",

            "how-title":
                "Your journey starts with one simple step",

            "step-1-title":
                "Book Your Appointment",

            "step-1-text":
                "Choose the preferred way to contact us and select a suitable time.",

            "step-2-title":
                "First Session",

            "step-2-text":
                "We learn more about your needs and the topics you would like to work on.",

            "step-3-title":
                "A Suitable Plan",

            "step-3-text":
                "Together, we identify suitable next steps based on your needs and goals.",


            /* Booking */

            "booking-label":
                "Book Now",

            "booking-title":
                "Start with one simple step",

            "booking-description":
                "Fill in the form below and we will contact you to confirm the appointment details.",

            "booking-name":
                "Name",

            "booking-name-placeholder":
                "Enter your name",

            "booking-phone":
                "Phone Number",

            "booking-phone-placeholder":
                "Enter your phone number",

            "booking-email":
                "Email",

            "booking-email-placeholder":
                "example@email.com",

            "booking-type":
                "Session Type",

            "booking-select":
                "Select session type",

            "booking-individual":
                "Individual Session",

            "booking-support":
                "Emotional Support",

            "booking-consultation":
                "Initial Consultation",

            "booking-date":
                "Preferred Date",

            "booking-message":
                "Additional Message",

            "booking-message-placeholder":
                "Write any details you would like to share...",

            "booking-submit":
                "Send Booking Request",

            "booking-benefit-1":
                "Privacy & Respect",

            "booking-benefit-2":
                "Convenient Appointment",

            "booking-benefit-3":
                "Clear Communication",


            /* FAQ */

            "faq-label":
                "FAQ",

            "faq-title":
                "Frequently Asked Questions",

            "faq-q1":
                "How can I book a session?",

            "faq-a1":
                "You can submit a booking request through the form on the website, and we will contact you to confirm the details.",

            "faq-q2":
                "Are the sessions confidential?",

            "faq-a2":
                "Information shared during communication and sessions is handled with respect for privacy and confidentiality.",

            "faq-q3":
                "What happens during the first session?",

            "faq-a3":
                "The first session is an opportunity to understand your needs, discuss the topics you would like to explore, and consider suitable next steps.",

            "faq-q4":
                "Are online sessions available?",

            "faq-a4":
                "The available session format can be discussed when contacting us and booking your appointment.",


            /* Contact */

            "contact-label":
                "Contact",

            "contact-title":
                "Have a question?",

            "contact-description":
                "If you would like to learn more or ask about sessions, feel free to contact us.",

            "contact-phone":
                "Phone",

            "contact-whatsapp":
                "WhatsApp",

            "contact-email":
                "Email",


            /* Footer */

            "footer-description":
                "A safe space for emotional support, self-understanding, and balanced personal growth.",

            "footer-links":
                "Quick Links",

            "footer-contact":
                "Contact",

            "footer-rights":
                "All rights reserved.",

            "footer-made":
                "Prepared By: Eng Ahmad Ramadan"
        }
    };


    /* =========================================================
       APPLY LANGUAGE
    ========================================================= */

    function applyLanguage(language) {

        if (!translations[language]) {
            language = "ar";
        }

        const dictionary = translations[language];

        /* HTML direction */

        html.lang = language;

        html.dir =
            language === "ar"
                ? "rtl"
                : "ltr";


        /* Text */

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    dictionary[key] !== undefined
                ) {
                    element.textContent =
                        dictionary[key];
                }

            });


        /* Placeholders */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach((element) => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (
                    dictionary[key] !== undefined
                ) {
                    element.placeholder =
                        dictionary[key];
                }

            });


        /* Language Button */

        if (languageToggle) {

            languageToggle.textContent =
                language === "ar"
                    ? "EN"
                    : "عربي";

        }


        /* Page Title */

        document.title =
            language === "ar"
                ? "مريم محمود | دعم نفسي وتوازن"
                : "Maryam Mahmoud | Therapy & Personal Growth";


        /* Save */

        localStorage.setItem(
            "maryam_language",
            language
        );

    }


    /* =========================================================
       LANGUAGE BUTTON
    ========================================================= */

    if (languageToggle) {

        languageToggle.addEventListener(
            "click",
            () => {

                const currentLanguage =
                    html.lang === "en"
                        ? "en"
                        : "ar";

                const newLanguage =
                    currentLanguage === "ar"
                        ? "en"
                        : "ar";

                applyLanguage(newLanguage);

            }
        );

    }


    /* =========================================================
       LOAD SAVED LANGUAGE
    ========================================================= */

    const savedLanguage =
        localStorage.getItem(
            "maryam_language"
        ) || "ar";

    applyLanguage(savedLanguage);


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            () => {

                navbar.classList.toggle(
                    "active"
                );

                menuToggle.classList.toggle(
                    "active"
                );


                const expanded =
                    menuToggle.getAttribute(
                        "aria-expanded"
                    ) === "true";


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(!expanded)
                );

            }
        );


        /* Close menu after clicking */

        navbar
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navbar.classList.remove(
                            "active"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =========================================================
       FAQ ACCORDION
    ========================================================= */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach((item) => {

        const question =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );


        if (!question || !answer) {
            return;
        }


        question.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                /* Close others */

                faqItems.forEach(
                    (otherItem) => {

                        otherItem.classList.remove(
                            "active"
                        );


                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq-answer"
                            );


                        if (otherAnswer) {

                            otherAnswer.style.maxHeight =
                                null;

                        }

                    }
                );


                /* Open selected */

                if (!isActive) {

                    item.classList.add(
                        "active"
                    );


                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                }

            }
        );

    });


    /* =========================================================
       BOOKING FORM
    ========================================================= */

    const bookingForm =
        document.getElementById(
            "bookingForm"
        );


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim() || "";


                const phone =
                    document
                        .getElementById("phone")
                        ?.value
                        .trim() || "";


                if (!name || !phone) {

                    const language =
                        html.lang === "en"
                            ? "en"
                            : "ar";


                    alert(
                        language === "ar"
                            ? "من فضلك اكتب الاسم ورقم الهاتف."
                            : "Please enter your name and phone number."
                    );

                    return;

                }


                const language =
                    html.lang === "en"
                        ? "en"
                        : "ar";


                alert(
                    language === "ar"
                        ? "تم إرسال طلب الحجز بنجاح.\nسيتم التواصل معك لتأكيد الموعد."
                        : "Your booking request has been submitted.\nWe will contact you to confirm the appointment."
                );


                bookingForm.reset();

            }
        );

    }


    /* =========================================================
       MINIMUM BOOKING DATE
    ========================================================= */

    const dateInput =
        document.getElementById("date");


    if (dateInput) {

        const today =
            new Date();


        const year =
            today.getFullYear();


        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");


        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =========================================================
       ACTIVE NAVIGATION
    ========================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            '.nav-link[href^="#"]'
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =========================================================
       HEADER SCROLL EFFECT
    ========================================================= */

    const header =
        document.querySelector(
            "header"
        );


    function updateHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(
            `
            .service-card,
            .feature,
            .support-item,
            .step,
            .faq-item,
            .contact-method,
            .recognition-card,
            .why-card,
            .trust-item
            `
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );


                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "show"
                );

            }
        );

    }


    /* =========================================================
       CURRENT YEAR
    ========================================================= */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================================================
       CONSOLE
    ========================================================= */

    console.log(
        "Maryam Mahmoud Website loaded successfully."
    );

});
