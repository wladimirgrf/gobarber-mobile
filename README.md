<h1 align="center">
  <img alt="Logo" src=".github/assets/logo.svg" width="200px">
</h1>

<h3 align="center">
  React Native App for GoBarber project
</h3>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wladimirgrf/gobarber-mobile?color=%23FF9000">

  <a href="https://github.com/wladimirgrf/gobarber-mobile/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wladimirgrf/gobarber-mobile?color=%23FF9000">
  </a>

  <a href="https://github.com/wladimirgrf/gobarber-mobile/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/wladimirgrf/gobarber-mobile?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/wladimirgrf/gobarber-mobile?color=%23FF9000">
</p>

<p align="center">
  <img alt="APP" src=".github/assets/app_mobile.png" width="100%">
</p>

## 🌍 Ecosystem

Below the technologies, used to build this Mobile App:

|                      Name                                   |                         Status                          |
|:-----------------------------------------------------------:|:-------------------------------------------------------:|
|<img height="50" src=".github/assets/react_native.svg"> | <img alt="react_native version" src="https://img.shields.io/badge/react_native-v0.63.3-blue?color=%23FF9000"> |
|<img height="50" src=".github/assets/unform.svg"> | <img alt="unform version" src="https://img.shields.io/badge/unform-v2.1.3-blue?color=%23FF9000"> |
|<img height="48" src=".github/assets/react_navigation.svg"> | <img alt="react_navigation version" src="https://img.shields.io/badge/react_navigation-v5.7.1-blue?color=%23FF9000"> |
|<img height="50" src=".github/assets/styled_components.png"> | <img alt="styled_components version" src="https://img.shields.io/badge/styled_components-v5.1.1-blue?color=%23FF9000"> |
|<img height="50" src=".github/assets/jest.svg"> | <img alt="jest version" src="https://img.shields.io/badge/jest-v25.1.0-blue?color=%23FF9000"> |
|<img height="50" src=".github/assets/typescript.svg"> | <img alt="typescript version" src="https://img.shields.io/badge/typescript-v3.8.3-blue?color=%23FF9000"> |
|<img height="50" src=".github/assets/eslint.svg"> | <img alt="eslint version" src="https://img.shields.io/badge/eslint-v6.8.0-blue?color=%23FF9000"> |
|<img height="50" src=".github/assets/prettier.svg"> | <img alt="prettier version" src="https://img.shields.io/badge/prettier-v2.0.5-blue?color=%23FF9000"> |


## 💻 Getting started

Set up your development environment: <a href="https://react-native.rocketseat.dev">Guide</a>

### Requirements

Must have the [GoBarber API](https://github.com/wladimirgrf/gobarber-api) running.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/wladimirgrf/gobarber-mobile.git && cd gobarber-mobile
```

**Follow the steps below**

```bash
# Project dependencies
$ yarn
```

- ##### To emulate with Android
```bash
# Make sure the emulator is already started
$ yarn android
```

- ##### To emulate with IOS
```bash
# IOS dependencies
$ cd ios
$ pod install

# Start the APP
$ yarn ios
```

## 🤝 Contributing

**Fork the repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork wladimirgrf/gobarber-mobile
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone fork-url && cd gobarber-mobile

# Create a branch for your edits
$ git checkout -b new-feature

# Make the commit with your changes
$ git commit -m 'feat: New feature'

# Send the code to your remote branch
$ git push origin new-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

