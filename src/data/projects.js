// Project portfolio data with descriptions and images
export const projects = [
  {
    id: 1,
    title: "Website Infolahta IV/Diponegoro",
    description:
      "Dynamic profile website for Infolahta IV/Diponegoro, with content managed via an integrated admin panel.",
    longDescription:
      "A fully dynamic website built with native PHP and Bootstrap SB Admin, designed to showcase the profile of Infolahta IV/Diponegoro. The site features an admin panel for managing content such as history, building information, articles, and other institutional data, enabling real-time updates without touching the code.",
    image: "/images/project-1.png",
    imageAlt:
      "Dashboard admin panel of Infolahta IV/Diponegoro website showing content management for history, buildings, and articles",
    technologies: ["Html", "Css", "Php", "Bootstrap", "MySQL"],
    liveUrl: "https://infolahtadip.com/",
    githubUrl: "https://github.com/ArasyAl475/Admin_Kodam",
    category: "Web & Landing Pages",
    featured: true,
  },
  {
    id: 2,
    title: "AHP Supplier System",
    description:
      "Integrated supplier management and decision support system to identify the best suppliers using AHP (Analytic Hierarchy Process).",
    longDescription:
      "A web-based system that combines enterprise management and decision support to evaluate and rank suppliers. The system implements a procurement supplier management workflow and applies the AHP method to compare suppliers hierarchically, producing a ranked list of suppliers based on multiple criteria. This helps organizations make data-driven supplier selection decisions efficiently.",
    image: "/images/project-2.png",
    imageAlt:
      "Dashboard interface showing supplier ranking and analytics with decision support features",
    technologies: ["Laravel", "React", "TailwindCSS", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ahmad-imtiyaz/supplier-selection-ahp",
    category: "Decision / Enterprise Systems",
    featured: true,
  },
  {
    id: 3,
    title: "Mondigi - KBR",
    description:
      "Web-based system for managing, monitoring, and evaluating the Kebun Bibit Rakyat (KBR) program.",
    longDescription:
      "Mondigi KBR (Digital Monitoring and Evaluation for Kebun Bibit Rakyat) is a web-based system designed to manage, monitor, and evaluate all stages of the Kebun Bibit Rakyat (KBR) program. The application is under continuous development, so features, interface, and data flow may change without prior notice. The information displayed is dynamic and compiled from group data, plans and implementation progress, issues, and planting data entered by KBR executing groups. The data requires further verification if used for official reports or external publications. This application is intended for internal operational and monitoring purposes only.",
    image: "/images/project-3.png",
    imageAlt:
      "Mondigi KBR dashboard showing monitoring and evaluation data for Kebun Bibit Rakyat",
    technologies: ["Laravel", "TailwindCSS", "MySQL", "Vite", "Blade Template"],
    liveUrl: "https://mondigi-kbr.site/",
    githubUrl: "https://github.com/daniizzulhaq/app-kiss-kbr",
    category: "Internal & Management Systems",
    featured: true,
  },
  {
    id: 4,
    title: "Smart Caffe",
    description:
      "Smart café web platform with menu management, ordering system, and AI-powered chatbot for personalized menu recommendations.",
    longDescription:
      "A modern web application for cafés featuring menu display, shopping cart, and ordering system. The standout feature is an AI-integrated chatbot powered by Gemini AI, which can suggest suitable menu items based on user input, e.g., 'What food is good to eat on a cold day?'. The platform is built using TypeScript, React (TSX/JSX), TailwindCSS, and JavaScript, with a simple JSON-based database for temporary data storage.",
    image: "/images/project-4.png",
    imageAlt:
      "Smart café dashboard showing menu, ordering system, and AI chatbot interface for menu recommendations",
    technologies: ["TypeScript", "React", "TailwindCSS", "JavaScript", "JSON"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ahmad-imtiyaz/SmartCaf-/tree/master",
    category: "Web & Landing Pages",
    featured: false,
  },
  {
    id: 5,
    title: "Website HIMA Sistem & Teknologi Informasi",
    description:
      "Web application to monitor members, events, and financial contributions with dual login functionality.",
    longDescription:
      "The HIMA Information Systems Website is a platform designed to help HIMA (Student Association of Information Systems) efficiently manage and monitor its members, events, and financial contributions. The system provides dual login access, allowing admins to oversee organizational data and members to track their participation. One of the key features is the ability for members to pay their contributions conveniently through QR code scanning. Overall, the application serves as a central hub for internal monitoring, event updates, and financial transparency within HIMA.",
    image: "/images/project-5.png",
    imageAlt:
      "HIMA website dashboard showing member monitoring, events, and financial tracking",
    technologies: ["PHP", "Bootstrap", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/ahmad-imtiyaz/web-hima-sti",
    category: "Internal & Management Systems",
    featured: false,
  },
  {
    id: 6,
    title: "School Academic Management System",
    description:
      "Web platform for managing student exams, tracking performance, and generating results.",
    longDescription:
      "This Student Examination Evaluation System is a web-based platform designed to help schools manage student assessments efficiently. It allows staff to handle subjects, teacher lists, student lists, class rankings, and print exam results. Multiple roles, including admins, principals, and teachers, can access the system to monitor performance and make decisions on student progression. The system centralizes all examination data and provides a clear overview of students' academic achievements.",
    image: "/images/project-6.png",
    imageAlt:
      "Dashboard showing student exam results, rankings, and class management",
    technologies: ["PHP", "Bootstrap", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/ahmad-imtiyaz/web-sekolah-mandemak",
    category: "Internal & Management Systems",
    featured: false,
  },
  {
    id: 7,
    title: "Hotel Room Booking",
    description:
      "Web platform for managing hotel room bookings, staff roles, and daily operations.",
    longDescription:
      "The Hotel Room Booking System is a web-based platform designed to streamline hotel operations by dividing roles into Superadmin, Cashier, and Cleaning staff. The Superadmin has full control over all hotel operations, including room management, payments, assigning cleaning tasks, and monitoring overall activity. The Cashier receives room bookings, updates room occupancy status, and tracks guest check-outs. When a room needs cleaning, a notification is sent to the Cleaning staff, who can then claim completed cleaning tasks. The Superadmin receives notifications to track room usage and generate daily reports. The system also includes features to export booking data to Excel on daily, weekly, monthly, or yearly intervals. Overall, it centralizes hotel operations, ensures smooth workflow among staff, and provides clear tracking of room usage.",
    image: "/images/project-7.png",
    imageAlt:
      "Hotel dashboard showing room bookings, staff roles, and daily operations",
    technologies: ["Laravel", "Bootstrap", "Blade Template", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/ahmad-imtiyaz/web-joki-hotel",
    category: "Internal & Management Systems",
    featured: false,
  },
  {
    id: 8,
    title: "Caffe Senja Antariksa",
    description:
      "Landing page website for a café showcasing simple menu offerings.",
    longDescription:
      "Caffe SenjaAntariksa is the first website I ever built, inspired by tutorials from Shandika Galih. I include this project in my portfolio as a form of personal appreciation to him, as his guidance helped me reach this milestone. Although the website is simple—a landing page showcasing a café and its basic menu items—I am proud of completing it and marking the start of my journey in web development.",
    image: "/images/project-8.png",
    imageAlt:
      "Landing page of Caffe SenjaAntariksa showing café menu and offerings",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/ahmad-imtiyaz/senja-antariksa",
    category: "Web & Landing Pages",
    featured: false,
  },
  {
    id: 9,
    title: "Aset Kodam IV/Diponegoro",
    description:
      "Web platform for monitoring and managing assets with multi-role access for admins and users.",
    longDescription:
      "This Asset Management System for Kodam IV/Diponegoro is a web-based platform that allows admins to manage and monitor all organizational assets, including BMN data, Yardip assets, ownership rights, and reports. Admins can add, edit, or delete data, while regular users have view-only access. The system also allows exporting asset data to Excel and provides real-time monitoring accessible anytime and anywhere. It helps streamline asset management, improves transparency, and ensures accurate tracking of organizational property.",
    image: "/images/project-9.png",
    imageAlt:
      "Dashboard showing asset management, maps, and ownership details for Kodam IV/Diponegoro",
    technologies: ["Node.js", "React", "TailwindCSS", "JavaScript"],
    liveUrl: "asetkodam.com",
    githubUrl: "https://github.com/Farhanrahardian/Aset-Kodam-IV-Diponegoro",
    category: "Internal & Management Systems",
    featured: false,
  },
];
