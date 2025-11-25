import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_ifz1z0m", "template_rolt4xk", form.current, "rl5-5EWhF22Km5XjP")
      .then(
        () => {
          setLoading(false);
          alert("✅ Message sent successfully! Kindly check your email.");
          setFullName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error("❌ Failed:", error);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="px-10 pb-16 scroll-mt-36 ">
      <p className="flex pb-3 text-[#004600]">_Contact Us_</p>
      <div>
        <h3 className="text-2xl pb-3 font-bold">Get In Touch</h3>
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
          <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] px-3">
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="outline-none w-full placeholder-black"
              type="text"
              placeholder="Full Name"
              name="fullname"
              required
            />
          </div>

          <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] px-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none w-full placeholder-black"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] px-3">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="outline-none w-full placeholder-black"
              type="text"
              placeholder="Subject"
              name="subject"
            />
          </div>

          <div className="border border-[#004600] rounded-lg md:w-[600px] h-[100px] px-3 resize-none">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none w-full placeholder-black"
              placeholder="Message"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#004600] hover:text-gray-400 rounded-[40px] text-white py-1 px-3"
          >
            {loading ? "Sending..." : "Get Started Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
