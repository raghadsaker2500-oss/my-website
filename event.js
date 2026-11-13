document.addEventListener("DOMContentLoaded", () => {
    const data = {
        1: [
            "مؤتمر الذكاء الاصطناعي وتقنيات الويب الحديثة 2026",
            "ثقافة ومعرفة",
            "25 تشرين الأول 2026",
            "دمشق",
            "photo-1516321318423-f06f85e504b3.avif",
            "يجمع هذا المؤتمر نخبة من أساتذة الجامعة الافتراضية السورية وخبراء صناعة البرمجيات لمناقشة مستقبل تطوير الويب وتكامل نماذج الذكاء الاصطناعي التوليدي في المشاريع الأكاديمية والعملية.",
        ],
        2: [
            "ملتقى الطلاب والأفكار",
            "مجتمع وطلاب",
            "30 تشرين الأول 2026",
            "دمشق",
            "photo-1529156069898-49953e39b3ac.avif",
            "يقدّم الملتقى فرصة فريدة لتفاعل طلاب الاختصاصات المختلفة في الجامعة الافتراضية السورية، وعرض المشاريع الريادية والأفكار الإبداعية.",
        ],
        3: [
            "أمسية المواهب الفنية",
            "فن وموسيقى",
            "2 تشرين الثاني 2026",
            "حمص",
            "photo-1501386761578-eac5c94b800a.avif",
            "تجمع الأمسية عازفين وطلاباً مهتمين بالفن والموسيقى في برنامج متنوع، مع مساحة للتعريف بالمواهب الجامعية وتبادل الخبرات الفنية.",
        ],
        4: [
            "حوار الأفكار المبتكرة",
            "ثقافة ومعرفة",
            "5 تشرين الثاني 2026",
            "اللاذقية",
            "photo-1521737711867-e3b97375f902.avif",
            "نقاشات مفتوحة تهدف إلى تحفيز الفكر النقدي والإبداعي لدى طلاب الجامعة الافتراضية.",
        ],
        5: [
            "يوم الرياضة الجامعي",
            "رياضة ونشاط",
            "7 تشرين الثاني 2026",
            "حلب",
            "photo-1517649763962-0c623066013b.avif",
            "فعالية رياضية شبابية تشمل بطولات ودية في كرة القدم والشطرنج لتعزيز النشاط البدني والروح الرياضية بين الطلاب.",
        ],
        6: [
            "مبادرة معاً للمجتمع",
            "مجتمع وطلاب",
            "9 تشرين الثاني 2026",
            "طرطوس",
            "photo-1559024094-4a1e4495c3c1.avif",
            "أنشطة تطوعية ومجتمعية ينظمها طلاب الجامعة الافتراضية السورية لترسيخ قيم المسؤولية المجتمعية.",
        ],
    };

    const id = new URLSearchParams(location.search).get("id") || "1";
    const e = data[id];
    const box = document.getElementById("eventDetails");

    if (!e) {
        if (box) box.classList.add("d-none");
        const notFound = document.getElementById("eventNotFound");
        if (notFound) notFound.classList.remove("d-none");
        return;
    }

    document.title = e[0] + " - دليل فعاليات الجامعة الافتراضية";

    
    const titleEl = document.getElementById("eventTitle");
    const catEl = document.getElementById("eventCategory");
    const dateEl = document.getElementById("eventDate");
    const locEl = document.getElementById("eventLocation");
    const descEl = document.getElementById("eventDescription");

    if (titleEl) titleEl.textContent = e[0];
    if (catEl) catEl.textContent = e[1];
    if (dateEl) dateEl.textContent = "📅 " + e[2];
    if (locEl) locEl.textContent = "📍 " + e[3];
    if (descEl) descEl.textContent = e[5]; 
    const im = document.getElementById("eventImage");
    if (im) {
        im.src = "assets/img/" + e[4]; /
        im.alt = "صورة توضيحية لفعالية " + e[0];
    }

    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (ev) => {
            ev.preventDefault();

            const f = ev.currentTarget;
            if (!f.reportValidity()) {
                return;
            }

            const r = document.getElementById("bookingResult");
            if (r) {
                r.className = "text-success mt-2 small";
                r.textContent = "تم تسجيل طلب الحجز التجريبي بنجاح للفعالية: " + e[0];
            }
            f.reset();
        });
    }
});