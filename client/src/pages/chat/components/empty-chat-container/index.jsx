import { animationDefaultOptions } from "@/lib/utils";
import { IoTabletPortraitOutline } from "react-icons/io5";
import Lottie from "react-lottie";


const EmptyChatContainer = () => {
  return (
    
    <div className="flex-1 xl:w-[80vw] md:bg-[#1c1d25] md:flex md:flex-col justify-center items-center w-full h-full hidden transition-all duration-1000">
      <Lottie 
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}      
      />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl  text-3xl transition-all duration-300 text-center">
        <h3 className="poppins-medium">
            Hi <span className="text-purple-500">!</span> Welcome to
            <span className="text-purple-500"> JustChat</span> Messenger App <span className="text-purple-500">.</span>
        </h3>
      </div>
        </div>
  )
}

export default EmptyChatContainer;