# Getting started

### Prerequisites

-   npm
-   yarn
-   firebase CLI : https://firebase.google.com/docs/emulator-suite/connect_and_prototype
-   openjdk (required for firebase emulators)

### Installation

```
yarn install
```

### Development

```
yarn proxy -- Required for IGDB use
yarn emulator -- Required for Firebase local use. (firebase initialisation required, see below)
yarn dev

```

### Production

```
yarn build
```

# Firebase CLI

-   `firebase login` (only the first time) Connect your Firebase account to Firebase CLI
-   `firebase init` (only the first time. Only for new project) initialize Firebase functionnalities
-   `npm init vue` (only for new project) create a vue project
-   `firebase use dev` set firebase CLI to dev project
-   `firebase use prod` set firebase CLI to prod project

# Useful links

Installation Firebase CLI : https://jsmobiledev.com/article/firebase-emulator/  
Vue best practice : https://learnvue.co/2020/01/12-vuejs-best-practices-for-pro-developers/#10-stay-consistent-with-your-directive-shorthand  
Games api : https://api-docs.igdb.com  
Module import / export : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
