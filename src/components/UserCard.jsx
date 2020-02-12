import React from "react";

const UserCard = (props) => {
    console.log(props);
    return (
        <div className={'card'}>
            <h1>{props.user.name}</h1>
            <p>{props.user.age}</p>
            <p>{props.user.gender}</p>
            <p>{props.user.balance}</p>
            <img src={props.user.picture} alt="photo"/>
        </div>
    );
};

export default UserCard;