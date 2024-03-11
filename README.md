# Wedding application

Supports relatively secure way to collect visitor registrations to [Firebase](https://firebase.google.com/) without backend. Also offers wedding info website in multiple languages (instructions how it works coming later...).

## Local development

```
root/directory$ npm install && npm start
```

## Firestore setup

You need tree collections. `invited`, `submitted` and `visitors`.

Rules:
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /visitors/{visitor} {
      allow create: if exists(/databases/$(database)/documents/invited/$(request.resource.data.invitationId))
      	&& !exists(/databases/$(database)/documents/submitted/$(request.resource.data.invitationId));
    }
    // Uncomment when fetching data with scripts under /tools
    //
    // match /visitors/{visitor} {
    // 	allow read: if true;
    // }
    // match /submitted/{submitted} {
    // 	allow read: if true;
    // }
    // match /invited/{invited} {
    // 	allow read: if true;
    // }
    match /submitted/{submitted} {
      allow create: if exists(/databases/$(database)/documents/invited/$(request.resource.id))
    }
  }
}
```

***It's important to remember to comment right after script is run. While uncommented all your data is available to public internet!***

## Deployment

I recommend installing [Firebase CLI](https://firebaseopensource.com/projects/firebase/firebase-tools/) to automate the setup.

For manual configuration see `/.github/workflows`. You need to add following secrets:
- GITHUB_TOKEN
- FIREBASE_SERVICE_ACCOUNT_LINTUJAMASLO

Further reading: https://firebase.google.com/docs/hosting/github-integration
## Usage

Feel free to fork, use and change at will. Hope this repo will help and inspire you!

## Deving

npm install

npm start

npm audit fix --force

now npm start works

created firebase project https://console.firebase.google.com/project/tomika-f62a1/overview



