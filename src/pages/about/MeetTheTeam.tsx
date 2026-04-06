import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  responsibilities: string;
  image?: string;
  initials: string;
  activeMentor?: boolean;
}

interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

const teamSections: TeamSection[] = [
  {
    title: "Leadership",
    description: "Setting the vision and direction of the MedLink Project.",
    members: [
      {
        name: "Ervis Musa",
        role: "Project Coordinator",
        bio: "Ervis is a medical student at the University of Ottawa. He completed his Bachelor of Health Sciences at Queen's University with a certificate in Disability and Physical Activity (DIPA). He values mentorship for its ability to turn experience into direction - something he benefited from himself and now aims to offer others. Outside of MedLink, he is currently training for a marathon.",
        responsibilities: "Oversees the overall direction of the project, including partnerships, team structure, and long-term planning, while supporting all team members.",
        image: "/lovable-uploads/f572a4c6-8aa5-4252-9310-71e2e36e6781.png",
        initials: "EM",
        activeMentor: true,
      },
    ],
  },
  {
    title: "Mentorship & Community",
    description: "Connecting mentors and mentees to build meaningful relationships.",
    members: [
      {
        name: "Matey Juric",
        role: "Mentorship Lead",
        bio: "Matey is a medical student at the University of Ottawa. He completed a degree in Biological Sciences at Drexel University in Philadelphia prior to medical school. He is passionate about mentorship because of the lifelong connections it fosters and believes there is nothing more fulfilling than helping someone work toward their goals.",
        responsibilities: "Leads mentor recruitment, onboarding, and mentor-mentee matching, while continuously improving the mentorship experience through feedback.",
        image: "/lovable-uploads/41742e0a-3782-490f-8609-be96532f4fbd.png",
        initials: "MJ",
        activeMentor: true,
      },
      {
        name: "Parth Arora",
        role: "Undergraduate Outreach Lead",
        bio: "Parth is a medical student at the University of Ottawa. Before medical school, he worked as Assistant to Presidential Affairs with the McMaster Students Union, where he developed strong skills in building campus connections and understanding student needs. As the first in his family to pursue medicine, he is committed to making the path feel more navigable and human for students figuring it out as they go. Outside of academics, he enjoys going to the gym.",
        responsibilities: "Connects with undergraduate students and organizations, manages mentee engagement and sign-ups, and ensures students feel supported throughout their experience.",
        image: "/lovable-uploads/parth-arora.png",
        initials: "PA",
        activeMentor: true,
      },
      {
        name: "Adam Levitan",
        role: "Graduate Studies Advisor",
        bio: "Adam is currently pursuing his Master's at the University of Toronto's Institute of Medical Science, with an undergraduate background in biology from Queen's University. He values the reciprocal learning that comes with mentorship and is especially passionate about keeping mentorship accessible and free.",
        responsibilities: "Provides guidance on graduate pathways and application strategy while supporting the accuracy of MedLink's academic content.",
        image: "/lovable-uploads/9e284c90-1db3-405f-a48b-8abbbfe5af2c.png",
        initials: "AL",
      },
      {
        name: "Alec",
        role: "Indigenous Mentorship & Outreach Lead",
        bio: "Alec is a medical student at the University of Ottawa. Outside of school, he enjoys playing soccer and staying active through sports. He values mentorship as a way to give students clarity and confidence when navigating a confusing and competitive path, and he's committed to making that journey feel more approachable for others.",
        responsibilities: "Leads Indigenous mentorship initiatives, connecting Indigenous students with mentors who understand their unique experiences and supporting them throughout their journey to medicine.",
        image: "/lovable-uploads/ba8e00af-8c59-45e1-b795-26fe6d2cf17c.png",
        initials: "A",
        activeMentor: true,
      },
    ],
  },
  {
    title: "Operations & Growth",
    description: "Expanding MedLink's reach and building the infrastructure behind the scenes.",
    members: [
      {
        name: "Grant Luke",
        role: "Events Coordinator",
        bio: "I completed my undergraduate degree in Kinesiology at Western University (BSc), where I developed a strong interest in human physiology and clinical medicine. During my time there, I became actively involved in academic and extracurricular initiatives, including organizing and participating in events that connected students with opportunities in healthcare and mentorship. These experiences sparked an interest in building meaningful, accessible programming that brings people together. As an Events Coordinator, I aim to create engaging, supportive spaces that foster connection, mentorship, and professional growth for students navigating the path to medicine.",
        responsibilities: "Plans and executes workshops, panels, and live sessions, while coordinating logistics and ensuring a smooth experience for participants.",
        image: "/lovable-uploads/grant-luke.jpg",
        initials: "GL",
        activeMentor: true,
      },
      {
        name: "Braeden Hill",
        role: "Partnerships & Growth Lead",
        bio: "Braeden is a medical student at the University of Toronto. Outside of his academic pursuits, he enjoys going to the gym, running, and playing sports. He sees mentorship as a way to share experience and encouragement during one of the most uncertain parts of a student's journey.",
        responsibilities: "Leads external partnerships and expansion efforts, building relationships with student groups and institutions while supporting MedLink's long-term growth and visibility.",
        image: "/lovable-uploads/6e05aacf-2940-422e-9e80-da3f2bccb15b.png",
        initials: "BH",
        activeMentor: true,
      },
      {
        name: "Nicholas Falconi",
        role: "Tech Lead",
        bio: "Nicholas Falconi holds a Bachelor's degree in Computer Science with a specialization in Biomedical Computing from Queen's University. He has worked with Sanofi as a Digital Strategy Analyst and has experience in data pipelines, front-end development, and generative AI systems. Outside of work, he leads innovative projects including a React-based GenAI platform and runs Falconi Labs, a full-stack innovation company.",
        responsibilities: "Built and maintains the MedLink platform, overseeing website functionality, forms, and technical infrastructure while supporting the team with digital tools and systems.",
        image: "/lovable-uploads/Nicholas.jpg",
        initials: "NF",
      },
    ],
  },
];

const MeetTheTeam = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The MedLink Project",
    url: "https://www.themedlinkproject.com/",
    member: teamSections.flatMap((s) =>
      s.members.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet the <span className="text-[#007AFF]">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              MedLink is organized around three core areas: leadership, mentorship & community, and operations & growth. Each team works together to ensure students receive accessible, high-quality mentorship without barriers.
            </p>
          </div>

          <div className="space-y-24">
            {teamSections.map((section) => (
              <div key={section.title} className="relative">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xl text-gray-500 max-w-2xl">{section.description}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                  {section.members.map((member) => (
                    <Card
                      key={member.name}
                      className="w-full sm:max-w-[420px] flex-1 min-w-[280px] border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer rounded-3xl overflow-hidden hover:-translate-y-1"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setSelected(member);
                        setOpen(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelected(member);
                          setOpen(true);
                        }
                      }}
                    >
                      <CardContent className="pt-10 pb-8 px-6 flex flex-col items-center text-center">
                        <Avatar className="h-32 w-32 mb-6 shadow-md border-4 border-white ring-2 ring-gray-50">
                          {member.image ? (
                            <AvatarImage
                              src={member.image}
                              alt={`${member.name} - ${member.role} headshot`}
                              className="object-cover"
                            />
                          ) : (
                            <AvatarFallback className="bg-blue-50 text-[#007AFF] text-2xl font-bold">
                              {member.initials}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-base text-[#007AFF] font-medium tracking-wide">
                          {member.role}
                        </p>
                        {member.activeMentor && (
                          <span className="mt-4 inline-block text-xs font-bold bg-[#007AFF]/10 text-[#007AFF] px-3 py-1 rounded-full uppercase tracking-wider">
                            Active Mentor
                          </span>
                        )}
                        <p className="mt-5 text-base text-gray-600 leading-relaxed">
                          {member.bio}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-2xl rounded-3xl p-0 overflow-hidden border-0">
              {selected && (
                <div className="flex flex-col bg-white">
                  <div className="bg-gray-50 px-8 py-10 flex flex-col items-center text-center border-b border-gray-100 relative">
                    <Avatar className="h-32 w-32 mb-6 shadow-md border-4 border-white">
                      {selected.image ? (
                        <AvatarImage
                          src={selected.image}
                          alt={`${selected.name} - ${selected.role} headshot`}
                          className="object-cover"
                        />
                      ) : (
                        <AvatarFallback className="bg-blue-100 text-[#007AFF] text-2xl font-bold">
                          {selected.initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                      {selected.name}
                    </h3>
                    <p className="text-lg text-[#007AFF] font-medium">
                      {selected.role}
                    </p>
                    {selected.activeMentor && (
                      <span className="mt-4 inline-block text-xs font-bold bg-[#007AFF]/10 text-[#007AFF] px-3 py-1 rounded-full uppercase tracking-wider">
                        Active Mentor
                      </span>
                    )}
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">About</h4>
                      <p className="text-base leading-relaxed text-gray-700">
                        {selected.bio}
                      </p>
                    </div>
                    
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
                      <h4 className="text-sm font-bold text-[#007AFF] uppercase tracking-wider mb-3">
                        Responsibilities
                      </h4>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {selected.responsibilities}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeetTheTeam;
