import "./edit.css"


const Edit =  ({ isOpen, onClose })=>{
    return (
        <>
        {isOpen && (
            <div className="edit-modal-overlay">
                <div className="edit-modal">
                    <div className="edit-modal-content">
                        <h2>Edit Profile</h2>
                        <input type="text"  placeholder="Username"/>
                        <input type="text" placeholder="Email"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="bio"></textarea>
                        <div className="modal-btn flex ">
                            <button className="save"onClick={onClose}>submit</button>
                            <button onClick={onClose}>Close</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )}
    </>
    )
}

export default Edit