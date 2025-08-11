
export const About = () => {
  const stats = [
    { value: "200+", label: "Students Mentored" },
    { value: "50+", label: "Medical Student Mentors" },
    { value: "100%", label: "Free Access" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About The <span className="text-[#007AFF]">MedLink</span> Project
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to make medical school mentorship accessible to all
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              The MedLink Project was founded with a single goal in mind: to break down barriers and provide accessible, meaningful mentorship for aspiring medical students. As medical students ourselves, we understand how overwhelming the journey to medical school can be.
            </p>
            <p className="mb-6">
              From navigating applications to preparing for interviews, the process is not only complex but also costly. Many existing mentorship programs come with steep price tags, putting them out of reach for students who could benefit from them the most.
            </p>
            <p>
              That's why we created The MedLink Project—to address these gaps and create a supportive community for students. We designed the program with accessibility and inclusivity at its core.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <div className="space-y-6">
              {[
                { title: "Accessibility", description: "Making mentorship available to everyone, regardless of background" },
                { title: "Excellence", description: "Committed to providing high-quality guidance and support" },
                { title: "Innovation", description: "Continuously improving our program to better serve students" },
                { title: "Community", description: "Building a supportive network of mentors and mentees" }
              ].map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#007AFF] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 bg-white rounded-2xl shadow-lg p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#007AFF]">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
