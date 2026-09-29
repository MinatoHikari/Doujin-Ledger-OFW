import { LastestRelease } from "../../config";
import { getVersionLog } from "../../config/versionLog";

// endpoint https://docs.astro.build/en/guides/endpoints/

/**
 * iOS（TestFlight 分发）当前可更新到的版本。
 * 每次往 TestFlight 上传新构建时，把这里同步改成新构建的 version（pubspec 里的 x.y.z+build）。
 * 之所以单独一个字段：App Store 的 lookup 接口查不到 TestFlight 的构建，
 * 所以 iOS 端只能读这里。
 */
const TESTFLIGHT_VERSION = "0.4.0+7";

export async function GET({ params, request }) {
  const versionLog = getVersionLog(LastestRelease.version);
  const testflightLog = getVersionLog(TESTFLIGHT_VERSION);
  return new Response(
    JSON.stringify({
      version: LastestRelease.version,
      url: LastestRelease.url,
      text: versionLog?.changes || [],
      // 安卓端解析时 ignoreUnknownKeys = true，认不出这个字段也不影响它
      testflight: {
        version: TESTFLIGHT_VERSION,
        text: testflightLog?.changes || [],
      },
    })
  );
}
