import { FaExternalLinkAlt } from 'react-icons/fa';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

interface Education {
  degree: string;
  institution: string;
  date: string;
  url: string;
}

interface CertificationCardProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  link: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://www.credly.com/org/aws/badge/aws-certified-solutions-architect-associate"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    url: "https://www.credential.net/your-certificate-id"
  }
];

const education: Education[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Gujarat Technological University",
    date: "2019 - 2023",
    url: "https://www.gtu.ac.in/"
  }
];

const CertificationCard = ({ 
  title, 
  institution, 
  period, 
  description, 
  link 
}: CertificationCardProps): React.JSX.Element => {
  return (
    <div className="mb-10 ml-8">
      {/* Your existing JSX */}
    </div>
  );
};

const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # About me
          </div>
          <h2 className="text-xl sm:text-3xl font-bold whitespace-nowrap flex items-center justify-center gap-2">
            <span className="text-blue-400 font-fira-code">def</span>
            <span className="text-white font-fira-code">about_</span>
            <span className="text-green-400 font-fira-code">me</span>
            <span className="text-white font-fira-code">():</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 mb-6">
              <div className="font-fira-code mb-6">
                <div className="text-green-400"># Bio</div>
                <div className="text-gray-400 text-sm">bio = """</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in building scalable web applications. 
                My journey in software development has been driven by a deep curiosity for creating efficient 
                and elegant solutions to complex problems. I specialize in modern web technologies and 
                cloud platforms, with a particular focus on Python-based development.
              </p>
              <div className="font-fira-code text-gray-400 text-sm mt-4">"""</div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <div className="font-fira-code mb-6">
                <div className="text-green-400"># Skills</div>
                <div className="text-gray-400 text-sm">skills = []</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 font-fira-code"># Frontend</div>
                  <ul className="space-y-1">
                    <li className="text-white">• React.js</li>
                    <li className="text-white">• Next.js</li>
                    <li className="text-white">• TypeScript</li>
                    <li className="text-white">• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 font-fira-code"># Backend</div>
                  <ul className="space-y-1">
                    <li className="text-white">• Python</li>
                    <li className="text-white">• Django</li>
                    <li className="text-white">• FastAPI</li>
                    <li className="text-white">• Node.js</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 font-fira-code"># Database</div>
                  <ul className="space-y-1">
                    <li className="text-white">• PostgreSQL</li>
                    <li className="text-white">• MongoDB</li>
                    <li className="text-white">• Redis</li>
                    <li className="text-white">• SQLite</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 font-fira-code"># Cloud & DevOps</div>
                  <ul className="space-y-1">
                    <li className="text-white">• AWS</li>
                    <li className="text-white">• Docker</li>
                    <li className="text-white">• Kubernetes</li>
                    <li className="text-white">• CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-fira-code">
                <span className="text-green-400"># </span>
                <span className="text-white">certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                      </div>
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-fira-code">
                <span className="text-green-400"># </span>
                <span className="text-white">education</span>
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                        <span className="text-green-300">&quot;{edu.institution}&quot;</span>
                        <p className="text-gray-500 text-xs mt-1">{edu.date}</p>
                      </div>
                      <a 
                        href={edu.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 