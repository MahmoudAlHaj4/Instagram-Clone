import React, { useRef, useState } from 'react';
import "./postmodal.css";

const PostModal = ({ isOpen, onClose }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [textInput, setTextInput] = useState('');
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
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
                                <img src={imagePreview} alt="Uploaded" />
                            </div>
                        )}
                        <textarea
                            className="text-input"
                            placeholder="Type anything..."
                            value={textInput}
                            onChange={handleTextInputChange}
                        ></textarea>
                        <button className='upload-btn' onClick={onClose}>Create</button>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostModal;
