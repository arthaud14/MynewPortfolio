import Layout from "../../components/Layout";
import { getOneProject, getProjects } from "../../models/project";

export default function oneProject({ oneProject }) {
  return (
    <div>
      <Layout name="project">
        <h1 className="text-center mt-6 mb-6 text-2xl">{oneProject.project}</h1>
        <div className="flex justify-center">
          <img
            className="mb-6"
            src={oneProject.mainPictureUrl}
            width="70%"
            height="70%"
            layout="responsive"
            alt="image du projet"
          />
        </div>
        <div className="flex justify-center">
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16"></div>
          <div>
            <h2 className="text-3xl">
              {oneProject.title}
            </h2>
            <p className="mt-2 text-gray-600">{oneProject.description}</p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-indigo-500">
              {oneProject.technology}
            </a>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const oneProject = await getOneProject(context.params.id);
  return {
    props: {
      oneProject,
    },
  };
}
export async function getStaticPaths() {
  const project = await getProjects();
  return {
    paths: project.map((a) => {
      return { params: { id: a.id.toString() } };
    }),
    fallback: "blocking",
  };
}
