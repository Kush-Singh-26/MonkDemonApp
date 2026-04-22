# Play Store Checklist

Everything needed to publish on Google Play.

## Account Setup

1. Create a [Google Play Developer account](https://play.google.com/console) ($25 one-time fee).
2. Create the app listing.

## Required Assets

### App Icons
- 512 × 512 PNG (launcher icon)
- Place final icon in `www/assets/icon.png` and `android/res/mipmap-*/`

### Feature Graphic
- 1024 × 500 PNG (shown on Play Store listing)

### Screenshots
- Minimum 2 screenshots per device type
- Recommended sizes: 1080 × 1920 (phone), 7″ tablet, 10″ tablet
- Generate from the app running on a real device or emulator

### Store Listing
- **App name**: Monk & Demon
- **Short description** (≤ 80 chars): *"Solve the classic river-crossing logic puzzle — now on Android."*
- **Full description** (≤ 4000 chars): describe the puzzle, solvers, offline support
- **Privacy policy URL**: required before publishing
- **Content rating**: complete the questionnaire (game, no user-generated content)
- **Target audience**: all ages

## Signing

- Upload unsigned AAB: `releases/monkdemon-app-release.aab`
- Or sign locally with a keystore → see [BUILD.md](BUILD.md)

## Upload

1. Go to [Google Play Console](https://play.google.com/console).
2. Create release → upload AAB → fill in store listing → submit for review.
3. Review takes 1–7 days for the first publish.