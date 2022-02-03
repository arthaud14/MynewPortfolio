import axios from "axios";
import { delBasePath } from "next/dist/shared/lib/router/router";
import connection from "../db-config";

export async function getProjects() {
  return connection
    .promise()
    .query("SELECT * FROM Projects")
    .then((result) => {
      return result[0];
    });
}

export async function getOneProject(id) {
  return connection
    .promise()
    .query("SELECT * FROM Projects WHERE id=?", [id])
    .then((result) => {
      return result[0][0];
    });
}

export const deleteOneProject = (id) => {
  return db.project
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

export const createProject = ({
  mainPictureUrl,
  project,
  title,
  description,
  technology,
  team,
  url,
}) => {
  return db.project.create({
    data: {
      mainPictureUrl,
      project,
      title,
      description,
      technology,
      team,
      url,
    },
  });
};

export const updateProject = (id, data) => {
    return db.project.update({ where: { id: parseInt(id,10) }, data });
}
