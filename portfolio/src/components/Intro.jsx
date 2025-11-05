import { FaAngleDown } from "react-icons/fa";

function Intro() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Mohammed Musthaq Asim Shaik
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            This is a portfolio representing my projects, skills and self
        </p>

      </div>

      <div className="absolute pb-1 bottom-0 text-[#9d9d9d] flex gap-1 justify-items-center items-center">
        <FaAngleDown size={30}/>
      </div>

    </div>
  );
}

export default Intro;
