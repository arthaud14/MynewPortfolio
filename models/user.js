const db = require("../db-config");
import connection from "../db-config";


export async function getUser() {
  return connection
    .promise()
    .query("SELECT * FROM User WHERE id=?", [id])
    .then((result) => {
      return result[0][0];
    });
}

export const emailAlreadyExists = (email) =>
  db.user.findFirst({ where: { email } }).then((user) => !!user);

export const findByEmail = (email) => db.user.findFirst({ where: { email } });

export const findById = (id) => db.user.findFirst({ where: { id } });

export const verifyPassword = (plainPassword, hashedPassword) =>
  argon2.verify(hashedPassword, plainPassword, hashingOptions);
