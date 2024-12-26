import { Client } from "pg";

async function query(queryObj) {
  const client = new Client({
    host: "localhost",
    port: 8081,
    user: "postgres",
    database: "postgres",
    password: "sem_senha",
  });
  await client.connect();

  const res = await client.query(queryObj);
  await client.end;
  return res;
}

export default {
  query: query,
};
