# pagecontrol

**In-page GUI agent — control any web interface with natural language commands**

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-proprietary-red)

## Install
```bash
npm install
```

## Quick Start
```typescript
import { Pagecontrol } from "./pagecontrol";
const instance = new Pagecontrol()
const r = await instance.navigate({ input: 'test' })
```

## CLI
```bash
npx tsx src/cli.ts status
npx tsx src/cli.ts run --input "data"
```

## API
| Method | Description |
|--------|-------------|
| `navigate()` | Navigate |
| `clickelement()` | Clickelement |
| `fillform()` | Fillform |
| `extractdata()` | Extractdata |
| `takescreenshot()` | Takescreenshot |
| `runscript()` | Runscript |

## Test
```bash
npx vitest
```

## License
(c) 2026 Officethree Technologies. All Rights Reserved.
