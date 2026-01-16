import {Code, User, Briefcase} from 'lucide-react';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/*  */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        {/* Main layout: 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column (Text and buttons) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software/Game Developer</h3>
            <p className="text-muted-foreground">
              Currently a senior in college whose passionate in working in software/game development using modern technologies and frameworks. I have worked on projects as a back-end and front-end developer.
            </p>
            <p className="text-muted-foreground">Put anything else here.</p>
          </div>
          
          {/* Right column (Icons/Cards) - This div was previously nested incorrectly */}
          <div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className = "font-semibold text-lg">Education </h4>
                    <p className="text-muted-foreground">  Studied Computer Science with a minor in Studio Arts.
                    </p>

                  </div>
                  {/* Add content for the card here if needed */}
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                 <div className="text-left">
                    <h4 className = "font-semibold text-lg">Software/Mobile Development</h4>
                    <p className="text-muted-foreground">Focused on creating responsive websites, softwares, and apps that utilize modern frameworks.
                    </p>
                  </div>
                  
                  {/* Add content for the card here if needed */}
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className = "font-semibold text-lg">Full Time/Freelance Work</h4>
                    <p className="text-muted-foreground"> Interested in working full time and freelancing!
                    </p>

                  </div>
                  {/* Add content for the card here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
