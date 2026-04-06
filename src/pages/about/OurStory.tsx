import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />

      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Editorial Hero */}
          <header className="text-center mb-16 pt-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight font-display">
              The <span className="text-[#007AFF]">MedLink</span> Story
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-100 via-[#007AFF] to-blue-100 mx-auto rounded-full mb-10"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              MedLink began with a simple belief: aspiring doctors deserve accessible, meaningful mentorship - not a paywall.
            </p>
          </header>

          <figure className="w-full relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img 
              src="/images/Hallway Img.png" 
              alt="Medical students supporting each other"
              className="w-full h-full object-cover object-center"
            />
          </figure>

          {/* Body Content */}
          <div className="prose prose-xl md:prose-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-serif">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 font-sans tracking-tight">
              The question that started it all
            </h2>
            <p>
              In first year of medical school, I started getting messages from other undergrads - classmates, friends of friends, students a year behind me, asking how to navigate the path ahead. They weren't asking for secrets. They were asking for clarity.
            </p>
            
            <blockquote className="my-12 px-8 py-6 border-l-4 border-[#007AFF] bg-gray-50 rounded-r-3xl italic text-2xl text-gray-900 font-medium">
              "What courses should I take? How do I choose experiences? What do you wish you knew earlier?"
            </blockquote>
            
            <p>
              The questions were familiar because they were the same ones I had once asked, often quietly, often unsure of who to turn to.
            </p>
            <p>
              Then something happened that stopped me in my tracks: people started offering me money.
            </p>
            <p>
              At first, I genuinely didn't understand it. Why were people trying to pay for what felt like simple advice - conversations I would've had anyway? I wasn't an expert. I was just a student who had taken a few steps down the road they were standing at the beginning of.
            </p>
            <p>
              But the more it happened, the clearer the truth became: this wasn't just "help." It was a market.
            </p>

            <div className="w-full h-px bg-gray-200 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-sans tracking-tight">
              The market we didn't want to build
            </h2>
            <p>
              Medical and pre-med pathways are complicated by design: timelines, prerequisites, testing, extracurricular expectations, personal statements, interviews, and constant uncertainty about what "counts." That complexity creates demand, especially among students who don't have doctors in the family, who don't know the unwritten rules, or who are navigating everything for the first time.
            </p>
            <p>
              And where there's demand, there's inevitably supply, often for profit.
            </p>
            <p>
              Admissions consulting has expanded into a visible industry, offering application editing, interview coaching, and packaged "guidance," sometimes at rates that can quickly reach hundreds, with stories of students spending thousands of dollars. This raises uncomfortable questions about what this industry does to equity.
            </p>

            <div className="bg-[#007AFF]/5 rounded-3xl p-8 md:p-12 my-16">
              <p className="text-2xl font-bold text-gray-900 leading-snug">
                If the way forward depends on access to expensive advice, then the path isn't just competitive - it's unequal before it even begins. I didn't want to contribute to that.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-sans tracking-tight">
              A peer-to-peer experiment
            </h2>
            <p>
              So instead of accepting money, I reached out to a few medical student friends - students who, like me, still clearly remembered what it felt like to start from uncertainty.
            </p>
            <p>
              We launched what would become the MedLink Project as a small, informal pilot - connecting Queen's Health Sciences students with medical student peer mentors to see just how much interest there truly was.
            </p>
            <p>
              What we found was immediate and overwhelming.
            </p>
            <p>
              We began with something simple and intentional: honest conversations, shared experiences, and a commitment to offering guidance the way we wished we had received it - without gatekeeping, and without a price tag.
            </p>
            <p>
              The response was far greater than we anticipated. Within a short time, it became clear that our small team of five could not meet the demand. Students weren't just looking for advice... they were looking for connection.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical community support"
              className="w-full h-[300px] object-cover rounded-3xl my-12 shadow-lg"
            />

            <p>
              As we brought on more mentors, we expanded beyond Queen's. What started as a focused pilot quickly evolved into a mentorship network reaching students across Canada.
            </p>

            <p className="font-bold text-3xl font-sans text-gray-900 mt-16 mb-4">
              If we don't support one another, who will support us?
            </p>
            <p>
              Medlink's early days were informal. But over time, it evolved into an organized mentorship initiative with a clear purpose: support aspiring medical students through guidance that is accessible and free.
            </p>
            <p>
              Our community has now grown to over 300 mentees. That number matters, not as a headline, but because each "mentee" is a person who asked for help instead of giving up in silence.
            </p>

          </div>

          <div className="pt-20 pb-10 flex flex-col sm:flex-row items-center gap-8 justify-center border-t border-gray-100 mt-20">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 shadow-inner">
              <img src="/lovable-uploads/f572a4c6-8aa5-4252-9310-71e2e36e6781.png" alt="Ervis Musa" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-gray-900 text-xl font-sans">Ervis Musa <span className="font-normal text-gray-500 text-lg">(he/him)</span></p>
              <p className="text-gray-600 font-sans mt-1">Founder of MedLink Project</p>
              <p className="text-gray-500 font-sans text-sm mt-1">University of Ottawa MD2027</p>
            </div>
          </div>

          {/* An ask from our community */}
          <div className="bg-[#007AFF] text-white rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Become a Mentor</h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-xl leading-relaxed">
                Change someone's trajectory with a conversation that costs you an hour, but saves them months of confusion.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/services/mentors"
                className="inline-flex items-center justify-center bg-white text-[#007AFF] px-8 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                Sign Up Today
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
