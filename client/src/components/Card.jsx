import  { useState } from "react";

const Card = ({emoji}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="relative rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700 flex flex-col justify-center items-center sm:w-40 w-32 h-24 sm:h-28">
      <button 
        onClick={() => handleCopy(emoji)}
        className="px-3 py-1  rounded absolute top-0 right-0 text-xs text-gray-400"
        aria-label="Copy search emoji"
      >
    
     {copied ? "Copied! ✅" : "📄 Copy"}
      </button>
      <p className="sm:text-5xl text-4xl">{emoji}</p>
    </div>
  );
};

export default Card;
