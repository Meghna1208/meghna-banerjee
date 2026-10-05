// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Meghna Banerjee',
  role: 'AI/ML Engineer & B.Tech Student',
  location: 'Kolkata, India',
  tagline:
    'I build machine-learning systems that listen carefully — from voice-based cognitive screening to AI agents that make healthcare easier to navigate.',
  about: [
    'I’m a Computer Science undergraduate at RCC Institute of Information Technology, Kolkata, holding a CGPA of 9.77. My work sits at the intersection of applied AI, healthcare and accessible design.',
    'I enjoy the whole arc of a project: framing the problem as a testable hypothesis, documenting the architecture, and then shipping it across backend, web and mobile. Lately that has meant hybrid classical-quantum models, speech pipelines and agentic assistants.',
  ],
  email: 'meghnabanerjee1208@gmail.com',
  github: 'https://github.com/Meghna1208',
  githubHandle: 'Meghna1208',
  linkedin: 'https://linkedin.com/in/meghna-banerjee-69242731b',
  linkedinHandle: 'meghna-banerjee',
  cv: '/Meghna_Banerjee_CV.pdf',
  stats: [
    { value: '9.77', label: 'CGPA' },
    { value: '4', label: 'Languages spoken' },
    { value: '3', label: 'Certifications' },
  ],
}

export const experience = [
  {
    company: 'Margadeshaka',
    role: 'AI Intern',
    location: 'Chandigarh, India',
    period: 'Oct 2026 — Present',
    points: [
      {
        title: 'AI-driven healthcare assistant',
        text: 'Contributing to the design of an agent that organizes medical records and helps users with their next steps.',
      },
      {
        title: 'Problem & system approach',
        text: 'Documenting the idea as a hypothesis — outlining assumptions, success criteria and the planned workflow before development.',
      },
      {
        title: 'Structured development',
        text: 'Preparing behaviour-driven test cases, architectural decision records and proof-of-concept plans.',
      },
    ],
  },
]

export const projects = [
  {
    title: 'SwarSanket',
    kicker: 'Voice AI · Healthcare',
    description:
      'An accessible, non-invasive voice screening system for early signs of cognitive decline associated with Alzheimer’s disease — available on web and mobile.',
    points: [
      'Users describe the standardized Cookie Theft picture for 10–15 seconds; the system analyses acoustic stability, linguistic density and structural language patterns.',
      'A hybrid classical-quantum machine-learning pipeline computes calibrated screening indicators.',
      'Python backend (PyTorch, PennyLane, Faster-Whisper), React web frontend, and a mobile app built with Android SDK and Flutter.',
    ],
    tags: ['Python', 'PyTorch', 'PennyLane', 'Faster-Whisper', 'React', 'Flutter'],
    url: 'https://github.com/Diptish-De/SwarSanket_SIH26',
    featured: true,
  },
  {
    title: 'Airnexa',
    kicker: 'Full-stack · Booking system',
    description:
      'A flight ticket booking and management system, with Java powering the application logic and MySQL as the database.',
    points: [
      'Application logic written in Java with a relational MySQL data model.',
      'User-facing pages designed in HTML/CSS for booking and managing tickets.',
    ],
    tags: ['Java', 'HTML/CSS', 'MySQL'],
    url: 'https://github.com/Meghna1208/Airnexa',
    featured: false,
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'SQL (MySQL)', 'HTML/CSS'] },
  { group: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'NumPy', 'PennyLane'] },
  { group: 'Tools', items: ['Figma', 'GitHub', 'Jupyter Notebook', 'VS Code'] },
  { group: 'Research', items: ['Data Analytics', 'Research Documentation'] },
  { group: 'Spoken', items: ['English', 'Bengali', 'Hindi', 'German'] },
]

export const certifications = [
  {
    title: 'Foundational Maths for Machine Learning',
    issuer: 'NPTEL+ Workshop, IIT Bombay',
    date: '2026',
    note: 'Linear algebra for machine learning. Instructor: Prof. Jayakrishnan U. Nair.',
    url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:91d9a61e-4aab-40e1-9c71-3aca36cfbb44',
  },
  {
    title: 'WADLA 4.0',
    issuer: 'Research Workshop on Advances in Deep Learning and Applications, IIITDM Jabalpur',
    date: '2025',
    note: 'CNNs, model compression for on-device AI, and deep learning applications.',
    url: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:b58dbfe5-7a69-4daa-907d-27a2d6357929',
  },
  {
    title: 'Drone-based Surveillance and Image Processing',
    issuer: '100-hour training program on aerial surveillance and image/video processing',
    date: 'Dec 2024 — Feb 2025',
    note: 'Fully funded by the Ministry of Electronics and Information Technology (MeitY), Govt. of India.',
    url: 'https://acrobat.adobe.com/id/urn:aaid:sc:ap:5b35ccb0-1705-4025-986b-64100e27772e',
  },
]

export const achievements = [
  { title: 'Finalist — RECURSIVE Shift-8 Hackathon', detail: 'SBH 2025' },
]

export const education = [
  {
    school: 'RCC Institute of Information Technology',
    degree: 'Bachelor of Technology',
    location: 'Kolkata, India',
    period: 'Aug 2024 — Present',
    grade: 'CGPA 9.77',
  },
]
