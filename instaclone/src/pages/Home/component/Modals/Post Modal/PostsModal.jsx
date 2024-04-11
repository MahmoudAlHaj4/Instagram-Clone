import React, { useRef, useState } from 'react';
import axios from 'axios';
import "./postmodal.css";

const PostModal = ({ isOpen, onClose, userId }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [img, setimg] = useState('');
    const [caption, setCaption] = useState('');
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file)); 
            setimg(file); 
        }
    
    };

    const handleTextInputChange = (e) => {
        setCaption(e.target.value)
    };
console.log(userId)
    const handleCreatePost = async (e) => {
        e.preventDefault();

        
        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('img', fileInputRef.current.files[0]);
        formData.append('caption', caption);
         localStorage.getItem('token');

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/create`, {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            console.log(data)

            if (response.ok) {
                console.log('Post created successfully:', data.post);
            } else {
                console.log('Error creating post:', data.error);
            }

            
        } catch (error) {
            console.log( error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="post-modal-overlay flex center" onClick={onClose}>
                    <div className="post-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="post-header">
                            <input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} style={{ display: 'none' }} />
                            <button className="upload-btn" onClick={() => fileInputRef.current.click()}>Upload Image</button>
                        </div>
                        {imagePreview && (
                            <div className="image-preview">
                                <img src={img} alt="Uploaded" />
                            </div>
                        )}
                        <textarea
                            className="text-input"
                            placeholder="Type anything..."
                            value={caption}
                            onChange={handleTextInputChange}
                        ></textarea>
                        <button className='upload-btn' onClick={handleCreatePost}>Create</button>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostModal;
