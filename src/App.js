import './App.css';
import Button from "./components/Button"
import {useState, Fragment} from "react";
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
     console.log(response.data.results);
     setUserData(response.data.results);
   }).catch(error=>{
     console.log(error);
     setLoading(true);
   }).finally(()=>{
     setLoading(false);
     setActiveUser(true);
   })
  }

  const icons=[
    "fas fa-user fa-4x",
    "fas fa-envelope fa-4x",
    'fas fa-calendar-alt fa-4x',
    'fas fa-map-marker fa-4x',
    'fas fa-phone fa-4x',
    'fas fa-lock fa-4x'
  ]

  const PhraseGeneretor=()=>{

  }
  return (
    <div className="App">
      <h1>Random User Generator App</h1>
      <Button isActive={activeUser} clicked={onClickHandler}/>
      {loading ? (
        <h1>Loading...</h1>):(
          <div className='app__user'>
            {userData.map((user, index)=>{
              return(
                <Fragment key={user.cell}>
                  <img src={user.picture.large} alt="#"/>
                  <div className='app__icons'>
                  {icons.map((icon,index)=>{
                    return <i className={icon} key={index}></i>
                  })}
                  </div>
                </Fragment>
              )
            })}
          </div>
        )}
    </div>
  );
}

export default App;
