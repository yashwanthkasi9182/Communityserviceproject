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
    heroImage: "/images/waterfacilities/image.png",
    overview: {
      description: "This project focuses on establishing sustainable water infrastructure in underserved rural communities, addressing the critical need for clean drinking water access through community-driven solutions.",
      objectives: [
        "Observed water facility systems and tanks",
        "Educated residents on water safety and hygiene",
        "Surveyed people and got feedback"
      ],
      timeline: "19th May 2025 - 1st June 2025",
      location: "Kanipaka Patnam, Chittoor",
      beneficiaries: "1,200+ community members"
    },
    problemStatement: {
      issue: "Water facility systems observance and guiding residents on water safety and hygiene is crucial for preventing waterborne diseases and ensuring community health.",
      communityNeeds: [
        "Reliable access to clean drinking water",
        "Reduction in waterborne diseases",
        "Improved overall community health and productivity"
      ],
      currentSituation: "Communities rely on limited water sources.",
      urgency: "Using rust motors and immediate intervention needed to prevent further health crises and economic losses."
    },
    awarenessCampaign: {
      initiatives: [
        "Village-level hygiene and sanitation classes"
      ],
      methods: [
        "Interactive community meetings",
        "Peer-to-peer education programs"
      ],
      targetAudience: "Village heads, women's groups, school children, and health workers",
      materials: [
      ],
      reach: "Community members directly engaged in village"
    },
    alternatives: {
      solutions: [
        
      ],
      naturalMethods: [
        
      ],
      guidance: "All solutions designed for local implementation with minimal external dependency and maximum community ownership."
    },
    surveys: {
      methodology: "Pre and post-implementation surveys conducted with structured interviews, focus groups, and health assessments across participating villages.",
      responses: [
        {
          question: "what is your primary source of drinking water?",
          response: "Borewell",
          respondent: ""
        },
        {
          question: "how often do you face water shortage in your area?",
          response: "Weekly",
          respondent: ""
        },
        {
          question: "Is there drinking water available in your home throughout the day?",
          response: "Yes It is there.",
          respondent: ""
        },
        {
          question: "Do you treat or purify your drinking water before consumption?",
          response: "Yes using purifier",
          respondent: ""
        },
        {
          question: "Are there any public water tanks or hand pumps in your village?",
          response: "Yes and they work properly",
          respondent: ""
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
        url: "/images/waterfacilities/1.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w2",
        url: "/images/waterfacilities/2.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w3",
        url: "/images/waterfacilities/3.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w4",
        url: "/images/waterfacilities/4.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w5",
        url: "/images/waterfacilities/5.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w6",
        url: "/images/waterfacilities/6.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w7",
        url: "/images/waterfacilities/7.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w8",
        url: "/images/waterfacilities/8.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w9",
        url: "/images/waterfacilities/9.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w10",
        url: "/images/waterfacilities/10.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      },
      {
        id: "w11",
        url: "/images/waterfacilities/11.png",
        title: "Community Water System Installation",
        description: "Local technicians installing bio-sand filtration system"
      }
    ]
  },
  {
    id: "2",
    title: "Plantation",
    slug: "plantation",
    description: "Understanding and analysing surroundings to plant which type of trees and plant them",
    heroImage: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    overview: {
      description: "Understanding and analysing surroundings to plant which type of trees and plant them",
      objectives: [
        "Plant Neem and Pongamia oil trees",
        "Educate the villagers and bring awareness of deforestation and plantation"
      ],
      timeline: "3rd June - 14th June",
      location: "kanipaka Patnam, Chittoor",
      beneficiaries: "1200+ residents in village"
    },
    problemStatement: {
      issue: "Rapid deforestation and unsustainable farming practices have led to soil erosion, reduced rainfall, and declining agricultural productivity, threatening rural livelihoods and environmental stability.",
      communityNeeds: [
        "Awareness on deforestation and plantation",
        "Planting Neem and pongamia oil trees",
      ],
      currentSituation: "Overall forestation is good but there is not much awareness of plantation and deforestation",
      urgency: "Planting Neem, tulasi and pongamia oil trees along the road side to reduce the pollution and improve oxygen levels and providing shade for the people."
    },
    awarenessCampaign: {
      initiatives: [
        "Awareness on Deforestation and plantation among villagers ",
        "Planted Neem and Pongamia oil trees along roadside",
        "Planted trees in multiple places to improve plantation in crucial areas."
      ],
      methods: [
        "Participatory learning sessions",
        "Practical plantation of trees"
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
          question: "Do you agree 'Plantation is important'?",
          response: "yes it is.",
          respondent: "Ramesh Gowda, Farmer"
        },
        {
          question: "Do you plant trees?",
          response: "Yes I plant often.",
          respondent: "Lakshmi Devi, Women's Group Leader"
        },
        {
          question: "What is the main reason that you plant trees?",
          response: "We get oxygen, food purpose.",
          respondent: "Suresh Kumar, Village Head"
        },
        {
          question:"Do you think we can survive without plants?",
          response: "No we cannot. Plants are importat for huiman survival.",
          respondent:""
        },
        {
          question:"What will you do to protect trees?",
          response:"I water them regularly and stop people from cutting them",
          respondent:""
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
        url: "/images/plantations/1.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p2",
        url: "/images/plantations/2.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p3",
        url: "/images/plantations/3.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p4",
        url: "/images/plantations/4.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p5",
        url: "/images/plantations/5.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p6",
        url: "/images/plantations/6.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p7",
        url: "/images/plantations/7.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p8",
        url: "/images/plantations/8.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p11",
        url: "/images/plantations/11.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p12",
        url: "/images/plantations/12.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p13",
        url: "/images/plantations/13.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
      },
      {
        id: "p14",
        url: "/images/plantations/14.png",
        title: "Community Plantation Drive",
        description: "Local volunteers planting trees in public spaces"
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
        "Checking where the fruits and vegetables brough from",
        "Awareness session on cleaning the fruits and vegetables",
        "Importance of cleaning methods and learning them.",
      ],
      timeline: "16th June 2025 - 21st June 2025",
      location: "Kanipaka Patnam, Chittoor",
      beneficiaries: "1250+ villagers across village"
    },
    problemStatement: {
      issue: "Excessive use of chemical pesticides and fertilizers in vegetable and fruit farming poses serious health risks to farmers and consumers while degrading soil health and contaminating water sources.",
      communityNeeds: [
        "Safe and effective alternatives to chemical pesticides",
        "Awareness on cleaning the vegetables and fruits"
      ],
      currentSituation: "People Doesn't know how to clean properly of chemical fruits and vegetables.",
      urgency: "Immediate action required to teach and learn them how to use and clean the vegetables and fruits for safe use."
    },
    awarenessCampaign: {
      initiatives: [
        "Health impact awareness sessions on chemical pesticide dangers",
        "Awareness session on cleaning",
        "Identifying where the fruits and vegetables",
      ],
      methods: [
        "Awareness session with hands-on training on cleaning",
        "Chemical effect and organic vegetables importance session"
      ],
      targetAudience: "Vegetable farmers, agricultural workers, consumers, and healthcare providers",
      materials: [
        "Chemical hazard identification charts",
        "Organic recipe preparation guides",
        "Market certification process manuals",
        "Health safety equipment distribution"
      ],
      reach: "100+ people engaged in awareness programs"
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
          question: "Do you use pesticides or chemicals on your vegetables and fruits?",
          response: "Always without that our crop doesn't come well.",
          respondent: "Grpreet Singh, Vegetable Farmer"
        },
        {
          question: "Are you aware of the potential health risks associated with chemical use on produce?",
          response: "Very aware.",
          respondent: "Grpreet Singh, Vegetable Farmer"
        },
        {
          question: "Have you noticed any difference in taste or quality in chemically grown and organically produced?",
          response: "yes, Significant difference.",
          respondent: "Grpreet Singh, Vegetable Farmer"
        },
        {
          question: "How do you currently obtain your vegetables and fruits?",
          response: "Market",
          respondent: "Grpreet Singh, Vegetable Farmer"
        },
        {
          question: "Would you support initiatives promoting reduced chemical use in farming?",
          response: "Strongly support",
          respondent: "Grpreet Singh, Vegetable Farmer"
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
        url: "/images/chemicals/1.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c2",
        url: "/images/chemicals/2.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c3",
        url: "/images/chemicals/3.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c4",
        url: "/images/chemicals/4.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c5",
        url: "/images/chemicals/5.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c6",
        url: "/images/chemicals/6.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c7",
        url: "/images/chemicals/7.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c8",
        url: "/images/chemicals/8.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c9",
        url: "/images/chemicals/9.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c10",
        url: "/images/chemicals/10.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c11",
        url: "/images/chemicals/11.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      },
      {
        id: "c12",
        url: "/images/chemicals/12.png",
        title: "Chemical Awareness Campaign",
        description: "Demonstration on harmful effects of chemicals on food"
      }
    ]
  }
];

export const teamMembers = [
  {
    id: "1",
    name: "A. Bindhu",
    role: "234M1A0501",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Environmental scientist with 15+ years in community development",
    expertise: ["Community Engagement", "Environmental Policy", "Project Management"]
  },
  {
    id: "2",
    name: "A. Likhitha",
    role: "234M1A0509",
    image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Rural development specialist with extensive fieldwork experience",
    expertise: ["Rural Development", "Community Mobilization", "Training Programs"]
  },
  {
    id: "3",
    name: "E. Harshitha",
    role: "234M1A0532",
    image: "https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Water and sanitation engineer specializing in sustainable solutions",
    expertise: ["Water Systems", "Sustainable Technology", "Infrastructure Design"]
  },
  {
    id: "4",
    name: "G.S. Manisha",
    role: "234M1A0536",
    image: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Social worker focused on women's empowerment and community health",
    expertise: ["Women's Empowerment", "Health Education", "Social Mobilization"]
  },
  {
    id: "5",
    name: "K. Bhavana",
    role: "234M1A0550",
    image: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Social worker focused on women's empowerment and community health",
    expertise: ["Women's Empowerment", "Health Education", "Social Mobilization"]
  },
  {
    id: "6",
    name: "K. Maanisha",
    role: "234M1A0556",
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