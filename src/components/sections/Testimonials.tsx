import { useEffect, useRef } from "react";

const testimonials = [
  "I genuinely didn't know where to start with the whole medical school process. Having someone just a few steps ahead of me made everything feel so much more manageable.",
  "As a first-generation student, I didn't have anyone in my life who understood this path. My mentor helped me feel less intimidated.",
  "I used to feel like everyone else had some secret roadmap. Ervis taught me most people are figuring it out as they go, and gave me real steps I can take to figuring out my path.",
  "I was overwhelmed trying to balance grades, extracurriculars, and just life in general. Talking to someone who had actually been through it helped me prioritize me.",
  "This experience made medicine feel accessible. Now actually it feels like something I can actually work toward.",
  "My mentor was very nice and honest. This is a great program.",
  "I was always comparing myself to others and feeling behind. Ervis helped me prioritize things that matter to me!!!!!!",
  "Coming from a smaller university who graduated 15 years ago, I feel like I didn't have the same exposure as others. This program helped me understand what the application process looks like from someone who was successful going through it.",
  "I didn't realize how much stress I was carrying. I had such a good experience with my mentor, I recommend them to everybody!",
  "I had so many questions I felt embarrassed to ask at big pre-med events. This gave me a space where I could ask anything.",
  "The MedLink connected me with someone of a similar situation as me, and it was very helpful.",
  "This mentorship helped me rebuild my confidence.",
  "I was really lost before being connected with a medical student. I don't have anybody to shadow and I just wanted to know what being a medical student is like.",
  "I was surprised this program was even real. I didn't expect to get connected with a mentor. I was so surprised it was actually free, especially when a lot of others charge for this type of thing.",
  "Knowing that even medical students once felt just as lost as I do now was very reassuring.",
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (container.scrollWidth > 0 && scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(scroll); };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-4">
          Customer <span className="text-[#007AFF]">testimonials</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Discover the experiences of those who have trusted us with their path to medicine. Real testimonials from our satisfied mentees.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-8 px-4"
        style={{ scrollBehavior: "auto" }}
      >
        {doubled.map((text, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[350px] bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col hover:border-blue-100 transition-colors"
          >
            <p className="text-[15px] text-gray-600 leading-relaxed flex-1 mb-6">
              "{text}"
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-[#007AFF] flex justify-center items-center font-bold text-sm">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">MedLink Mentee</span>
                <span className="text-xs text-gray-400">Student</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
