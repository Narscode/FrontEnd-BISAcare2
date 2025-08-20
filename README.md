# BISAcare2 React Native App

This project is set up to run a React Native app for Android (and iOS). Includes a `src/components` folder for your reusable components.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Install React Native CLI**

   ```bash
   npm install -g react-native-cli
   ```

3. **Android Studio Setup**

   - Install Android Studio and set up the Android SDK.
   - Make sure you have an Android emulator set up, or connect a real device.
   - Start Android Studio, open the `android` folder if it exists, or initialize native code with:

     ```bash
     npx react-native init android
     ```

4. **Start Metro Bundler**

   ```bash
   npm start
   ```

5. **Run on Android**

   In another terminal:

   ```bash
   npm run android
   ```

   Or from Android Studio, open the `android` folder and click "Run".

## Environment Variables

Copy `.env.example` to `.env` and set your values.

## Creating Components

Add your React Native components into `src/components/`.

Example: `src/components/HelloWorld.js`

---

**Note:** If you do not see the `android` folder, run `npx react-native eject` to generate native code folders.