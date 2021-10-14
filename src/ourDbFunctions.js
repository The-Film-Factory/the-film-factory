import { ref, push, onValue } from "firebase/database";
import ourDatabase from "./firebase.js";

const handlePushToFirebase = (englishMovieID, foreignMovieID) => {
  const dbRef = ref(ourDatabase);
  push(dbRef, { englishMovie: englishMovieID, foreignMovie: foreignMovieID });
};

const handleDisplayData = (callback) => {
  onValue(ref(ourDatabase), callback);
};

export { handlePushToFirebase, handleDisplayData };
