'use client';

import Image from "next/image";

// functional component that navigates back in the browser history
const BackBtn: React.FC = () => {
  return (
    <div 
      className={`absolute h-16 w-16 cursor-pointer flex items-center justify-center z-50 group flex-col left-4 top-2 md:left-8 md:top-8`}
      onClick={() => window.history.back()}
    >
      <Image
        src='/icons/arrow-left.svg'
        alt="back icon"
        width={200}
        height={200}
        className={`h-6 w-6 bg-cover bg-center bg-no-repeat group:hover-scale-110`}
      />
      <p className="group:hover-scale-110
      bg-clip-text text-transparent text-xs md:text-sm bg-secondary">Go back</p>
    </div>
  );
};

export default BackBtn;
