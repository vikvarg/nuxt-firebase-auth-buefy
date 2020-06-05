# nuxt-firebase-auth-buefy

> Boiler Plate for Nuxt with Firebase Auth and Buefy

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Firebase Auth Config
In order to configure Firebase Auth in the root folder of the project the file with the following path must be created config/firebase/config.js

```
let firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  databaseURL: 'xxx',
  projectId: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
  appId: 'xxx',
  measurementId: 'xxx'
}

module.exports = firebaseConfig;
```
