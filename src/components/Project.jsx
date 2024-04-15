import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
// import project5 from "../assets/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination} from "swiper/modules";

const Project = () => {  
  const projects = [
    {
      img: project1,
      name: "Doubt-Solving-Platform",
      github_link: "",
      live_link: "https://doubt-buster.vercel.app/",
    },
    {
      img: project2,
      name: "Strong password Generator",
      github_link: "https://github.com/akhileshpal-575/learning-react/tree/main/passwordGenerator",
      live_link: "https://password-generator-eta-tan.vercel.app/",
    },
    {
      img: project3,
      name: "change background color",
      github_link: "https://github.com/akhileshpal-575/bg-changer",
      live_link:"https://changebgcol.netlify.app/",
    },
    {
      img: project4,
      name: "Clone Amazon page",
      github_link:"https://github.com/akhileshpal-575/CloneAmazonHome",
      live_link: "https://luxury-cobbler-74fa1a.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-11/12 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-full w-full p-8 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
