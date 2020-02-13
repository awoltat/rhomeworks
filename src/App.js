import React, {useState} from 'react';
import {userData} from "./data/userData";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal/Modal";
import './App.css'

const App = () => {
    const [userArr, setUserArr] = useState([...userData]);
    const [valueOfInput, setValueOfInput] = useState('default');
    const [modalState, setModalState] = useState({
        isShow: false,
        id: null,
    });

    const handleFilterByName = (e) => {
        const value = e.target.value.toLowerCase();
        const resultArray = userData.filter(user => {
            return user.name.toLowerCase().includes(value);
        });
        console.log(resultArray);
        setUserArr(resultArray);
    };

    const handleFilterByAge = (e) => {
        let arr = [...userData];
        arr.sort((a, b) => {
            if (e.target.value === '1') {
                return a.age - b.age;
            }
            if (e.target.value === '2') {
                return b.age - a.age;
            }
            if (e.target.value === 'default') {
                return b.age === a.age;
            }
        });
        setValueOfInput(e.target.value);
        setUserArr(arr);
    };

    const handleReset = () => {
        setValueOfInput('default');
        setUserArr(userData);
    };

    const handleShowModal = (id) => {
        setModalState({
            isShow: true,
            id
        })
    };
    const handleHideModal = () => {
        setModalState({
            isShow: false,
        })
    };

    return (
        <>
            <header>
                <label htmlFor="inp">Find by name </label>
                <input id={"inp"} placeholder={"Enter your name"} type={"text"} onChange={handleFilterByName}/>
                <br/>
                <select value={valueOfInput} name="select" id="select" onChange={handleFilterByAge}>
                    <option value='default'>Сортировка по возрасту</option>
                    <option value="1">От младшего к старшему</option>
                    <option value="2">От старшего к младшему</option>
                </select>
                <br/>
                <button onClick={handleReset}>Сбросить все фильтры</button>
            </header>

            <main>
                {userArr.map((userObj, i) => {
                    const generatedKey = `userCard${userObj._id}`;
                    return <UserCard
                        user={userObj}
                        index={i}
                        key={generatedKey} s
                        handleShowModal={handleShowModal}
                    />
                })}
            </main>
            {modalState.isShow && <Modal user={userArr.find(u => u._id === modalState.id)} handleHideModal={handleHideModal}/>}

        </>
    );
};

export default App;
