import React from 'react'

export default function Monster(props) {
    // console.log("props:", props);
    const {name, username, id, email} = props.monster;
    
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{username} </h2>
            <h3>{name} </h3>
            <p>{email}</p>
        </div>
    ) 
}
