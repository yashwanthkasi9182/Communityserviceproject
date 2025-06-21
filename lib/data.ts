export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  overview: {
    description: string;
    objectives: string[];
    timeline: string;
    location: string;
    beneficiaries: string;
  };
  problemStatement: {
    issue: string;
    communityNeeds: string[];
    currentSituation: string;
    urgency: string;
  };
  awarenessCampaign: {
    initiatives: string[];
    methods: string[];
    targetAudience: string;
    materials: string[];
    reach: string;
  };
  alternatives: {
    solutions: Array<{
      title: string;
      description: string;
      implementation: string;
    }>;
    naturalMethods: string[];
    guidance: string;
  };
  surveys: {
    methodology: string;
    responses: Array<{
      question: string;
      response: string;
      respondent: string;
    }>;
    insights: string[];
    analysis: string;
  };
  outcomes: {
    impact: string[];
    results: Array<{
      metric: string;
      value: string;
      improvement: string;
    }>;
    learnings: string[];
    recommendations: string[];
  };
  gallery: Array<{
    id: string;
    url: string;
    title: string;
    description: string;
  }>;
}

export const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "Water Facilities & Drinking Water",
    slug: "water-facilities",
    description: "Ensuring access to clean and safe drinking water for rural communities through sustainable infrastructure development.",
    heroImage: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    overview: {
      description: "This project focuses on establishing sustainable water infrastructure in underserved rural communities, addressing the critical need for clean drinking water access through community-driven solutions.",
      objectives: [
        "Install 15 water filtration systems in rural villages",
        "Train 50 community members in water system maintenance",
        "Educate 500+ residents on water safety and hygiene",
        "Establish 3 community water committees for ongoing management"
      ],
      timeline: "March 2024 - September 2024 (6 months)",
      location: "Rural districts of Madhya Pradesh, India",
      beneficiaries: "1,200+ community members across 8 villages"
    },
    problemStatement: {
      issue: "Over 60% of rural households lack access to clean drinking water, leading to waterborne diseases and health complications, particularly affecting children and elderly populations.",
      communityNeeds: [
        "Reliable access to clean drinking water",
        "Reduction in waterborne diseases",
        "Time savings from long water collection journeys",
        "Improved overall community health and productivity"
      ],
      currentSituation: "Communities rely on contaminated wells and distant water sources, with women and children walking 3-5 km daily for water collection.",
      urgency: "Immediate intervention required due to rising cases of cholera and diarrheal diseases during monsoon season."
    },
    awarenessCampaign: {
      initiatives: [
        "Village-level hygiene and sanitation workshops",
        "Water quality testing demonstrations",
        "Community health screenings",
        "School-based education programs"
      ],
      methods: [
        "Interactive community meetings",
        "Visual demonstration sessions",
        "Peer-to-peer education programs",
        "Local language informational materials"
      ],
      targetAudience: "Village heads, women's groups, school children, and health workers",
      materials: [
        "Multilingual hygiene posters",
        "Water testing kits for demonstrations",
        "Educational booklets on water safety",
        "Community health tracking charts"
      ],
      reach: "850+ community members directly engaged across 8 villages"
    },
    alternatives: {
      solutions: [
        {
          title: "Bio-sand Filtration Systems",
          description: "Low-cost, locally maintainable water filtration using natural sand and gravel layers",
          implementation: "Community members trained to build and maintain systems using locally available materials"
        },
        {
          title: "Rainwater Harvesting",
          description: "Collection and storage of rainwater during monsoon season for year-round use",
          implementation: "Installation of community tanks and individual household collection systems"
        },
        {
          title: "Solar Water Disinfection",
          description: "UV disinfection using solar energy to purify water naturally",
          implementation: "Simple bottle-based SODIS method taught to all households"
        }
      ],
      naturalMethods: [
        "Moringa seed water purification",
        "Clay pot filtration systems",
        "Boiling with fuel-efficient stoves",
        "Natural coagulation using plant materials"
      ],
      guidance: "All solutions designed for local implementation with minimal external dependency and maximum community ownership."
    },
    surveys: {
      methodology: "Pre and post-implementation surveys conducted with structured interviews, focus groups, and health assessments across participating villages.",
      responses: [
        {
          question: "How has access to clean water improved your daily life?",
          response: "Now my children don't fall sick frequently, and I can spend time on other productive activities instead of walking for water.",
          respondent: "Sunita Devi, Village Resident"
        },
        {
          question: "What changes have you noticed in community health?",
          response: "Cases of stomach problems have reduced by more than half since we started using the filtration systems.",
          respondent: "Dr. Raj Kumar, Local Health Worker"
        },
        {
          question: "How sustainable do you find the water systems?",
          response: "The maintenance is simple, and our committee ensures everything runs smoothly. We feel confident managing it ourselves.",
          respondent: "Mohan Singh, Water Committee Head"
        }
      ],
      insights: [
        "Community ownership crucial for project sustainability",
        "Women's participation essential for successful implementation",
        "Local training programs more effective than external expertise",
        "Regular health monitoring motivates continued engagement"
      ],
      analysis: "94% of surveyed households reported improved water quality, 87% reduction in water-related illnesses, and 100% of communities committed to long-term maintenance."
    },
    outcomes: {
      impact: [
        "87% reduction in waterborne diseases across participating villages",
        "3.5 hours daily time savings for women and children",
        "15 functional water filtration systems serving 1,200+ people",
        "3 trained community water committees ensuring sustainability"
      ],
      results: [
        {
          metric: "Water Quality Improvement",
          value: "99.2%",
          improvement: "Bacteria elimination rate in treated water"
        },
        {
          metric: "Community Health",
          value: "87%",
          improvement: "Reduction in waterborne illnesses"
        },
        {
          metric: "Time Efficiency",
          value: "3.5 hours",
          improvement: "Daily time saved per household"
        },
        {
          metric: "System Sustainability",
          value: "100%",
          improvement: "Community maintenance adoption rate"
        }
      ],
      learnings: [
        "Community-led maintenance ensures long-term project success",
        "Women's leadership critical for water management initiatives",
        "Simple, replicable technologies work better than complex systems",
        "Regular monitoring and support essential during transition period"
      ],
      recommendations: [
        "Expand program to neighboring districts using proven model",
        "Integrate water projects with sanitation and hygiene initiatives",
        "Develop regional resource centers for technical support",
        "Create policy framework for scaling community-based water solutions"
      ]
    },
    gallery: [
      {
        id: "w1",
        url: "https://images.pexels.com/photos/1111316/pexels-photo-1111316.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w2",
        url: "https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Water Quality Testing",
        description: "Community members learning water testing procedures"
      },
      {
        id: "w3",
        url: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Training Session",
        description: "Hygiene awareness workshop with village women"
      },
      {
        id: "w4",
        url: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Clean Water Access",
        description: "Children accessing clean water from new facility"
      }
    ]
  },
  {
    id: "2",
    title: "Plantation",
    slug: "plantation",
    description: "Restoring ecological balance through community-driven reforestation and sustainable agriculture practices.",
    heroImage: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    overview: {
      description: "A comprehensive reforestation initiative aimed at restoring degraded lands, improving air quality, and creating sustainable livelihood opportunities through community participation and environmental education.",
      objectives: [
        "Plant 5,000 native trees across 50 hectares of degraded land",
        "Train 100 farmers in sustainable agriculture practices",
        "Establish 5 community nurseries for ongoing plantation efforts",
        "Create employment for 200+ community members in green initiatives"
      ],
      timeline: "January 2024 - December 2024 (12 months)",
      location: "Degraded agricultural lands in Karnataka, India",
      beneficiaries: "2,500+ community members across 12 villages"
    },
    problemStatement: {
      issue: "Rapid deforestation and unsustainable farming practices have led to soil erosion, reduced rainfall, and declining agricultural productivity, threatening rural livelihoods and environmental stability.",
      communityNeeds: [
        "Restoration of forest cover and biodiversity",
        "Improved soil fertility and water retention",
        "Sustainable income generation opportunities",
        "Climate resilience and carbon sequestration"
      ],
      currentSituation: "Over 70% of agricultural land shows signs of degradation, with declining crop yields and increased dependency on chemical fertilizers.",
      urgency: "Critical intervention needed to prevent further environmental degradation and support community adaptation to climate change."
    },
    awarenessCampaign: {
      initiatives: [
        "Environmental education programs in schools",
        "Farmers' field schools on sustainable practices",
        "Community tree plantation drives",
        "Women's groups training on nursery management"
      ],
      methods: [
        "Participatory learning sessions",
        "Demonstration plots and model farms",
        "Community-based monitoring programs",
        "Storytelling and cultural integration"
      ],
      targetAudience: "Farmers, students, women's groups, and local government officials",
      materials: [
        "Native species identification guides",
        "Sustainable farming practice manuals",
        "Seedling care instruction sheets",
        "Environmental impact awareness posters"
      ],
      reach: "1,800+ community members actively participating in environmental education programs"
    },
    alternatives: {
      solutions: [
        {
          title: "Agroforestry Integration",
          description: "Combining trees with agricultural crops to improve soil health and diversify income sources",
          implementation: "Farmers trained to integrate fruit and timber trees with existing crop rotations"
        },
        {
          title: "Community Forest Management",
          description: "Participatory forest governance with local communities as primary stakeholders",
          implementation: "Village forest committees established with legal recognition and management authority"
        },
        {
          title: "Organic Farming Transition",
          description: "Shift from chemical-intensive to organic agricultural practices using natural inputs",
          implementation: "Gradual transition support with organic certification and premium market access"
        }
      ],
      naturalMethods: [
        "Composting and vermicomposting for soil fertility",
        "Natural pest management using beneficial insects",
        "Seed saving and indigenous variety preservation",
        "Water conservation through traditional techniques"
      ],
      guidance: "All interventions focus on ecosystem restoration while ensuring economic viability for farming communities."
    },
    surveys: {
      methodology: "Comprehensive baseline and impact assessment through household surveys, soil testing, biodiversity monitoring, and participatory rural appraisal techniques.",
      responses: [
        {
          question: "How has tree plantation affected your farming practices?",
          response: "The trees provide shade for our crops and the soil has become more fertile. Our mango trees will give us additional income in a few years.",
          respondent: "Ramesh Gowda, Farmer"
        },
        {
          question: "What environmental changes have you observed?",
          response: "More birds are returning to our area, and we're getting better rainfall patterns. The air feels cleaner too.",
          respondent: "Lakshmi Devi, Women's Group Leader"
        },
        {
          question: "How sustainable are these plantation efforts?",
          response: "We've learned to manage our own nursery and can continue planting without external help. The community is committed.",
          respondent: "Suresh Kumar, Village Head"
        }
      ],
      insights: [
        "Community ownership essential for long-term plantation success",
        "Economic incentives motivate sustained participation",
        "Native species show better survival rates and community acceptance",
        "Women's involvement crucial for nursery management and care"
      ],
      analysis: "92% tree survival rate achieved, 78% of farmers adopted sustainable practices, and 100% of communities established ongoing plantation programs."
    },
    outcomes: {
      impact: [
        "5,200 trees planted with 92% survival rate across target areas",
        "45% improvement in soil organic matter content",
        "78% of participating farmers adopted sustainable agriculture practices",
        "5 community nurseries producing 10,000+ seedlings annually"
      ],
      results: [
        {
          metric: "Forest Cover Increase",
          value: "15%",
          improvement: "Increase in green cover across project area"
        },
        {
          metric: "Soil Health",
          value: "45%",
          improvement: "Increase in soil organic matter"
        },
        {
          metric: "Farmer Adoption",
          value: "78%",
          improvement: "Adoption of sustainable practices"
        },
        {
          metric: "Carbon Sequestration",
          value: "250 tons",
          improvement: "CO2 absorbed annually by planted trees"
        }
      ],
      learnings: [
        "Multi-species plantation more resilient than monoculture approaches",
        "Community nurseries ensure sustained plantation efforts",
        "Integration with agriculture increases farmer participation",
        "Regular maintenance crucial for first three years of tree growth"
      ],
      recommendations: [
        "Scale up community nursery model to regional level",
        "Integrate carbon credit mechanisms for additional income",
        "Develop value chains for forest products and organic produce",
        "Create policy support for community forest management rights"
      ]
    },
    gallery: [
      {
        id: "p1",
        url: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Community Plantation Drive",
        description: "Villagers participating in mass tree plantation event"
      },
      {
        id: "p2",
        url: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Nursery Management Training",
        description: "Women learning seedling propagation techniques"
      },
      {
        id: "p3",
        url: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Agroforestry Implementation",
        description: "Farmers integrating trees with crop cultivation"
      },
      {
        id: "p4",
        url: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Forest Restoration Results",
        description: "Transformed landscape showing successful reforestation"
      }
    ]
  },
  {
    id: "3",
    title: "Chemical Use on Vegetables & Fruits",
    slug: "chemical-reduction",
    description: "Promoting organic farming practices and reducing harmful chemical pesticide use in vegetable and fruit cultivation.",
    heroImage: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    overview: {
      description: "An initiative to reduce chemical pesticide dependency in fruit and vegetable farming through organic alternatives, farmer education, and market linkage development for safer, healthier produce.",
      objectives: [
        "Reduce chemical pesticide use by 60% among 300 participating farmers",
        "Train farmers in organic pest management and natural fertilizer production",
        "Establish organic certification for 50 progressive farmers",
        "Create direct market linkages for premium organic produce"
      ],
      timeline: "February 2024 - November 2024 (10 months)",
      location: "Vegetable farming clusters in Punjab and Haryana, India",
      beneficiaries: "3,000+ farmers and their families, plus consumers accessing safer produce"
    },
    problemStatement: {
      issue: "Excessive use of chemical pesticides and fertilizers in vegetable and fruit farming poses serious health risks to farmers and consumers while degrading soil health and contaminating water sources.",
      communityNeeds: [
        "Safe and effective alternatives to chemical pesticides",
        "Training in organic farming methods and certification",
        "Market access for premium organic produce",
        "Health protection for farming families and consumers"
      ],
      currentSituation: "Farmers use 3-4 times the recommended chemical doses due to pest resistance, leading to health problems and environmental contamination.",
      urgency: "Immediate action required due to rising cases of pesticide poisoning and increasing consumer demand for chemical-free produce."
    },
    awarenessCampaign: {
      initiatives: [
        "Health impact awareness sessions on chemical pesticide dangers",
        "Organic farming demonstration plots and field days",
        "Consumer awareness campaigns on chemical residue risks",
        "Healthcare provider training on pesticide poisoning treatment"
      ],
      methods: [
        "Farmer field schools with hands-on training",
        "Health camps with pesticide exposure testing",
        "Market-based consumer education campaigns",
        "Digital platforms for knowledge sharing"
      ],
      targetAudience: "Vegetable farmers, agricultural workers, consumers, and healthcare providers",
      materials: [
        "Chemical hazard identification charts",
        "Organic recipe preparation guides",
        "Market certification process manuals",
        "Health safety equipment distribution"
      ],
      reach: "2,200+ farmers and 15,000+ consumers engaged in awareness programs"
    },
    alternatives: {
      solutions: [
        {
          title: "Integrated Pest Management (IPM)",
          description: "Holistic approach combining biological, cultural, and minimal chemical controls for pest management",
          implementation: "Farmers trained in pest identification, beneficial insect conservation, and targeted intervention strategies"
        },
        {
          title: "Organic Input Production",
          description: "On-farm production of organic fertilizers, pesticides, and growth promoters using local materials",
          implementation: "Community composting units and bio-pesticide production training for farmer groups"
        },
        {
          title: "Certification and Marketing",
          description: "Organic certification support and direct market linkage development for premium pricing",
          implementation: "Farmer producer organizations formed with certification assistance and buyer connections"
        }
      ],
      naturalMethods: [
        "Neem-based natural pesticides and growth regulators",
        "Beneficial insect habitats and biological pest control",
        "Crop rotation and companion planting strategies",
        "Traditional fermented organic liquid fertilizers"
      ],
      guidance: "Gradual transition approach ensuring economic viability while building farmer confidence in organic methods."
    },
    surveys: {
      methodology: "Multi-phase assessment including baseline chemical usage surveys, health screenings, soil and produce testing, and market analysis conducted over 12-month period.",
      responses: [
        {
          question: "How has reducing chemical use affected your crop quality and health?",
          response: "My family's health has improved significantly, and surprisingly, my vegetables taste better and last longer in storage.",
          respondent: "Gurpreet Singh, Vegetable Farmer"
        },
        {
          question: "What challenges did you face in transitioning to organic methods?",
          response: "Initially, I was worried about pest damage, but the natural methods work well, and I save money on expensive chemicals.",
          respondent: "Meera Devi, Organic Farmer"
        },
        {
          question: "How has the market responded to your organic produce?",
          response: "Customers are willing to pay 20-30% more for certified organic vegetables, and demand is growing rapidly.",
          respondent: "Rajesh Kumar, Farmer Producer Organization Leader"
        }
      ],
      insights: [
        "Health concerns primary motivator for chemical reduction",
        "Economic incentives crucial for sustained organic adoption",
        "Peer learning more effective than top-down training",
        "Market access essential for successful organic transition"
      ],
      analysis: "67% reduction in chemical pesticide use achieved, 89% of farmers reported improved family health, and 45% received premium prices for organic produce."
    },
    outcomes: {
      impact: [
        "67% reduction in chemical pesticide use across participating farms",
        "89% of farming families reported improved health outcomes",
        "50 farmers achieved organic certification with premium market access",
        "30% increase in soil health indicators and beneficial insect populations"
      ],
      results: [
        {
          metric: "Chemical Reduction",
          value: "67%",
          improvement: "Decrease in pesticide application rates"
        },
        {
          metric: "Health Improvement",
          value: "89%",
          improvement: "Farmers reporting better family health"
        },
        {
          metric: "Premium Pricing",
          value: "25%",
          improvement: "Average price increase for organic produce"
        },
        {
          metric: "Soil Health",
          value: "30%",
          improvement: "Increase in beneficial soil organisms"
        }
      ],
      learnings: [
        "Gradual transition more successful than immediate chemical elimination",
        "Group approaches facilitate knowledge sharing and problem-solving",
        "Market incentives essential for sustained organic farming adoption",
        "Health benefits provide strong motivation for continued participation"
      ],
      recommendations: [
        "Expand organic certification support to more farmer groups",
        "Develop regional processing facilities for organic produce",
        "Create policy framework supporting organic farming transition",
        "Establish organic input production and distribution networks"
      ]
    },
    gallery: [
      {
        id: "c1",
        url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Organic Farming Training",
        description: "Farmers learning natural pest control methods"
      },
      {
        id: "c2",
        url: "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Chemical-Free Vegetables",
        description: "Fresh organic produce from participating farms"
      },
      {
        id: "c3",
        url: "https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Soil Testing Session",
        description: "Farmers testing soil health improvements"
      },
      {
        id: "c4",
        url: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Market Certification",
        description: "Organic certification ceremony for successful farmers"
      }
    ]
  }
];

export const teamMembers = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    role: "Project Director",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Environmental scientist with 15+ years in community development",
    expertise: ["Community Engagement", "Environmental Policy", "Project Management"]
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Field Coordinator",
    image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Rural development specialist with extensive fieldwork experience",
    expertise: ["Rural Development", "Community Mobilization", "Training Programs"]
  },
  {
    id: "3",
    name: "Sarah Johnson",
    role: "Technical Advisor",
    image: "https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Water and sanitation engineer specializing in sustainable solutions",
    expertise: ["Water Systems", "Sustainable Technology", "Infrastructure Design"]
  },
  {
    id: "4",
    name: "Anita Patel",
    role: "Community Outreach Manager",
    image: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Social worker focused on women's empowerment and community health",
    expertise: ["Women's Empowerment", "Health Education", "Social Mobilization"]
  }
];

export const impactStats = [
  {
    number: "6,700+",
    label: "Lives Impacted",
    description: "Community members directly benefited from our projects"
  },
  {
    number: "21",
    label: "Villages Reached",
    description: "Rural communities actively participating in our initiatives"
  },
  {
    number: "87%",
    label: "Success Rate",
    description: "Projects showing sustained positive impact after completion"
  },
  {
    number: "250+",
    label: "Partners Trained",
    description: "Local leaders and volunteers equipped with necessary skills"
  }
];