import React, {useState} from 'react';
import {userData} from "./data/userData";
import UserCard from "./components/UserCard";



const App = () => {
  const [userArr, setUserArr] = useState([...userData]);

  const handleFilterByName = (e) => {
    const value = e.target.value.toLowerCase();
    const resultArray = userData.filter(user => {
      return user.name.toLowerCase().includes(value);
    });
    console.log(resultArray);
    setUserArr(resultArray);
  };

  const handleFilterByAge = (e) => {
    console.log(e.target.value);
    let arr = [...userData];
    const resultArray = arr.sort((a, b) => {
      if (e.target.value === '1') {
        return a.age - b.age;
      }
      if (e.target.value === '2') {
        console.log('in 2');
        return b.age - a.age;
      }
    });
   setUserArr(resultArray);
  };

  return (
      <>
        <header>
          <label htmlFor="inp">Find by name </label>
          <input id={"inp"} placeholder={"Enter your name"} type={"text"} onChange={handleFilterByName}/>
          <br/>
          <select name="select" id="select" onChange={handleFilterByAge}>
            <option value="0">Сортировка по возрасту</option>
            <option value="1">От младшего к старшему</option>
            <option value="2">От старшего к младшему</option>
          </select>
        </header>

        <main>
          {userArr.map((userObj, i) => {
            const generatedKey = `userCard${userObj.id}`;
            return <UserCard user={userObj} index={i} key={generatedKey}/>
          })}
        </main>
      </>
  );
};

export default App;