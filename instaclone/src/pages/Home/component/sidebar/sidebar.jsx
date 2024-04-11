import "./sidebar.css"
import { useState } from "react"
import PostModal from "../Modals/Post Modal/PostsModal"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchModal from "../Modals/Search Modal/SearchModal";
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
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
        <div className="sidebarmain flex column ">
           
                <img className="sid-logo" src="https://as2.ftcdn.net/v2/jpg/03/97/48/01/1000_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg" alt="" />

                <div className="kkk ">

                    <button className = "side-btn">
                        <HomeIcon />
                        <span  onClick={()=> navigate('/home')}>Home</span>
                    </button>

                        <button className = "side-btn">
                        <SearchIcon />
                        <span  onClick={openSreachModal}>Search</span >
                    </button>
                    <button className = "side-btn">
                            <ExploreIcon />
                            <span >Explore</span>
                    </button>
                    <button className = "side-btn">
                            <MovieCreationIcon />
                            <span className = "side-btn">Reels</span>
                    </button >
                    <button className = "side-btn">
                            <ForumIcon />
                            <span >Messages</span>
                    </button>
                    <button className = "side-btn">
                            <FavoriteBorderIcon />
                            <span >Notification</span  >
                    </button >
                    <button className = "side-btn">
                            <AddBoxIcon />
                            <span  onClick={toggle}>create</span>
                    </button >
                    
                    <button className = "side-btn">
                        {create && (
                        <>
                            <span onClick={openPostModal}>Post</span  >
                            <span >Video</span >
                        </>
                    )}
                    </button >
                    <button className = "side-btn">
                        <span  onClick={() => navigate('/profile')}>Profile</span >
                    </button>
                </div>
                <div className="side-btn_more">
                <button className="side-btn">
                        <GestureIcon />
                        <span >Thread</span >
                    </button  >
                    <button className="side-btn">
                        <MenuIcon />
                        <span >More</span>
                    </button >
                </div>
           
            
           <PostModal isOpen={isPostModalOpen} onClose={closePostModal} userId={'1'}/>
           <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
        </div>
    )

}

export default SideBar