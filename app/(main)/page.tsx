"use client";
import ProjectsSection from "@/_components/projects/ProjectsSection";
import ServicesSection from "@/_components/ServiceSection";
import CustomWhiteButton from "../_components/CustomWhiteButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
   const router = useRouter();
  
    const handleLink = () => {
      // 컨택 페이지 경로로 이동
      router.push(`/contact`);
    };
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background w-full overflow-x-hidden"> {/*w-full와 overflow-x-hidden추가*/}
      <main className="flex w-full min-h-screen flex-col items-center justify-between p-6 md:p-10 lg:p-32"> {/*1.w-full추가,2.패딩 화면크기별로 다르게->p-6 md:p-10 lg:p-32*/}
       {/*상단 텍스트 영역
       1.패딩 화면 크기별로 다르게->py-25 lg:py-16 px-0 lg:px-32, 
       2.간격 화면 크기별로 다르게-> space-y-4 lg:space-y-6
       3.w-full추가*/}
        <div className="flex flex-col items-center py-25 lg:py-16 px-0 lg:px-32 space-y-4 lg:space-y-6 text-center w-full">
          {/*1.폰트 디테일 옵션 추가,
          2.br태그로 줄바꿈 제어*/}
         <h1 className={`text-5xl transition-all duration-500 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"} delay-[150ms]`}>Hi, I'm JiYou Han – Web <br className="hidden md:block lg:hidden" />Developer<br className="md:hidden" /> in South Korea</h1>
          <h2 className={`text-3xl font-light md:text-3xl mx-3 mt-3 transition-all duration-500 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"} delay-[210ms]`}>Computer Science Student & Web Developer</h2>
          <p className={`font-light text-xl max-w-2xl lg:mx-10 lg:mb-10 mt-2 transition-all duration-500 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"} delay-[270ms]`}>I am a Computer Science student at Incheon National University,<br/>
            building web applications with a focus on clarity, structure, and usability.<br></br>
            I mainly work with Next.js and React and enjoy turning ideas into well-organized, 
            functional interfaces.
          </p>
        </div>
        <ServicesSection/>
        <ProjectsSection/>
        <div className="flex flex-col items-center justify-center my-14 p-2 space-y-3 border border-neutral-800 rounded-lg bg-neutral-900 w-full lg:w-6/11 h-40 pop-down" style={{ animationDelay: "100ms" }}>{/*w-full추가*/}
        {/*폰트 디테일 추가*/}
          <p className="text-base lg:text-lg font-thin text-white text-center"> Ready to start your custom web development project? <br/> For a free consultation. </p>
          <CustomWhiteButton text="Contact JiYou" onClick={handleLink}/>
        </div>
      </main>
    </div>
  );
}

