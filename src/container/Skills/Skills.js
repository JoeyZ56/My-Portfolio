import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`skill_${index}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={`experience_${index}`}
            >
              <div className="app__skills-exp-year">
                <h3 className="bold-text">{experience.year}</h3>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <React.Fragment key={`work_${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={`work-tooltip-${work.name}-${work.company}-${index}`} // Ensure unique ID
                    >
                      <h3 className="bold-text">{work.name}</h3>
                      <h4 className="p-text">{work.company}</h4>
                      {console.log(
                        `Name: ${work.name}, Desc: ${work.desc}`
                      )}{" "}
                      {/* Debugging */}
                    </motion.div>

                    {/* Tooltip with unique ID */}
                    <Tooltip
                      id={`work-tooltip-${work.name}-${work.company}-${index}`} // Match data-for
                      anchorSelect={`[data-for="work-tooltip-${work.name}-${work.company}-${index}"]`} // Target unique motion.div
                      content={work.desc} // Correct description for each work
                      className="skills-tooltip"
                    />
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
