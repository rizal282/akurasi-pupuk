/* ======================================
   AKURASI PUPUK - SCRIPT.JS FINAL
   Dark Mode • Multilang • UI Enhancements
   ====================================== */

/* -------------------------------
   SELECTORS
--------------------------------- */
const toggleDark = document.getElementById("toggleDark");
const langSelect = document.getElementById("langSelect");

/* -------------------------------
   MULTILANGUAGE TEXTS
--------------------------------- */
const langData = {
    id: {
        // NAV
        lnk_about: "Tentang",
        lnk_features: "Fitur",
        lnk_contact: "Kontak",
        lnk_download: "Download",

        // HERO
        hero_title: "Akurasi Pupuk",
        hero_sub: "Perhitungan nutrisi tanaman lebih akurat, cepat, dan modern.",
        btn_download: "Download di Play Store",

        // ABOUT
        about_title: "Tentang Aplikasi",
        about_desc:
            "Aplikasi Akurasi Pupuk membantu petani menghitung nutrisi pupuk dengan presisi tinggi untuk meningkatkan produktivitas tanaman.",

        // FEATURES
        features_title: "Fitur Unggulan",
        f1_title: "Hitung Manual",
        f1_desc: "Hitung nutrisi pupuk campuran dengan input manual.",
        f2_title: "Hitung Otomatis",
        f2_desc: "130+ data pupuk lengkap beserta unsur hara.",
        f3_title: "Hitung PPM",
        f3_desc: "Menghitung konsentrasi larutan berdasarkan massa & volume.",
        f4_title: "Pengenceran PPM",
        f4_desc: "Hitung konsentrasi awal/akhir & volume larutan.",
        f5_title: "Multi Pengenceran PPM",
        f5_desc: "Menggabungkan beberapa larutan untuk mendapatkan PPM akhir.",

        // CONTACT
        contact_title: "Hubungi Kami",
        contact_sub:
            "Jika Anda memiliki pertanyaan, saran, atau kendala terkait Akurasi Pupuk, silakan hubungi kami.",

        // DOWNLOAD
        download_title: "Download Sekarang",
        btn_download2: "Download di Play Store"
    },

    en: {
        lnk_about: "About",
        lnk_features: "Features",
        lnk_contact: "Contact",
        lnk_download: "Download",

        hero_title: "Akurasi Pupuk",
        hero_sub: "Calculate fertilizer nutrients accurately, quickly, and efficiently.",
        btn_download: "Download on Play Store",

        about_title: "About the App",
        about_desc:
            "Akurasi Pupuk helps farmers calculate fertilizer nutrients with high precision to improve plant productivity.",

        features_title: "Key Features",
        f1_title: "Manual Calculation",
        f1_desc: "Calculate mixed fertilizer nutrients manually.",
        f2_title: "Automatic Calculation",
        f2_desc: "Includes 130+ fertilizer data with nutrient info.",
        f3_title: "PPM Calculator",
        f3_desc: "Calculate solution concentration from mass & volume.",
        f4_title: "PPM Dilution",
        f4_desc: "Calculate initial/final concentration & volume.",
        f5_title: "Multi Dilution",
        f5_desc: "Combine several solutions to get final PPM.",

        contact_title: "Contact Us",
        contact_sub:
            "If you have any questions, suggestions, or issues related to Akurasi Pupuk, feel free to reach us.",

        download_title: "Download Now",
        btn_download2: "Download on Play Store"
    }
};

/* -------------------------------
   APPLY LANGUAGE
--------------------------------- */
function applyLanguage(lang = "id") {
    document.querySelectorAll("[data-text]").forEach((el) => {
        const key = el.getAttribute("data-text");
        if (langData[lang][key]) {
            el.textContent = langData[lang][key];
        }
    });

    // Save preference
    localStorage.setItem("lang", lang);
}

/* -------------------------------
   DARK MODE
--------------------------------- */
function applyDarkMode(state) {
    if (state) {
        document.body.classList.add("dark");
        toggleDark.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        toggleDark.textContent = "🌙";
    }

    localStorage.setItem("darkMode", state ? "on" : "off");
}

/* -------------------------------
   EVENT: DARK MODE BUTTON
--------------------------------- */
toggleDark.addEventListener("click", () => {
    const current = document.body.classList.contains("dark");
    applyDarkMode(!current);
});

/* -------------------------------
   EVENT: LANGUAGE SELECT
--------------------------------- */
langSelect.addEventListener("change", () => {
    applyLanguage(langSelect.value);
});

/* -------------------------------
   SMOOTH SCROLL
--------------------------------- */
document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* -------------------------------
   NAVBAR SHADOW ON SCROLL
--------------------------------- */
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
    } else {
        nav.style.boxShadow = "none";
    }
});

/* -------------------------------
   INITIALIZATION
--------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
    // Load saved language
    const savedLang = localStorage.getItem("lang") || "id";
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    // Load dark mode preference
    const savedDark = localStorage.getItem("darkMode");
    applyDarkMode(savedDark === "on");
});

/* ===============================
   END OF SCRIPT
=============================== */
