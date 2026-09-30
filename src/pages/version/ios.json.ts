import { LastestRelease, TestFlightRelease } from "../../config";
import { getVersionLog } from "../../config/versionLog";

// endpoint https://docs.astro.build/en/guides/endpoints/

// iOS（TestFlight）专用的更新检查端点：/version/ios.json
//
// 为什么和安卓分开：以前两边共用 latest.json，iOS 的字段塞在 `testflight` 段里，
// 安卓那边字段一多就解析失败（表现为"检测不到更新"）。各自一个端点后，
// 谁都不用管对方的字段，以后各加各的也不会互相影响。
//
// iOS 侧的跳转地址（TestFlight / App Store）是写死在 App 里的，不需要 `url`，
// 所以这里只给「营销版本 + 更新内容」。注意 iOS 只拿得到 CFBundleShortVersionString，
// 所以 version 写营销版本（0.4.2），不要带 +build。
export async function GET({ params, request }) {
  // 版本日志里通常只记 x.y.z（iOS 版本号带 +build），查不到就回退到安卓最新那一条，
  // 免得弹窗里一条更新内容都没有
  const versionLog =
    getVersionLog(TestFlightRelease.version) ??
    getVersionLog(LastestRelease.version);
  return new Response(
    JSON.stringify({
      version: TestFlightRelease.version,
      text: versionLog?.changes || [],
    })
  );
}
