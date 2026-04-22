# Build & Release

## Build Commands

```bash
# Install dependencies
npm install

# Copy web assets → native projects
npx cap copy && npx cap sync

# Open Android Studio
npx cap open android

# Build debug APK (CLI)
cd android && ./gradlew assembleDebug

# Build release AAB (CLI)
cd android && ./gradlew bundleRelease
```

## Signing

Google Play requires a signed release AAB. Two options:

### Option A — Play App Signing (recommended)

Upload the unsigned AAB to Google Play Console. Play will re-sign it for distribution. Simpler — no keystore management needed.

### Option B — Sign locally

1. Create a keystore:
   ```bash
   keytool -genkeypair -v -keystore release-keystore.jks \
     -alias monkdemon -keyalg RSA -keysize 2048 -validity 10000
   ```
2. Add signing config to `android/app/build.gradle`:
   ```groovy
   signingConfigs {
     release {
       storeFile file("release-keystore.jks")
       storePassword "your-keystore-password"
       keyAlias "monkdemon"
       keyPassword "your-key-password"
     }
   }
   buildTypes {
     release {
       signingConfig signingConfigs.release
     }
   }
   ```
3. Build:
   ```bash
   cd android && ./gradlew bundleRelease
   ```

> **Never commit keystores or passwords to Git.**