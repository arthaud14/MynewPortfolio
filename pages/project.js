import Layout from "../components/Layout";
import { getProjects } from "/models/project";
import Link from "next/link";
import Image from "next/image";

export default function Project({ projects }) {
  return (
    <Layout>
      <h1 className="text-center mt-10 uppercase mb-10">Mes projets</h1>
      <ul className="flex flex-row justify-center w-full">
        {projects.map((data) => {
          return (
            <Link href={`/projets/${data.id}`}>
              <li className="bg-gray-200 list-none w-80 flex flex-col items-center rounded-3xl border-solid m-6 ">
                <h2 className="m-4 text-xl">{data.project}</h2>
                <img
                  src={data.mainPictureUrl}
                  width="100%"
                  height="100%"
                  layout="reponsive"
                  alt="image projet"
                />
                <p className="text-xl">{data.title}</p>
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
