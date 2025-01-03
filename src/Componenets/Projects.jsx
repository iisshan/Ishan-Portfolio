import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl text-white">Projects</h2>
      <div className="ml-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div>
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded-lg"
              />
            </div>
            <div className="w-full m-w-xl ml-6 lg:w-3/4">
              <h3 className="mb-2 ml-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 ml-2">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="     mr-2 rounded  bg-stone-900 p-2 text-sm font-medium text-stone-300 "
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

export default Projects;
