import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';  

// firebase configs
const firebaseConfig = {
    apiKey: "AIzaSyAn4CjI8UmRXmS90r502MySrAYA7q8iB5g",
    authDomain: "film-factory-f53ff.firebaseapp.com",
    databaseURL: "https://film-factory-f53ff-default-rtdb.firebaseio.com",
    projectId: "film-factory-f53ff",
    storageBucket: "film-factory-f53ff.appspot.com",
    messagingSenderId: "325687904075",
    appId: "1:325687904075:web:58cdfdf6f1bea4b5ab0ace"
};

const app = initializeApp(firebaseConfig);
const ourDatabase = getDatabase(app); 

export default ourDatabase;