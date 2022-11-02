import 'dotenv/config';

export default {
  "expo": {
    "name": "ChatApp",
    "slug": "ChatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
	"package" : "com.chatapp",
	"adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyAahmJnwFlUscuBlAXBMyp4Ksm_CvCcfJM",
      authDomain: "chat-apsp.firebaseapp.com",
      projectId: "chat-apsp",
      storageBucket: "chat-apsp.appspot.com",
      messagingSenderId: "718477861474",
      appId: "1:718477861474:web:008cb65ba91c6ff876e73b"
    }
  }
}
