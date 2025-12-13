import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔑 Encode data for Netlify
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      setStatus({
        loading: false,
        success: "Pesan berhasil dikirim. Kami akan menghubungi Anda segera.",
        error: "",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Terjadi kesalahan. Silakan coba lagi.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "sobat.deadline@gmail.com",
      href: "mailto:sobat.deadline@gmail.com",
    },
    {
      icon: Phone,
      text: "+62 821-4798-9872",
      href: "tel:+6282147989872",
    },
    {
      icon: MapPin,
      text: "Semarang, Gajah Mungkur",
      href: "https://maps.app.goo.gl/4UpgLThHRvvtVHNH9",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Siap berdiskusi dan berkolaborasi dengan Anda"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Hubungi kami untuk kebutuhan layanan digital, akademik, maupun
              kerja sama profesional.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-lg">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify Required */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Name */}
              <input
                type="text"
                name="name"
                required
                placeholder="Nama Anda"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                required
                placeholder="Email aktif"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                required
                placeholder="Subjek pesan"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border"
              />

              {/* Message */}
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tuliskan pesan Anda..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50"
              >
                {status.loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {/* Status */}
              {status.success && (
                <p className="text-green-600 text-center font-medium">
                  {status.success}
                </p>
              )}
              {status.error && (
                <p className="text-red-600 text-center font-medium">
                  {status.error}
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
