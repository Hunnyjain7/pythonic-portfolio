import { FaPython, FaAws, FaReact, FaGit, FaGitlab, FaSlack, FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaAngular } from 'react-icons/fa';
import { SiDjango, SiFlask, SiGooglecloud, SiPostgresql, SiMysql, SiRedis, SiJquery, SiFastapi, SiOpenai, SiStripe, SiPostman, SiC, SiBootstrap, SiSelenium, SiPandas } from 'react-icons/si';

interface SkillItemProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillItem = ({ name, icon }: SkillItemProps) => (
  <div className="inline-flex items-center space-x-2 bg-[#2d2d2d] rounded-md px-3 py-1 m-1">
    {icon && <span className="text-lg text-gray-300">{icon}</span>}
    <span className="font-fira-code text-gray-200 text-sm">{name}</span>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string }) => (
  <div className="mb-4">
    <div className="flex items-start">
      <span className="text-purple-400 font-fira-code font-bold min-w-32">{title}:</span>
      <span className="text-gray-300 font-fira-code ml-2 flex-1">{skills}</span>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Technical Skills
          </div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400 font-fira-code">class</span>
            <span className="text-white font-fira-code"> Technical</span>
            <span className="text-green-400 font-fira-code">Skills</span>
            <span className="text-white font-fira-code">()</span>
          </h2>
        </div>
        
        <div className="space-y-6 p-6 rounded-lg border border-gray-800 bg-[#1a1a1a]">
          <SkillCategory 
            title="Languages"
            skills="Python, JavaScript, C, SQL, HTML, CSS"
          />
          
          <SkillCategory 
            title="Frameworks"
            skills="Django, Django REST Framework, FastAPI, Flask, Bottle, Scrapy, Bootstrap, Angular & React (Basic)"
          />
          
          <SkillCategory 
            title="Libraries"
            skills="Django Oscar, Requests, Beautiful Soup, Selenium, Pyecharts, PyQt5, Pandas"
          />
          
          <SkillCategory 
            title="Other Development Skills"
            skills="Web Scraping/Crawling, Web/Excel Automation, Shell Scripting, GUI Development"
          />
          
          <SkillCategory 
            title="Cloud Services"
            skills="AWS:- EC2, Lambda Function, SNS, S3 Bucket, CloudWatch Events, Glue Jobs"
          />
          
          <SkillCategory 
            title="GCP"
            skills="PubSub, Cloud Functions, Cloud Monitoring, Cloud Storage, Cloud Logging, Firebase"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 