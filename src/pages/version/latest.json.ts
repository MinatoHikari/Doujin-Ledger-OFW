import { LastestRelease, TestFlightRelease } from "../../config";
import { getVersionLog } from "../../config/versionLog";

// endpoint https://docs.astro.build/en/guides/endpoints/

export async function GET({ params, request }) {
  const versionLog = getVersionLog(LastestRelease.version);
  // iOS 的版本号带 +build（如 0.4.0+7），版本日志里通常只记 x.y.z，
  // 查不到就回退到最新版本那一份，免得弹窗里没有更新内容
  const testflightLog =
    getVersionLog(TestFlightRelease.version) ?? versionLog;
  return new Response(
    JSON.stringify({
      version: LastestRelease.version,
      url: LastestRelease.url,
      text: versionLog?.changes || [],
      // 安卓端解析时 ignoreUnknownKeys = true，认不出这个字段也不影响它
      testflight: {
        version: TestFlightRelease.version,
        text: testflightLog?.changes || [],
      },
    })
  );
}
