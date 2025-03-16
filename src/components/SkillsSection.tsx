import { FaPython, FaAws, FaReact, FaGit, FaGitlab, FaSlack, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiGooglecloud, SiPostgresql, SiMysql, SiRedis, SiJquery, SiFastapi, SiOpenai, SiStripe, SiPostman } from 'react-icons/si';

interface SkillItemProps {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const SkillItem = ({ name, percentage, icon }: SkillItemProps) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <span className="text-xl text-gray-300">{icon}</span>
        <span className="font-fira-code text-gray-200">{name}</span>
      </div>
      <span className="font-fira-code text-green-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-[#2d2d2d] rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <div className="mt-1 flex justify-between">
      <span className="text-xs text-gray-500 font-fira-code">0</span>
      <span className="text-xs text-gray-500 font-fira-code">10</span>
    </div>
  </div>
);

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'Python', percentage: 90, icon: <FaPython /> },
    { name: 'Django', percentage: 90, icon: <SiDjango /> },
    { name: 'Flask', percentage: 80, icon: <SiFlask /> },
    { name: 'FastAPI', percentage: 80, icon: <SiFastapi /> },
    { name: 'JavaScript', percentage: 70, icon: <SiJquery /> },
    { name: 'ReactJS', percentage: 60, icon: <FaReact /> },
  ];

  const cloudSkills = [
    { name: 'AWS', percentage: 70, icon: <FaAws /> },
    { name: 'AWS Lambda', percentage: 90, icon: <FaAws /> },
    { name: 'AWS S3', percentage: 90, icon: <FaAws /> },
    { name: 'GCP', percentage: 60, icon: <SiGooglecloud /> },
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', percentage: 90, icon: <SiPostgresql /> },
    { name: 'MySQL', percentage: 90, icon: <SiMysql /> },
    { name: 'NoSQL', percentage: 60, icon: <FaDatabase /> },
    { name: 'Redis', percentage: 70, icon: <SiRedis /> },
  ];

  const toolsSkills = [
    { name: 'Git', percentage: 80, icon: <FaGit /> },
    { name: 'Gitlab', percentage: 80, icon: <FaGitlab /> },
    { name: 'Postman', percentage: 90, icon: <SiPostman /> },
    { name: 'Slack', percentage: 90, icon: <FaSlack /> },
    { name: 'Stripe', percentage: 70, icon: <SiStripe /> },
  ];

  const aiSkills = [
    { name: 'OpenAI GPT', percentage: 80, icon: <SiOpenai /> },
    { name: 'Generative AI', percentage: 70, icon: <SiOpenai /> },
    { name: 'LLM', percentage: 70, icon: <SiOpenai /> },
    { name: 'AI Chatbots', percentage: 70, icon: <SiOpenai /> },
  ];

  return (
    <section id="skills" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Skills and expertise
          </div>
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400 font-fira-code">def</span>
            <span className="text-white font-fira-code"> display_</span>
            <span className="text-green-400 font-fira-code">skills</span>
            <span className="text-white font-fira-code">()</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 rounded-lg border border-gray-800 bg-[#1a1a1a] group hover:border-blue-500/50 transition-all">
            <h3 className="font-fira-code text-xl text-white mb-8">
              <span className="text-green-400"># </span>
              <span className="text-purple-400">class</span> 
              <span className="text-white"> Programming:</span>
            </h3>
            {programmingSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            ))}
          </div>
          
          <div className="p-6 rounded-lg border border-gray-800 bg-[#1a1a1a] group hover:border-blue-500/50 transition-all">
            <h3 className="font-fira-code text-xl text-white mb-8">
              <span className="text-green-400"># </span>
              <span className="text-purple-400">class</span> 
              <span className="text-white"> Cloud:</span>
            </h3>
            {cloudSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            ))}
          </div>
          
          <div className="p-6 rounded-lg border border-gray-800 bg-[#1a1a1a] group hover:border-blue-500/50 transition-all">
            <h3 className="font-fira-code text-xl text-white mb-8">
              <span className="text-green-400"># </span>
              <span className="text-purple-400">class</span> 
              <span className="text-white"> Databases:</span>
            </h3>
            {databaseSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            ))}
          </div>
          
          <div className="p-6 rounded-lg border border-gray-800 bg-[#1a1a1a] group hover:border-blue-500/50 transition-all">
            <h3 className="font-fira-code text-xl text-white mb-8">
              <span className="text-green-400"># </span>
              <span className="text-purple-400">class</span> 
              <span className="text-white"> Tools:</span>
            </h3>
            {toolsSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            ))}
          </div>
          
          <div className="p-6 rounded-lg border border-gray-800 bg-[#1a1a1a] group hover:border-blue-500/50 transition-all">
            <h3 className="font-fira-code text-xl text-white mb-8">
              <span className="text-green-400"># </span>
              <span className="text-purple-400">class</span> 
              <span className="text-white"> AI_ML:</span>
            </h3>
            {aiSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            ))}
          </div>
          
          <div className="p-6 rounded-lg border border-gray-800 bg-[#1a1a1a] group hover:border-blue-500/50 transition-all">
            <h3 className="font-fira-code text-xl text-white mb-8">
              <span className="text-green-400"># </span>
              <span className="text-purple-400">class</span> 
              <span className="text-white"> Communication:</span>
            </h3>
            <SkillItem name="English" percentage={90} icon={<span className="font-bold">EN</span>} />
            <SkillItem name="Hindi" percentage={100} icon={<span className="font-bold">HI</span>} />
            <SkillItem name="Gujarati" percentage={80} icon={<span className="font-bold">GU</span>} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 