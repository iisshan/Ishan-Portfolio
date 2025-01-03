import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl text-white">Experience</h2>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-white ">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl  lg:w-3/4">
              <h3 className="mb-2 font-semibold text-white">
                {exp.role}{" "}
                <span className="text-sm text-green-200"> {exp.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">{exp.description}</p>
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-gray-700 px-2 py-1 text-sm text-white ml-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
