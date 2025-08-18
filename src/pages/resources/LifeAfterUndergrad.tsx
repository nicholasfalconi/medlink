import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import ProgramsTable from "@/components/resources/ProgramsTable";
import { GraduationCap, Briefcase, Compass } from "lucide-react";

interface Program {
  program: string;
  degree: string;
  school: string;
  length: string;
  structure: string;
  link?: string;
}

const programs: Program[] = [
  {
    program: "Medical Physiology",
    degree: "Master of Health Science (MHSc)",
    school: "University of Toronto",
    length: "12 months",
    structure: "Course-based with paid* internship",
    link: "https://physiology.utoronto.ca/master-health-science-mhsc-medical-physiology",
  },
  {
    program: "Biomedical Discovery and Commercialization",
    degree: "Master of Biomedical Discovery and Commercialization (MBDC)",
    school: "McMaster University",
    length: "12 months",
    structure: "Course-based with paid* internship",
    link: "https://bdcprogram.healthsci.mcmaster.ca/",
  },
  {
    program: "Biomedical Informatics",
    degree: "Master of Biomedical Informatics",
    school: "Queen's University",
    length: "12 months",
    structure: "Course-based with capstone project",
    link: "https://www.cs.queensu.ca/graduate/bmif/",
  },
  {
    program: "Biomedical Innovation",
    degree: "Master of Biomedical Innovation (MBI)",
    school: "McMaster University",
    length: "12 months",
    structure: "Project-based",
    link: "https://healthinnovation.mcmaster.ca/degree-programs/mbi/program-details/",
  },
  {
    program: "Physiology",
    degree: "Master of Science (MSc)",
    school: "McGill University",
    length: "12 months",
    structure: "Thesis-based",
    link: "https://www.mcgill.ca/physiology/graduate-studies/prospective-students/msc-program",
  },
  {
    program: "Bioinformatics",
    degree: "Master of Bioinformatics (MBinf)",
    school: "University of Guelph",
    length: "12-16 months",
    structure: "Course-based with capstone project",
    link: "https://www.uoguelph.ca/programs/master-of-bioinformatics/",
  },
  {
    program: "AI in Healthcare",
    degree: "Master of Science in Applied Computing (MScAC)",
    school: "University of Toronto",
    length: "16 months",
    structure: "Course-based with paid internship",
    link: "https://lmp.utoronto.ca/AI-in-healthcare-mscac",
  },
  {
    program: "Health Informatics",
    degree: "Master of Health Informatics (MHI)",
    school: "University of Toronto",
    length: "16 months",
    structure: "Course-based with practicum",
    link: "https://ihpme.utoronto.ca/programs/health-informatics/mhi-program-details/",
  },
  {
    program: "Health Systems Research",
    degree: "Master of Science (MSc)",
    school: "University of Toronto",
    length: "12-18 months",
    structure: "Thesis-based OR Course-based (limited enrolment)",
    link: "https://ihpme.utoronto.ca/programs/health-systems-research/msc-hsr-program-details/",
  },
  {
    program: "Clinical Epidemiology & Health Care Research",
    degree: "Master of Science (MSc)",
    school: "University of Toronto",
    length: "12-24 months",
    structure: "Course-based + Research Internship OR Thesis-based",
    link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-clinical-epi-health-care-research/",
  },
  {
    program: "Applied Clinical Pharmacology",
    degree: "Master of Science (MSc)",
    school: "University of Toronto",
    length: "12 OR 24 months",
    structure: "Course-based with practicum OR Course-based",
    link: "https://pharmtox.utoronto.ca/acp",
  },
  {
    program: "Pharmacology",
    degree: "Master of Science (MSc)",
    school: "McGill University",
    length: "18-24 months",
    structure: "Thesis-based",
    link: "https://www.mcgill.ca/pharma/students/graduate/programs-requirements/msc",
  },
  {
    program: "Bioethics",
    degree: "Master of Health Science (MHSc)",
    school: "University of Toronto",
    length: "20 months",
    structure: "Course-based with practicum and capstone",
    link: "https://jcb.utoronto.ca/education-training/master-of-health-science-in-bioethics/",
  },
  {
    program: "Health Science",
    degree: "Master of Health Science (MHSc)",
    school: "University of British Columbia",
    length: "21 months (avg)",
    structure: "Course-based with capstone project",
    link: "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-health-science",
  },
  {
    program: "Medical Science",
    degree: "Master of Science (MSc)",
    school: "McMaster University",
    length: "22-24 months",
    structure: "Thesis-based",
    link: "https://medsci.healthsci.mcmaster.ca/",
  },
  {
    program: "Medical Science",
    degree: "Master of Science (MSc)",
    school: "University of Toronto",
    length: "22-24 months",
    structure: "Thesis-based",
    link: "https://ims.utoronto.ca/doctoral-stream-programs",
  },
  {
    program: "Epidemiology",
    degree: "Master of Science (MSc)",
    school: "McGill University",
    length: "24 months",
    structure: "Thesis-based",
    link: "https://www.mcgill.ca/epi-biostat-occh/education/grad/epidemiology/msc-epidemiology-courses-and-learning-objectives",
  },
  {
    program: "Experimental Medicine",
    degree: "Master of Science (MSc)",
    school: "McGill University",
    length: "24 months",
    structure: "Thesis-based",
    link: "https://www.mcgill.ca/expmed/graduate-studies/programs",
  },
  {
    program: "Neuroscience",
    degree: "Master of Science (MSc)",
    school: "Queen's University",
    length: "24 months",
    structure: "Thesis-based",
    link: "https://neuroscience.queensu.ca/academic/graduate-program",
  },
  {
    program: "Epidemiology",
    degree: "Master of Science (MSc)",
    school: "Queen's University",
    length: "24 months",
    structure: "Thesis-based",
    link: "https://phs.queensu.ca/programs-courses/degree-programs/msc-epidemiology/program-overview",
  },
  {
    program: "Translational Medicine",
    degree: "Master of Science (MSc)",
    school: "Queen's University",
    length: "24 months",
    structure: "Thesis-based",
    link: "https://deptmed.queensu.ca/academics/translational-medicine-graduate-programs/program-overview",
  },
  {
    program: "Experimental Medicine",
    degree: "Master of Science (MSc)",
    school: "University of British Columbia",
    length: "35 months (avg)",
    structure: "Thesis-based",
    link: "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-science-experimental-medicine",
  },
];

const LifeAfterUndergrad = () => {
  useEffect(() => {
    document.title = "Life After Undergrad | MedLink Resources";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="relative bg-white overflow-hidden">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mt-2 flex justify-center">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/70 backdrop-blur-sm px-3 py-2 shadow-sm">
                  <img
                    src="/team/ADAM_LEVITAN.jpeg"
                    alt="Adam Levitan headshot"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="text-sm leading-tight">
                    <div className="font-medium text-gray-900">Adam Levitan</div>
                    <div className="text-gray-600">Graduate Studies Advisor</div>
                  </div>
                </div>
              </div>
              <header className="mt-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Planning for Life after undergrad
                </h1>
              </header>

              <section className="mt-8 mb-10">
                <div className="max-w-4xl mx-auto">
                  <p className="text-sm md:text-base leading-7 text-gray-600">
                    Graduating from undergrad can feel like stepping off a treadmill that’s been running at full speed. For years, your life was probably structured around assignments, exams, and the next milestone. Then suddenly, it’s over. You’ve crossed the stage, shook the Dean’s hand, received your degree, and now you’re left wondering what to do next.
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                    For students hoping to get into medical school, this phase can be even more complicated. Applications are stressful enough, but rejection, or even uncertainty while waiting, can leave you asking: Now what?
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                    The truth is, there’s no single “right” path after undergrad. But there are common experiences many premeds share, so this guide reviews some of the most common paths.
                  </p>

                  <h2 className="mt-8 text-xl font-semibold text-gray-900">The Challenge of Too Much Freedom</h2>
                  <p className="mt-3 text-sm md:text-base leading-7 text-gray-600">
                    It may sound odd at first, but it’s normal to feel disoriented after you finish your undergraduate degree. No more assignments, no more waking up for class—it’s up to you to organize your time. Some people feel paralyzed by the endless possibilities; others try to do everything at once (full‑time work, volunteering, shadowing, research, retaking the MCAT).
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                    Neither extreme is sustainable. The sweet spot lies somewhere in between: reflect on your goals and build a realistic structure around them. Ask yourself:
                  </p>
                  <ul className="mt-3 list-disc pl-5 text-sm md:text-base leading-7 text-gray-600 space-y-1">
                    <li>Do I need to improve my MCAT score?</li>
                    <li>Do I want to earn an income before medical school?</li>
                    <li>Do I even want to go to medical school?</li>
                    <li>Which parts of my application need the most work?</li>
                  </ul>
                  <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                    Once you clarify your priorities, you can scaffold your time with achievable goals and timelines—replacing the structure undergrad once provided with one you design for yourself.
                  </p>

                  <h2 className="mt-8 text-xl font-semibold text-gray-900">Three Common Paths After Graduation</h2>
                  <p className="mt-3 text-sm md:text-base leading-7 text-gray-600">
                    Through conversations with students and advisors, we’ve noticed three common paths many premeds take if they don’t go straight into medical school:
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <section className="mb-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <article className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-[#007AFF]" />
                      <h2 className="text-lg font-semibold text-gray-900">Graduate school</h2>
                    </div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Master’s programs typically 1–3 years</li>
                      <li>Thesis‑based (usually 2+ years)</li>
                      <li>Course‑based (usually 1–2 years)</li>
                      <li>PhD: typically 4–7 years</li>
                    </ul>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900">Key considerations</p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Exit opportunities (academia, industry, professional school)</li>
                        <li>Is a supervisor needed?</li>
                        <li>Funding and cost of living</li>
                      </ul>
                    </div>
                  </article>

                  <article className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-[#007AFF]" />
                      <h2 className="text-lg font-semibold text-gray-900">Paid Work</h2>
                    </div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Good fit if you want income or time away from coursework</li>
                      <li>Competitive—polish your resume/CV and cover letters; persistence matters</li>
                    </ul>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900">Key considerations</p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Clarify your values: growth, culture, work–life balance</li>
                        <li>Common employers: advocacy organizations, biotech/pharma, consulting</li>
                      </ul>
                    </div>
                  </article>

                  <article className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="h-5 w-5 text-[#007AFF]" />
                      <h2 className="text-lg font-semibold text-gray-900">Gap Year</h2>
                    </div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Exploration while identifying the right job or graduate program</li>
                      <li>Can feel unstructured—use goals and routines to stay on track</li>
                      <li>Explore interests; volunteer to learn skills, build connections, and test paths</li>
                      <li>Consider structure via courses, research, certificates, or short paid roles</li>
                    </ul>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-gray-900 text-center">Curated Canadian programs</h2>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Note: This table is meant as a guide to help navigate interested students and is not comprehensive; it should not replace rigorous individual research into graduate program options.
              </p>
              <p className="text-xs text-gray-500 mt-1 text-center">* most, but not all, internship positions are paid</p>

              <ProgramsTable programs={programs} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LifeAfterUndergrad;


