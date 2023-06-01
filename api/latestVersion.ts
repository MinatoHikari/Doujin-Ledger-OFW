import { LastestRelease } from "../src/config";

export const config = {
  runtime: "serverless",
};

export default (request: Request) => {
  return new Response(JSON.stringify(LastestRelease));
};
