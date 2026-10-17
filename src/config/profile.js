// ============================================================================
// PERSONAL CONFIGURATION — Edit everything here.
// ============================================================================

export const profile = {
  name: 'Daniel Thomas',

  title: 'Materials & Metallurgical Engineer',

  tagline: 'Materials Science • Materials Informatics • AI • Sustainable Materials',

  location: 'Area 2/3, London Street, Bosso, Minna, Niger State, Nigeria',

  // --- Contact ---
  email: 'thodaniel3@gmail.com',
  whatsapp: '+2348107247625',
  github: 'https://github.com/thodaniel3-sudo/',
  linkedin: 'https://www.linkedin.com/in/daniel-thomas-90055b428',
  canonicalUrl: 'https://daniel-thomas.vercel.app',

  // --- Hero ---
  hero: {
    eyebrow: 'Portfolio — Materials Engineering & Research',
    headline:
      'Engineering sustainable materials through the intersection of materials science, computation, data, and artificial intelligence.',
    primaryCta: { label: 'Explore My Work', href: '#projects' },
    secondaryCta: { label: "Let's Connect", href: '#contact' },
  },

  // --- About ---
  about: {
    paragraphs: [
      'I am Daniel Thomas, a Materials and Metallurgical Engineering graduate from the Federal University of Technology, Minna, Nigeria.',
      'My academic background combines materials engineering fundamentals with growing interests in computational materials science, materials informatics, machine learning, sustainable materials, and data-driven engineering.',
      'My interests are focused on understanding and designing materials using both experimental engineering approaches and computational / data-driven techniques.',
      'I am particularly interested in how artificial intelligence and machine learning can accelerate materials discovery, prediction, optimization, characterization, and engineering decision-making.',
      'I am also passionate about sustainable engineering and the transformation of waste-derived materials into useful engineering products.',
    ],
    profileSummary:
      'Daniel Thomas is a Materials and Metallurgical Engineer with an academic background in materials engineering and growing expertise in materials informatics, computational materials science, machine learning, and sustainable materials development. His work explores the intersection of engineering materials, data, computation, and artificial intelligence, with particular interest in composite materials and the use of waste-derived resources for sustainable engineering applications.',
  },

  // --- Research Philosophy ---
  researchPhilosophy:
    'Combine materials science with computation and data to understand materials better, predict their behaviour, and design more sustainable engineering solutions.',

  // --- Research Interests ---
  researchInterests: [
    { title: 'Materials Informatics', description: 'Applying data science and ML to materials data.' },
    { title: 'Computational Materials Science', description: 'Simulation and modeling of materials behavior.' },
    { title: 'Machine Learning for Materials', description: 'Predictive modeling of material properties.' },
    { title: 'AI in Engineering', description: 'Intelligent systems for engineering decisions.' },
    { title: 'Sustainable Materials', description: 'Eco-friendly and low-impact material design.' },
    { title: 'Composite Materials', description: 'Hybrid and reinforced material systems.' },
    { title: 'Bio-based Materials', description: 'Materials derived from biological and waste sources.' },
    { title: 'Materials Characterization', description: 'Structure and property analysis of materials.' },
    { title: 'Automotive Materials', description: 'Lightweight and durable materials for vehicles.' },
    { title: 'Materials Optimization', description: 'Data-driven tuning of material formulations.' },
    { title: 'Data-driven Materials Engineering', description: 'Integrating engineering with analytics pipelines.' },
  ],

  // --- Education ---
  education: [
    {
      institution: 'Federal University of Technology, Minna',
      country: 'Nigeria',
      degree: 'Bachelor of Engineering (B.Eng.)',
      field: 'Materials and Metallurgical Engineering',
      department: 'Department of Materials and Metallurgical Engineering',
      graduation: 'October 2026',
      grade: '4.33',
    },
  ],

  // --- Skills ---
  skills: [
    {
      category: 'Materials Engineering',
      level: 'Academic & Technical',
      items: [
        'Materials Science',
        'Metallurgical Engineering',
        'Composite Materials',
        'Materials Selection',
        'Materials Characterization',
        'Mechanical Testing',
        'Sustainable Materials',
        'Polymer Composites',
        'Automotive Materials',
      ],
    },
    {
      category: 'Computational / Data',
      level: 'Working Knowledge & Research Interest',
      items: [
        'Python',
        'Materials Informatics',
        'Machine Learning',
        'Data Analysis',
        'Data Visualization',
        'Computational Materials Science',
        'Scientific Computing',
      ],
    },
    {
      category: 'Software / Web Development',
      level: 'Technical Skill',
      items: [
        'Python',
        'Flask',
        'React',
        'Vite',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'REST APIs',
        'Supabase',
        'Git',
        'GitHub',
        'Vercel',
      ],
    },
    {
      category: 'Engineering / Research',
      level: 'Academic Experience',
      items: [
        'Research',
        'Experimental Design',
        'Scientific Literature Review',
        'Technical Documentation',
        'Engineering Data Analysis',
        'Problem Solving',
      ],
    },
  ],

  // --- Projects ---
  projects: [
    {
      id: 'eco-epoxy-composite',
      number: '01',
      title: 'Eco-Friendly Epoxy Hybrid Composite Reinforced with Bio-Waste',
      subtitle: 'For Automotive Application',
      short:
        'Final-year materials engineering project developing an eco-friendly epoxy hybrid composite using bio-derived and mineral reinforcements.',
      category: 'Materials Engineering',
      tags: [
        'Materials Engineering',
        'Composite Materials',
        'Sustainable Materials',
        'Bio-waste',
        'Automotive Materials',
        'Experimental Research',
      ],
      githubUrl: '',
      liveUrl: '',
      detail: {
        overview:
          'A final-year materials engineering project focused on developing an eco-friendly epoxy hybrid composite using bio-derived and mineral reinforcements for potential automotive applications.',
        materials: ['Epoxy resin', 'Cotton wool', 'Cow horn', 'Limestone'],
        methods: [
          'Formulation F1: 100% epoxy',
          'Formulation F2: 90% epoxy + 10% reinforcement',
          'Formulation F3: 80% epoxy + 20% reinforcement',
          'Formulation F4: 70% epoxy + 30% reinforcement',
          'Reinforcement ratio — Cotton wool : Cow horn : Limestone = 2 : 2 : 1',
        ],
        properties: [
          'Density',
          'Flexural Strength',
          'Flexural Modulus',
          'Compressive Strength',
          'Impact Strength',
        ],
        relevance:
          'Demonstrates how bio-derived and mineral fillers can be combined with polymer matrices to explore sustainable alternatives for automotive material systems.',
        focus:
          'Investigating the influence of reinforcement composition on mechanical and physical properties.',
      },
    },
    {
      id: 'hybrid-composite-prediction',
      number: '02',
      title: 'Hybrid Composite Prediction System (HCPS)',
      subtitle: 'ML-Driven Materials Property Prediction',
      short:
        'A Python-based engineering application that predicts hybrid composite properties using materials data and machine learning.',
      category: 'Materials Informatics',
      tags: ['Python', 'Machine Learning', 'Materials Informatics', 'Data Science', 'Materials Engineering'],
      githubUrl: 'https://github.com/thodaniel3-sudo/HCPS',
      liveUrl: '',
      detail: {
        overview:
          'A Python-based engineering application designed to explore prediction of hybrid composite properties using materials data and machine learning.',
        materials: [
          'Dataset parameters: Sample, Formulation, Epoxy %, Cow Horn %, Cotton Wool %, Limestone %, Reinforcement %',
          'Target properties: Density, Flexural Strength, Flexural Modulus, Compressive Strength, Impact Strength',
        ],
        methods: [
          'Random Forest regression',
          'Multi-output regression',
          'Rule-of-mixtures calculations',
          'Data preprocessing and feature handling',
        ],
        properties: [
          'Density',
          'Flexural Strength',
          'Flexural Modulus',
          'Compressive Strength',
          'Impact Strength',
        ],
        relevance:
          'Demonstrates how machine learning and computational techniques can be integrated into materials engineering workflows.',
        focus:
          'Applying materials informatics methods to predict multi-property outcomes from composite formulation data.',
      },
    },
    {
      id: 'telegram-bot',
      number: '03',
      title: 'Automated Telegram Forecast Bot',
      subtitle: 'AI Assistant for Data Forecasting',
      short:
        'A custom Telegram bot that uses AI to predict forecasts every 15 minutes and delivers automated data insights directly to the user.',
      category: 'Software / AI',
      tags: ['Python', 'AI', 'Telegram API', 'Automation', 'Data Forecasting'],
      githubUrl: 'https://github.com/thodaniel3-sudo/telegram-bot',
      liveUrl: '',
      detail: {
        overview:
          'A custom Telegram bot designed to provide automated, real-time forecasting. It operates on a 15-minute automated interval to generate predictions and send them directly to the user via the Telegram messaging platform.',
        materials: [
          'Real-time data feeds',
          'Forecasting models',
          'Telegram Bot API',
        ],
        methods: [
          'Python scripting',
          'API integration',
          'Automated scheduled tasks (cron jobs)',
          'Message formatting and delivery',
        ],
        properties: [
          '15-minute automated forecasting',
          'Direct Telegram messaging',
          'Real-time data processing',
        ],
        relevance:
          'Demonstrates the application of Python and artificial intelligence to build functional, automated software tools for real-world forecasting and communication.',
        focus:
          'Building accessible AI tools that automate complex forecasting tasks and deliver insights to users without friction.',
      },
    },
    {
      id: 'university-finder',
      number: '04',
      title: 'University Finder',
      subtitle: 'Web Platform for Academic Discovery',
      short:
        'A web-based university discovery platform helping students find universities, courses, scholarships, and application information.',
      category: 'Full-Stack Development',
      tags: ['Full Stack', 'Flask', 'React', 'Supabase', 'EdTech', 'Search', 'AI / Data'],
      githubUrl: '',
      liveUrl: 'https://university-finder.me/',
      detail: {
        overview:
          'A web-based university discovery platform designed to help students find universities, courses, scholarships, application information, and relevant academic opportunities.',
        materials: [
          'University datasets',
          'Country and programme metadata',
          'External data sources and search aggregation',
        ],
        methods: [
          'REST API design with Flask',
          'React front-end',
          'Supabase for data storage',
          'Search aggregation from external data sources',
          'Email-related workflows',
        ],
        properties: [
          'University search',
          'Country filtering',
          'Programme discovery',
          'Academic opportunity discovery',
        ],
        relevance:
          'Combines full-stack engineering, data collection, and product thinking to solve a real student-facing problem.',
        focus:
          'Building an efficient discovery platform for higher education opportunities.',
      },
    },
    {
      id: 'leabas',
      number: '05',
      title: 'LEABAS',
      subtitle: 'Software Development Project',
      short:
        'A comprehensive software repository showcasing modern development practices and application architecture.',
      category: 'Software Development',
      tags: ['Software Engineering', 'GitHub', 'Web Development'],
      githubUrl: 'https://github.com/thodaniel3-sudo/LEABAS',
      liveUrl: '',
      detail: {
        overview:
          'LEABAS is a software development project hosted on GitHub. The repository contains the source code and configuration for the application.',
        materials: ['Source code', 'Application architecture'],
        methods: ['Software development lifecycle', 'Version control with Git'],
        properties: ['Functional application logic'],
        relevance:
          'Demonstrates software engineering capabilities and version control proficiency.',
        focus:
          'Developing structured, maintainable software solutions.',
      },
    },
    {
      id: 'gospel-pillars',
      number: '06',
      title: 'Gospel Pillars Campus Fellowship',
      subtitle: 'Organization Biodata Platform',
      short:
        'A live web application built to manage and display organizational biodata, serving the campus fellowship community.',
      category: 'Web Development',
      tags: ['React', 'Vercel', 'Frontend', 'Web App'],
      githubUrl: '',
      liveUrl: 'https://gospelpillarscampusfellowshipbiodat.vercel.app/',
      detail: {
        overview:
          'A live web platform designed to host and display the biodata and organizational information for the Gospel Pillars Campus Fellowship.',
        materials: ['Organizational data', 'User profiles'],
        methods: ['React frontend', 'Vercel deployment', 'Responsive design'],
        properties: ['Data display', 'User accessibility', 'Mobile responsiveness'],
        relevance:
          'Demonstrates the ability to build and deploy real-world web applications that serve an active community.',
        focus:
          'Creating functional, accessible web platforms for organizational management.',
      },
    },
    {
      id: 'materials-informatics-property-prediction',
      number: '07',
      title: 'Materials Informatics Property Prediction Program',
      subtitle: 'Python Program for Property Estimation',
      short:
        'A Python-based materials informatics program developed to predict and calculate material properties from engineering data.',
      category: 'Materials Informatics',
      tags: [
        'Materials Informatics',
        'Python',
        'Computational Materials Science',
        'Property Prediction',
        'Data-driven Materials Engineering',
      ],
      githubUrl: '',
      liveUrl: '',
      detail: {
        overview:
          'A Python-based materials informatics program developed to predict / calculate material properties using engineering and materials data.',
        materials: ['Engineering / materials datasets'],
        methods: [
          'Python-based data processing',
          'Property prediction routines',
          'Data-driven materials engineering workflows',
        ],
        properties: ['Material properties derived from input data'],
        relevance:
          'Explores how computational tools can support materials selection and property estimation.',
        focus:
          'Applying materials informatics concepts to real engineering property prediction tasks.',
      },
    },
  ],

  // --- Research / Academic Experience ---
  researchExperience: [
    {
      title: 'Nanotechnology Research Group — Seminars',
      description:
        'Attended seminars associated with the Nanotechnology Research Group and developed exposure to topics related to nanotechnology and advanced materials research.',
    },
    {
      title: 'Entrepreneurship / Product Development Activities',
      description:
        'Participated in entrepreneurship-related activities and activities involving the development and production of new products — one example involved soap-related products.',
    },
  ],

  // --- Industrial Training ---
  training: [
    {
      institution: 'NIDDA',
      description:
        'Industrial training exposure involving computer-related instruction and Python.',
    },
  ],

  // --- Materials Informatics Pipeline ---
  informaticsPipeline: [
    'Materials Data',
    'Data Processing',
    'Machine Learning',
    'Property Prediction',
    'Materials Optimization',
    'Engineering Decision Making',
  ],

  // --- Sustainability ---
  sustainability: {
    headline: 'Engineering Materials for a More Sustainable Future',
    statement: 'Turning waste into useful engineering value.',
    focusAreas: [
      'Waste valorization',
      'Bio-waste reinforcement',
      'Eco-friendly composites',
      'Sustainable automotive materials',
      'Circular economy concepts',
      'Materials efficiency',
    ],
    description:
      'My final-year project explored how bio-derived and mineral reinforcements can be used within polymer matrices to reduce reliance on virgin materials — an example of how waste streams can be re-engineered into functional material systems.',
  },

  // --- Future Direction ---
  futureDirection: [
    "Master's study in Materials Science / Materials Engineering",
    'Materials Informatics',
    'Computational Materials Science',
    'Machine Learning',
    'Sustainable Materials',
    'Advanced Composite Materials',
    'AI-assisted Materials Discovery',
  ],

  // --- Contact ---
  contact: {
    headline: "Let's Connect",
    text: 'I am open to conversations around materials science, computational materials research, materials informatics, sustainable materials, engineering projects, research opportunities, and graduate study.',
  },

  // --- Footer ---
  footer: {
    copyright: `© ${new Date().getFullYear()} Daniel Thomas. All rights reserved.`,
  },

  // --- Navigation ---
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default profile;