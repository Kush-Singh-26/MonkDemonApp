# Release Artifacts

Pre-built binaries for testing. For production use, download from the [GitHub Releases](https://github.com/Kush-Singh-26/MonkDemonApp/releases) page instead of these in-repo copies.

## Files

| File | Purpose |
|------|--------|
| `monkdemon-app-debug.apk` | Debug APK for manual install on any Android device |
| `monkdemon-app-release.aab` | App Bundle for Google Play Console upload |

## Installation (Debug APK)

1. Transfer `monkdemon-app-debug.apk` to your Android device
2. Enable **Install from unknown sources** in device settings
3. Tap the APK file to install

## Release Notes

The debug APK and release AAB are regenerated on every push to `main`. The `releases/` folder tracks them locally — for distribution, use GitHub Releases instead.