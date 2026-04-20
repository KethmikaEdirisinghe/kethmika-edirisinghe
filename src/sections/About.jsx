import { Code2, Lightbulb, Rocket, Users } from "lucide-react";


const highlights = [
     {
      icon: Code2,
      title: "Clean Code",
      description:
      "Writing maintainable, scalable code that stands the test of time.",
    },
     {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
   {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
   {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () =>{
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column*/}
                <div className="space-y-8">
                  <div className="animate-fade-in">  
                  <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                    About Me
                    </span>  
                </div>

                <h2  className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                 Building solutions,
                 <span className="font-serif italic font-normal text-white">
                {" "}
                one algorithm at a time. 
                    </span>  
                </h2>
    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
        <p>
        I’m Kethmika Edirisinghe, a 22-year-old undergraduate from Ambalangoda, Sri Lanka, 
        currently pursuing a BSc in the Faculty of Applied Sciences at the University of Sri Jayewardenepura (USJ). 
        My academic focus combines Mathematics, Computer Science, and Statistics, 
        which has helped me build a strong analytical foundation and a practical mindset
        toward solving problems with technology.
        </p>

        <p>
        My educational journey began at Dharmasoka College, Ambalangoda, where I studied from 2009 to 2022. 
        I completed my G.C.E. Ordinary Level (O/L) examinations in 2019, and then chose the Physical Science stream for my G.C.E. Advanced Level (A/L) studies. 
        Based on my 2023 A/L results, I qualified to enter USJ and continue my studies in a Physical Science–related degree pathway, 
        shaping the direction of my academic and professional goals.
        </p>

        <p>
        My interest in computers started early—back in Grade 1, when I first had access to a PC through my father’s brother. 
        What began with simple activities like playing games and drawing in Paint gradually turned into genuine curiosity about 
        how computers work and what I could create with them. While I’m more drawn to software than hardware, I’m always willing 
        to learn what’s necessary, and I’m excited to keep growing my skills as I work toward a future in technology.
        </p>
</div>


            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                My mission is to build efficient, reliable 
                software and keep growing through 
                real-world projects and continuous learning.
                </p>
            </div>
         </div>

        {/**Right Column -Highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
             {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
</section>

    );
};