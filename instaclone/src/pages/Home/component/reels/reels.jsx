import Posts from '../posts/posts'
import SideBar from '../sidebar/sidebar'
import './reels.css'
import Suggestions from './suggestions'
import { useState } from 'react'

const Reels = ()=>{
    const [posts,setPosts] = useState([])
    return (
        <div className="reels flex">
            <div className="leftside">
                <div className='reel-pos'>
                    
                        <Posts />
                    
                </div>
            </div>
            <div className="rightside">
                <Suggestions />
                
               
            </div>
        </div>
    )
}
export default Reels