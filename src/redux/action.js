import {  ref, uploadBytesResumable, getDownloadURL , uploadBytes } from "firebase/storage";
import db, { storage } from "../firebase";
import { getDatabase, set } from "firebase/database"

import { collection, doc, setDoc } from "firebase/firestore";




// export const postArticleApi = (payload ) => {
//      return (dispatch) => {
//         if(payload !== "") {

// const storage = getStorage();
// const storageRef = ref(storage, `images/${payload.image.name}`);
 
// console.log(storageRef)

// const uploadTask = uploadBytesResumable(storageRef );

// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', 
//   (snapshot) => {
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//   }, 
//   (error) => {
//      console.log(error)
//   }, 
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });

//     set(ref(db, 'users/' ), {
//         actor : {
//              description : payload.user.email,
//              title : payload.user.displayName,
//              date : payload.timestamp,
//              image : payload.user.photoURL,
//         }
//            });
// //   }
// );
//         }
//      }
// }


export const postArticleApi = (payload) => {
    
    const storageRef = ref(storage , `images/${payload.image.name}`)
    
       if(payload.image !== ""){
        
        const uploadTask = uploadBytesResumable(storageRef, payload.image);

        uploadTask.on('state_changed' ,
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  
          console.log('Upload is ' + progress + '% done');
  
          console.log(snapshot.state)
  
          if(snapshot.state === "running") {
               console.log(`Progress ${progress}%`)
          }
      }, 
      (error) => {
          console.log("Error ",error)
      },
      async  () => {
        console.log(payload )
         try {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => { 
            
            await setDoc(doc(db, "users" , payload.user.displayName) , {
            actor : {
              description : payload.user.email,
              title : payload.user.displayName,
              date : payload.timestamp,
              image : payload.user.photoURL,
         } , 
            comment : 0,
            shareImage : downloadURL,
            description : payload.description
             
        }    
            
            );


            });
              

         } catch(err){
           console.log(err)
         }
        
          
      
      }
      )
       } 
  


 
}