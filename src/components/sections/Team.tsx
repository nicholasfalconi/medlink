import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface TeamMember {
  name: string;
  role?: string;
  bio: string;
  image?: string;
  initials?: string;
  responsibilities?: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Ervis Musa",
    role: "Project Coordinator",
    bio: "Ervis is a medical student at the University of Ottawa. He completed his Bachelor of Health Sciences at Queen's University with a certificate in Disability and Physical Activity (DIPA). He values mentorship for its ability to turn experience into direction - something he benefited from himself and now aims to offer others. Don't pay for your mentorship! Outside of MedLink, he's currently training for a marathon.",
    image: "/team/ERVIS_MUSA.jpeg",
    initials: "EM",
    responsibilities: [
      "Oversees the overall direction of the project",
      "Manages partnerships, team structure, and long-term planning",
      "Supports all team members",
    ],
  },
  {
    name: "Matey Juric",
    role: "Mentorship Team Lead",
    bio: "Matey is a medical student at the University of Ottawa. He completed a degree in Biological Sciences at Drexel University in Philadelphia prior to medical school. He's passionate about mentorship because of the lifelong connections it fosters and believes there's nothing more fulfilling than helping someone work toward their goals.",
    image: "/team/METEY.jpeg",
    initials: "MJ",
    responsibilities: [
      "Handles mentor-mentee matching",
      "Recruits and onboards medical student mentors",
      "Gathers feedback to improve the mentorship experience",
    ],
  },
  {
    name: "Alec Weller",
    role: "Undergraduate Outreach Lead",
    bio: "Alec is a medical student at the University of Ottawa. Outside of school, he enjoys playing soccer and staying active through sports. He values mentorship as a way to give students clarity and confidence when navigating a confusing and competitive path, and he's committed to making that journey feel more approachable for others.",
    image: "/team/ALEX_WELLER.jpeg",
    initials: "AW",
    responsibilities: [
      "Connects with undergrad student groups and classrooms",
      "Manages mentee sign-ups and short-term help requests",
      "Ensures undergrad participants feel supported and engaged",
    ],
  },
  {
    name: "Braeden Hill",
    role: "Events & Programming Lead",
    bio: "Braeden is a medical student at the University of Toronto. Outside of his academic pursuits, he enjoys going to the gym, running, and playing sports. For him, mentorship is about sharing experience and encouragement during one of the most stressful and uncertain parts of a student's journey.",
    image: "/team/BRAEDEN_HILL.jpeg",
    initials: "BH",
    responsibilities: [
      "Plans and runs workshops, panels, and live sessions",
      "Coordinates logistics and content for MedLink events",
      "Works closely with the outreach lead to promote events",
    ],
  },
  {
    name: "Adam Levitan",
    role: "Graduate Studies Advisor",
    bio: "Adam is currently pursuing his Master's at the University of Toronto's Institute of Medical Science, with an undergraduate background in biology from Queen's University. Adam enjoys the reciprocal learning that comes with mentor-mentee relationships and is especially passionate about providing mentorship free of cost, the way all mentorship should be.",
    image: "/team/ADAM_LEVITAN.jpeg",
    initials: "AL",
    responsibilities: [
      "Advises on graduate program pathways and application strategy",
      "Supports content accuracy for graduate studies guidance",
    ],
  },
  {
    name: "Nicholas Falconi",
    role: "Website & Tech Lead",
    bio: "Nick holds a degree in Computer Science with a specialization in Biomedical Computing from Queen's University. He built and continues to maintain the MedLink website, ensuring it remains reliable and up to date. He leads all technical efforts for the project - from development to ongoing maintenance - so the platform meets the team's needs.",
    image: "/team/NICK.jpeg",
    initials: "NF",
    responsibilities: [
      "Built and maintains the MedLink website",
      "Manages tech infrastructure, forms, and email systems",
      "Supports the team with digital tools, troubleshooting, and platform updates",
    ],
  },
];

export const Team = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const selectedMember = selected !== null ? teamMembers[selected] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The MedLink Project",
    url: "https://www.themedlinkproject.com/",
    member: teamMembers.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
    })),
  };

  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The people behind The MedLink Project who make mentorship accessible and meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              className="border bg-white hover:shadow-md transition-shadow"
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelected(idx);
                setOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(idx);
                  setOpen(true);
                }
              }}
            >
              <CardHeader className="flex flex-col items-center gap-4 text-center">
                <Avatar className="h-24 w-24">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={`${member.name} - ${member.role ?? "Team member"} headshot`} />
                  ) : (
                    <AvatarFallback className="bg-gray-100 text-gray-800">
                      {member.initials ?? member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
                  {member.role && (
                    <p className="text-sm text-gray-600">{member.role}</p>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-xl">
            {selectedMember && (
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  {selectedMember.image ? (
                    <AvatarImage src={selectedMember.image} alt={`${selectedMember.name} - ${selectedMember.role ?? "Team member"} headshot`} />
                  ) : (
                    <AvatarFallback className="bg-gray-100 text-gray-800">
                      {selectedMember.initials ?? selectedMember.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-900">{selectedMember.name}</h3>
                {selectedMember.role && (
                  <p className="text-sm text-gray-600">{selectedMember.role}</p>
                )}
                <p className="mt-3 text-sm leading-6 text-gray-600 max-w-prose">
                  {selectedMember.bio}
                </p>

                <div className="w-full mt-4 text-left">
                  <Accordion type="single" collapsible defaultValue="roles">
                    <AccordionItem value="roles" className="border-b-0">
                      <AccordionTrigger>Roles & Responsibilities</AccordionTrigger>
                      <AccordionContent>
                        {selectedMember.responsibilities && selectedMember.responsibilities.length > 0 ? (
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            {selectedMember.responsibilities.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-600">No responsibilities listed.</p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <section className="mt-12 md:mt-16" aria-labelledby="team-roles-heading">
          <h3 id="team-roles-heading" className="text-2xl font-semibold mb-4 text-gray-900">Team Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((m) => (
              <article key={m.name} className="rounded-lg border bg-white p-6">
                <h4 className="text-base font-semibold text-gray-900">
                  {m.role} <span className="text-gray-600">({m.name})</span>
                </h4>
                {m.responsibilities && (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {m.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};


