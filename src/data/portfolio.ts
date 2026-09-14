export const PORTFOLIO_DATA = {
  personal: {
    name: "DEBABRATA SAHU",
    role: "Aspiring VLSI Researcher & Digital Hardware Designer",
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "NIST University",
    cgpa: "7.7/10",
    email: "debabratasahu05112003@gmail.com",
    linkedin: "https://www.linkedin.com/in/debabrata-sahu-05ad112003/",
    github: "[YOUR GITHUB]",
    resume: "/Resume.pdf",
    shortBio: "I explore efficient digital hardware architectures through RTL design, FPGA implementation, and VLSI-oriented research.",
    secondBio: "My work spans digital IC design, computer arithmetic, approximate computing, FPGA-based systems, and mixed-signal IC design.",
    aboutHeading: "ABOUT ME",
    aboutBody: "My interest in electronics began with fundamental logic and quickly evolved toward digital hardware design, RTL architectures, FPGA implementation, and VLSI.\n\nI explore Verilog-based RTL design, arithmetic architectures, and the trade-offs between hardware complexity, performance, and precision. This has led me to projects involving floating-point FMA architectures, approximate computing, and mixed-signal IC design.\n\nUltimately, my goal is to pursue graduate study in VLSI, digital IC design, and hardware-efficient computing."
  },
  stats: [
    { value: "VLSI & FPGA", label: "Primary Technical Focus" },
    { value: "Research + Internships", label: "Academic & Industry Exposure" },
    { value: "B.Tech ECE", label: "NIST University" }
  ],
  researchInterests: [
    {
      title: "DIGITAL IC DESIGN",
      description: "Design and implementation of efficient digital circuits and architectures for modern computing systems."
    },
    {
      title: "VLSI & HARDWARE ARCHITECTURES",
      description: "Exploring area-, performance-, and resource-efficient hardware architectures."
    },
    {
      title: "COMPUTER ARITHMETIC",
      description: "Interest in floating-point arithmetic, FMA architectures, arithmetic datapaths, and computational hardware."
    },
    {
      title: "APPROXIMATE COMPUTING",
      description: "Exploring the trade-offs between accuracy, area, power, and performance in approximate arithmetic circuits."
    },
    {
      title: "FPGA-BASED COMPUTING",
      description: "RTL implementation, FPGA synthesis, simulation, hardware evaluation, and architecture exploration."
    },
    {
      title: "EDA & DESIGN METHODOLOGIES",
      description: "Interest in RTL synthesis, optimization, verification, circuit simulation, and VLSI design methodologies."
    }
  ],
  projects: [
    {
      id: "01",
      title: "CONFIGURABLE FLOATING-POINT FMA UNIT",
      subtitle: "Mixed-Precision Arithmetic Architecture",
      category: "RTL DESIGN / FPGA / COMPUTER ARITHMETIC",
      image: "/projects/configurable-floating-point-fma-unit.jpg",
      description: "Designed a configurable floating-point fused multiply-add (FMA) architecture supporting mixed-precision computation. The design was implemented using Verilog HDL and evaluated using Xilinx Vivado, with emphasis on arithmetic correctness, configurability, and hardware implementation.",
      technologies: ["Verilog HDL", "Xilinx Vivado", "XSim", "RTL Design", "FPGA"],
      focus: ["Floating-point arithmetic", "Mixed-precision computation", "RTL architecture", "FPGA implementation", "Hardware optimization"],
      architecture: [
        "Input Operands", "Floating-Point Processing", "Multiplication", "Exponent Alignment", "Addition", "Normalization", "Rounding", "Output"
      ],
      details: {
        results: "Results to be added"
      }
    },
    {
      id: "02",
      title: "APPROXIMATE MULTIPLIER",
      subtitle: "Hardware-Efficient Approximate Arithmetic",
      category: "VLSI / APPROXIMATE COMPUTING",
      image: "/projects/approximatemultiplier.png",
      description: "Designed an approximate multiplier using approximate compressor structures to investigate the trade-off between arithmetic accuracy and hardware cost. The architecture was implemented using Verilog HDL and evaluated using FPGA-oriented simulation and synthesis.",
      technologies: ["Verilog HDL", "Xilinx Vivado", "RTL Design", "FPGA"],
      architecture: [
        "Input A + Input B", "Partial Product Generation", "Approximate Compression", "Error Encoding", "Partial Product Reduction", "Final Product"
      ],
      evaluation: true,
      details: {
        results: "Results to be added"
      }
    },
    {
      id: "03",
      title: "12-BIT DIGITAL-TO-ANALOG CONVERTER",
      subtitle: "Cadence-Based Mixed-Signal IC Design",
      category: "MIXED-SIGNAL IC DESIGN",
      image: "/projects/12-bit-digital-to-analog-converter.jpg",
      description: "Designed and simulated a 12-bit Digital-to-Analog Converter using Cadence, exploring mixed-signal circuit implementation and analog output behavior.",
      technologies: ["Cadence Virtuoso", "Circuit Simulation", "Mixed-Signal IC Design"],
      architecture: [
        "Digital Input", "DAC Architecture", "Switching / Conversion Network", "Analog Output", "Circuit Simulation", "Performance Analysis"
      ],
      focus: ["12-bit DAC design", "Cadence Virtuoso", "Mixed-signal IC design", "Circuit simulation", "Analog output analysis"],
      details: {
        results: "Results to be added"
      }
    },
    {
      id: "04",
      title: "TERAHERTZ METAMATERIAL ABSORBER-BASED SKIN CANCER DETECTION SYSTEM",
      subtitle: "Research Project — Electromagnetic Sensing",
      category: "RESEARCH / ELECTROMAGNETICS",
      image: "/projects/terahertz-metamaterial-absorber.jpg",
      description: "Designed and investigated a terahertz metamaterial absorber for skin cancer detection applications. The structure was modeled and simulated using CST Studio Suite, followed by analysis of S-parameters, absorption characteristics, and resonance behavior for different tissue conditions.",
      technologies: ["CST Studio Suite", "Electromagnetic Simulation", "S-Parameter Analysis", "Metamaterials"],
      architecture: [
        "Metamaterial Unit Cell", "CST Modeling", "Electromagnetic Simulation", "S-Parameters", "Absorption Characteristics", "Resonance Analysis", "Tissue Comparison"
      ],
      details: {
        results: "Results to be added"
      }
    },
    {
      id: "05",
      title: "DECENTRALIZED NETWORKS",
      category: "DECENTRALIZED SYSTEMS / NETWORKS",
      image: "/projects/decentralized.png",
      description: "Explored the concepts and architecture of decentralized networks, focusing on distributed communication, peer-to-peer connectivity, and the principles of network decentralization.",
      focus: ["Decentralized Systems", "Distributed Networks", "Peer-to-Peer Communication", "Network Architecture"],
      details: {
        results: "Results to be added"
      }
    },
    {
      id: "06",
      title: "IoT-BASED MINING WORKER SAFETY HELMET",
      category: "EMBEDDED / IoT",
      image: "/projects/smartmining.png",
      description: "Developed an IoT-enabled safety system designed to monitor environmental and worker-safety parameters in mining environments using sensors, microcontrollers, and cloud-based monitoring.",
      technologies: ["Arduino / ESP32", "Sensors", "IoT", "ThingSpeak"],
      details: {
        results: "Results to be added"
      }
    },
    {
      id: "07",
      title: "SMART AGRICULTURE MONITORING SYSTEM",
      category: "EMBEDDED / IoT",
      image: "/projects/smartgreenhouse.png",
      description: "Developed an IoT-based agricultural monitoring system for sensing environmental conditions and supporting data-driven monitoring of agricultural parameters.",
      technologies: ["Arduino / ESP32", "Sensors", "IoT", "ThingSpeak"],
      details: {
        results: "Results to be added"
      }
    }
  ],
  experience: [
    {
      title: "RESEARCH INTERN — NIT JAMSHEDPUR",
      project: "Terahertz Metamaterial Absorber-Based Skin Cancer Detection System",
      date: "18 May 2026 – 18 June 2026",
      image: "/experience/nit-jamshedpur.jpg",
      description: "Completed a research internship at NIT Jamshedpur focused on the design and investigation of a terahertz metamaterial absorber for skin cancer detection applications.",
      details: [
        "Designed and modeled metamaterial structures.",
        "Performed electromagnetic simulations using CST Studio Suite.",
        "Analyzed S-parameters and absorption characteristics.",
        "Investigated resonance-frequency behavior.",
        "Studied the response of the absorber for different tissue conditions.",
        "Explored metamaterial-based sensing for biomedical applications."
      ]
    },
    {
      title: "FACULTY DEVELOPMENT PROGRAM — FPGA-BASED COMMUNICATION SYSTEM DESIGN",
      project: "FCSD-2026 | Electronics & ICT Academy, NIT Patna & NIT Jamshedpur",
      date: "25 May 2026 – 5 June 2026",
      image: "/experience/fcsd-2026.jpg",
      description: "Completed the Faculty Development Program on “FPGA-Based Communication System Design (FCSD-2026)”, jointly organized by Electronics & ICT Academy, NIT Patna and NIT Jamshedpur under the Ministry of Electronics and Information Technology (MeitY), Government of India.",
      details: [
        "FPGA-based system design",
        "Digital communication systems",
        "Hardware implementation",
        "FPGA architecture and development"
      ]
    },
    {
      title: "VLSI PROJECT-BASED INTERN — EDXCELLENCE",
      project: "",
      date: "20 January 2026 – 18 March 2026",
      image: "/experience/edxcellence-vlsi.jpg",
      description: "Completed a project-based internship in Very-Large-Scale Integration (VLSI) with EdXcellence, an AICTE- and APSCHE-approved organization.",
      details: [
        "VLSI design concepts",
        "Digital hardware design",
        "RTL-based design",
        "Project-oriented hardware implementation"
      ]
    },
    {
      title: "ELECTRONICS & TELECOMMUNICATION INTERN — CENTRAL COALFIELDS LIMITED",
      project: "Smart Greenhouse Monitoring System | Ranchi, Jharkhand",
      date: "01 June 2025 – 30 June 2025",
      image: "/experience/central-coalfields.jpg",
      description: "Completed an internship in the Department of Electronics & Telecommunication (E&T) at Central Coalfields Limited, Ranchi, where I worked on a Smart Greenhouse Monitoring System.",
      details: [
        "Sensor interfacing",
        "Environmental monitoring",
        "Microcontroller-based systems",
        "IoT-based monitoring",
        "Hardware implementation and debugging"
      ]
    },
    {
      title: "MATLAB & ENGINEERING APPLICATIONS TRAINING",
      project: "NIST University, Berhampur",
      date: "12 July 2024 – 1 August 2024",
      image: "/experience/matlab-training.jpg",
      description: "Completed practical training in MATLAB and its applications in engineering, developing foundational skills in numerical computation, analysis, simulation, and engineering problem-solving.",
      details: []
    }
  ],
  education: [
    {
      degree: "B.TECH IN ELECTRONICS & COMMUNICATION ENGINEERING",
      university: "NIST University, Berhampur, India",
      date: "2023 – 2027",
      cgpa: "CGPA: 7.7/10",
      description: "Currently pursuing a Bachelor of Technology in Electronics & Communication Engineering, with an academic and project focus on digital electronics, RTL design, FPGA-based systems, VLSI, computer arithmetic, and hardware architectures.",
      details: [
        "Digital Electronics",
        "VLSI Design",
        "Microprocessors & Microcontrollers",
        "Analog & Digital Communication",
        "Computer Architecture",
        "Embedded Systems",
        "Signal Processing",
        "Electronic Devices & Circuits"
      ]
    },
    {
      degree: "INTERMEDIATE — SCIENCE",
      university: "Government Autonomous College, Rourkela, India",
      date: "2020 – 2022",
      cgpa: "70%",
      description: "Completed higher secondary education in the Science stream, building a foundation in physics, chemistry, mathematics, and scientific problem-solving.",
      details: []
    },
    {
      degree: "MATRICULATION",
      university: "Indo English School, Rourkela, India",
      date: "Completed: 2020",
      cgpa: "82.5%",
      description: "Completed secondary education with a foundation in mathematics, science, and analytical learning.",
      details: []
    }
  ],
  courses: [
    {
      title: "FPGA-BASED COMMUNICATION SYSTEM DESIGN (FCSD-2026)",
      organization: "Electronics & ICT Academy, NIT Patna & NIT Jamshedpur",
      date: "25 May 2026 – 5 June 2026",
      description: "Faculty Development Program focused on FPGA-based communication system design and hardware implementation."
    },
    {
      title: "GETTING STARTED WITH ARTIFICIAL INTELLIGENCE",
      organization: "IBM SkillsBuild",
      date: "Issued: 27 February 2026",
      description: "Completed foundational training covering fundamental concepts and applications of Artificial Intelligence."
    },
    {
      title: "MATLAB AND ITS APPLICATIONS IN ENGINEERING",
      organization: "NIST University, Berhampur",
      date: "12 July 2024 – 1 August 2024",
      description: "Completed practical training in MATLAB and its applications in engineering, including numerical analysis, simulation, and computational problem-solving."
    }
  ],
  skills: [
    {
      group: "HDL & PROGRAMMING",
      items: ["Verilog HDL", "C", "Python", "MATLAB", "8086 Assembly Language", "HTML"]
    },
    {
      group: "VLSI, EDA & SIMULATION",
      items: ["Cadence Virtuoso", "Xilinx Vivado", "EDA Playground", "TCAD"]
    },
    {
      group: "DIGITAL HARDWARE DESIGN",
      items: ["Digital VLSI Design", "RTL Design", "RTL Verification", "Computer Arithmetic", "Digital Logic Design", "Hardware Architecture"]
    },
    {
      group: "EMBEDDED SYSTEMS & IoT",
      items: ["Embedded Systems", "Arduino", "ESP32", "Microcontrollers", "Sensor Interfacing", "IoT", "Hardware Debugging"]
    },
    {
      group: "DEVELOPMENT TOOLS",
      items: ["VS Code", "Arduino IDE", "Code Composer Studio", "ThingSpeak"]
    },
    {
      group: "MACHINE LEARNING",
      items: ["Basic Machine Learning", "Python-based ML"]
    }
  ],
  careerPath: [
    "VLSI & DIGITAL HARDWARE",
    "Digital IC Design",
    "Computer Arithmetic",
    "Hardware Architectures",
    "Approximate Computing",
    "FPGA Computing",
    "EDA & Optimization"
  ],
  careerPathDesc: "My undergraduate projects have progressively moved from digital logic and embedded systems toward RTL architectures, arithmetic hardware, FPGA implementation, and VLSI-oriented design.\n\nThrough projects such as the configurable floating-point FMA, approximate multiplier, and 12-bit DAC, I have developed an interest in understanding how hardware architectures can be designed for improved performance, reduced resource utilization, and efficient computation.\n\nMy research internship in terahertz metamaterial-based sensing further introduced me to simulation-driven research, technical analysis, and structured problem-solving.\n\nI now aim to deepen this foundation through graduate study, with particular interest in VLSI, digital IC design, computer arithmetic, approximate computing, FPGA-based hardware, and EDA methodologies.",
  extracurricular: [
    {
      title: "NBC — NIST BASKETBALL CLUB",
      role: "Player",
      institution: "NIST University, Berhampur",
      date: "11 October 2023 – Present",
      description: "Active basketball player representing the university club.",
      details: [
        "Participating in team practices, matches, and university-level sporting activities.",
        "Developing teamwork, discipline, communication, coordination, and time-management skills through competitive sports."
      ]
    },
    {
      title: "RENEWABLE ENERGY CLUB",
      role: "Event Head · Social Media Head",
      institution: "NIST University, Berhampur",
      date: "September 2024 – Present",
      description: "",
      details: [
        "Coordinating and supporting the planning and execution of club events and activities.",
        "Managing social media communication and promoting club initiatives.",
        "Collaborating with students and team members on technical and awareness activities."
      ]
    },
    {
      title: "INNOVATION & INCUBATION CLUB",
      role: "Core Member",
      institution: "NIST University, Berhampur",
      date: "November 2025 – Present",
      description: "",
      details: [
        "Participating in innovation-focused activities, technical events, and student initiatives.",
        "Collaborating with peers on technology and innovation-oriented activities.",
        "Contributing to activities that encourage problem-solving and an innovation-oriented mindset."
      ]
    }
  ]
};
