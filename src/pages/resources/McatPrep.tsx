import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Download } from "lucide-react";

const McatPrep = () => {
  useEffect(() => {
    document.title = "MCAT Prep Guide | MedLink Resources";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'A practical MCAT prep guide from the MedLink Project: study schedules, resource recommendations, and a framework for scoring 518.');
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation />

      <main className="bg-gray-50 pb-20 flex-1">
        {/* Full-width Hero Banner */}
        <header className="relative w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog - braeden.png"
              alt="Laptop studying desk notes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mb-16 md:mb-24">
            <span className="text-blue-200 font-bold text-sm md:text-base uppercase tracking-widest mb-4 block">
              Study Guide
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              MCAT Prep Guide
            </h1>
            <p className="mt-4 text-lg text-gray-200 font-medium">
              Written by Braeden Hill &middot; March 1, 2026
            </p>
          </div>
        </header>

        {/* Content Card Overlapping Hero */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 -mt-12 md:-mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-gray-100">
            
            {/* Breadcrumb Context */}
            <div className="mb-12 border-b border-gray-100 pb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-gray-500 hover:text-[#007AFF]">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/resources" className="text-gray-500 hover:text-[#007AFF]">Resources</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold text-gray-900">MCAT Prep Guide</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed font-serif">
              <p className="text-2xl text-gray-900 font-medium mb-6 font-sans">
                The MCAT is a big deal, but it's also just a long, learnable test. The trick isn't finding the "perfect" schedule, it's building a plan that fits your real life, pushes you into active practice early, and stays consistent enough to compound over time.
              </p>
              <p>
                In this post for the MedLink Project, I'll be sharing a few realistic ways to structure prep (full-time sprint, long game, and a hybrid), provide some resource recommendations to help improve scores, and the explain the framework I used to score a 518 while working 40 hours a week from May to August without giving up the gym or a social life.
              </p>
              <p>
                The emphasis is on building a plan you can sustain. With clear phases (content review, then practice), daily habits that keep momentum (CARS and spaced repetition), and full-length exams that standardize timing and test-day routines.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 font-sans">Three ways to structure MCAT prep</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-sans">1. The full-time summer sprint (8-10 weeks)</h3>
              <p>
                You clear your schedule and treat prep like a job: 6-8 hours/day, 5-6 days/week. The upside is immersion, as content sticks faster when you're seeing it constantly. The risk is burnout if you don't deliberately rotate topics and keep a weekly "lighter" day. If you choose this route, anchor the week with at least one timed CARS set daily and 1-2 full-length tests (FLs) in the second half of prep. Section timing, format, and length should be practiced until they feel like normal routine (e.g., CP/BB/PS are 95 minutes/59 Qs; CARS is 90 minutes/53 Qs).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 font-sans">2. The long game (4-8 months)</h3>
              <p>
                This works well if you're in school or working a job. Set aside 60-120 minutes on school/work nights, 3-6 hours on weekends, with steady Anki and CARS practice to fill gaps here and there in between. Because motivation can dip over months, build mini-milestones (e.g., finish orgo book by Week 5, hit all AAMC Question Banks by Week 10, write first practice FL by Week 12). Think of it as laying bricks, where consistent, small sessions win here. Students who do this effectively keep resources focused. For example, try to narrow your efforts into one book set, one Anki deck, Jack Westin for CARS, then UWorld + AAMC materials.
              </p>
              <p>
                This is the setup I used over a 4-month summer (103 days) while working a full-time job to score a 518 on my first attempt at the MCAT. For me, there was no secret to success, just consistency and purpose in my content review and practice over the long-term.
              </p>
              
              <div className="my-10 not-prose">
                <a href="/MCAT_SCHEDULE_MEDLINK.xlsx" download className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <Download className="h-5 w-5" />
                  Download My MCAT Study Schedule (Excel)
                </a>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 font-sans">3. The hybrid (what most people actually end up doing)</h3>
              <p>
                You do "maintenance mode" during the school term (Anki, CARS, a couple of chapters a week), then switch to a focused practice phase 6-8 weeks out. This balances life with score growth and reduces the shock of jumping straight into full-lengths. Think of it like blending your favourite parts of all we've discussed so far. The reality is, there is no one-size fits all plan for MCAT studying, so try to take away strategies, schedules, resources, and tips that will together amalgamate to a study setup that works best for you and your circumstances!
              </p>

              <div className="w-full h-px bg-gray-200 my-16"></div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-sans">What to use (and what to skip)</h2>
              <p>
                There are a million resources for MCAT studying and you do not need them all. Here is a framework that I used and have seen work for others:
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">Anki for the sticky bits</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">Psych/soc terms, amino acids, pathways, equations. Daily spaced repetition is really helpful for memorizing random facts that can make the difference on narrowing down to the right answers on test day (especially for P/S). The Anki deck by MileDown is a popular choice for MCAT studying.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">A structured book set</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">A structured book set (e.g., Kaplan) for content review during Phase 1. It gives you a clean spine so you don't fall into YouTube rabbit holes. I purchased a previous year's edition of Kaplan review for a discount on Amazon. You also can get great deals on second handbooks from friends or on Facebook.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">Jack Westin for CARS</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">One timed passage + quick review is the minimum effective dose, scale up to doing more if CARS is a pain point for your studying. Jack Westin has an email list where you can sign up for their CARS passage of the day. They also have a great bank of previous passages to practice with.</p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">UWorld + AAMC question banks</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">Use these to learn how MCAT questions think, then AAMC full length practice tests to calibrate pacing and endurance. The AAMC Official Prep Hub is the best place to get study material for the MCAT that emulates the style of the exam.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-sans">Podcasts/YouTube to reinforce weak points</h3>
              <p>
                Since I studied on a condensed timeline while working a full-time job, I found it very helpful to listen to podcasts or youtube videos on specific topics I was struggling with while walking to work or driving places. Khan Academy has an amazing free set of videos for every MCAT topic you can imagine. There is also a 300-page document from Khan Academy breaking down every psych/soc topic.
              </p>
              <p>
                Finally, know the exam's structure and weights so you can plan smarter. The full test day runs ~7.5 hours including intros and breaks, so it is key to practice your stamina, not just your facts.
              </p>

              <div className="bg-[#007AFF] text-white rounded-3xl p-10 md:p-12 my-16 not-prose relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 font-sans">Final words</h2>
                  <p className="mb-6 text-blue-50 font-serif leading-relaxed text-lg">
                    An effective MCAT plan is specific, limited in scope, and repeatable. Decide on a study cadence that fits your actual week, choose a small set of resources you will finish, and let regular practice and structured review guide adjustments. Keep core habits daily, even on your lighter days, and use full-length exams to standardize timing, identify gaps, and rehearse test-day logistics.
                  </p>
                  <p className="text-blue-50 font-serif leading-relaxed text-lg">
                    On a personal note, what made my preparation sustainable while working full-time was accepting that progress would be uneven and designing around that reality. From everyone at the MedLink Project: you've got this. Build a plan that respects your life, show up more days than you don't, and trust the compound effect.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              </div>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default McatPrep;
