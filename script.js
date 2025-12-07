// DARK MODE
const body = document.body;
const darkToggle = document.getElementById("darkToggle");

darkToggle.onclick = () => {
    body.classList.toggle("dark");
    darkToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
};

// MULTI LANGUAGE
const langSelect = document.getElementById("langSelect");

const text = {
    id: {
        nav_about: "Tentang",
        nav_features: "Fitur",
        nav_download: "Download",

        hero_title: "Akurasi Pupuk",
        hero_sub: "Perhitungan nutrisi tanaman yang lebih akurat, cepat, dan praktis.",
        btn_download: "Download di Play Store",

        about_title: "Tentang Aplikasi",
        about_desc: "Akurasi Pupuk membantu petani modern dan praktisi pertanian menghitung nutrisi tanaman secara cepat dan presisi.",

        feature_title: "Fitur Utama",
        f1_title: "Perhitungan Manual Kadar Unsur",
        f1_desc: "Masukkan nama pupuk, berat, dan kadar unsur untuk mendapatkan total hasil campuran.",
        f2_title: "Perhitungan Otomatis 130+ Pupuk",
        f2_desc: "Gunakan database pupuk bawaan untuk perhitungan cepat tanpa input manual.",
        f3_title: "Perhitungan PPM Lengkap",
        f3_desc: "Hitung konsentrasi larutan, massa pupuk, atau volume air berdasarkan PPM.",
        f4_title: "Pengenceran PPM",
        f4_desc: "Hitung konsentrasi awal, akhir, volume awal, atau volume akhir.",
        f5_title: "Multi Pengenceran",
        f5_desc: "Gabungkan beberapa larutan dan dapatkan nilai PPM akhir otomatis.",

        dl_title: "Download Sekarang",
        dl_sub: "Optimalkan perhitungan nutrisi tanaman Anda."
    },

    en: {
        nav_about: "About",
        nav_features: "Features",
        nav_download: "Download",

        hero_title: "Akurasi Pupuk",
        hero_sub: "Accurate, fast and practical plant nutrient calculations.",
        btn_download: "Download on Play Store",

        about_title: "About the App",
        about_desc: "Akurasi Pupuk helps modern farmers and growers calculate nutrient solutions quickly and precisely.",

        feature_title: "Main Features",
        f1_title: "Manual Nutrient Calculation",
        f1_desc: "Enter fertilizer name, weight and nutrient content to calculate results after mixing.",
        f2_title: "Automatic Calculation (130+ Fertilizers)",
        f2_desc: "Use built-in fertilizer database for instant calculation.",
        f3_title: "Complete PPM Calculator",
        f3_desc: "Calculate solution concentration, fertilizer mass or water volume based on PPM.",
        f4_title: "PPM Dilution",
        f4_desc: "Calculate initial/target concentration or initial/final volume.",
        f5_title: "Multi Dilution",
        f5_desc: "Mix multiple solutions and get the final PPM automatically.",

        dl_title: "Download Now",
        dl_sub: "Optimize your plant nutrient calculations."
    }
};

langSelect.onchange = () => {
    const lang = langSelect.value;
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = text[lang][el.getAttribute("data-lang")];
    });
};
