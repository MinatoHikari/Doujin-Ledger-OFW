import { LastestRelease } from "src/config";

export async function get({ params, request }) {
  return {
    body: JSON.stringify({
      version: LastestRelease.version,
      url: LastestRelease.url,
    }),
  };
}
