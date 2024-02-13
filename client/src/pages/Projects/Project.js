import React from 'react';
import Layout from '../../components/Layout/Layout';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';
import img8 from '../../images/img8.png';
import { FaReact,FaGitAlt,FaNodeJs,FaLinkedin  } from "react-icons/fa";
import { SiExpress,SiMongodb,SiTailwindcss,SiRedux } from "react-icons/si";

const SocialLinks = () => (
  <div className="flex flex-col bg-blue-500 p-4 rounded-lg shadow-md gap-2 text-white">
    {/* Add your social icons and links here */}
    <a href="https://www.linkedin.com/in/hafiz-azam-dilawar-b75405246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex flex-row gap-2 items-center">
      <FaGitAlt />
      <h2 className='text-sm'>github: https://www.linkedin.com/</h2>
    </a>
    <a href="https://www.linkedin.com/in/hafiz-azam-dilawar-b75405246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex flex-row gap-2 items-center">
      <FaLinkedin  />
      <h2 className='text-sm'>LinkedIn: https://www.linkedin.com/in/hafiz-azam-dilawar</h2>
    </a>
    <a href="https://github.com/MaizNadeem/Deliveroo-2.0" className="flex flex-row gap-2 items-center">
      <FaReact />
      <h2 className='text-sm'>github: https://github.com/</h2>
    </a>
  </div>
);

const Project = () => {
  return (
    <>
      <Layout />
      <div className='flex p-10'>

      <div className="w-3/5 mt-10 mx-auto p-10 bg-gray-50 rounded-lg shadow-md border-2 border-gray-150">
        <div className="mb-8 pb-5 border-b-2 border-gray-400">
          <h2 className="text-4xl text-slate-700 font-bold">Quran Learning Management System (FYP)</h2>
          <p className="text-lg">QLMS using MERN Stack (React, Redux, Tailwind CSS & GraphQL)</p>
        </div>

        <div className="mb-8 pb-5 border-b-2 border-gray-400">
          <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
          <p className="text-md">Our Quran Learning Management System revolutionizes Quranic education through a dynamic MERN stack, empowering users with interactive modules, secure authentication, and a seamless learning experience.</p>
        </div>

        <div className="mb-8 pb-5 border-b-2 border-gray-400">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-md">I have successfully designed and implemented a Quran Learning Management System utilizing the MERN stack. This comprehensive system has been developed to enhance the learning experience for users, offering a variety of modules such as Quiz, Assignment, Course Content, and the ability to read translations of the Quran. With multiple translator options, users can gain a deeper understanding of the content.</p>
        </div>

        <div className="mb-8 pb-5 border-b-2 border-gray-400">
          <h2 className="text-2xl font-semibold mb-4">Technological Framework and Design Features</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <TechBox name="React" iconComponent={FaReact} color="gray-900" />
            <TechBox name="Redux" iconComponent={SiRedux} color="gray-900" />
            <TechBox name="Express" iconComponent={SiExpress} color="orange-400" />
            <TechBox name="MongoDB" iconComponent={SiMongodb} color="green-500" />
            <TechBox name="Tailwind CSS" iconComponent={SiTailwindcss} color="blue-200" />
            <TechBox name="Node js" iconComponent={FaNodeJs} color="blue-200" />
            <TechBox name="Git" iconComponent={FaGitAlt} color="blue-200" />
            {/* Add more technology boxes here */}
          </div>
          <p className="text-md">The system incorporates robust user and instructor authentication mechanisms based on assigned roles, ensuring secure access and personalized experiences. Leveraging technologies like MERN stack, Tailwind CSS, and Redux, the platform boasts a modern and responsive design. Additionally, nodemailer has been integrated for efficient email communication within the system. This project serves as an innovative and user-friendly solution for Quranic education.</p>
        </div>

        <div className="mb-8 pb-5 border-b-2 border-gray-400">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <div className="flex flex-wrap gap-4">
            {/* Project Images */}
            <img src={img1} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <h2 className="text-xl font-semibold">Readning Translations</h2>
            <img src={img2} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <h2 className="text-xl font-semibold">Add Course Content Module</h2>
            <img src={img3} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <h2 className="text-xl font-semibold">Course Dashboard</h2>
            <img src={img4} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <h2 className="text-xl font-semibold">Instructor Assignment Module</h2>
            <img src={img5} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <img src={img6} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <h2 className="text-xl font-semibold">User Courses</h2>
            <img src={img7} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
            <h2 className="text-xl font-semibold">Usesr Assignment</h2>
            <img src={img8} alt="Project Image 1" className="max-w-full rounded-lg shadow-md border-2 border-gray-300" />
          </div>
        </div>
      </div>

      <div className="w-1/4 mt-10">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

const TechBox = ({ name, iconComponent: IconComponent, color }) => (
  <div className={`bg-${color} p-4 gap-2 rounded-lg shadow-md flex items-center`}>
    {IconComponent && <IconComponent />}
    <span className="text-sm">{name}</span>
  </div>
);



export default Project;
