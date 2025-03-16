import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Technology {
  name: string;
  color: string;
}

interface ProjectProps {
  title: string;
  description: string;
  contributions: string[];
  technologies: Technology[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const technologies: Record<string, Technology> = {
  python: { name: 'Python', color: 'bg-blue-600' },
  django: { name: 'Django', color: 'bg-green-700' },
  react: { name: 'ReactJS', color: 'bg-blue-400' },
  git: { name: 'GIT', color: 'bg-red-500' },
  angular: { name: 'Angular', color: 'bg-red-600' },
  flutter: { name: 'Flutter', color: 'bg-blue-500' },
  dotnet: { name: 'DOT NET', color: 'bg-purple-600' },
  nextjs: { name: 'NextJS', color: 'bg-black' },
  openai: { name: 'OpenAI GPT', color: 'bg-green-500' },
  llm: { name: 'LLM', color: 'bg-purple-500' },
  mysql: { name: 'MySQL', color: 'bg-blue-800' },
  lambda: { name: 'Lambda', color: 'bg-orange-500' },
  firebase: { name: 'Firebase', color: 'bg-yellow-600' },
  jquery: { name: 'JQuery', color: 'bg-blue-700' },
  javascript: { name: 'JavaScript', color: 'bg-yellow-500' },
  chatbots: { name: 'AI Chatbots', color: 'bg-teal-600' },
};

const ProjectCard = ({ 
  title, 
  description, 
  contributions, 
  technologies: techs, 
  imageUrl = '/project-placeholder.jpg',
  githubUrl,
  liveUrl 
}: ProjectProps) => (
  <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all group">
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10"></div>
      {/* Placeholder for now - replace with actual image later */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#306998] to-[#FFD43B] flex items-center justify-center text-white">
        <span className="font-fira-code text-sm">project-image.jpg</span>
      </div>
      {/* Uncomment when you have actual images
      <Image 
        src={imageUrl} 
        alt={title} 
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      */}
    </div>
    <div className="p-6">
      <div className="font-fira-code mb-1 text-gray-400">
        # Project
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">
        <span className="font-fira-code text-green-400">project.</span>{title.replace(/\s+/g, '_').toLowerCase()}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <div className="font-fira-code text-blue-400 mb-2">def contributions():</div>
        <ul className="space-y-2">
          {contributions.map((contribution, idx) => (
            <li key={idx} className="flex">
              <span className="text-green-400 mr-2 font-fira-code">{'>'}</span>
              <span className="text-gray-300">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, idx) => (
          <span 
            key={idx} 
            className={`px-2 py-1 rounded-full text-xs font-medium text-white ${tech.color}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4 mt-4">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub className="mr-1" /> Code
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center"
            aria-label={`Live demo for ${title}`}
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Blickers",
      description: "Blickers is an ecommerce platform of eyeware, selling more than 120 brands in eyeware fashion world. More than 2 million unique users last year.",
      contributions: [
        "Migrated 40% of monolithic architecture's back-end code to micro-services architecture, leveraging GCP",
        "Maintained existing web crawlers and created new ones",
        "Built REST APIs using Django Rest Framework"
      ],
      technologies: [technologies.git, technologies.angular, technologies.django, technologies.python],
    },
    {
      title: "Fortuna Application",
      description: "Fortuna is the astrology App for online Astrology predictions. With a Tarot Card reading, Palm Reading Daily Reading, Numerology Reading and more.",
      contributions: [
        "Requirement Understanding, Designing, Planning, and Development",
        "Design the Backend Architecture and Develop the REST APIs in Django REST Framework",
        "Building Microservices Architecture leveraging Rabbitmq and AWS services",
        "Demonstrating Prompt Engineering techniques"
      ],
      technologies: [technologies.python, technologies.flutter, technologies.react],
    },
    {
      title: "Real Estate- Cribzzzz",
      description: "A comprehensive Real Estate Management Portal that seamlessly lists properties through a 3rd party API. Users can conveniently mark their favorite properties for easy access.",
      contributions: [
        "AI ChatBot Development",
        "Requirement Gathering and Analysis",
        "Model Training"
      ],
      technologies: [technologies.react, technologies.dotnet],
    },
    {
      title: "HealthPredictor Plus",
      description: "HealthPredictor Plus leverages advanced machine learning to analyze health data, predict potential health issues and offer tailored preventive measures.",
      contributions: [
        "Created REST APIs using FastAPI",
        "Integrated Redis caching for storing session data and managing user context",
        "Leveraged Langchain with OpenAI models using chaining of Prompt Template and LLMChain"
      ],
      technologies: [technologies.chatbots, technologies.nextjs, technologies.openai, technologies.llm, technologies.python],
    },
    {
      title: "Vavis - Home Automations",
      description: "The advanced innovative capacitive touch lighting control system from Embedded, brings out the best in your environment.",
      contributions: [
        "Developed REST and WebSocket APIs using Django REST Framework",
        "Designed and Developed admin interfaces for web and desktop applications",
        "Implemented an integrated smart home solution enabling voice and remote control functionalities"
      ],
      technologies: [technologies.mysql, technologies.lambda, technologies.firebase, technologies.jquery, technologies.javascript, technologies.django],
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Featured work
          </div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400 font-fira-code">for</span>
            <span className="text-white font-fira-code"> project </span>
            <span className="text-green-400 font-fira-code">in</span>
            <span className="text-white font-fira-code"> projects:</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 