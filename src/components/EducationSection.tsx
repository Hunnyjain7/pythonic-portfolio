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
  link: string;
}

const EducationItem = ({ 
  title, 
  institution, 
  period, 
  description, 
  link 
}: EducationItemProps): React.JSX.Element => {
  return (
    <div className="mb-10 ml-8">
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
          <span className="text-gray-300">$ institution = </span>
          <span className="text-green-300">&quot;{institution}&quot;</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-300">{description}</span>
        </div>
        {link && (
          <div className="flex justify-end">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <FaExternalLinkAlt className="mr-1" /> View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const EducationSection = (): React.JSX.Element => {
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
            # Educational background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-blue-400 font-fira-code">class </span>
            <span className="text-white font-fira-code">My</span>
            <span className="text-green-400 font-fira-code">Education</span>
            <span className="text-white font-fira-code">()</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-gray-700">
          <EducationItem 
            title="Bachelor of Engineering in Computer Engineering"
            institution="Gujarat Technological University"
            period="2017 - 2021"
            description="Completed B.E. in Computer Engineering with 8.61 CGPA"
            link="https://www.gtu.ac.in/"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 