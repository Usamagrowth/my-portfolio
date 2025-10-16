
import { EmailJSResponseStatus } from '@emailjs/browser';
import { useRef, useState } from 'react';

    const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    //const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(fullName, email, password, message)
    //navigate("#")

    EmailJSResponseStatus
      .sendForm("service_ifz1z0m", "template_rolt4xk", form.current, {
        publicKey: "rl5-5EWhF22Km5XjP",
      })
      .then(
        () => {
          alert("Message sent Successfully! Kindly check Your Email.");
        },
        (error) => {
          console.log("Failed:", error);
        },
      );
  };

  return (
   <section id="contact" className="px-10 pb-16">
    <p className="flex pb-3 text-[#004600]">__Contact Us__</p>
    <div>
    <h3 className="text-2xl pb-3 font-bold">Get In Touch</h3>
    <form
    ref={form}
    onSubmit={handleSubmit}
    className="space-y-5"
     action="submit">
   <div className=" flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] px-3">
    <input
    value={fullName}
    onChange={(e) => setFullName(e.target.value) }
    className="outline-none w-full placeholder-black "
    type="text" placeholder="Full Name"
    name="fullname" required />
 </div>
  <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] px-3">
    <input
    value={email}
    onChange={(e) => setEmail(e.target.value) }
    className="outline-none w-full  placeholder-black"
    type="email" placeholder="Email" required />
 </div>
 <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] px-3">
    <input
    value={subject}
    onChange={(e) => setSubject(e.target.value) }
    className="outline-none w-full  placeholder-black"
    type="text" placeholder="Subject" />
 </div>
 <div className="border border-[#004600] rounded-lg md:w-[600px] h-[100px] px-3 resize-none">
    <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value) }
    className="outline-none  placeholder-black"
    placeholder="Message" required />
 </div>
 <button type="submit" className="bg-[#004600]  hover:text-gray-400 rounded-[40px] text-white py-1 px-3">Get Started Now</button>
   </form>
   </div>
   </section>
  )
}

export default Contact;