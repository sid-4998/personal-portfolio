import { experiences } from "../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[10vw] lg:px-[18vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my professional experience and roles
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-10">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-gray-900 border border-white rounded-2xl p-6 sm:p-8
                       shadow-[0_0_20px_rgba(130,69,236,0.25)]
                       hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(130,69,236,0.4)]
                       transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-5 mb-4">
              {/* Company Logo */}
              <div className="w-14 h-14 bg-white rounded-md overflow-hidden shrink-0">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Role Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="text-sm text-gray-400">
                  {experience.company}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {experience.date}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-5">
              {experience.desc}
            </p>

            {/* Skills */}
            <div>
              <h5 className="text-white font-medium mb-3">Skills</h5>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm px-3 py-1 rounded-lg
                               bg-[#8245ec] text-gray-200 border border-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Experience };
