import React, { useRef } from 'react';
import { auth, database, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import "./home.scss";
import { addDoc, collection } from 'firebase/firestore/lite';


const Home = () => {

  const form = useRef();

  const submitPortfolioItem = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`)
    // console.log("Values received in the form are", name, description, url, image);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          savePortfolio({
            name,
            description,
            url,
            image: downloadUrl,
          })
        },() => {
            savePortfolio({
              name,
              description,
              url,
              image: null
            })
        })
      }, () => {
          savePortfolio({
            name,
            description,
            url,
            image: null
          })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    console.log(portfolio);
    try {
        await addDoc(collection(database, 'portfolio'), portfolio);
        alert("Congratulations, you have successfully added a document to your portfolio")
        window.location.reload(false);
    }catch(error){
      alert('Failed to add portfolio');
      console.log(error);
    }
  }

  return (
    <div className="homeLogin">
      <h1>Home</h1>
      <p>This is the home page after user Sign In</p>
      <form ref={form} onSubmit={submitPortfolioItem}>
        <p><input type="text" placeholder='Name' /></p>
        <p><textarea placeholder='Description' /></p>
        <p><input type="text" placeholder='Url' /></p>
        <p><input type="file" placeholder='Image' /></p>
        <button type="submit">Submit</button>
        <button onClick={()=>auth.signOut()}>Sign out</button>
      </form>
    </div>
  )
}

export default Home;