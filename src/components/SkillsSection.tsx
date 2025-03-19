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
  <div className="mb-6 last:mb-0">
    <div className="flex flex-col sm:flex-row">
      <div className="text-purple-400 font-fira-code font-bold mb-2 sm:mb-0 sm:min-w-[140px] whitespace-nowrap">
        {title}:
      </div>
      <div className="text-gray-300 font-fira-code flex-1 sm:pl-4">
        {skills}
      </div>
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
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-blue-400 font-fira-code">class </span>
            <span className="text-white font-fira-code">Technical</span>
            <span className="text-green-400 font-fira-code">Skills</span>
            <span className="text-white font-fira-code">()</span>
          </h2>
        </div>
        
        <div className="space-y-6 p-4 sm:p-6 rounded-lg border border-gray-800 bg-[#1a1a1a]">
          <SkillCategory 
            title="Languages"
            skills="Python, JavaScript, TypeScript, C, SQL, HTML, CSS, Bash"
          />
          
          <SkillCategory 
            title="Backend"
            skills="Django, Django REST Framework, FastAPI, Flask, Bottle"
          />

          <SkillCategory 
            title="Frontend"
            skills="React, Angular, NextJS, Bootstrap, Tailwind CSS, Streamlit"
          />
          
          <SkillCategory 
            title="Libraries"
            skills="Django Oscar, Stripe, Pandas, Numpy, PyQt5, Pyecharts, Boto3, Django Channels, jQuery, Openpyxl, Celery"
          />

          <SkillCategory 
            title="Databases"
            skills="PostgreSQL, MySQL, MongoDB"
          />

          <SkillCategory 
            title="LLMs"
            skills="OpenAI, Anthropic, Gemini, Claude, Ollama"
          />

          <SkillCategory 
            title="Vector DBs"
            skills="Qdrant, Pinecone, Faiss, Postgres Vector Extension"
          />

          <SkillCategory 
            title="AWS"
            skills="EC2, Lambda Function, SNS, SQS, S3 Bucket, CloudWatch Events, Glue Jobs, Amazon EventBridge, ECR, EFS, Alexa Skills"
          />
          
          <SkillCategory 
            title="GCP"
            skills="PubSub, Cloud Functions, Cloud Monitoring, Cloud Storage, Cloud Logging, Firebase"
          />

          <SkillCategory 
            title="DevOps"
            skills="Docker, Kubernetes, Jenkins, GitHub Actions, Terraform"
          />
          
          <SkillCategory 
            title="Message Queue"
            skills="RabbitMQ, Redis"
          />

          <SkillCategory 
            title="Web Server"
            skills="Nginx, Apache"
          />
          
          <SkillCategory 
            title="Web Scraping"
            skills="Scrapy, ScraperAPI, Selenium, Playwright, Beautiful Soup, Requests, Puppeteer"
          />
          
          <SkillCategory 
            title="Other"
            skills="Web Scraping/Crawling, Web/Excel Automation, Shell Scripting, GUI Development"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 