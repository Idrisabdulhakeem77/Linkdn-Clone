import { createSlice   } from '@reduxjs/toolkit'
import {provider , auth, storage } from '../firebase'
import {  signInWithPopup , signOut} from "firebase/auth";
import { ref  , uploadBytesResumable , getDownloadURL} from 'firebase/storage';
import { collection, doc, setDoc, getDocs , onSnapshot } from "firebase/firestore";
import db from '../firebase';


export const initialState = {
  articles : [] ,
  user : null ,
  loading : false 
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      signIn : (state , action) => {
          return { ...state , user : action.payload}
      } ,

      getArticles : ( state , action) => {
         return { ...state , articles : action.payload}
    } ,

    setLoading : (state , action) => {
        return {...state , loading  : action.payload}
    } ,

  }
  },
)


export const signInApi=  () => {
  return dispatch => {
     signInWithPopup(auth , provider)
     .then(data =>  dispatch(signIn(data.user)) )
     .catch((err) => console.log(err))
  }
}

export const signOutApi =  () => {
  return dispatch => {
    signOut(auth).then(() => {
       dispatch(signIn(null))
    }).catch((error) => {
        console.log(error)
    });

  }
  
}


export const postArticleApi = (payload) => {
   return (dispatch) => {
    dispatch(setLoading(true))
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
            dispatch(setLoading(false))
          } catch (err) {
            console.log(err);
          }
        }
      );
    }
  };
  
  

   }

export const getArticlesApi = () => {
  return async (dispatch) => {4
       let payload ;
      
      const unsub = onSnapshot(collection(db , "users") , (doc) => {
          payload =   doc.docs.map(doc => doc.data())
         console.log(payload)
      })

    // let payload;
    // const querySnapshot = await getDocs(collection(db, "users"));

    //  payload = querySnapshot.docs.map((doc) => doc.data());
    //    console.log(payload)
    //   dispatch(getArticles(payload))
  };
  //  let payload ;
//   const unsub = onSnapshot(collection(db , 'users'), (doc) => {
//     const  payload  = doc.forEach(doc => console.log(doc.data()))
//     console.log(payload)
// });
//  let payload ;  


// const unsub = onSnapshot(collection(db , "users"),  (doc) => {
//      doc.forEach(doc => dispatch(getArticles(doc.data())))
//     console.log(doc)
  
// }); 



 
};
// }



export const { signIn , getArticles  , setLoading}  = userSlice.actions


export default userSlice.reducer

