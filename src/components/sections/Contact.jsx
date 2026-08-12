"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });
  const [isNetlify, setIsNetlify] = useState(false);

  useEffect(() => {
    setIsNetlify(typeof window !== "undefined" && window.netlifyIdentity);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    if (isNetlify) {
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...formData }),
        });
        setStatus({ loading: false, success: "Pesan berhasil dikirim. Terimakasih telah menghubungi saya...", error: "" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch {
        setStatus({ loading: false, success: "", error: "Terjadi kesalahan. Silakan coba lagi." });
      }
    } else {
      const mailtoLink = `mailto:imtiyaznajih8@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus({ loading: false, success: "Membuka email client... Silakan kirim pesan dari email Anda.", error: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const contactInfo = [
    { icon: Mail, text: "imtiyaznajih8@gmail.com", href: "mailto:imtiyaznajih8@gmail.com", gradient: "from-blue-500 to-cyan-500" },
    { icon: Phone, text: "+62 821-4798-9872", href: "tel:+6282147989872", gradient: "from-green-500 to-emerald-500" },
    { icon: MapPin, text: "Semarang, Gajah Mungkur", href: "https://maps.app.goo.gl/4UpgLThHRvvtVHNH9", gradient: "from-violet-500 to-pink-500", external: true },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-900/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Get In Touch" subtitle="Siap berdiskusi dan berkolaborasi dengan Anda" centered={true} className="mb-16" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Let's Connect
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                Hubungi saya untuk kebutuhan layanan digital, akademik, maupun kerja sama profesional. Saya terbuka untuk peluang freelance, magang, maupun kolaborasi project.
              </motion.p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, text, href, gradient, external }, index) => (
                  <motion.a
                    key={text}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {text}
                    </span>
                    {external && <ExternalLink className="w-5 h-5 text-gray-400 ml-auto" />}
                  </motion.a>
                ))}
              </div>

              {!isNetlify && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200/50 dark:border-primary-800/50 rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-primary-800 dark:text-primary-300">
                      <p className="font-medium mb-1">Mode Pengembangan Lokal</p>
                      <p>Form ini akan membuka email client default Anda saat dikirim. Fitur pengiriman otomatis hanya aktif saat di-deploy ke Netlify.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden" aria-hidden="true"><label>Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

                  <motion.div whileHover={{ x: 2, transition: { duration: 0.2 } }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Nama Anda</label>
                    <input type="text" name="name" required placeholder="Nama Anda" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" />
                  </motion.div>

                  <motion.div whileHover={{ x: 2, transition: { duration: 0.2 } }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Aktif</label>
                    <input type="email" name="email" required placeholder="Email aktif" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" />
                  </motion.div>

                  <motion.div whileHover={{ x: 2, transition: { duration: 0.2 } }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subjek Pesan</label>
                    <input type="text" name="subject" required placeholder="Subjek pesan" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" />
                  </motion.div>

                  <motion.div whileHover={{ x: 2, transition: { duration: 0.2 } }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Pesan Anda</label>
                    <textarea name="message" rows="5" required placeholder="Tuliskan pesan Anda..." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none" />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-violet-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.loading ? "Mengirim..." : "Kirim Pesan"}
                    <Send size={18} />
                  </motion.button>

                  {status.success && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 dark:text-green-400 text-center font-medium animate-fade-in">
                      {status.success}
                    </motion.p>
                  )}
                  {status.error && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-600 dark:text-red-400 text-center font-medium animate-fade-in">
                      {status.error}
                    </motion.p>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;