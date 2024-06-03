import React from "react";
import PomoWelcom from './../assets/images/pomohappy.png';
const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ff7c7a]">
     <img src={PomoWelcom} className=" rounded-lg " alt="" /> 
     <h1 className="text-4xl font-extrabold mt-4  text-white">  به اپ <span className="text-red-600">گوجه</span> خوش امدید. </h1>
    </div>
  );
};

export default WelcomePage;
