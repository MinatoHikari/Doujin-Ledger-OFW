import { LastestRelease } from "../../config";
import { getVersionLog } from "../../config/versionLog";

// endpoint https://docs.astro.build/en/guides/endpoints/

export async function GET({ params, request }) {
  const versionLog = getVersionLog(LastestRelease.version);
  return new Response(
    JSON.stringify({
      version: LastestRelease.version,
      url: LastestRelease.url,
      text: versionLog?.changes || [],
    })
  );
}
