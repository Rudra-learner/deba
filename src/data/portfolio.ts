export const PORTFOLIO_DATA = {
  personal: {
    name: "DEBABRATA SAHU",
    role: "ASPIRING VLSI & FPGA ENGINEER",
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "NIST University",
    cgpa: "8.32/10",
    email: "[YOUR EMAIL]",
    linkedin: "[YOUR LINKEDIN]",
    github: "[YOUR GITHUB]",
    resume: "/Resume.pdf",
    shortBio: "I design digital hardware, explore RTL architectures and build FPGA and embedded systems.",
    aboutHeading: "BUILDING HARDWARE FROM LOGIC TO IMPLEMENTATION.",
    aboutBody: "I am an Electronics and Communication Engineering student with a strong interest in VLSI, FPGA, RTL design and digital hardware systems. I enjoy translating digital concepts into practical hardware architectures and exploring efficient implementations for arithmetic, AI and embedded applications.\n\nMy current focus is on strengthening my expertise in Verilog, SystemVerilog, RTL design and functional verification while building a foundation for a career in the semiconductor industry.",
  },
  stats: [
    { value: "8.32", label: "CGPA" },
    { value: "05+", label: "FEATURED PROJECTS" },
    { value: "01", label: "RESEARCH INTERNSHIP" },
    { value: "RTL", label: "PRIMARY FOCUS" },
  ],
  projects: [
    {
      id: "01",
      title: "CONFIGURABLE FLOATING-POINT FMA",
      category: "RTL DESIGN / FPGA / COMPUTER ARCHITECTURE",
      description: "A configurable floating-point fused multiply-add architecture implemented in Verilog, exploring floating-point arithmetic, mixed-precision computation and efficient RTL implementation.",
      technologies: ["Verilog HDL", "Xilinx Vivado", "XSim", "RTL Design", "Floating-Point Arithmetic"],
      github: "[YOUR GITHUB REPO URL]",
      details: {
        problem: "Implementing efficient floating-point arithmetic in hardware is challenging due to the complexity of normalization, rounding, and delay. FMA reduces rounding errors by performing multiplication and addition in a single step.",
        objective: "Design a configurable, efficient datapath for A × B + C operations supporting varying precisions.",
        architecture: "Multiplier Stage -> Alignment Stage -> Adder Stage -> Normalization -> Rounding.",
        results: "Result data to be added",
      }
    },
    {
      id: "02",
      title: "APPROXIMATE MULTIPLIER",
      category: "VLSI / APPROXIMATE COMPUTING",
      description: "An approximate multiplier architecture using inexact compressor structures, exploring the trade-off between computational accuracy, hardware complexity and performance.",
      technologies: ["Verilog HDL", "RTL", "Digital VLSI", "Approximate Computing", "Compressor Architecture"],
      github: "[YOUR GITHUB REPO URL]",
      details: {
        problem: "Exact multipliers consume significant power and area, which may be unnecessary in error-resilient applications like image processing or neural networks.",
        objective: "Reduce hardware complexity by using inexact 4:2 and 5:2 compressors in the partial product reduction tree.",
        architecture: "Partial Product Generation -> Approximate Reduction Tree -> Carry Propagate Adder.",
        results: "Result data to be added",
      }
    },
    {
      id: "03",
      title: "TERAHERTZ METAMATERIAL ABSORBER",
      category: "RESEARCH / ELECTROMAGNETICS",
      description: "A terahertz metamaterial absorber investigated for skin-cancer detection applications using electromagnetic simulation and absorption analysis.",
      technologies: ["CST Studio Suite", "Metamaterials", "THz Simulation", "S-Parameters", "Absorption Analysis"],
      details: {
        problem: "Non-invasive early detection of skin cancer requires highly sensitive sensors at specific terahertz frequencies.",
        objective: "Design a metamaterial absorber with a high Q-factor resonance that shifts distinctively when exposed to normal vs. cancerous tissue.",
        architecture: "Multi-layer unit cell consisting of a metallic resonator, dielectric substrate, and metallic ground plane.",
        results: "Result data to be added",
      }
    },
    {
      id: "04",
      title: "IoT MINING WORKER SAFETY HELMET",
      category: "EMBEDDED / IoT",
      description: "An IoT-based safety monitoring system designed to monitor environmental and physiological parameters of mining workers and generate alerts under hazardous conditions.",
      technologies: ["ESP32", "DHT11", "MQ-2", "Pulse Sensor", "LCD", "Blynk"],
      github: "[YOUR GITHUB REPO URL]",
      details: {
        problem: "Mining workers operate in hazardous environments where toxic gas leaks or physiological stress can be fatal.",
        objective: "Develop a wearable helmet that continuously monitors air quality, temperature, and worker heart rate, pushing data to a cloud dashboard.",
        architecture: "Sensors -> ESP32 -> Wi-Fi -> Blynk IoT Cloud -> Real-time Alerts.",
        results: "Result data to be added",
      }
    },
    {
      id: "05",
      title: "SMART AGRICULTURE MONITORING",
      category: "EMBEDDED / IoT",
      description: "A sensor-based agriculture monitoring system for tracking soil and environmental parameters to support smarter agricultural management.",
      technologies: ["ESP32 / Arduino", "Sensors", "IoT"],
      github: "[YOUR GITHUB REPO URL]",
      details: {
        problem: "Inefficient water usage and lack of soil data lead to suboptimal crop yields.",
        objective: "Create a deployed sensor node that logs soil moisture, temperature, and humidity for precise irrigation control.",
        architecture: "Sensor Node -> Microcontroller -> Data Logging/Cloud.",
        results: "Result data to be added",
      }
    }
  ],
  skills: [
    {
      group: "GROUP 01: HDL & RTL",
      items: ["Verilog HDL", "SystemVerilog", "RTL Design", "FSM Design", "Digital Logic", "Arithmetic Circuits"]
    },
    {
      group: "GROUP 02: FPGA",
      items: ["Xilinx Vivado", "XSim", "FPGA Architecture", "LUT", "BRAM", "DSP Slices", "RTL Simulation"]
    },
    {
      group: "GROUP 03: VERIFICATION",
      items: ["Functional Verification", "Testbench Development", "Waveform Debugging", "SystemVerilog Assertions — Learning", "UVM — Learning"]
    },
    {
      group: "GROUP 04: EMBEDDED",
      items: ["ESP32", "Arduino", "Sensors", "IoT", "Blynk", "Wokwi"]
    },
    {
      group: "GROUP 05: RESEARCH & SIMULATION",
      items: ["CST Studio Suite", "Metamaterial Design", "THz Simulation", "Electromagnetic Analysis"]
    },
    {
      group: "GROUP 06: PROGRAMMING",
      items: ["C", "Python"]
    }
  ],
  experience: {
    title: "RESEARCH INTERNSHIP",
    company: "NIT Jamshedpur",
    project: "Skin Cancer Detection Absorber Using Terahertz Frequency",
    details: [
      "Metamaterial absorber design",
      "Unit-cell modeling",
      "THz electromagnetic simulation",
      "S-parameter analysis",
      "Absorption analysis",
      "Resonance frequency analysis",
      "Q-factor evaluation",
      "Normal vs cancerous tissue response"
    ]
  },
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "NIST University",
    cgpa: "8.32/10",
    startYear: "[START YEAR]",
    endYear: "[EXPECTED GRADUATION YEAR]"
  },
  achievements: [
    "8.32 CGPA",
    "TCS Ninja Selection / Offer",
    "Research Internship — NIT Jamshedpur",
    "Multiple Hardware / RTL / FPGA Projects"
  ],
  careerPath: [
    "VERILOG",
    "SYSTEMVERILOG",
    "RTL DESIGN",
    "FUNCTIONAL VERIFICATION",
    "SVA",
    "UVM",
    "ASIC / FPGA DESIGN"
  ]
};
