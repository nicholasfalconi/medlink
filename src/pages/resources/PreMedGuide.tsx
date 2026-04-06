import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const PreMedGuide = () => {
  useEffect(() => {
    document.title = "Trying to Do It All: A Real Guide for Undergrads | MedLink Resources";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'A real guide for undergrads navigating pre-med life: managing time, expectations, and yourself.');
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
              src="/images/premed_guide_hero.jpg"
              alt="Medical setting with students"
              className="w-full h-full object-cover origin-center"
            />
            <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mb-16 md:mb-24">
            <span className="text-blue-200 font-bold text-sm md:text-base uppercase tracking-widest mb-4 block">
              Perspective
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Trying to Do It All: A Real Guide for Undergrads
            </h1>
            <p className="mt-4 text-lg text-gray-200 font-medium">
              Written by Ervis Musa &middot; April 3, 2026
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
                    <BreadcrumbLink href="/resources" className="text-gray-500 hover:text-[#007AFF]">Blogs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold text-gray-900">Pre-Med Guide</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed font-serif">
              <p className="text-2xl text-gray-900 font-medium mb-6 font-sans">
                If you're an undergraduate thinking about medicine, you've probably felt it already: that pressure to improve everything.
              </p>
              <p>
                Your GPA. Your extracurriculars. Your research. Your volunteering. Your MCAT. Your sleep, your workouts, your diet... your entire life. And underneath all of that, one quiet question: "Am I doing enough?"
              </p>
              <p>
                This post isn't going to give you a perfect formula - because honestly, there isn't one. Instead, this is about how to manage your time, your expectations, and yourself while you're figuring things out. A huge disclosure - this is just the opinion of one medical student!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 font-sans">What Your Life Might Actually Look Like Right Now</h2>
              <p>
                A lot of pre-meds think they just need to "study more." But your reality probably looks more like this:
              </p>
              <ul className="mb-6 list-disc pl-5 space-y-2 bg-gray-50/80 rounded-2xl p-6 text-gray-700 not-prose border border-gray-100">
                <li>Full course load (often heavy science courses)</li>
                <li>Extracurriculars (clubs, exec roles, volunteering)</li>
                <li>Research or trying to get research</li>
                <li>MCAT prep (at some point... looming in the background)</li>
                <li>Mentorship / networking</li>
                <li>Trying to stay healthy (working out, eating properly)</li>
                <li>And still trying to have a life</li>
              </ul>
              <p>
                That's a lot. And research shows that undergraduate students pursuing competitive career paths (like medicine) experience significant academic pressure and stress related to performance expectations.<sup>1</sup> So if it feels like a lot - it is.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 font-sans">The "I Need to Be Perfect" Mindset</h2>
              <p>
                One of the biggest traps in pre-med is this: "If I just manage my time perfectly, I can do everything perfectly."
              </p>
              <p>So you try to:</p>
              <ul className="mb-6 list-disc pl-5 space-y-2 bg-blue-50/50 rounded-2xl p-6 text-gray-700 not-prose border border-blue-100/50">
                <li>Build the perfect study schedule</li>
                <li>Optimize every hour</li>
                <li>Wake up early, work out, meal prep, study efficiently, volunteer, research...</li>
                <li>And never fall behind</li>
              </ul>
              <p>
                But perfectionism, especially in high-achieving students, is strongly linked to burnout, anxiety, and emotional exhaustion.<sup>2</sup> And here's the honest part: trying to be perfect usually makes things worse, not better.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-sans">Studying vs. "Doing Enough"</h2>
              <p>
                You might sit down to study and think: "Other people are probably doing more than me." So you: study longer than you planned, feel guilty taking breaks, question if your methods are "good enough".
              </p>
              <p className="font-semibold text-gray-900">
                But effective studying isn't about hours, it's about consistency and strategy. Translation: You don't need the perfect study plan, you need one you can actually stick to.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-sans">Working Out, Eating Well... and Feeling Like You're Failing at Both</h2>
              <p>Let's be real. You probably want to work out consistently, eat healthy, and sleep well. But in reality:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>You squeeze in a workout when you can</li>
                <li>You eat quickly between classes</li>
                <li>You stay up later than you planned</li>
              </ul>
              <p>
                And then you think: "I should be better at this." But even moderate physical activity has been shown to improve mood, reduce stress, and support academic performance.<sup>4</sup> Not perfect workouts. Not perfect diets. Just something. A short run. A quick lift. A walk between classes. It counts.
              </p>

              <div className="bg-[#007AFF] text-white rounded-3xl p-10 md:p-12 my-12 not-prose relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 font-sans">What Actually Helps</h2>
                  <ul className="space-y-4 font-serif text-lg text-blue-50">
                    <li><strong className="text-white font-sans text-xl">1. Focus on what matters right now.</strong> Not everything needs to be optimized at once. Sometimes your priority is exams. Other times: applications. Other times: your health.</li>
                    <li><strong className="text-white font-sans text-xl">2. Build structure - but keep it flexible.</strong> Rigid schedules often fail. A better approach: Plan your day. Expect it to change. Adjust without guilt.</li>
                    <li><strong className="text-white font-sans text-xl">3. Let go of "perfect days."</strong> You will have unproductive days, missed workouts, times where you feel off-track. That doesn't mean you're failing.</li>
                    <li><strong className="text-white font-sans text-xl">4. Let go of comparison.</strong> A highlight reel is not the full picture.</li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">What I'd Tell You If You Were Sitting Right In Front of Me</h2>
              <p>You don't need to have your entire path figured out, be perfect, or do everything at once. You do need to stay consistent, keep exploring, be okay with uncertainty, and ask for help.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4 font-sans">If You're Feeling Overwhelmed</h2>
              <p>That feeling of: "I don't know if I'm doing this right" - Almost everyone feels it. So reach out. To a mentor. To a friend. Through MedLink. Because this process is hard enough, you don't have to do it alone.</p>

              <div className="mt-10 not-prose text-center sm:text-left">
                <Link
                  to="/services/mentees"
                  className="inline-flex bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#007AFF] transition-all shadow-md hover:shadow-lg no-underline"
                >
                  Get Mentored Today
                </Link>
              </div>

              <div className="mt-20 pt-8 border-t border-gray-100 text-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-sans">References</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-500 font-sans">
                  <li>Beiter R, Nash R, McCrady M, et al. The prevalence and correlates of depression, anxiety, and stress in a sample of college students. <em>J Affect Disord</em>. 2015;173:90-96.</li>
                  <li>Hill AP, Curran T. Multidimensional perfectionism and burnout: A meta-analysis. <em>Pers Soc Psychol Rev</em>. 2016;20(3):269-288.</li>
                  <li>Savickas ML. Career construction theory and practice. In: Brown SD, Lent RW, eds. <em>Career Development and Counseling</em>. 2nd ed. Wiley; 2013.</li>
                  <li>Gosadi IM. Protective Effect of Exercise Against Depression, Anxiety, and Stress Among University Students Based on Their Level of Academic Performance. <em>Medicina (Kaunas)</em>. 2024;60(10):1706.</li>
                  <li>Vogel EA, Rose JP, Roberts LR, Eckles K. Social comparison, social media, and self-esteem. <em>Psychol Pop Media Cult</em>. 2014;3(4):206-222.</li>
                  <li>Sambunjak D, Straus SE, Marusic A. Mentoring in academic medicine: A systematic review. <em>JAMA</em>. 2006;296(9):1103-1115.</li>
                </ol>
              </div>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PreMedGuide;
