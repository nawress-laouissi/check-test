
import React from 'react'
import './App.css'
import Profile from './Components/Profile'

 
 function App() {
  const fullname = "sdiri oumayma";
  const bio = "web";
  const profession = "student"

  const handleName = function (name) {
    alert(`my name is ${name}`);
  }
   return (
     <div>
    <Profile fullname={fullname}
             bio={bio} 
             profession={profession}
             handleName={handleName} />
      <img src="https://blankhearts.com/wp-content/uploads/2022/10/girl-whatsapp-dp-15.jpg" alt='profile' > </img>
     
      </div>
    

   );
 }
 
 export default App