// About Me section with personal introduction
import { Code2, Sparkles, BookOpen } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Developer",
      description: "Fokus pada Laravel, REST API, dan sistem berbasis server",
    },
    {
      icon: BookOpen,
      title: "Mahasiswa Semester 5",
      description: "Universitas Ivet Semarang – Progres belajar konsisten",
    },
    {
      icon: Sparkles,
      title: "Try & Error Mindset",
      description: "Suka eksplor hal baru dan bereksperimen sampai berhasil",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="A small story about who I am"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="public/images/about-photo.jpg
"
              alt="Ahmad Imtiyaz – backend developer working on laptop"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">Laravel</p>
              <p className="text-sm">Backend Focused</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <strong>Ahmad Imtiyaz Najih</strong>, a backend developer who
              focuses on clean, efficient, and scalable systems — especially
              using <strong>Laravel</strong>. Saat ini aku masih berkuliah di
              <strong> Universitas Ivet Semarang semester 5</strong>, dan aktif
              mengembangkan berbagai proyek web sebagai latihan dan pengembangan
              skill profesional.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Aku suka memecahkan masalah dengan pendekatan
              <strong> try & error</strong>. Kalau ada hal baru, aku pasti
              pengen nyoba. Mindset ini membuatku cepat beradaptasi dengan
              teknologi baru, entah itu di backend, full-stack, atau
              pengembangan fitur tertentu.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Saat ini aku sering membangun aplikasi berbasis{" "}
              <strong>Laravel + MySQL</strong>, membuat API, mengatur
              autentikasi, dashboard admin, dan sistem CRUD kompleks. Aku juga
              terus belajar front-end agar bisa menjadi{" "}
              <strong>full-stack yang solid</strong>.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {highlights.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="p-6 text-center">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
