import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Flutter Developer Portfolio
 * Design: Modern Minimalist with Accent Colors
 * - Typography: Poppins (headings) + Inter (body)
 * - Colors: Deep Blue (#1e40af) + Cyan (#06b6d4)
 * - Layout: Asymmetric cards with alternating project layouts
 * - Interactions: Smooth hover effects, scroll-triggered animations
 */

export default function Home() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setVisibleProjects([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample projects - Replace with your actual projects
  const projects = [
    {
      id: 0,
      title: "Souq MyCar",
      description: "Mobile app for buying and selling cars online.",
      technologies: ["Flutter", "Firebase", "Bloc"],
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.souqcar.app&pcampaignid=web_share",
      // githubUrl: "https://github.com/yourusername/ecommerce-app",
      appstorUrl: "https://apps.apple.com/us/app/سوق-سيارتي/id6759757787",
      image: "/images/playstore.png",
      featured: true,
    },
    {
      id: 1,
      title: "Bio Ghar",
      description: "The BioGhar app is your gateway to luxurious skincare products designed to elevate your daily beauty routine. Discover a range of skincare, haircare, and body care products crafted with quality, luxury, and exceptional care.",
      technologies: ["Flutter", "GetX"],
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.bioghar.cosmetics&pcampaignid=web_share",
      // githubUrl: "https://github.com/yourusername/weather-app",
      image: "/images/bioghar.png",
      featured: true,
    },
    {
      id: 2,
      title: "Alisar Library",
      description: "An app to Help students study from thier Phones adding Notes,and study offline",
      technologies: ["Flutter", "GetX", "Hive"],
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.app.alissarlibrary",
      // githubUrl: "https://github.com/yourusername/weather-app",
      image: "/images/landing.png",
      appstorUrl: "https://apps.apple.com/us/app/alisar-library-مكتبة-أليسار/id6759269851",
      featured: false,
    },
    {
      id: 3,
      title: "Spicy Offers Establishment",
      description: "",
      technologies: ["Flutter", "Firebase", "Cubit"],
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.spicyoffers.facilitiesapp&pcampaignid=web_share",
      // githubUrl: "https://github.com/yourusername/social-chat",
      image: "https://play-lh.googleusercontent.com/CPOodd1fvp92_Nq-KQJI5HOGiQNWe7nfQOlzy4x-PwvOINQ9l7RhiW2K3oH5AdGbB4Mx=w240-h480",
      featured: false,
    },
    {
      id: 4,
      title: "Seen",
      description: "Educational quiz app with interactive quizzes and leaderboards.",
      technologies: ["Flutter", "SQfLite", "GetX", "Background Services",],
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.seenapp.seen",

      image: "/images/feature_seen.png",
      featured: false,
    }, {
      id: 5,
      title: "One Store",
      description: "E-commerce application for online shopping.",
      technologies: ["Flutter", "Cubit", "FireBase"],
      appstorUrl: '',
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.onestore.onestore&pcampaignid=web_share",
      // githubUrl: "https://github.com/yourusername/weather-app",
      image: "/images/1080logo.png",
      featured: false,
    }, {
      id: 13,
      title: "E-Commerce API ",
      description: "",
      technologies: ["Node JS", "Express Js", "MySql"],
      // googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
      // telegramurl: "https://t.me/seen_app_sy",
      githubUrl: "https://github.com/habibkh963/ecommerace_node_js.git",
      image: "/images/nodejsDark.svg",
      featured: true,
    }, {
      id: 6,
      title: "Gen AI App",
      description: "Application leveraging AI for content generation and intelligent features.",
      technologies: ["Flutter", "Singleton", "Bloc", "Reactive Chat",],
      githubUrl: "https://github.com/habibkh963/mint_ai.git",
      image: "public/images/flutter.png",
      featured: false,
    }, {
      id: 7,
      title: "Dental Flow",
      description: "Desktop app for clinic organization and management.",
      technologies: ["Flutter", "GetX", "Sqflite", "Windows App",],
      githubUrl: "https://github.com/habibkh963/Dental_flow.git",
      image: "/images/Screenshot (527).png",
      featured: false,
    }, {
      id: 8,
      title: "Doodge Game",
      description: "A thrilling dodge game built with Flutter and the Flame game engine. Navigate your spaceship through an endless barrage of falling meteors, testing your reflexes and strategy in this fast-paced arcade experience.",
      technologies: ["Flutter", "Flame: 2D game engine for Flutter",],
      githubUrl: "https://github.com/habibkh963/flame_Game.git",
      image: "/images/flutter.png",
      featured: false,
    },

    {
      id: 9,
      title: "Live Streaming App",
      description: "Currently Working on : A live streaming application built with Flutter, enabling users to broadcast and watch live video content seamlessly. Featuring real-time interaction, chat functionality, and high-quality streaming capabilities for an engaging user experience.",
      technologies: ["Flutter", "bloc", "zego Cloud", "socket.io", "AI Face Recognition"],

      image: "/images/flutter.png",
      featured: false,
    },
    {
      id: 10,
      title: " kindergarten Manage app ",
      description: "Smart Application to Help parents choose what there childs can eat in the kindergarten ",
      technologies: ["Flutter", "getX",],

      image: "/images/flutter.png",
      featured: false,
    }, {
      id: 11,
      title: "Pets Care App",
      description: "Assists pet owners with appointments, meal reminders, custom activities, and acommunity for sharing tips.",
      technologies: ["Flutter", "Cubit", "Work Manager"],
      // googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
      // telegramurl: "https://t.me/seen_app_sy",
      image: "/images/flutter.png",
      featured: false,
    }, {
      id: 12,
      title: "Treasure Island ",
      description: "Visual Competions Tow teams compete to find the treasure first by answering questions. ",
      technologies: ["Flutter", "GetX",],
      // googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
      // telegramurl: "https://t.me/seen_app_sy",
      image: "/images/logo.png",
      featured: false,
    },

    // {
    //   id: 11,
    //   title: "BioGhar",
    //   description: "",
    //   technologies: ["Flutter", "GetX",],
    //   // googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
    //   // telegramurl: "https://t.me/seen_app_sy",
    //   image: "public/images/flutter.png",
    //   featured: false,
    // }, 

    {
      id: 13,
      title: "Gym App ",
      description: "",
      technologies: ["Node JS", "Express Js", "Mongo DB"],
      // googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
      // telegramurl: "https://t.me/seen_app_sy",
      image: "/images/nodejsDark.svg",
      featured: false,
    },
  ];

  const skills = [
    { category: "Mobile Development", items: ["Flutter", "Dart", "iOS", "Android", "Web", "Windows", "Clean Architecture"] },
    { category: "State Management", items: ["Provider", "Bloc", "GetX"] },
    { category: "Backend & Database", items: ["Firebase", "SQLite", "Hive", "REST APIs", "WebSockets"] },


    { category: "Tools & Platforms", items: ["Git", "GitHub", "Google Play", "App Store", "CI/CD (GitLab,GitHub)", "Postman", "Swagger"] },
    { category: "Security Practice", items: ["JWT", "Obfuscation", "HTTPS", "Obfuscation", "root detection"] },
    { category: "Testing & Debugging", items: ["Unit Testing", "Debugging Tools ", "AI-Assisted Development Tools",] },


  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <span className="font-bold text-lg heading-md">Flutter Dev</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="order-2 md:order-1">
              <span className="text-label text-accent mb-4 inline-block">
                Welcome to my portfolio
              </span>

              <h1 className="heading-display mb-4 text-primary">
                Al Habib Khaddam
              </h1>

              <h2 className="text-2xl font-semibold text-muted-foreground mb-6">
                Flutter Developer
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Crafting beautiful, performant mobile applications with Flutter.
                Experienced in live streaming, real-time apps, and clean architecture.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View My Projects
                </Button>

                <a href="/pdf/Habib_Khaddam_Resume.pdf" download>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src="/images/profile.png"
                  alt="Al Habib Khaddam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container">
          <div className="mb-16">
            <h2 className="heading-lg mb-4 text-primary">
              <span className="gradient-underline">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my recent Flutter applications available on Google Play and GitHub. Each project showcases different aspects of mobile development.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const isVisible = visibleProjects.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isVisible ? (isEven ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"
                    }`}
                  style={{
                    animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {/* Image */}
                  <div className={isEven ? "md:order-1" : "md:order-2"}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg hover-lift">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "md:order-2" : "md:order-1"}>
                    <h3 className="heading-md mb-3 text-primary">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-label text-muted-foreground mb-3">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.googlePlayUrl != null ? (<a
                        href={project.googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Google Play
                      </a>) : null}
                      {project.appstorUrl != null && project.appstorUrl.length > 0 ? (<a
                        href={project.appstorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={18} />
                        AppStore
                      </a>) : null}
                      {project.githubUrl != null ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      ) : null}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <div className="mb-16">
            <h2 className="heading-lg mb-4 text-primary">
              <span className="gradient-underline">Skills & Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical skills and expertise in Flutter development and related technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="heading-md mb-4 text-primary text-lg">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg mb-4 text-primary">
              <span className="gradient-underline">Let's Connect</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:habib.kh.4527.social@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://github.com/habibkh963"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/al-habib-khaddam-40b2a822a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 Flutter Developer Portfolio. Built  by Al Habib Khaddam</p>
        </div>
      </footer>
    </div>
  );
}
