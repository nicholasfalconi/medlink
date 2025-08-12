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
  { program: "Medical Physiology", degree: "Master of Health Science (MHSc)", school: "University of Toronto", length: "12 months", structure: "Course-based with paid* internship", link: "https://physiology.utoronto.ca/master-health-science-mhsc-medical-physiology" },
  { program: "Biomedical Discovery and Commercialization", degree: "Master of Biomedical Discovery and Commercialization (MBDC)", school: "McMaster University", length: "12 months", structure: "Course-based with paid* internship", link: "https://bdcprogram.healthsci.mcmaster.ca/" },
  { program: "Biomedical Informatics", degree: "Master of Biomedical Informatics", school: "Queen's University", length: "12 months", structure: "Course-based with capstone project", link: "https://www.cs.queensu.ca/graduate/bmif/" },
  { program: "Biomedical Innovation", degree: "Master of Biomedical Innovation (MBI)", school: "McMaster University", length: "12 months", structure: "Project-based", link: "https://healthinnovation.mcmaster.ca/degree-programs/mbi/program-details/" },
  { program: "Physiology", degree: "Master of Science (MSc)", school: "McGill University", length: "12 months", structure: "Thesis-based", link: "https://www.mcgill.ca/physiology/graduate-studies/prospective-students/msc-program" },
  { program: "Bioinformatics", degree: "Master of Bioinformatics (MBinf)", school: "University of Guelph", length: "12-16 months", structure: "Course-based with capstone project", link: "https://www.uoguelph.ca/programs/master-of-bioinformatics/" },
  { program: "AI in Healthcare", degree: "Master of Science in Applied Computing (MScAC)", school: "University of Toronto", length: "16 months", structure: "Course-based with paid internship", link: "https://lmp.utoronto.ca/AI-in-healthcare-mscac" },
  { program: "Health Informatics", degree: "Master of Health Informatics (MHI)", school: "University of Toronto", length: "16 months", structure: "Course-based with practicum", link: "https://ihpme.utoronto.ca/programs/health-informatics/mhi-program-details/" },
  { program: "Health Systems Research", degree: "Master of Science (MSc)", school: "University of Toronto", length: "12-18 months", structure: "Thesis-based OR Course-based (limited enrolment)", link: "https://ihpme.utoronto.ca/programs/health-systems-research/msc-hsr-program-details/" },
  { program: "Clinical Epidemiology & Health Care Research", degree: "Master of Science (MSc)", school: "University of Toronto", length: "12-24 months", structure: "Course-based + Research Internship OR Thesis-based", link: "https://ihpme.utoronto.ca/academics/graduate-programs/msc-clinical-epi-health-care-research/" },
  { program: "Applied Clinical Pharmacology", degree: "Master of Science (MSc)", school: "University of Toronto", length: "12 OR 24 months", structure: "Course-based with practicum OR Course-based", link: "https://pharmtox.utoronto.ca/acp" },
  { program: "Pharmacology", degree: "Master of Science (MSc)", school: "McGill University", length: "18-24 months", structure: "Thesis-based", link: "https://www.mcgill.ca/pharma/students/graduate/programs-requirements/msc" },
  { program: "Bioethics", degree: "Master of Health Science (MHSc)", school: "University of Toronto", length: "20 months", structure: "Course-based with practicum and capstone", link: "https://jcb.utoronto.ca/education-training/master-of-health-science-in-bioethics/" },
  { program: "Health Science", degree: "Master of Health Science (MHSc)", school: "University of British Columbia", length: "21 months (avg)", structure: "Course-based with capstone project", link: "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-health-science" },
  { program: "Medical Science", degree: "Master of Science (MSc)", school: "McMaster University", length: "22-24 months", structure: "Thesis-based", link: "https://medsci.healthsci.mcmaster.ca/" },
  { program: "Medical Science", degree: "Master of Science (MSc)", school: "University of Toronto", length: "22-24 months", structure: "Thesis-based", link: "https://ims.utoronto.ca/doctoral-stream-programs" },
  { program: "Epidemiology", degree: "Master of Science (MSc)", school: "McGill University", length: "24 months", structure: "Thesis-based", link: "https://www.mcgill.ca/epi-biostat-occh/education/grad/epidemiology/msc-epidemiology-courses-and-learning-objectives" },
  { program: "Experimental Medicine", degree: "Master of Science (MSc)", school: "McGill University", length: "24 months", structure: "Thesis-based", link: "https://www.mcgill.ca/expmed/graduate-studies/programs" },
  { program: "Neuroscience", degree: "Master of Science (MSc)", school: "Queen's University", length: "24 months", structure: "Thesis-based", link: "https://neuroscience.queensu.ca/academic/graduate-program" },
  { program: "Epidemiology", degree: "Master of Science (MSc)", school: "Queen's University", length: "24 months", structure: "Thesis-based", link: "https://phs.queensu.ca/programs-courses/degree-programs/msc-epidemiology/program-overview" },
  { program: "Translational Medicine", degree: "Master of Science (MSc)", school: "Queen's University", length: "24 months", structure: "Thesis-based", link: "https://deptmed.queensu.ca/academics/translational-medicine-graduate-programs/program-overview" },
  { program: "Experimental Medicine", degree: "Master of Science (MSc)", school: "University of British Columbia", length: "35 months (avg)", structure: "Thesis-based", link: "https://www.grad.ubc.ca/prospective-students/graduate-degree-programs/master-of-science-experimental-medicine" },
];

const LifeAfterUndergrad = () => {
  useEffect(() => {
    document.title = "Life After Undergrad | MedLink Blog";
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
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Life After Undergrad</h1>
                <p className="mt-2 text-sm text-gray-500">Posted on MedLink Blog</p>
              </header>

              <section className="mt-8 mb-10">
                <div className="max-w-4xl mx-auto">
                  <p className="text-sm md:text-base leading-7 text-gray-600">
                    Applying to medical school is challenging, and facing rejection can leave you uncertain about next steps, whether that's exploring gap years, graduate programs, or alternative career paths in healthcare and industry.
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                    After graduation, the sudden freedom can feel liberating but often leads to a lack of structure, causing some people to become paralyzed by endless possibilities while others overcommit and spread themselves too thin. We advise students to find the sweet spot by reflecting on their goals - whether improving MCAT scores, pursuing research, or earning income - and scaffold their unstructured time with realistic tasks and timelines to stay accountable.
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-gray-600">
                    We've identified three common paths that premeds tend to take after graduation if they don't get into medical school.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <div className="overflow-x-auto rounded-xl border bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Path</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Summary</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody className="align-top text-sm text-gray-700">
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-[#007AFF]" />
                        <span className="font-medium text-gray-900">Graduate School</span>
                      </td>
                      <td className="py-3 px-4">
                        Master's: 1–3 years; PhD: 3–7 years. Options include thesis-based or course-based programs.
                      </td>
                      <td className="py-3 px-4">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Clarify exit opportunities</li>
                          <li>Supervisor required?</li>
                          <li>Funding/stipend and cost of living</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-[#007AFF]" />
                        <span className="font-medium text-gray-900">Paid Work</span>
                      </td>
                      <td className="py-3 px-4">
                        Ideal for building savings and practical experience; hiring is competitive and requires preparation.
                      </td>
                      <td className="py-3 px-4">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Resume + cover letter prep; persistence</li>
                          <li>Align with values: growth, culture, balance</li>
                          <li>Common fields: advocacy, biotech/pharma, consulting</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 flex items-center gap-2">
                        <Compass className="h-4 w-4 text-[#007AFF]" />
                        <span className="font-medium text-gray-900">Gap Year</span>
                      </td>
                      <td className="py-3 px-4">
                        Flexible time to explore interests, gain clarity, and prepare for the next step.
                      </td>
                      <td className="py-3 px-4">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Can feel unstructured—set goals and routines</li>
                          <li>Volunteer to learn skills and build connections</li>
                          <li>Iterate toward the right role or program</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white">
          <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-gray-900 text-center">Curated Canadian programs</h2>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Note: This guide is not comprehensive; always perform your own research. *Most internships are paid.
              </p>

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


