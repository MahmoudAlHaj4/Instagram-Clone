import "./profile.css"
import SideBar from "../sidebar/sidebar"
import Edit from "../Modals/Edite Modal/edit"
import React, { useState } from 'react';

const Profile = ()=>{
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };
    return (

        <div className="Profile-page flex ">
            <div className="profile-side-bar">
                <SideBar />
                
            </div>
            <div className="profile-summary flex column">
                <div className="profile-details flex">
                    <div className="profile-image flex center">
                     <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    </div>
                <div className="user-info  ">
                   <div className="user-detail flex ">
                   <div className="username">
                        <h1>Username</h1>
                        <h3>name</h3>
                    </div>
                        
                    <div className="btns">
                        <button>Edit</button>
                        <button>Edit</button>
                        <button>Edit</button>
                    </div>
                        <div className="followers flex">
                            <p>1 posts</p>
                            <p>3 followers</p>
                            <p> 20 following</p>
                        </div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolores.</p>
                    <div>

                    </div>
                     
                </div>
            </div>
                <hr />
               <div className="profile-posts">
                <div className="line flex center">
                    <h3>Posts</h3>
                    <h3>Tags</h3>
                    <h3>Saved</h3>
                </div>
                <div className='profile-posts flex center'>
                   
                <div className='imgs-container'>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
                <div className='imgs-container'>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
                <div className='imgs-container'>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
                <div className='imgs-container'>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
                <div className='imgs-container'>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
                </div>
               </div>
            </div>
            {isEditModalOpen && <Edit isOpen={isEditModalOpen} onClose={closeEditModal} />}
        </div>
    )
}
export default Profile