import { CodeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { getProjects } from "../api/data";
import Loading from "./common/Loading";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const { data, status } = await getProjects();
    if (status === 200) {
      setProjects(data?.data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font"
      style={{ scrollMarginTop: "50px" }}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("project.header")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("project.subtitle")}
          </p>
        </div>
        {/* <div className="grid  grid-rows-4 grid-cols-1 gap-2"> */}
        <div className="">
          {/* <div class="w-1/4 bg-green-500 p-5 flex flex-col">
            <div class="text-white flex-1">
              Sed eget tortor ullamcorper, mollis nibh ut, pretium augue.
            </div>
            <button class="bg-white rounded-full mt-5 px-5 py-2">Action Button</button>
          </div> */}
          {!isLoading ? (
            <Fade>
              {projects.length > 0 &&
                projects.map((project, index) => (
                  <a
                    href={project?.link}
                    key={index.toString()}
                    className="p-2"
                  >
                    <div className="relative">
                      <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        src={
                          project?.img_url || "https://picsum.photos/1200/500"
                        }
                      />
                      <div className="transition px-8 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded-md">
                        {project?.year === new Date().getFullYear() && (
                          <div className="text-left absolute inset-x-0 ml-3 mt-3 rounded-full">
                            <p className="w-14 rounded-full bg-red-100 text-red-800 font-bold px-2.5">
                              New!
                            </p>
                          </div>
                        )}
                        <div className="py-10 flex flex-col items-stretch">
                          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                            {project?.subtitle}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-white mb-3">
                            {project?.project_name}
                          </h1>
                          <p className="leading-relaxed flex-1">
                            {project?.description || "No description"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
            </Fade>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
}
