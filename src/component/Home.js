import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    firestore
    .collection('posts')
    .get()
    .then((snapshot)=>{ 

      const data=snapshot.docs.map((doc)=>{ 

        return{
          id:doc.id,
          ...doc.data(),
        }
      });
      setPosts(data);
    });
    // console.log('posts',posts);
   
  },[]);
    return (
      //Home UI
      <div className="Home">
       <h1>Tech Blog</h1>
       <div id="blog-by">Saif</div>
       {
        posts.map((posts,index)=>(
          <div className="posts" key={`posts-${index}`}>
          <Link to={`/post/${posts.id}`}>
          <h3>{posts.title}</h3>
          </Link>
        
          <p>{posts.subTitle}</p>
          </div>
        ))
       }
      </div>
    );
  }
  
  export default Home;