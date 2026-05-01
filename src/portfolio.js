/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abraam Refaat",
  title: "Hi all, I'm Abraam",
  subTitle: emoji(
    "A passionate Flutter Developer 🚀 with experience in building mobile applications with Flutter, Firebase, and Supabase."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AbraamRefaat",
  linkedin: "https://www.linkedin.com/in/abraam-refaat-4aa78535b/",
  gmail: "abraamrefaat0@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER PASSIONATE ABOUT MOBILE & AI APPLICATIONS",
  skills: [
    emoji("⚡ Develop highly interactive mobile applications with Flutter and modern frameworks"),
    emoji("⚡ Build AI-powered solutions using Machine Learning and NLP technologies"),
    emoji("⚡ Design scalable cloud architectures with Docker, Kubernetes, and microservices"),
    emoji("⚡ Create RESTful APIs and implement secure authentication systems")
  ],

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "MSA University",
      logo: require("./assets/images/msa university logo.png"),
      partnerLogo: require("./assets/images/university-of-greenwich.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - July 2026 (Expected)",
      desc: "Currently pursuing a degree in Computer Science.",
      descBullets: [
        "Affiliated with University of Greenwich, UK"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Hide Proficiency Section
  experience: [],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to false to hide workExperiences Section
  experience: [
    {
      role: "Internship Trainee",
      company: "Arab African International Bank (AAIB)",
      companylogo: require("./assets/images/aaib_logo.png"),
      date: "Aug 2024",
      desc: "Completed an internship at AAIB gaining experience in professional work environments.",
      descBullets: [
        "Developed strong communication, problem-solving, and teamwork skills through real-world tasks",
        "Gained exposure to systems, workflows, and data handling within an enterprise environment"
      ]
    },
    {
      role: "Flutter Intern",
      company: "AMIT",
      companylogo: require("./assets/images/amit_logo.jpeg"),
      date: "Sep 2024 – June 2025",
      desc: "Completed a comprehensive mobile app development diploma focusing on Flutter and Dart, covering both beginner and advanced concepts.",
      descBullets: [
        "Built multiple apps (Note App with Sqflite, Diary App with Hive, E-commerce App, News App) applying OOP principles and clean architecture",
        "Developed responsive UIs with animations, used Provider & Bloc for state management, and integrated Firebase (Auth, Notifications) and Supabase (Auth, DB, Storage)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/nilequest_logo.png"),
      projectName: "NileQuest",
      projectDesc: "An AI-powered tourism mobile application featuring personalized recommendations, trip planning, and interactive chatbot assistance.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/AbraamRefaat/NileQuest-app.git"
        }
      ]
    },
    {
      image: require("./assets/images/edumaster_logo.png"),
      projectName: "Edu-Master",
      projectDesc: "An educational platform mobile application for online learning and course management.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/AbraamRefaat/Edu-Master.git"
        }
      ]
    },
    {
      image: require("./assets/images/ethical_ai_logo.png"),
      projectName: "Ethical AI-as-a-Service",
      projectDesc: "Cloud-based AI service platform with Kubernetes deployment for scalable and ethical AI solutions.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/omar69sameh/Cloud-Deployment-with-Kubernetes.git"
        }
      ]
    },
    {
      image: require("./assets/images/ai_governance_logo.png"),
      projectName: "AI Governance Dashboard",
      projectDesc: "A comprehensive dashboard for monitoring and managing AI model governance, compliance, and ethical considerations.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/khaledamrr/ai-governance-dashboard.git"
        }
      ]
    },
    {
      image: require("./assets/images/resilince_logo.jpeg"),
      projectName: "RESILIENCE E-commerce App",
      projectDesc: "A full-featured e-commerce mobile application for the RESILIENCE clothing brand using Flutter and Supabase.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/AbraamRefaat/RESILIENCE-E-commerce-App.git"
        }
      ]
    },
    {
      image: require("./assets/images/Instagram Logo.png"),
      projectName: "Instagram Clone",
      projectDesc: "A full-featured Instagram clone using Flutter and Firebase as the backend.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/AbraamRefaat/instagram-clone.git"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications I have received!",

  achievementsCards: [
    {
      title: "Project of The Second Year in DeepMind event",
      subtitle: "MSA University",
      image: require("./assets/images/logo.png"),
      imageAlt: "Project Award Logo",
      footerLink: [
        {
          name: "Project Code",
          url: "https://github.com/AmrMohamedNabih/x-gym"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20 1068002787",
  email_address: "abraamrefaat0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set false to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
