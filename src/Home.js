
import axios from "axios";
import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
//import { NavLink } from 'react-router-dom';
{/* <NavLink className="nav-link" to="/login">Login</NavLink> */}

const Home = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
// console.log("Balram");
loadusers();
},[]);

//need to give dependency hece give 0 in array for useEffect
const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadusers();
  };

  return(

  
    <div className="container">
    <div className="py-4">
      <h1>Home Page</h1>
      <table class="table border shadow">
        <thead class="thead-dark">
    <tr align="center">
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">StaffType</th>
      <th> Action </th>
    </tr>
    </thead>
    <tbody>
  { users.map((user,index) =>(
    <tr align="center">
      <td >{index+1}</td>   
      <td> {user.name}</td>   
      <td>{user.email}</td>    
       <td> {user.stafftype}</td>  
       <td align="center">
      <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
      <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
      <Link class="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
   </td>
    </tr>   

  ))}
</tbody>
</table>
</div>
</div>
  );
};
export default Home;


// import React from "react";
// import "./la.jpg";
// import { Link } from "react-router-dom";
// function Home () 
// {
// return(


// <>



//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
//   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  

    



// <div id="demo" class="carousel slide" data-ride="carousel">


//   <ul class="carousel-indicators">
//     <li data-target="#demo" data-slide-to="0" class="active"></li>
//     <li data-target="#demo" data-slide-to="1"></li>
//     <li data-target="#demo" data-slide-to="2"></li>
//   </ul>
  

//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={la.jpg} alt="Los Angeles" width="1100" height="500"/>
//     </div>
//     <div class="carousel-item">
//     <img src={la.jpg} alt="Los Angeles" width="1100" height="500"/>
//     </div>
//     <div class="carousel-item">
//     <img src={la.jpg} alt="Los Angeles" width="1100" height="500"/>
//     </div>
//   </div>
  

//   <a class="carousel-control-prev" href="#demo" data-slide="prev">
//     <span class="carousel-control-prev-icon"></span>
//   </a>
//   <a class="carousel-control-next" href="#demo" data-slide="next">
//     <span class="carousel-control-next-icon"></span>
//   </a>
// </div>



// </>



// );
// }

// export default Home;