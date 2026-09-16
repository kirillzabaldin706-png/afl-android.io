# АФЛ — нативное приложение (Capacitor)

Официальный сайт лиги упакован в Android / iOS через [Capacitor](https://capacitorjs.com/).

## Требования

| Платформа | Что нужно |
|-----------|-----------|
| **Android** | Node.js 18+, Android Studio, JDK 17 |
| **iOS** | Mac + Xcode 15+, CocoaPods, Apple ID (для устройства / TestFlight) |

## Быстрый старт

```bash
cd afl-native
npm install
npm run copy          # скопировать сайт в www/
npx cap add android   # один раз
npx cap add ios       # один раз (только на Mac)
npx cap sync
```

### Android

```bash
npm run build:android
npx cap open android
```

В Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**  
или Run на эмуляторе / телефоне.

### iOS (только macOS)

```bash
npm run build:ios
npx cap open ios
```

В Xcode: выберите Team (Apple ID) → Run на симуляторе или iPhone.

## Обновление сайта в приложении

После правок в `afl-site/`:

```bash
npm run copy
npx cap sync
```

Снова соберите APK / Run в Xcode.

## Идентификатор приложения

- **App ID:** `ru.afl.liga`  
- **Имя:** АФЛ  

Сменить можно в `capacitor.config.json` → `appId` / `appName`.

## Публикация в магазинах

### Google Play
1. Аккаунт разработчика Google Play (разовый платёж).
2. Android Studio → **Generate Signed Bundle / APK** (AAB).
3. Создайте приложение в [Play Console](https://play.google.com/console).

### App Store
1. [Apple Developer Program](https://developer.apple.com/) (платная подписка).
2. Xcode → Archive → Distribute App → App Store Connect.

## Важно

- Интернет нужен для Firebase (таблица, вход, ставки).
- Для iOS в Xcode может понадобиться разрешить домены Firebase в ATS (обычно HTTPS уже ок).
- Локальный `file://` + Firebase Auth: при проблемах с входом используйте live-reload на URL GitHub Pages (advanced) или проверьте `authDomain` / authorized domains.

## Структура

```
afl-native/
  capacitor.config.json
  package.json
  scripts/copy-www.js
  www/                 ← копия сайта (генерируется)
  android/             ← после cap add android
  ios/                 ← после cap add ios (Mac)
```

Сайт-источник: `../afl-site/`
