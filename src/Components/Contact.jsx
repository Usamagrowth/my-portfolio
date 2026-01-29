import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeCont } from "../contexts/ThemeContext";
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { colors } = ThemeCont();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  useEffect(() => {
    emailjs.init("rl5-5EWhF22Km5XjP");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_ifz1z0m", "template_rolt4xk", form.current, "rl5-5EWhF22Km5XjP")
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setFullName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
        },
        (error) => {
          console.error("❌ Failed:", error);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>GET IN TOUCH</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: colors.text }}>
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Ready to Transform Your Digital Experience?
              </h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: colors.text }}>
                Let's craft a website and marketing strategy that elevates your brand. Book a free consultation today.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: colors.secondary }}>
                  <Mail className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: colors.text }}>Email</p>
                  <p style={{ color: colors.text }}>usamagrowthsolutions@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: colors.secondary }}>
                  <Phone className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: colors.text }}>Phone</p>
                  <p style={{ color: colors.text }}>+234-906-654-1057</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: colors.secondary }}>
                  <MapPin className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: colors.text }}>Location</p>
                  <p style={{ color: colors.text }}>Ibadan, Nigeria & Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
            {/* Success message */}
            {success && (
              <div className="absolute top-4 left-4 right-4 z-20 bg-green-100 border border-green-200 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-6 right-6 opacity-10">
              <MessageSquare className="w-12 h-12 text-emerald-400" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-10">
              <Send className="w-10 h-10 text-green-500" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="text-sm font-semibold mb-2 text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    name="full_name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-4 pl-12 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all duration-200 bg-gray-50 hover:bg-white"
                    style={{
                      borderColor: colors.border,
                      color: colors.input
                    }}
                  />
                  <User className="absolute left-4 top-12 w-5 h-5 text-gray-400" />
                </div>

                <div className="relative">
                  <label className="text-sm font-semibold mb-2 text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 pl-12 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all duration-200 bg-gray-50 hover:bg-white"
                    style={{
                      borderColor: colors.border,
                      color: colors.input
                    }}
                  />
                  <Mail className="absolute left-4 top-12 w-5 h-5 text-gray-400" />
                </div>

                <div className="relative">
                  <label className="text-sm font-semibold mb-2 text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                    className="w-full px-4 py-4 pl-12 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition-all duration-200 resize-none bg-gray-50 hover:bg-white"
                    style={{
                      borderColor: colors.border,
                      color: colors.input
                    }}
                  />
                  <MessageSquare className="absolute left-4 top-12 w-5 h-5 text-gray-400" />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
