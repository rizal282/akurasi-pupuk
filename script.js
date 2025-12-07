// =========================
// DARK MODE
// =========================
const darkBtn = document.getElementById("darkmode-btn");

if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
}

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
});

// =========================
// MULTI LANGUAGE
// =========================
const langBtn = document.getElementById("lang-btn");
let currentLang = localStorage.getItem("lang") || "id";

const trans = {
    hero_title: { id: "Akurasi Pupuk", en: "Akurasi Pupuk" },
    hero_sub: {
        id: "Perhitungan nutrisi tanaman yang lebih akurat, cepat, dan praktis.",
        en: "More accurate, faster, and easier plant nutrient calculations."
    },
    btn_download: { id: "Download di Play Store", en: "Download on Play Store" },

    about_title: { id: "Tentang Aplikasi", en: "About the App" },
    about_text: {
        id: "Akurasi Pupuk membantu petani modern, penghobi hidroponik, dan praktisi pertanian menghitung nutrisi tanaman secara cepat dan presisi.",
        en: "Akurasi Pupuk helps modern farmers and hydroponics growers calculate nutrient values quickly and accurately."
    },

    feature_title: { id: "Fitur Utama", en: "Main Features" },

    f1_title: { id: "1. Perhitungan Manual Kadar Unsur", en: "1. Manual Nutrient Calculation" },
    f1_text: {
        id: "Masukkan nama pupuk, berat, dan kadar unsur. Aplikasi menghitung kadar unsur total setelah dicampur.",
        en: "Enter fertilizer name, weight, and nutrient value. The app calculates total nutrients after mixing."
    },

    f2_title: { id: "2. Perhitungan Otomatis 130+ Data Pupuk", en: "2. Automatic Calculation with 130+ Fertilizers" },
    f2_text: {
        id: "Pilih pupuk dari database bawaan dan dapatkan hasil perhitungan secara instan.",
        en: "Choose a fertilizer from the database and get results instantly."
    },

    f3_title: { id: "3. Perhitungan PPM Lengkap", en: "3. Complete PPM Calculator" },
    f3_text: {
        id: "Hitung konsentrasi larutan, massa pupuk, atau volume air berdasarkan nilai PPM.",
        en: "Calculate solution concentration, mass, or water volume based on PPM."
    },

    f4_title: { id: "4. Pengenceran PPM", en: "4. PPM Dilution" },
    f4_text: {
        id: "Hitung konsentrasi awal, akhir, volume awal, atau volume akhir dengan cepat.",
        en: "Quickly calculate initial or final concentration and volume."
    },

    f5_title: { id: "5. Multi Pengenceran PPM", en: "5. Multi PPM Dilution" },
    f5_text: {
        id: "Campur beberapa larutan dan dapatkan nilai PPM akhir secara otomatis.",
        en: "Mix several solutions and get the final PPM automatically."
    },

    dl_title: { id: "Download Sekarang", en: "Download Now" },
    dl_text: { id: "Optimalkan perhitungan nutrisi tanaman Anda.", en: "Optimize your nutrient calculations." },

    privacy: { id: "Kebijakan Privasi", en: "Privacy Policy" }
};

function applyLang() {
    document.querySelectorAll("[data-lang-id]").forEach(el => {
        const key = el.getAttribute("data-lang-id");
        el.innerText = trans[key][currentLang];
    });

    langBtn.innerText = currentLang === "id" ? "EN" : "ID";
}

applyLang();

// Button toggle language
langBtn.addEventListener("click", () => {
    currentLang = currentLang === "id" ? "en" : "id";
    localStorage.setItem("lang", currentLang);
    applyLang();
});
