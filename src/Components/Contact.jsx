import { User } from "lucide-react";
import { useState } from "react";

const Contact = () => {
const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(fullName, email, password, message)
      navigate("/")
    }
  return (
   <section id="contact" className="px-20 pb-16">
    <p className="flex pb-3 text-[#004600]">__Contact Us__</p>
    <div>
    <h3 className="text-2xl pb-3 font-bold">Get In Touch</h3>
    <form
    onSubmit={handleSubmit}
    className="space-y-5"
     action="">
   <div className=" flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] pl-3">
    <input
    value={fullName}
    onChange={(e) => setFullName(e.target.value) }
    className="outline-none w-full placeholder-black "
    type="text" placeholder="Full Name"
    name="fullname" required />
 </div>
  <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] pl-3">
    <input
    value={email}
    onChange={(e) => setEmail(e.target.value) }
    className="outline-none w-full  placeholder-black"
    type="email" placeholder="Email" required />
 </div>
 <div className="flex border border-[#004600] rounded-lg md:w-[600px] h-[40px] pl-3">
    <input
    value={subject}
    onChange={(e) => setSubject(e.target.value) }
    className="outline-none w-full  placeholder-black"
    type="email" placeholder="Subject" />
 </div>
 <div className="border border-[#004600] rounded-lg md:w-[600px] h-[100px] pl-3 resize-none">
    <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value) }
    className="outline-none  placeholder-black"
    placeholder="Message" required />
 </div>
 <button className="bg-[#004600] rounded-[40px] text-white py-1 px-2">Get Started Now</button>
   </form>
   </div>
   </section>
  )
}

export default Contact;