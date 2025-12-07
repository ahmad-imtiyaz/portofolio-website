// Contact form with Netlify Forms integration
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

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    setTimeout(() => setStatus(""), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out for collaborations or just a friendly
              hello. I'll get back to you as soon as possible!
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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
              {/* Netlify Hidden Inputs */}
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 
                             dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 
                             focus:border-transparent transition-colors outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 
                             dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 
                             focus:border-transparent transition-colors outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 
                             dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 
                             focus:border-transparent transition-colors outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 
                             dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 
                             focus:border-transparent transition-colors outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
                           transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>

              {/* Status Message */}
              {status && (
                <p className="text-center text-green-600 dark:text-green-400 font-medium">
                  {status}
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
