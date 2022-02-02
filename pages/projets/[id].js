import Layout from "../../components/Layout";
import { getOneProject, getProjects } from "../../models/project";




export default function oneProject({ oneProject }) {
  return (
    <div>
      <Layout name="project">
        <h1 className="text-center mt-6 mb-6 text-2xl">{oneProject.title}</h1>
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
        
        <p className="text-center text-xl">{oneProject.description}</p>
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
