import './posts.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { useEffect, useState } from 'react';
import axios from 'axios'
const Posts = ()=>{
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/get_posts')

            const data = res.data
            setPosts(data)
            console.log(data)
        } catch (error) {
            console.log('Error fetching posts:');
        }
    }
    fetchData()
    },[])
    
    return (
        <div className="Posts-page flex center column">
                <div className='user-reel flex  center'>
                    <div className="reel">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="User" />
                    </div>
                    <div className="reel">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="User" />
                    </div>
                    <div className="reel">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="User" />
                    </div>
                    <div className="reel">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="User" />
                    </div>
                    <div className="reel">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="User" />
                    </div>
                    
                </div>
                {posts.map(post=>(
                     <div className=' posts flex column ' key={post.id}>
                    <div className='single-post flex column'>
                        <div className='head flex'>
                    <div className='user-img flex'>
                    {post.image && <img src={post.image} alt="User" />}
                       <span>{post.user_id}</span>
                      
                    </div>
                </div>
                <div className='img-container'>
                <img src={post.image} alt="" />
                </div>
                <div className='footer '>
                    <div className='footerIcon flex'>
                        <div className="post-icons flex ">
                            <FavoriteBorderIcon />
                            <TelegramIcon />
                            <MapsUgcIcon />

                        <div className="save-icon">
                            <BookmarkIcon />
                        </div>
                    </div>
                    <div>{post.caption}</div>
                    </div>

                    
                </div>
                    </div>
                
                </div>
                ))}
               
                
                
                   
        </div>
    )
}

export default Posts