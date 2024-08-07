import Image from "next/image";
import heroimage from "../../public/bg.png";
export default function Home() {
  return (
    <main className="libre">
        <div className="grid grid-row-2 h-[38rem] bg-image relative text-white">
              <div className="h-20 px-16 lg:px-20  flex justify-end items-center gap-20">
                <div className="">Skills</div>
                <div className="">Projects</div>
                <div className="">About Me</div>
                <div className="">Contact Me</div>
              </div>
              <div className="z-20 h-[30rem]  grid grid-cols-3">
                <div className="col-span-2 flex flex-col justify-center  lg:pl-24 ">
                  <div className="text-3xl mb-2">HELLO, THIS IS</div>
                  <div className="font-semibold text-7xl mb-2">DIVYANSH GUPTA</div>
                  <div className="w-[32rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio modi repudiandae magnam itaque incidunt aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet quasi totam debitis aliquid deleniti repudiandae tenetur eligendi!  </div>
                  
                </div>
                <div className="col-span-1  "></div>
              </div>
              <div className="z-10 opacity-65 h-full w-52 bg-[#292929] absolute ml-[35%]"></div>
        </div>
        <div className="h-20 bg-[#242424]"></div>
        
    </main>
  );
}
