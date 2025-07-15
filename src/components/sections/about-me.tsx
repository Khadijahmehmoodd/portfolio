export default function AboutMe(){
    return(
        <section
  id="about"
  className="bg-[#121212] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-10 relative overflow-hidden"
>
  <div className="z-10 max-w-4xl">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
      About Me
    </h2>
    <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-semibold">
      I’m not a pro yet! still on my journey of learning and growing as a developer.
      Every day, I’m exploring better ways to write cleaner code, build efficient UIs, and
      solve real-world problems. I’m passionate about full stack development and excited to 
      turn my curiosity into creativity and career. My goal is to constantly improve, one project at a time.
    </p>
    <div className="mt-8">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-sm uppercase font-medium text-white border-l border-r border-white px-4 py-2 hover:text-[#D0FF71] hover:border-[#D0FF71] transition"
      >
        Review Resume
      </a>
    </div>
  </div>

  
</section>

    )

}

