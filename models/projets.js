import axios from "axios";
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