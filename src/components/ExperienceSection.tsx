import { FaLaptopCode, FaBriefcase, FaTerminal } from 'react-icons/fa';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  companyShort: string;
  isActive?: boolean;
}

const ExperienceItem = ({ title, company, period, description, companyShort, isActive = false }: ExperienceItemProps) => (
  <div className="mb-10 ml-8">
    <div className={`absolute w-6 h-6 rounded-full mt-1.5 -left-3 border-2 
      ${isActive ? 'border-green-500 bg-[#1e1e1e]' : 'border-gray-700 bg-[#1e1e1e]'}`}
    >
      <div className={`absolute w-3 h-3 rounded-full mt-0.5 ml-0.5 ${isActive ? 'bg-green-500' : 'bg-gray-700'}`}></div>
    </div>
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
      <div className="flex justify-between flex-col sm:flex-row mb-1">
        <div>
          <span className="font-fira-code font-bold text-blue-400">~ $ </span>
          <span className="font-fira-code text-green-400">sudo apt-get </span>
          <span className="font-fira-code text-white">install </span>
          <span className="font-fira-code text-yellow-400">{title}</span>
        </div>
        <span className="font-fira-code text-gray-400 mt-1 sm:mt-0">{period}</span>
      </div>
      <div className="mb-4 font-fira-code">
        <span className="text-gray-300">$ company = </span>
        <span className="text-green-300">"{company}"</span>
      </div>
      <div className="mb-4 space-y-2">
        {description.map((item, index) => (
          <div className="flex" key={index}>
            <span className="text-green-400 mr-2 font-fira-code">{'>>>'} </span>
            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#306998] text-white">
          <span className="mr-1">{companyShort}</span>
          <FaTerminal />
        </span>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Professional journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-blue-400 font-fira-code">class </span>
            <span className="text-white font-fira-code">Work</span>
            <span className="text-green-400 font-fira-code">Experience</span>
            <span className="text-white font-fira-code">()</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-gray-700">
          <ExperienceItem 
            title="Software Engineer"
            company="Openxcell Technolabs Pvt. Ltd."
            companyShort="OT"
            period="February 2024 - Present"
            isActive={true}
            description={[
              "Leading R&D initiatives in AI/ML solutions and conducting POCs for innovative technologies.",
              "Building and integrating AI solutions using OpenAI, Anthropic, Claude, Gemini, and other LLM models.",
              "Developing RAG-based applications with vector databases for enhanced information retrieval.",
              "Designing and implementing backend architectures and REST APIs in Django REST Framework.",
              "Building scalable solutions using both monolithic, microservices and serverless architectures.",
              "Demonstrating expertise in Prompt Engineering and LangChain for advanced AI implementations."
            ]}
          />
          
          <ExperienceItem 
            title="Python Developer"
            company="Swan Softweb Solutions"
            companyShort="SS"
            period="November 2022 - January 2024"
            description={[
              "Migrated 40% of monolithic architecture's back-end code to micro-services architecture, leveraging essential services from Google Cloud Platform.",
              "Upheld Django REST standards, crafting efficient, reusable, scalable code. Improved system performance, ensuring seamless adaptability for future advancements.",
              "Reverse Engineered multiple websites to maintain existing crawlers and developed new ones with Scrapy.",
              "Orchestrated a versatile service, generating 2D & 3D charts via API & CLI, leveraging Bottle and Pyecharts.",
              "Led junior developers in understanding contracts, implementing services, overseeing deployment, conducting code reviews for quality assurance and release."
            ]}
          />
          
          <ExperienceItem 
            title="Jr. Software Engineer"
            company="Softqube Technologies"
            companyShort="ST"
            period="November 2021 - November 2022"
            description={[
              "Developed REST and WebSocket API's using Django REST Framework, FastAPI and Django Channels.",
              "Designed and Developed admin interfaces for web and desktop applications using Django, JavaScript and PyQt5.",
              "Implemented an integrated smart home solution enabling voice and remote control functionalities for smart devices with Alexa SmartHome Skills and Google Action SmartHome with Node.js, AWS Lambda and Firebase.",
              "Created efficient web crawlers of 3 major hotel websites utilizing requests, Beautiful Soup and Selenium."
            ]}
          />
          
          <ExperienceItem 
            title="Intern"
            company="Pantech ProEd Pvt Ltd"
            companyShort="PP"
            period="January 2021 - October 2021"
            description={[
              "Acquired Python skills and created projects covering various language concepts.",
              "Developed an AI chatbot application using DialogFlow and created projects involving detection and recognition using OpenCV and Deep Learning."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 