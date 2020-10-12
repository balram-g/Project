
import axios from "axios";
import React, { useState,useEffect} from "react";

 import room1 from '../assets/images/details-3.jpeg';
//import imageBaseURL = "C:\Users\balyadav\React\myproject\src\assets\images\";
//import * as imageBaseURL from './assets/images';
// import Logo2 from '../assets/images/details-3.jpeg';
// C:\Users\balyadav\React\myproject\src\assets\images\defaultBcg.jpeg

const Rooms = () => {
    // const [images, setImages] = useState([]);

    // useEffect(()=>{
    // // console.log("Balram");
    // loadimages();
    // },[]);
    
    // //need to give dependency hece give 0 in array for useEffect
    // const loadimages = async () => {
    //     const result = await axios.get("http://localhost:3003/roomsData");

    //     setImages(result.data);
    //   };
    
   
    // const ItemsList = images.map( item => {
    //     return(
    //     <li><img key={item.rid} alt="TitleOfImage" src={`${imageBaseURL}${item.rname}`}/></li>
    //     )
    //   });
      
  return (

<div class="container">
 <div class="row" class="view overlay">
     <div class="col-lg-4 col-md-4 col-sm-4 col-12" class="viewoverly">
     
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     <h4 align="center"> Room Price :1000</h4>
     
     </div>
   
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     <h4 align="center"> Room Price :1000</h4>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     <h4 align="center"> Room Price :1000</h4>
     </div> 
 </div>


  <div class="row">
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     </div>

     
 </div>

 <div class="row">
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4 col-12">
     <img src={room1} alt="First room" className="d-block w-100" class="img-fluid"/>
     </div>
 </div>


</div> 



  );
};
export default Rooms;

