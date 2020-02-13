import React from "react";

const UserCard = (props) => {

    return (
        <div className={'card'} >
            <h1>{props.user.name}</h1>
            <p>{props.user.age}</p>
            <p>{props.user.gender}</p>
            <p>{props.user.balance}</p>
            <img src={props.user.picture} alt="photo"/>
            <button onClick={() => props.handleShowModal(props.user._id)}>Show full info</button>
        </div>
    );
};

export default UserCard;