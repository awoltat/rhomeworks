import React from "react";
import './Modal.scss';
import UserCard from "../UserCard";

const Modal = (props) => {
    const {handleHideModal} = props;
    console.log(Object.entries(props.user));
    return (
        <>
            <button className='close' onClick={handleHideModal}>
            </button>
            <div className='modal'>
                {Object.entries(props.user).map(info => {
                    return <p>{`${info[0]} : ${info[1]}`}</p>
                })}
            </div>
        </>
    )
};
export default Modal;