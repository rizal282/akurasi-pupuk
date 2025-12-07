// ================= DARK MODE =================
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ================= MULTI LANGUAGE =================
const langData = {
    id: {
        lnk_about: "Tentang",
        lnk_features: "Fitur",
        lnk_download: "Download",

        hero_title: "Akurasi Pupuk",
        hero_sub: "Perhitungan nutrisi tanaman lebih akurat, cepat, dan modern.",

        about_title: "Tentang Aplikasi",
        about_desc: "Aplikasi Akurasi Pupuk membantu petani menghitung nutrisi pupuk dengan presisi tinggi untuk meningkatkan produktivitas tanaman.",

        features_title: "Fitur Unggulan",
        f1_title: "Hitung Manual",
        f1_desc: "Hitung kadar nutrisi pupuk campuran berdasarkan input manual.",

        f2_title: "Hitung Otomatis",
        f2_desc: "Tersedia 130+ daftar pupuk lengkap dengan unsur hara.",

        f3_title: "Hitung PPM",
        f3_desc: "Cari konsentrasi larutan, massa pupuk, atau volume air.",

        f4_title: "Pengenceran PPM",
        f4_desc: "Hitung konsentrasi awal, akhir, volume awal, dan volume akhir.",

        f5_title: "Multi Pengenceran PPM",
        f5_desc: "Gabungkan beberapa larutan untuk mencari PPM akhir.",

        download_title: "Download Sekarang",
        btn_download: "Download di Play Store",
        btn_download2: "Download di Play Store",
    },

    en: {
        lnk_about: "About",
        lnk_features: "Features",
        lnk_download: "Download",

        hero_title: "Akurasi Pupuk",
        hero_sub: "More accurate and faster plant nutrient calculations.",

        about_title: "About the App",
        about_desc: "Akurasi Pupuk helps farmers calculate fertilizer nutrients with high precision for improved plant productivity.",

        features_title: "Key Features",
        f1_title: "Manual Calculation",
        f1_desc: "Calculate fertilizer nutrient content manually.",

        f2_title: "Automatic Calculation",
        f2_desc: "Includes 130+ fertilizer data with nutrient values.",

        f3_title: "PPM Calculation",
        f3_desc: "Find solution concentration, fertilizer mass, or water volume.",

        f4_title: "PPM Dilution",
        f4_desc: "Calculate initial/final concentrations and volumes.",

        f5_title: "Multi Dilution",
        f5_desc: "Combine several solutions to get final PPM.",

        download_title: "Download Now",
        btn_download: "Download on Play Store",
        btn_download2: "Download on Play Store",
    }
};

document.getElementById("langSelect").addEventListener("change", function () {
    const lang = this.value;
    document.querySelectorAll("[data-text]").forEach(el => {
        el.textContent = langData[lang][el.dataset.text];
    });
});
