import { SkillsInfo } from "../constants";
import { motion } from "motion/react";

/* Container controls stagger */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/* Individual skill animation */
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[18vw] font-sans bg-[#0b0f1a] bg-[radial-gradient(circle_at_top,#141a2e,transparent_60%)]
hover:border-[#8245ec]
"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise
      </p>
    </div>

    {/* Categories */}
    <div className="space-y-16">
      {SkillsInfo.map((category) => (
        <div key={category.title}>
          {/* Category Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-8">
            {category.title}
          </h3>

          {/* Skills Row (stagger container) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap gap-4"
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 14px rgba(130,69,236,0.6)",
                }}
                className="flex items-center gap-3
                           border border-gray-700 rounded-full
                           px-5 h-44px
                           bg-transparent cursor-default"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 object-contain shrink-0"
                />
                <span className="text-sm text-gray-300 leading-none tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export { Skills };
