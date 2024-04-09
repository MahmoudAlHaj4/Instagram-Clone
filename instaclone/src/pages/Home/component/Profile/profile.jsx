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
            <div className="sb">
                <SideBar />
            </div>
            <div className="profile-side flex center column">
                <div className="profile-box flex ">
                    <div className="img-cont flex center">
                        <div className="profile-img flex">
                        <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="" />
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="profile-heading flex">
                            <h2>Username</h2>
                            <button onClick={openEditModal}>Edit profil</button>
                            <button>Edit profil</button>
                            <button>Edit profil</button>
                        </div>
                        <div className="followers flex">
                            <p>1 posts</p>
                            <p>3 followers</p>
                            <p> 20 following</p>
                        </div>
                        <div className="bio">
                            <h3>username</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolorum?</p>
                        </div>
                    
                         </div>
            </div>
                   
            </div>
            {isEditModalOpen && <Edit isOpen={isEditModalOpen} onClose={closeEditModal} />}
        </div>
    )
}
export default Profile