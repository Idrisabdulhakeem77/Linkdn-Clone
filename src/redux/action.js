import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import db, { storage } from "../firebase";
import { getArticles } from "./articleSlice";

import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export const postArticleApi = (payload) => {
  const storageRef = ref(storage, `images/${payload.image.name}`);

  if (payload.image !== "") {
    const uploadTask = uploadBytesResumable(storageRef, payload.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log("Upload is " + progress + "% done");

        console.log(snapshot.state);

        if (snapshot.state === "running") {
          console.log(`Progress ${progress}%`);
        }
      },
      (error) => {
        console.log("Error ", error);
      },
      async () => {
        console.log(payload);
        try {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const newUser = doc(collection(db, "users"));

            await setDoc(newUser, {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              comment: 0,
              shareImage: downloadURL,
              description: payload.description,
            });
          });
        } catch (err) {
          console.log(err);
        }
      }
    );
  }
};
// export const  getArticles = ( payload) => ({
//      type :'GET_ARTICLES' ,
//      articles : payload

// })

export const getArticlesApi = () => {
  return async (dispatch) => {
    let payload;
    const querySnapshot = await getDocs(collection(db, "users"));

    payload = querySnapshot.docs.map((doc) => doc.data());

      dispatch(getArticles({payload}))
  };
};
