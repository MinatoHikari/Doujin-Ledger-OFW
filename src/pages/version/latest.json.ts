import { LastestRelease } from "../../config";
import { getVersionLog } from "../../config/versionLog";

// endpoint https://docs.astro.build/en/guides/endpoints/

// 安卓专用的更新检查端点：/version/latest.json
//
// iOS 有自己的一份（同目录 ios.json）。**别往这里塞 iOS 的字段**：
// 安卓那边解析是严格模式（未知字段直接抛），多一个字段整个解析就挂，
// 表现是"检测不到更新"——真出过一次，所以两边拆成了两个端点。
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
