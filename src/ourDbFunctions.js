import { ref, push, set, onValue } from 'firebase/database'; 
import ourDatabase from './firebase.js'; 

export const handlePushToFirebase = (englishMovieID, foreignMovieID) => {
    const dbRef = ref(ourDatabase); 
    push(dbRef, { englishMovie: englishMovieID, foreignMovie: foreignMovieID })
}

// db.pushArticle = (dataObject) => {
//     const postListRef = ref(firebaseApp, '/posts');
//     const newPostRef = push(postListRef);
//     set(newPostRef, dataObject);
// }
// db.getArticles = (setState) => {
//     const postListRef = ref(firebaseApp, '/posts');
//     const dataArray = [];
//     onValue(postListRef, (snapshot) => {
//         const data = snapshot.val();
//         for (let key in data) {
//             dataArray.push({
//                 id: key,
//                 title: data[key].title,
//                 body: data[key].body
//             })
//         }
//     });
//     const articles = dataArray.reverse();
//     setState(articles);
// }