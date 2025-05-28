import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const CertificationCard = ({ title, issuer, date, link }: CertificationProps) => (
  <div className="p-5 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
    <div className="flex items-start">
      <div className="mt-1 mr-4 text-green-400">
        <FaCertificate size={20} />
      </div>
      <div>
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <div className="text-gray-400 text-sm mb-2">
          <span className="font-fira-code">from</span> {issuer} • {date}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center"
          >
            View Credential <FaExternalLinkAlt className="ml-1" size={12} />
          </a>
        )}
      </div>
    </div>
  </div>
);

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  link?: string;
}


const EducationSection = (): JSX.Element => {
  const education = {
    degree: "Bachelor of Engineering",
    institution: "Gujarat Technological University",
    year: "2021",
  };
  
  const certifications: CertificationProps[] = [
    {
      title: "The Python Developer Essentials 2021 Immersive Bootcamp",
      issuer: "Udemy",
      date: "December 2021",
      link: "#",
    },
    {
      title: "Fundamentals of Backend Engineering",
      issuer: "Udemy",
      date: "September 2023",
      link: "#",
    },
    {
      title: "Docker Training Course",
      issuer: "KodeKloud",
      date: "November 2023",
      link: "#",
    },
    {
      title: "Data Science with Python",
      issuer: "Simplilearn",
      date: "May 2022",
      link: "#",
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Education
          </div>
          <h2 className="text-xl sm:text-3xl font-bold mb-8 whitespace-nowrap flex items-center justify-center gap-2">
            <span className="text-blue-400 font-fira-code">class</span>
            <span>
              <span className="text-white font-fira-code">Academic</span>
              <span className="text-green-400 font-fira-code">Background</span>
              <span className="text-white font-fira-code">()</span>
              </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                    {/* Certifications Column */}
                    <div>
            <h3 className="font-fira-code text-xl text-white mb-6 flex items-center gap-2">
              <span className="text-green-400">#</span>
              <span className="text-purple-400">class </span>
              <span className="text-white">Certifications:</span>
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <CertificationCard key={idx} {...cert} />
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-[#2d2d2d] border-l-4 border-yellow-500">
              <div className="font-fira-code text-sm text-yellow-400 mb-1">
                # Continuous Learning
              </div>
              <p className="text-gray-300">
                I believe in continuous learning and regularly update my skills through courses, 
                certifications, and hands-on projects. Currently exploring advanced concepts in 
                AI, Prompt Engineering, and Cloud Architecture.
              </p>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="font-fira-code text-xl text-white mb-6 flex items-center gap-2">
              <span className="text-green-400">#</span>
              <span className="text-purple-400">class </span>
              <span className="text-white">Education:</span>
            </h3>
            
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-blue-400">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <div className="font-fira-code text-sm text-gray-400 mb-1">
                    # Academic Details
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {education.degree}
                  </h4>
                  <div className="font-fira-code">
                    <div className="mb-1">
                      <span className="text-blue-400">institution</span>
                      <span className="text-white"> = </span>
                      <span className="text-green-300">&quot;{education.institution}&quot;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">year</span>
                      <span className="text-white"> = </span>
                      <span className="text-green-300">&quot;{education.year}&quot;</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="font-fira-code text-blue-400 mb-3">
                  def academic_journey():
                </div>
                <p className="text-gray-300 italic">
                  "Completed Bachelor of Engineering in 2021 from Gujarat Technological University, 
                  where I gained a strong foundation in computer science and developed a keen interest in 
                  software development, particularly in Python and backend technologies."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 