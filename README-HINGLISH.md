# Insane Booster Advanced Starter v1.1

Original Red + Black Android-ready UI prototype with:
- Home/device overview placeholders
- Game library mock cards
- Game Genie utility suite
- Local 30-second aim trainer
- Crosshair color/size/gap/thickness studio with local preset saving
- Performance profile recommendations
- Android settings shortcut placeholders
- Privacy/settings screen

## Important limitations
This starter is not yet a fully native performance optimizer. RAM, battery, thermal and ping values are intentionally placeholders. Do not present mock values as live device telemetry. The aim trainer/crosshair editor runs inside the app and does not manipulate Free Fire or overlay targeting on a live match. No aimbot, recoil automation, game memory access, or anti-cheat bypass.

Android normally does not let a regular app continuously kill other apps or clean their private RAM. Prefer diagnostics, user-initiated actions, battery/thermal guidance, and Android settings shortcuts. Avoid persistent polling/services until there is a justified user-facing feature and correct foreground-service/permission design.

Google sign-in: use Firebase Authentication / Google Identity later; never ask for or store Gmail passwords directly.

## Termux commands
```bash
pkg update -y && pkg upgrade -y
pkg install nodejs-lts openjdk-17 git unzip -y
termux-setup-storage
```
Extract this ZIP, then:
```bash
cd ~/InsaneBooster-Advanced
npm install
npm run dev -- --host 0.0.0.0
```
Open the local URL printed by Vite in your phone browser.

## Capacitor Android wrapper
```bash
npx cap add android
npm run build
npx cap sync android
```
Run `npx cap add android` only once. If `android/` already exists, use `npx cap sync android`.

Open the `android/` project in AndroidIDE and sync Gradle. If the IDE/SDK does not support the chosen Gradle/JDK versions, use the compatible versions offered by AndroidIDE. Build a debug APK for testing; release APK requires a signing key and secure backup. Do not share keystore/password.

## Native integration milestones
1. Device telemetry: Android `ActivityManager.MemoryInfo`, `BatteryManager`, and supported thermal APIs; clearly label unavailable values.
2. Game launcher: query launchable packages using package visibility declarations and user-selected game list; handle Android package visibility restrictions.
3. Settings: explicit intents to supported system settings screens; gracefully handle unavailable intents.
4. Background work: opt-in, low-frequency and user-visible only; no endless RAM cleaner.
5. Crosshair: keep in-app practice studio; any system overlay requires special permission, clear disclosure, and should not be used to provide live-game aiming assistance.
6. Network: test app connectivity or a chosen endpoint; do not label it Free Fire server ping.

Package ID: `com.insane.booster`
