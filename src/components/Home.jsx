import React from "react";

function Home() {
  return (
<>
    <div className="bg-home bg-center bg-cover relative h-[380px] md:h-[90vh]">
      <div className="absolute w-full h-full bg-[#00629b] bg-opacity-85">
        <div className="h-full w-full flex flex-col items-center justify-center gap-[6px] text-white font-medium text-center">
          <h1 className="text-5xl">IBSSC 2024</h1>
          <h2 className="text-2xl">IEEE BOMBAY SECTION SIGNATURE CONFERENCE</h2>
          <h4 className="text-xl">29 February – 2 March, 2024</h4>
          <p className="max-w-[572px] font-normal text-sm">
            IBSSC-2024 is an international conference organized by IEEE Bombay Section. This flagship event will focus on “Frontiers of Technologies” and 
            feature eminent speakers, presentations, and exhibits.
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-12 p-11 justify-center">
    <div>
    <h2 className ="text-sky-800 font-bold text-4xl">100+</h2>
    <p>Student Branches</p>
    </div>
    <div>
    <h2 className="text-sky-800 font-bold text-4xl">3000+</h2>
    <p>Members</p>
    </div>
    </div>
    
    <div className="flex gap-16 p-11 justify-center ">
    <div>
    <h2 className ="text-sky-800 font-bold text-4xl">15</h2>
    <p>Chapters</p>
    </div>
    <div>
    <h2 className="text-sky-800 font-bold text-4xl">2500+</h2>
    <p>Events</p>
    </div>
    </div>
    <div className = "flex gap-1 p-14 text-2xl">
    <p>Upcoming</p>
    <p className = "text-sky-800">Events</p>
    </div>
    
    <p className="p-14 font-bold text-2xl">May,2024</p>
    <div className="bg-sky-400 flex gap-1 p-5 border-8">
    <div>
    <h2 className="text-white text-3xl">16</h2>
    <p className="text-white"> May </p>
    </div>
    <div>
    <h2 className ="text-white text-3xl">International Day Of Light</h2>
    </div>
    </div>
    
    <div className="bg-sky-400 flex gap-1 p-5 relative top-1.5 border-8">
    <div>
    <h2 className="text-white text-3xl">16</h2>
    <p className="text-white"> May </p>
    </div>
    <div>
    <h2 className ="text-white text-3xl">International Light Day</h2>
    </div>
    </div>
    </>
    
    
  );
}

export default Home;