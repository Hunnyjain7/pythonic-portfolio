import { FaHeart, FaPython, FaLinux } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-800 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-fira-code text-gray-400 mb-2">
              <span className="text-green-400"># </span>
              <span className="text-blue-400">if</span> __name__ == <span className="text-green-300">&quot;__main__&quot;</span>:
            </div>
            <div className="font-fira-code text-gray-300 pl-4">
              <span className="text-blue-400">print</span>
              (<span className="text-green-300">&quot;© {currentYear} Hunny Jain. All rights reserved.&quot;</span>)
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="font-fira-code text-gray-400 flex items-center mb-2">
              <span>Made with </span>
              <FaHeart className="mx-1 text-red-500" />
              <span> and </span>
              <FaPython className="mx-1 text-blue-400" />
              <span> on </span>
              <FaLinux className="mx-1 text-yellow-500" />
            </div>
            
            <div className="font-fira-code text-xs text-gray-500">
              <span className="text-green-400"># </span>
              <span className="text-gray-500">Powered by Next.js and TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 