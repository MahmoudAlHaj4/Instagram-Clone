import "./sidebar.css"


const SideBar = ({setsetIsOpened})=>{
    return (
        <div className="main">
           <div className="heading flex center">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkA4eLYzO589zptEK11phwXKTnAoqtNpUnXDdVOPEQw&s" alt="" />
           </div>
           <div className="tools  ">
                <div className="btns flex column">
                    <button>Home</button>
                    <button>Search</button>
                    <button>Explore</button>
                    <button>Rells</button>
                    <button>Messages</button>
                    <button>Notification</button>
                    <button>create</button>
                    <button>Profile</button>
                </div>
           </div>
           <div className="last flex column">
            <div className="more flex column btns">
                <button>Thread</button>
                <button>More</button>
            </div>
           </div>
        </div>
    )

}

export default SideBar