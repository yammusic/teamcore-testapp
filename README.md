# Teamcore Mobile App

![React](https://img.shields.io/badge/React%20Native-v0.74-deepskyblue?logo=react)
![Expo](https://img.shields.io/badge/Expo-v51-white?logo=expo)
![React Native Paper](https://img.shields.io/badge/React%20Native%20Paper-v5-8A2BE2?logo=react)
![Typescript](https://img.shields.io/badge/Typescript-v5-blue?logo=typescript)

<div style="text-align:left;">
   <img src="./assets/images/preview-form.png" alt="Preview" width="160" />
   <img src="./assets/images/preview-success.png" alt="Preview" width="160" />
</div>

## Description

This project is part of a technical challenge to create a mobile app for Android using React Native. The app includes a user-friendly form to be filled out and submitted.

## App Functionalities

- Fetch and display form questions from a remote API.
- Single selection for each question.
- Submit responses in JSON format to the server.
- Navigate between form and finalization views.

## Architecture

This project uses Redux Toolkit for global state management and Axios for HTTP requests.

This codebase follows the Hexa3 architecture, which is a combination of Hexagonal Architecture and Domain-Driven Design (DDD) principles. This architecture promotes a clean separation of concerns and a modular design, making the codebase more maintainable and scalable.

### Folder Structure

```bash
├── app -> (contains routes pages)
├── domain
│   ├── constants -> (contains regex constants)
│   ├── polyfills -> (contains JS polyfills)
│   └── store -> (contains application state and actions)
├── infra
│   └── services -> (contains APIs services)
└── ui
    └── components -> (contains UI Components)
```

## Tech Stack

- [React](https://reactjs.dev/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Axios](https://axios-http.com/)
- [Typescript](https://www.typescriptlang.org/)

## Run the app

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```