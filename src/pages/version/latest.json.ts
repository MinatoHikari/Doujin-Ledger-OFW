import { LastestRelease } from "../../config";

// endpoint https://docs.astro.build/en/guides/endpoints/

export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      version: LastestRelease.version,
      url: LastestRelease.url,
    })
  );
}
