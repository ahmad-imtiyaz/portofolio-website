import { Instagram, Globe, Mail, MessageCircle } from "lucide-react";
import BackToTop from "../common/BackToTop";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Layanan Profesional
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Solusi Website, Aplikasi & Tugas Kuliah Terpercaya
          </p>
        </div>

        {/* Main Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Personal Card */}
          <div
            className="group relative h-[360px] rounded-2xl shadow-xl overflow-hidden 
transform transition duration-300 hover:scale-105 md:col-span-1"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/services/personal.jpg')" }}
            />

            {/* Dark Overlay (default invisible) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content (slide up on hover) */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 text-center text-white
    translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-1">Yazna</h3>
              <p className="font-medium text-blue-300 mb-2">
                Backend Developer (PHP & Laravel)
              </p>
              <p className="text-sm text-gray-200">
                Member Junior di Sobat Deadline
              </p>
            </div>
          </div>

          {/* Sobat Deadline Card */}
          <div
            className="group relative h-[360px] md:h-[360px] rounded-2xl shadow-xl overflow-hidden
transform transition duration-300 hover:scale-105 md:col-span-2"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/services/sobat-deadline.png')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div
              className="absolute bottom-0 left-0 right-0 p-8 text-center text-white
    translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 className="text-3xl font-bold mb-2">Jasa Profesional</h3>
              <p className="font-medium text-green-300 mb-3">
                Website • Aplikasi • Tugas Kuliah
              </p>
              <p className="text-sm text-gray-200 max-w-xl mx-auto">
                Platform terpercaya untuk semua kebutuhan digital Anda
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Tentang Sobat Deadline
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Solusi digital profesional untuk pengembangan website, aplikasi, dan
            pendampingan akademik berbasis teknologi.
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Sobat Deadline adalah platform layanan digital yang berfokus pada
              pengembangan solusi berbasis teknologi modern. Kami membantu
              individu, UMKM, dan pelajar dalam mewujudkan kebutuhan digital
              secara efektif, terstruktur, dan tepat waktu.
            </p>

            {/* Services */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
                <img
                  src="/services/web.png"
                  alt="Web Development"
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Web Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Landing page, company profile, sistem informasi, dan web
                  application sesuai kebutuhan.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
                <img
                  src="/services/mobile.png"
                  alt="Mobile Application"
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Mobile Application
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aplikasi Android, iOS, dan cross-platform dengan performa
                  optimal.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
                <img
                  src="/services/academic.png"
                  alt="Academic Writing & Research Assistance"
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Academic Writing & Research Assistance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pendampingan penulisan jurnal, skripsi, dan tugas tugas
                  kuliah, analisis data, serta penyusunan dokumen ilmiah.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Kami berpengalaman dalam membangun solusi digital yang
              terstruktur, berorientasi pada kebutuhan pengguna, serta dirancang
              agar mudah dikembangkan dan dipelihara dalam jangka panjang.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
              <p className="text-2xl font-bold mb-2">Konsultasi Project Anda</p>
              <p className="mb-6 text-white/90">
                Diskusikan kebutuhan digital Anda bersama tim kami — tanpa
                biaya.
              </p>
              <a
                href="https://wa.me/6282147989872?text=Halo,%20saya%20ingin%20konsultasi%20Jasa%20Joki%20Ini"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Follow Sobat Deadline
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Ikuti media sosial kami untuk update layanan dan promo menarik
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.instagram.com/sobatdeadline.ti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@sobatdeadline.ti?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12.75 2h2.02c.27 1.55 1.07 2.88 2.28 3.76.93.68 2.05 1.08 3.2 1.15v2.03c-1.34-.04-2.65-.43-3.78-1.12-.44-.27-.86-.58-1.25-.93v6.58c0 3.36-2.72 6.08-6.08 6.08s-6.08-2.72-6.08-6.08 2.72-6.08 6.08-6.08c.45 0 .89.05 1.32.15v2.19a3.89 3.89 0 0 0-1.32-.23 3.88 3.88 0 1 0 3.88 3.88V2z" />
              </svg>
              <span>TikTok</span>
            </a>

            <a
              href="https://www.facebook.com/share/1DSK4wv2YA/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H8.1V12h2.4V9.8c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.16 0-1.52.72-1.52 1.46V12h2.6l-.42 2.91h-2.18v7.04A10 10 0 0 0 22 12z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
