import Layout from "../components/Layout";
import { getProjects } from "/models/project";
import Link from "next/link";
import Image from "next/image";

export default function Project({ projects }) {
  return (
    <Layout>
      <h1 className="text-center mt-10 uppercase mb-10">Mes projets à la Wild Code School</h1>
      
      <ul className="flex flex-col justify-center items-center w-full md:flex-row mb-20">
        {projects.map((data) => {
          return (
            <Link key={`/projets/${data.id}`} passHref>
              <li className="cursor-pointer bg-gray-200 list-none w-80 flex flex-col items-center rounded-3xl border-solid m-6 shadow-2xl">
                <h2 className="m-4 text-xl">{data.project}</h2>
                <Image
                  src={data.mainPictureUrl}
                  width="100%"
                  height="100%"
                  layout="reponsive"
                  alt="projectimg"
                />
                <p className="text-xl m-4">{data.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}
