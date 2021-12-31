import './App.css';
import Button from "./components/Button"
import {useState} from "react";
import axios from "axios";

function App() {
  const [userData, setUserData]= useState([]);
  const [loading, setLoading]=useState(false);
  const [activeUser, setActiveUser]=useState(false);
  const [activeLink, setActiveLink]=useState(0);
  

  const onClickHandler= () =>{
   setLoading(true);
   axios.get('https://randomuser.me/api/')
   .then((response)=>{
     console.log(response);
     setUserData(response.data.results);
   })
  }

  return (
    <div className="App">
      <h1>Random User Generator App</h1>
      <Button isActive={activeUser} clicked={onClickHandler}/>
    </div>
  );
}

export default App;
