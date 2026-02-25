export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery?: string[];
  video?: string;
  technologies: string[];
  duration: string;
  role: string;
  objectives: string[];
  outcomes: string[];
  challenges: string[];
  github?: string;
  demo?: string;
  links?: { label: string; url: string }[];
}

// Vite replaces import.meta.env.BASE_URL at build time:
// '/tjzhang-page/' on GitHub Pages, '/' in local dev.
const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    id: "posture-pal",
    title: "Posture Pal — AWS Innovation Challenge",
    category: "Embedded Systems",
    shortDescription: "Embedded wellness device for real-time posture monitoring with AI inference on AWS",
    description: "Prototyped an embedded wellness device integrating IMU and pressure sensors with Arduino and ESP8266 for real-time posture monitoring. Built a full-stack pipeline on AWS for AI inference and adaptive feedback. Awarded 3rd place at the AWS Innovation Challenge.",
    image: `${base}projects/pics/posture-pal.png`,
    technologies: ["ESP8266", "Arduino", "AWS", "IMU", "Wireless Communication", "Embedded Programming", "AI"],
    duration: "November 2025",
    role: "Lead Developer",
    objectives: [
      "Design embedded wellness device for real-time posture monitoring",
      "Integrate IMU and pressure sensors for accurate data acquisition",
      "Build cloud-based AI inference pipeline on AWS",
      "Develop adaptive feedback system through custom UI"
    ],
    outcomes: [
      "Awarded 3rd place at AWS Innovation Challenge",
      "Successfully integrated multi-sensor data acquisition system",
      "Deployed full-stack cloud pipeline with AI inference",
      "Achieved real-time wireless data transmission and processing"
    ],
    challenges: [
      "Ensuring accurate sensor fusion between IMU and pressure sensors",
      "Optimizing power consumption for wearable form factor",
      "Managing latency between embedded device and cloud inference"
    ],
    links: [
      { label: "Slides (PDF)", url: `${base}projects/posture-pal/posture-pal-slides.pdf` },
      { label: "LinkedIn Post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7393866859235905536/" }
    ]
  },
  {
    id: "spherical-robot",
    title: "Spherical Robot Navigation",
    category: "Robotics",
    shortDescription: "Reinforcement learning combined with PID/MPC controllers for spherical robot navigation in ROS2",
    description: "Combined reinforcement learning with PID/MPC controllers for spherical robot navigation in dynamic maze environments using ROS2 and Gazebo. Built a benchmarking framework for motion stability and control efficiency; containerized the workflow using Docker.",
    image: `${base}projects/pics/spherical-robot.gif`,
    technologies: ["ROS2", "Gazebo", "Reinforcement Learning", "PID", "MPC", "Docker", "Python"],
    duration: "March 2025 — May 2025",
    role: "Research Engineer",
    objectives: [
      "Develop adaptive navigation system for spherical robots",
      "Combine reinforcement learning with classical control methods",
      "Create simulation environment in ROS2 and Gazebo",
      "Build modular benchmarking framework for evaluation"
    ],
    outcomes: [
      "Successfully integrated RL with PID/MPC for hybrid control",
      "Achieved stable navigation in dynamic maze environments",
      "Developed reusable benchmarking framework",
      "Containerized entire workflow for reproducibility"
    ],
    challenges: [
      "Balancing learning-based and model-based control strategies",
      "Handling spherical robot's unique underactuated dynamics",
      "Ensuring real-time performance in simulation"
    ],
    links: [
      { label: "Paper (PDF)", url: `${base}projects/spherical-robot/spherical-robot-paper.pdf` }
    ]
  },
  {
    id: "graphene-scheduler",
    title: "Application of Graphene on Public Datasets",
    category: "Systems",
    shortDescription: "Applied Graphene cluster scheduler to evaluate performance and sustainability on public traces",
    description: "Applied the Graphene cluster scheduler to public cluster traces to evaluate performance and sustainability. Led a team of four, delivered weekly analysis updates, and wrote a final technical report.",
    image: `${base}projects/pics/graphene.jpg`,
    technologies: ["Graphene", "Cluster Scheduling", "Python", "Sustainability", "Data Analysis"],
    duration: "September 2024 — December 2024",
    role: "Team Lead",
    objectives: [
      "Apply Graphene scheduler to public cluster traces",
      "Evaluate performance metrics and sustainability impact",
      "Lead team of four in weekly analysis and reporting",
      "Document findings in comprehensive technical report"
    ],
    outcomes: [
      "Successfully analyzed multiple public cluster traces",
      "Identified key performance and sustainability trade-offs",
      "Delivered weekly presentations to stakeholders",
      "Completed comprehensive technical documentation"
    ],
    challenges: [
      "Processing and cleaning large-scale cluster trace data",
      "Coordinating team efforts across different analysis tasks",
      "Balancing performance optimization with sustainability goals"
    ],
    github: "https://github.com/JameZ233/cluster-scheduling",
    links: [
      { label: "Paper (PDF)", url: `${base}projects/graphene/graphene-paper.pdf` },
      { label: "Artifacts (PDF)", url: `${base}projects/graphene/graphene-artifacts.pdf` }
    ]
  },
  {
    id: "speech-to-braille",
    title: "Wearable Speech to Braille Device",
    category: "Accessibility",
    shortDescription: "Wi-Fi-based wearable converting speech into Braille-like vibration patterns for accessibility",
    description: "Designed a Wi-Fi-based wearable that converts speech into Braille-like vibration patterns for accessibility. The project won 2nd place at the Hack & Build 2024 hackathon at Columbia University.",
    image: `${base}projects/pics/speech-braille.jpeg`,
    technologies: ["Wearables", "Accessibility", "IoT", "Wi-Fi", "Speech Recognition", "Vibration Motors"],
    duration: "November 2024",
    role: "Hardware & Software Developer",
    objectives: [
      "Design wearable device for speech-to-Braille conversion",
      "Implement Wi-Fi-based communication for audio processing",
      "Create vibration pattern mapping for Braille representation",
      "Prototype functional device within hackathon timeframe"
    ],
    outcomes: [
      "Won 2nd place at Hack & Build 2024 hackathon",
      "Successfully demonstrated working prototype",
      "Featured in Columbia University news coverage",
      "Created accessible technology for visually impaired users"
    ],
    challenges: [
      "Converting speech to accurate Braille patterns in real-time",
      "Designing comfortable and intuitive wearable form factor",
      "Managing power and wireless connectivity constraints"
    ],
    links: [
      { label: "Presentation (PDF)", url: `${base}projects/speech-braille/speech-braille-presentation.pdf` }
    ]
  },
  {
    id: "quadruped-robot",
    title: "Quadruped Robot — Electronics & Control",
    category: "Robotics",
    shortDescription: "Open-source quadruped robot with custom PCBs and embedded control for educational use",
    description: "Leading electronics and low-level control development for an open-source quadruped robot, including multi-layer power distribution PCBs, motor drivers, and embedded control software for future college-level educational use.",
    image: `${base}projects/pics/ccbr.jpg`,
    gallery: [
      `${base}projects/ccbr/pics/pdb-annotated.jpg`,
      `${base}projects/ccbr/pics/pcb.jpg`,
    ],
    video: `${base}projects/ccbr/videos/leg-test.mp4`,
    technologies: ["Quadruped Robotics", "PCB Design", "Power Electronics", "Embedded Control", "Motor Drivers", "CAN Bus"],
    duration: "Ongoing",
    role: "Electronics Lead",
    objectives: [
      "Design multi-layer PCBs for power distribution and control",
      "Develop motor driver circuits for 12 actuators",
      "Implement embedded control software for locomotion",
      "Create open-source platform for educational use"
    ],
    outcomes: [
      "Successfully designed and fabricated custom PCBs",
      "Integrated CAN bus communication system",
      "Enabled cross-platform compatibility",
      "Contributing to open-source robotics education"
    ],
    challenges: [
      "Managing high-current power distribution for 12 motors",
      "Coordinating complex multi-leg locomotion algorithms",
      "Ensuring robust communication in electrically noisy environment"
    ],
    links: [
      { label: "Project Page", url: `${base}projects/ccbr/` },
      { label: "LinkedIn Highlight", url: "https://www.linkedin.com/company/ccbr-robotics/posts/?feedView=all" }
    ]
  },
  {
    id: "pacbot",
    title: "PacBot — Electrical Systems & Control",
    category: "Robotics",
    shortDescription: "Autonomous Pac-Man maze robot with custom PCB and PID control achieving 3rd place",
    description: "Designed the end-to-end electrical system for an autonomous Pac-Man maze robot as Electrical Lead. Built a compact integrated PCB with MCU, IR sensors, IMU, and motor drivers; implemented PID control for fast maze navigation. Achieved 3rd place in competition.",
    image: `${base}projects/pacbot/pics/robot-overview.jpg`,
    gallery: [
      `${base}projects/pacbot/pics/competition-2025.jpg`,
      `${base}projects/pacbot/pics/pcb.jpg`,
    ],
    technologies: ["PCB Design", "PID Control", "IR Sensors", "IMU", "Embedded Systems", "Motor Drivers"],
    duration: "2025",
    role: "Electrical Lead",
    objectives: [
      "Design compact integrated PCB for autonomous robot",
      "Integrate MCU, sensors, IMU, and motor drivers",
      "Implement PID control for precise navigation",
      "Achieve competitive performance in maze navigation"
    ],
    outcomes: [
      "Achieved 3rd place in PacBot competition",
      "Led Electrical Subteam of 10 members",
      "Implemented embedded PID control with 75% performance boost",
      "Successfully integrated all electrical subsystems"
    ],
    challenges: [
      "Minimizing PCB size while maintaining functionality",
      "Tuning PID parameters for fast and accurate movement",
      "Ensuring reliable sensor readings in competition environment"
    ],
    links: [
      { label: "Project Page", url: `${base}projects/pacbot/` }
    ]
  },
  {
    id: "etas-earthquake",
    title: "ETAS Earthquake Simulation & Nowcasting",
    category: "Geophysics",
    shortDescription: "Data-driven earthquake modeling and simulation contributing to peer-reviewed publication",
    description: "Developed and analyzed Epidemic Type Aftershock Sequence (ETAS) models to simulate millions of earthquakes and study information entropy in earthquake catalogs. Work contributed to a peer-reviewed publication and an honors thesis on data-driven earthquake nowcasting.",
    image: `${base}projects/pics/ETAS.png`,
    technologies: ["ETAS", "Earthquake Simulation", "Python", "Geophysics", "Machine Learning", "Data Analysis"],
    duration: "April 2022 — June 2024",
    role: "Research Assistant",
    objectives: [
      "Develop ETAS model for earthquake simulation",
      "Simulate and analyze millions of earthquakes globally",
      "Study information entropy in earthquake catalogs",
      "Apply machine learning for earthquake nowcasting"
    ],
    outcomes: [
      "Contributed to peer-reviewed journal publication",
      "Completed honors thesis on data-driven earthquake prediction",
      "Simulated millions of earthquakes with validated model",
      "Applied data-driven methods to improve prediction accuracy"
    ],
    challenges: [
      "Processing and analyzing massive earthquake datasets",
      "Validating simulation results against real-world data",
      "Integrating machine learning with physics-based models"
    ],
    links: [
      { label: "Journal Article", url: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023EA003367" },
      { label: "Honors Thesis", url: `${base}projects/earthquake/thesis.pdf` }
    ]
  }
];
