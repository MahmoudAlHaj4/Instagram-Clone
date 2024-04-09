import "./SearchModal.css"
import { useState, useEffect } from "react"
import axios from 'axios';

const SearchModal = ({isOpen ,onClose}) => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (search !== '') {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    setData(response.data);
                } else {
                    setData([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [search]);

    const filteredData = data.filter(user => user.name.includes(search));

    return (
        <>
            {isOpen && (
                <div className="search-modal-overlay">
                    <div className="search-container">
                        <div className="sheading flex column">
                            <div className="close flex">
                                <h1>Search</h1>
                                <button onClick={onClose}>x</button>
                            </div>
                            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <hr />
                        </div>
                        <div className="userss">
                            <h3>Recent</h3>
                            <div className="user flex column">
                                {filteredData.map(user => (
                                    <div key={user.id} className="user-img flex">
                                        <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="" />
                                        <p>{user.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SearchModal;
