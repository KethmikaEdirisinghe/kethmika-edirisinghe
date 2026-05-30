import { FaHackerrank } from "react-icons/fa";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

const achievements = [
  {
    type: "badge", // badge | certificate
    title: "HackerRank Badges",
    issuer: "HackerRank",
    date: "", // optional: "2026"
    description:
      "Badges earned by solving problems and completing skill assessments on HackerRank.",
    icon: "hackerrank",
    link: "https://www.hackerrank.com/profile/kethmikaed", 
  },
  // Add more later like:
   {
    type: "certificate",
    title: "Quora-The Quiz Competition",
    issuer: "The Statistics Society of Faculty of Applied Sciences, University of Sri Jayewardenepura",
    date: "2025",
    description: "Received a Certificate of Appreciation for participating in Quora–The Quiz Competition, organized by the Statistics Society of the Faculty of Applied Sciences, University of Sri Jayewardenepura.",
    icon: "certificate",
    link: "/public/certificates/certificate_quora.pdf",
   },

    {
    type: "certificate",
    title: "Data Explore 2.0 – Certificate of Participation",
    issuer: "The Statistics Society of Faculty of Applied Sciences, University of Sri Jayewardenepura",
    date: "2026",
    description: "Successfully participated in Data Explore 2.0, completing data analysis, report submission, and an online dashboard workshop organized by the Statistics Society, University of Sri Jayewardenepura.",
    icon: "certificate",
    link: "/public/certificates/certificate_dataXplore.pdf",
   }
];

function AchievementIcon({ name }) {
  if (name === "hackerrank") return <FaHackerrank className="w-6 h-6" />;
  if (name === "certificate") return <Award className="w-6 h-6" />;
  return <BadgeCheck className="w-6 h-6" />;
}

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Achievements &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground">
            A collection of badges, certificates, and learning milestones as I
            grow as a developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={`${item.type}-${item.title}`}
              className="group glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <AchievementIcon name={item.icon} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.issuer}
                        {item.date ? ` • ${item.date}` : ""}
                      </p>
                    </div>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Open link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>

                  {item.description ? (
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}

                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs border border-border/50 text-muted-foreground">
                      {item.type === "certificate" ? "Certificate" : "Badge"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};