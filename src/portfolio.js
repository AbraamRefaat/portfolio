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
  subTitle: "FLUTTER DEVELOPER WHO LOVES BUILDING MOBILE APPLICATIONS",
  skills: [
    emoji("⚡ Develop highly interactive and responsive mobile applications"),
    emoji("⚡ Create clean and maintainable code using OOP concepts"),
    emoji("⚡ Integration of third party services such as Firebase and Supabase")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "react-js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "problem-solving",
      fontAwesomeClassname: "fas fa-puzzle-piece"
    },
    {
      skillName: "data-structures",
      fontAwesomeClassname: "fas fa-project-diagram"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MSA University",
      logo: require("./assets/images/msa university logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - June 2026",
      desc: "Currently pursuing a degree in Computer Science.",
      descBullets: []
    },
    {
      schoolName: "AMIT, Association Of Management and Information Technology",
      logo: require("./assets/images/amit_logo.jpeg"),
      subHeader: "Flutter Course",
      duration: "September 2024 - June 2025",
      desc: "Comprehensive Flutter development course covering mobile app development fundamentals and advanced concepts.",
      descBullets: []
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
  display: false, //Set it to false to hide workExperiences Section
  experience: [
    {
      role: "Flutter Intern",
      company: "AMIT",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Sep 2024 – June 2025",
      desc: "Completed a comprehensive mobile app development diploma focusing on Flutter and Dart, covering both beginner and advanced concepts."
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
  subtitle: "MOBILE APPLICATIONS I'VE BUILT",
  projects: [
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
      image: require("./assets/images/Instagram Logo.jpg"),
      projectName: "Instagram Clone",
      projectDesc: "A full-featured Instagram clone using Flutter and Firebase as the backend.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/AbraamRefaat/instagram-clone.git"
        }
      ]
    },
    {
      image: require("./assets/images/bazooka logo.png"),
      projectName: "Bazooka Clone",
      projectDesc: "A restaurant mobile application using Flutter, inspired by the real-world Bazooka app.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+20 01068002787",
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
