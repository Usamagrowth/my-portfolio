import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS once
export default function Sprogress() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // List of services
  const services = [
    { name: "Digital Marketing", target: 90 },
    { name: "Frontend Developer", target: 85 },
    { name: "SEO Optimization", target: 85 },
    { name: "Leads Generations", target: 80 },
    { name: "Web Design & Development", target: 75 },
    { name: "Graphics Design", target: 70 },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 py-6 ">
      {services.map((service, i) => (
        <ServiceItem key={i} name={service.name} target={service.target} />
      ))}
    </div>
  );
}

// Individual service component
function ServiceItem({ name, target }) {
  const [percentage, setPercentage] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let counter = setInterval(() => {
            setPercentage((prev) => {
              if (prev < target) return prev + 1;
              clearInterval(counter); // stop counter once it reaches the target
              return prev;
            });
          }, 30); // speed of the progress
        }
      },
      { threshold: 0.5 } // trigger when 50% of element is in the viewport
    );

    // Ensure the observer is attached when the component mounts
    if (ref.current) observer.observe(ref.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]); // Dependency array ensures it re-runs if target changes

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-2xl font-semibold mb-2">{percentage}%</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-[#004600] h-4 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
