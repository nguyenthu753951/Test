import './travelBlog.css'
import React from 'react'
import axios from 'axios'
import BlogHome from '../../components/blogHome/BlogHome'
import BlogPosts from '../../components/blogPosts/BlogPosts'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function TravelBlog() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() =>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <div className='blogHome'>     
        <BlogHome />
        <div className="blogContainer">
          <div className="blogMain">
              
              <BlogPosts posts={posts}/>           
          </div>
        </div>
    </div>
  )
}

export default TravelBlog