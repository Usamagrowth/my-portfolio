import { ThemeCont } from "../contexts/ThemeContext"
import { Star, Quote } from "lucide-react"
import stephen from "../assets/stephen.png"
import dana from "../assets/Dana.jpg"
import bianca from "../assets/bianca.png"

const Reviews = () => {
  const { colors } = ThemeCont();

  const reviews = [
    {
      profile: dana,
      userName: "Diana",
      message: "Usama growth solutions is definitely a company of knowledge, professionalism and kindness. Make sure you reach out to this company for your business needs. Websites, social media, flyers etc. I'll be back for more services. Thank you Usama Growth Solutions.",
      industry: "Finance Industry",
      rating: 5
    },
    {
      profile: stephen,
      userName: "Stephen Browing",
      message: "Yes he did a great work, each and everyone seeing this text or message of him Thanks so much.",
      industry: "Insurance Industry",
      rating: 5
    },
    {
      profile: bianca,
      userName: "Bianca Shanise",
      message: "Yes I appreciate the services provided.. very nice and friendly. Very communicative with me and what I needed done. Thanks so much.",
      industry: "Tax Industry",
      rating: 5
    }
  ];

  return (
    <div className="py-20 px-6" style={{ backgroundColor: colors.cardBg }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: colors.accent }}>TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: colors.text }}>
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12" style={{ color: colors.secondary }} />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-emerald-400" />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.message}"
              </p>

              {/* User info */}
              <div className="flex items-center gap-4">
                <img
                  src={review.profile}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: colors.secondary }}
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {review.userName}
                  </h4>
                  <p className="text-sm text-emerald-600">
                    {review.industry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews