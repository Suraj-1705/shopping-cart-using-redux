import { useEffect, useState } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading , setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
console.log(posts);
  async function fetchPosts() {
    setLoading(true);

    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("printing data");
      console.log(data);
      setPosts(data);
    }
    catch(e){
        console.log("Error ayya hai jee");
        setPosts([]);
    }
    setLoading(false);
  }

  useEffect( ()=>{
    fetchPosts();
  },[])

  return (
    <div>
      {
        loading ? (<Spinner/>) :
          (posts.length > 0 ? 
          ( <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2  space-x-5 space-y-10 min-h-[80vh]">
            {
              posts.map( (post) => (
                <Product key={post.id} post={post}/>
              ))

            }
            </div>):
          (
            <div className="flex items-center justify-center">
              <p>No Data Found</p>
            </div>
          )
          
          )
         
      }
    </div>
  )
};

export default Home;
