import { useState, useEffect } from "react";

export default function Awriter() {
  const texts = [
    "Frontend Developer",
    "Digital marketer",
    " Ads Specialist",
    "SEO Experts",
    "Leads Generation",
    "Email Marketing",
    "Web Design & Development",
    "Graphics Design"
  ];

  const [index, setIndex] = useState(0); // Keeps track of the current text
  const [currentText, setCurrentText] = useState(""); // Holds the current typed text
  const [isDeleting, setIsDeleting] = useState(false); // To control deleting state
  useEffect(() => {
    let typingSpeed = isDeleting ? 70 : 70; // Faster typing when adding, slower when deleting

    const interval = setInterval(() => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1)); // Remove one letter
      } else {
        setCurrentText((prev) => texts[index].slice(0, prev.length + 1)); // Add one letter
      }

      if (!isDeleting && currentText === texts[index]) {
        // If text is fully typed, start deleting after a delay
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && currentText === "") {
        // If text is fully deleted, move to the next text
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length); // Move to the next index
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentText, isDeleting, index, texts]);

  return (
    <div className="text-2xl font-semibold pb-5">
      <p
        className="transition-opacity duration-500 "
      >
        {currentText}
      </p>
   </div>
   );
}
