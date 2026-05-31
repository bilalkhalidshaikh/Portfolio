// import Contact from "@/components/contact";
// import Experience from "@/components/experience";
// import Education from "@/components/education";
// import Intro from "@/components/intro";
// import Projects from "@/components/projects";
// import Skills from "@/components/skills";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center w-full min-h-screen">
      
//       {/* Intro is full width */}
//       <Intro />

//       {/* Projects is FULL WIDTH - Removed from the max-w container */}
//       <Projects />

//       {/* Content Container - Constrained for readability for the text-heavy sections */}
//       <div className="w-full max-w-[70rem] px-6 md:px-12 flex flex-col items-center">
//         <div className="divider-line" />
//         <Skills />
//         <div className="divider-line" />
//         <Experience />
//         <div className="divider-line" />
//         <Education />
//         <div className="divider-line" />
//         <Contact />
//       </div>
      
//     </main>
//   );
// }






import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    // 'overflow-x-hidden' completely neutralizes the horizontal scrollbar bug
    <main className="flex flex-col items-center w-full min-h-screen overflow-x-hidden bg-[#050505]">
      
      {/* 1. THE HOOK */}
      <Intro />

      {/* 2. THE PROOF: Architectural Case Studies */}
      {/* Added mt-24 to give massive breathing room after the Hero section */}
      <div className="w-full mt-24 sm:mt-32">
        <Projects />
      </div>

      {/* 3. THE AUTHORITY: Pedigree & Timeline */}
      <div className="w-full mt-12 sm:mt-20">
        <Experience />
      </div>

      {/* 4. THE ARSENAL & BASELINE (Constrained reading width) */}
      <div className="w-full max-w-[75rem] px-6 md:px-12 flex flex-col items-center mt-20">
        
        {/* Engineering Stack */}
        <Skills />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
        
        {/* Academic Ledger */}
        <Education />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
        
        {/* The Close */}
        <Contact />
        
      </div>
      
    </main>
  );
}