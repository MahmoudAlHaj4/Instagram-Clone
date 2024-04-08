import './posts.css'

const Posts = ()=>{
    return (
        <div className="Posts-page flex center">
             <div className="post">
                <div className='head flex'>
                    <div className='user-img'>
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="User" />
                    </div>
                    <div className='name'>
                        <p>Username</p>
                    </div>
                </div>
                <div className='img-container'>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="Post" />
                </div>
                <div className="icons">
                   
                </div>
                <div className="caption">
                    
                </div>
                <div className="comments">
                    
                </div>
                <div className="add-comment">
                    
                </div>
            </div>
        </div>
    )
}

export default Posts