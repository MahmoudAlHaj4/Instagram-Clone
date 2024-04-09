import "./sidebar.css"
import { useState } from "react"
import PostModal from "../Modals/Post Modal/PostsModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faPlus} from '@fortawesome/free-solid-svg-icons';
import SearchModal from "../Modals/Search Modal/SearchModal";
import { useNavigate } from "react-router-dom";


const SideBar = ({setsetIsOpened})=>{
    const [create,setCreate]= useState(false)
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isSearchModalOpen, setIsSreachModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggle = ()=>{
        setCreate(!create)
    }
    
    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };
    const openSreachModal = () => {
        setIsSreachModalOpen(true);
    };
    const closeSearchModal = () => {
        setIsSreachModalOpen(false);
    };

    return (
        <div className="main">
           <div className="heading flex center">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkA4eLYzO589zptEK11phwXKTnAoqtNpUnXDdVOPEQw&s" alt="" />
           </div>
           <div className="tools  ">
                <div className="btns flex column">
                    <button><FontAwesomeIcon icon={faHouse} /> Home</button>
                    <button onClick={openSreachModal}>Search</button>
                    <button>Explore</button>
                    <button>Rells</button>
                    <button>Messages</button>
                    <button>Notification</button>
                    <button onClick={toggle}>create</button>

                    {create && (
                        <>
                            <button onClick={openPostModal}><FontAwesomeIcon icon={faPlus} /> Post</button>
                            <button>Video</button>
                        </>
                    )}
                    <button  onClick={() => navigate('/profile')}>Profile</button>
                </div>
           </div>
           <div className="last flex column">
            <div className="more flex column btns">
                <button>Thread</button>
                <button>More</button>
            </div>
           </div>
           <PostModal isOpen={isPostModalOpen} onClose={closePostModal} />
           <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
        </div>
    )

}

export default SideBar