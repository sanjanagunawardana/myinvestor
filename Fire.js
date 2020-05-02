//import FirebaseKeys from "./config";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBciehNHOurYdcORwFG-2IBWmxHrhBjdjk",
    authDomain: "my-investor-cc084.firebaseapp.com",
    databaseURL: "https://my-investor-cc084.firebaseio.com",
    projectId: "my-investor-cc084",
    storageBucket: "my-investor-cc084.appspot.com",
    messagingSenderId: "780848586074",
    appId: "1:780848586074:web:8795281c40a917a1d96763"
  };

class Fire {
    constructor() {
        if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        }
    }

    addPost = async ({text, localUri}) => {
        const remoteUri = await this.uploadPhotoAsync(localUri);

        return new Promise((res, rej) => {
            this.firestore
            .collection("posts")
            .add({
                text,
                uid: this.uid,
                timestamp: this.timestamp,
                image: remoteUri
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error);
            });
        });
    };

    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;
        
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();
            
            let upload = firebase
            .storage()
            .ref(path)
            .put(file);

            upload.on(
                "state_changed", 
                snapshot => {}, 
                err => {
                rej(err);
            },
            async () => {
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url);
            }
            );

        }); 
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.user,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key: _id} = message;
        const createAt = new Date(timestamp);

        return {
            _id,
            createAt,
            text,
            user
        };

    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;