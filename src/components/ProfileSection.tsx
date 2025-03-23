import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTerminal } from 'react-icons/fa';

const ProfileSection = (): JSX.Element => {
  return (
    <div className="py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Profile Photo with enhanced styling */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-500 shadow-lg transition-all duration-300 hover:border-blue-400 hover:shadow-xl group">
        {/* Python-themed overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#306998]/60 to-[#FFD43B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <div className="font-fira-code text-white text-center">
            <div className="text-sm">def view_profile():</div>
            <div className="text-xs mt-1">return "Hunny Jain"</div>
          </div>
        </div>
        
        {/* Profile image with optimized settings and adjusted position */}
        <Image 
          src="/hunny-profile.jpg" 
          alt="Hunny Jain" 
          fill
          className="object-cover object-[center_top] transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 256px"
          quality={90}
          style={{ objectPosition: '50% 30%' }}
        />
      </div>

      {/* Profile Info */}
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-2 font-fira-code">
          <div className="text-gray-400"># Software Engineer & AI Enthusiast</div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Hunny</span>
            <span className="text-green-400"> Jain</span>
          </h1>
          <div className="text-xl text-gray-300 space-y-1">
            <div>
              <span className="text-blue-400">experience</span>
              <span className="text-white"> = </span>
              <span className="text-green-300">&quot;3+ years&quot;</span>
            </div>
            <div>
              <span className="text-blue-400">specialization</span>
              <span className="text-white"> = [</span>
              <span className="text-green-300">&quot;Backend&quot;</span>
              <span className="text-white">, </span>
              <span className="text-green-300">&quot;Django&quot;</span>
              <span className="text-white">, </span>
              <span className="text-green-300">&quot;AI&quot;</span>
              <span className="text-white">]</span>
            </div>
            <div>
              <span className="text-blue-400">role</span>
              <span className="text-white"> = </span>
              <span className="text-green-300">&quot;Full Stack Developer & AI Enthusiast&quot;</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 max-w-2xl">
          <span className="text-green-400 font-fira-code">"""</span> 
          Software Engineer with 3+ years of experience in Python development. 
          Expert in Django, Flask, FastAPI, and other Python frameworks. 
          Experience with cloud services (AWS, GCP), AI technologies, and microservices architecture.
          Passionate about clean code, Linux systems, and open-source technologies.
          <span className="text-green-400 font-fira-code"> """</span>
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="#contact" className="bg-blue-600 hover:bg-blue-400 text-white font-fira-code py-2 px-6 rounded-lg transition-colors">
            .hire_me()
          </Link>
          <Link href="/Hunny_Jain_Resume.pdf" target="_blank" className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white font-fira-code py-2 px-6 rounded-lg border border-gray-700 transition-colors">
            .download_resume()
          </Link>
        </div>

        <div className="flex justify-center md:justify-start gap-6 pt-4">
          <Link 
            href="https://github.com/Hunnyjain7" 
            target="_blank"
            className="text-2xl text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/hunnyjain7/" 
            target="_blank"
            className="text-2xl text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </Link>
          <Link 
            href="#skills" 
            className="text-2xl text-gray-400 hover:text-white transition-colors"
            aria-label="Technical Skills"
          >
            <FaTerminal />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection; 