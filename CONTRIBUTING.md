# Contributing

Contributions are welcome. A few simple guidelines:

- Keep changes focused and small.
- Describe what you changed and why in your commit message.
- Do not commit build outputs, keystores, or `local.properties`.
- Test UI changes on a low-DPI emulator and a high-DPI device.

## Workflow

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Make your changes.
4. Run `npm run cap:copy && npm run cap:sync` if you modified `www/`.
5. Open a pull request.

## Reporting Issues

Open an issue at [github.com/Kush-Singh-26/MonkDemonApp/issues](https://github.com/Kush-Singh-26/MonkDemonApp/issues) with:
- Android version and device model
- Steps to reproduce
- Expected vs actual behavior