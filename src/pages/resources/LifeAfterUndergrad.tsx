import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import ProgramsTable from "@/components/resources/ProgramsTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GraduationCap, Briefcase, Compass } from "lucide-react";

interface Program {
  program: string;
  degree: string;
  school: string;
  length: string;
  structure: string;
  link?: string;
}

const programs: Program[] = [{
  program: "Medical Physiology",
  degree: "Master of Health Science (MHSc)",
  school: "University of Toronto",
  length: "12 months",
  structure: "Course-based with paid* internship",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/mhsc-medical-physiology/"
}, {
  program: "Biomedical Discovery and Commercialization",
  degree: "Master of Biomedical Discovery and Commercialization (MBDC)",
  school: "McMaster University",
  length: "12 months",
  structure: "Course-based with paid* internship",
  link: "https://mbdc.mcmaster.ca/"
}, {
  program: "Biomedical Informatics",
  degree: "Master of Biomedical Informatics",
  school: "Queen's University",
  length: "12 months",
  structure: "Course-based with capstone project",
  link: "https://healthsci.queensu.ca/education/graduate-programs/biomedical-informatics"
}, {
  program: "Biomedical Innovation",
  degree: "Master of Biomedical Innovation (MBI)",
  school: "McMaster University",
  length: "12 months",
  structure: "Project-based",
  link: "https://healthsci.mcmaster.ca/mbi"
}, {
  program: "Physiology",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "12 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/physiology/graduate-programs"
}, {
  program: "Bioinformatics",
  degree: "Master of Bioinformatics (MBinf)",
  school: "University of Guelph",
  length: "12-16 months",
  structure: "Course-based with capstone project",
  link: "https://bioinformatics.uoguelph.ca/"
}, {
  program: "AI in Healthcare",
  degree: "Master of Science in Applied Computing (MScAC)",
  school: "University of Toronto",
  length: "16 months",
  structure: "Course-based with paid internship",
  link: "https://mscac.utoronto.ca/"
}, {
  program: "Health Informatics",
  degree: "Master of Health Informatics (MHI)",
  school: "University of Toronto",
  length: "16 months",
  structure: "Course-based with practicum",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/mhi/"
}, {
  program: "Health Systems Research",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "12-18 months",
  structure: "Thesis-based OR Course-based (limited enrolment)",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-health-systems-research/"
}, {
  program: "Clinical Epidemiology & Health Care Research",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "12-24 months",
  structure: "Course-based + Research Internship OR Thesis-based",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-clinical-epi-health-care-research/"
}, {
  program: "Applied Clinical Pharmacology",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "12 OR 24 months",
  structure: "Course-based with practicum OR Course-based",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-applied-clinical-pharmacology/"
}, {
  program: "Pharmacology",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "18-24 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/pharma/graduate-programs"
}, {
  program: "Bioethics",
  degree: "Master of Health Science (MHSc)",
  school: "University of Toronto",
  length: "20 months",
  structure: "Course-based with practicum and capstone",
  link: "https://ihpme.utoronto.ca/academics/graduate-programs/mhsc-bioethics/"
}, {
  program: "Health Science",
  degree: "Master of Health Science (MHSc)",
  school: "University of British Columbia",
  length: "21 months (avg)",
  structure: "Course-based with capstone project",
  link: "https://spph.ubc.ca/programs/mhsc/"
}, {
  program: "Medical Science",
  degree: "Master of Science (MSc)",
  school: "McMaster University",
  length: "22-24 months",
  structure: "Thesis-based",
  link: "https://healthsci.mcmaster.ca/gradprog/msc"
}, {
  program: "Medical Science",
  degree: "Master of Science (MSc)",
  school: "University of Toronto",
  length: "22-24 months",
  structure: "Thesis-based",
  link: "https://medsci.utoronto.ca/graduate-programs"
}, {
  program: "Epidemiology",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/epi-biostat-occh/graduate-programs"
}, {
  program: "Experimental Medicine",
  degree: "Master of Science (MSc)",
  school: "McGill University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://www.mcgill.ca/expmed/graduate"
}, {
  program: "Neuroscience",
  degree: "Master of Science (MSc)",
  school: "Queen's University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://dbms.queensu.ca/graduate/neuroscience"
}, {
  program: "Epidemiology",
  degree: "Master of Science (MSc)",
  school: "Queen's University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://phs.queensu.ca/graduate-programs/msc-epidemiology"
}, {
  program: "Translational Medicine",
  degree: "Master of Science (MSc)",
  school: "Queen's University",
  length: "24 months",
  structure: "Thesis-based",
  link: "https://dbms.queensu.ca/graduate/translational-medicine"
}, {
  program: "Experimental Medicine",
  degree: "Master of Science (MSc)",
  school: "University of British Columbia",
  length: "35 months (avg)",
  structure: "Thesis-based",
  link: "https://www.expmed.ubc.ca/"
}];

const LifeAfterUndergrad = () => {
  useEffect(() => {
    document.title = "Life after undergrad | MedLink Resources";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Guidance for life after undergrad: gap years, grad school paths, paid work options, and curated Canadian programs.');
    document.head.appendChild(meta);
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.href);
    document.head.appendChild(canonical);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Planning for Life after undergrad",
    description: "Options after graduation: grad school, paid work, or gap year - plus curated program list.",
    author: {
      "@type": "Person",
      name: "Adam Levitan"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation />

      <main className="bg-gray-50 pb-20 flex-1">
        {/* Full-width Hero Banner */}
        <header className="relative w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
              alt="University campus students"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mb-16 md:mb-24">
            <span className="text-blue-200 font-bold text-sm md:text-base uppercase tracking-widest mb-4 block">
              Career Advice
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Planning for Life after undergrad
            </h1>
            <p className="mt-4 text-lg text-gray-200 font-medium">
              Written by Adam Levitan &middot; January 25, 2026
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
                    <BreadcrumbPage className="font-semibold text-gray-900">Life After Undergrad</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed font-serif">
              <p className="text-2xl text-gray-900 font-medium mb-6 font-sans">
                Graduating from undergrad can feel like stepping off a treadmill that's been running at full speed. For years, your life was probably structured around assignments, exams, and the next milestone. Then suddenly, it's over.
              </p>
              <p>
                You've crossed the stage, shook the Dean's hand, received your degree, and now you're left wondering what to do next. For students hoping to get into medical school, this phase can be even more complicated. Applications are stressful enough, but rejection, or even uncertainty while waiting, can leave you asking: Now what?
              </p>
              <p>
                The truth is, there's no single "right" path after undergrad. But there are common experiences many premeds share, so I wrote this blog to help review some of the more common paths.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 font-sans">The Challenge of Too Much Freedom</h2>
              <p className="mb-4">
                It may sound odd at first, but it's normal to feel disoriented after you finish your undergraduate degree. No more assignments, no more waking up for class, it's up to you to organize your time. This may cause some people to feel paralyzed by the endless possibilities. Others go the opposite direction and try to do everything, working full time, volunteering, shadowing, researching, retaking the MCAT - all at once.
              </p>
              <p className="mb-4">
                Neither extreme is sustainable. The sweet spot lies somewhere in between: reflecting on your personal goals and building a realistic structure around them. Ask yourself:
              </p>
              <ul className="mb-6 list-disc pl-5 space-y-2 bg-gray-50 rounded-2xl p-6 text-gray-700 font-sans border border-gray-100">
                <li>Do I really need to improve my MCAT score?</li>
                <li>Do I want to earn an income before medical school?</li>
                <li>Do I even want to go to medical school?</li>
                <li>What specific parts of my application could use improvement?</li>
              </ul>
              <p>
                Once you've clarified your priorities, you can scaffold your time with achievable goals and timelines. Think of it as replacing the structure undergrad once gave you with one you design for yourself.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16 font-sans">Three Common Paths After Graduation</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose font-sans">
                <article className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-8 hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Compass className="h-5 w-5 text-[#007AFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">The Gap-Year Explorer</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">
                    These students use the time to travel, work, or try something new. Sometimes it's about earning money, other times it's about gaining perspective. Gap years can be a powerful way to recharge, mature, and return to applications with fresh energy.
                  </p>
                </article>

                <article className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-8 hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <GraduationCap className="h-5 w-5 text-[#007AFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">The Graduate Student</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">
                    Some pursue master's or post-baccalaureate programs, often with a research or health science focus. These degrees can strengthen academic records, provide valuable research experience, and expand career options - whether or not medical school works out.
                  </p>
                </article>

                <article className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-8 hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Briefcase className="h-5 w-5 text-[#007AFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 block">The Career Builder</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-serif">
                    Others find roles in healthcare, public health, or industry. Positions as research coordinators, medical scribes, or health policy analysts can offer hands-on exposure to medicine while building transferable skills and income stability.
                  </p>
                </article>
              </div>

              <div className="bg-[#007AFF] text-white rounded-3xl p-10 md:p-12 my-12 not-prose relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 font-sans">Moving Forward</h2>
                  <p className="mb-6 text-blue-50 font-serif leading-relaxed text-lg">
                    If you're standing at this crossroads, remember: rejection or delay doesn't mean the door to medicine is closed. Many physicians took detours before finding their way into medical school. What matters is that you use this time intentionally - whether that means doubling down on your application, exploring other fields, or simply giving yourself space to grow.
                  </p>
                  <p className="text-blue-50 font-serif leading-relaxed text-lg">
                    Life after undergrad isn't a race. It's a transition, and like any transition, it can be messy, exciting, frustrating, and full of possibility. Wherever you land, you're still moving forward.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              </div>

            </div>
          </div>
        </article>

        <section id="programs" className="mt-16 pt-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-10">Curated Canadian programs</h2>
            
            <ProgramsTable programs={programs} />
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default LifeAfterUndergrad;
