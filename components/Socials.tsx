import { Linkedin, Github, Twitter } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex flex-col items-center space-y-10 p-4">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <Linkedin className="w-6 h-6 text-gray-800" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <Github className="w-6 h-6 text-gray-800" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <Twitter className="w-6 h-6 text-gray-800" />
      </a>
    </div>
  )
}

export default Socials