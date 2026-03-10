import request from "supertest";
import reporter from "./reporter.ts";

//key=reqres_c9d8a78ff87b4a67b5c6aaadbcc8b88a

async function GET(
  testid: string,
  baseURL: string,
  endpoint: string,
  queryParam: object,
  authToken: string,
) {
  if (!baseURL || !endpoint) {
    throw Error(
      `Given baseURL : ${baseURL} , endpoints: ${endpoint} is not vaalid`,
    );
  }

  baseURL = baseURL.trim();
  endpoint = endpoint.trim();
  reporter.addStep(testid, "info",`making a GET to ${endpoint}`)
  try {
    return await request(baseURL)
      .get(endpoint)
      .query(queryParam)
      .auth(authToken, {type:'bearer'})
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .set("x-api-key", "reqres_c9d8a78ff87b4a67b5c6aaadbcc8b88a");
  } catch (error : any) {
    error.message = `Error making a GET call to ${endpoint}, ${error}`
    throw error
  }
};

async function POST(
  testid: string,
  baseURL: string,
  endpoint: string,
  payload: object,
  authToken: string,
) {
  if (!baseURL || !endpoint) {
    throw Error(
      `Given baseURL : ${baseURL} , endpoints: ${endpoint} is not vaalid`,
    );
  }

  baseURL = baseURL.trim();
  endpoint = endpoint.trim();
  reporter.addStep(testid, "info",`making a POST to ${endpoint}`)
  try {
    return await request(baseURL)
      .post(endpoint)
      .auth(authToken, {type:'bearer'})
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .set("x-api-key", "reqres_c9d8a78ff87b4a67b5c6aaadbcc8b88a")
      .send(payload);
  } catch (error : any) {
    error.message = `Error making a POST call to ${endpoint}, ${error}`
    throw error
  }
};


// (async function getUser(){

//   let res = await request("https://reqres.in")
//         .get("/api/users")
//         .set("x-api-key", "reqres_c9d8a78ff87b4a67b5c6aaadbcc8b88a");
//    console.log("Response : ", JSON.stringify(res.body));
        
// })()

export default { GET , POST }
