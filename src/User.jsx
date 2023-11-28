import React, { useState } from 'react'
import style from "./design.module.css"
import { Link } from 'react-router-dom'
import contact from "./img/contact.png"
import moptro_logo from "./img/moptro_logo.png"
import home_logo from "./img/home.jpg"
import listContacat_logo from "./img/listContact.jpg"
import UserCard from './UserCard'
import { useEffect } from 'react'
import axios from 'axios'
const User = () => {

    let [name,setName] = useState([]);
    let [filterData,setFilterData] =useState([])
    let [empData,setEmpData]=useState([])

    useEffect(()=>{
    axios.get("https://dummyjson.com/users")
    .then((res)=>{
         setEmpData(res.data.users)
         setFilterData(res.data.users)   
         })
         .catch((err)=>{
         console.log("Data not fetch");
       })
       },[])

        let nameData=(e)=>{
            e.preventDefault()
            setName(e.target.value)
         }
       let fetchEmp=()=>{
       let searchData= empData.filter((e)=>e.maidenName.toLowerCase().includes(name.toLowerCase()) )
       if(searchData.length>0)
         {
        setFilterData(searchData)
       }
       else{
        console.log("no data found");
       let h1=document.createElement("h1")
        let word = document.createTextNode("Employee details are not found")
        h1.appendChild(word)
        document.getElementById("text").appendChild(h1)
        setFilterData(searchData)
       }
      
    }
   return (
    <div className={style.dashboard}>
      <Link to={"/"}><img src={contact} alt="contact_logo" className={style.contact} /></Link>
      <img src={moptro_logo} alt='moptro_logo' className={style.moptro_logo}></img>
      <input type="text" placeholder='Search with name' className={style.search} onChange={nameData}/>
       <button className={style.searchBtn} onClick={fetchEmp}>Search</button>      
     <div className={style.cardContainer}>
          <UserCard  filterData={filterData}></UserCard>
          <div id='text'></div>
     </div>
     <div className={style.footer_user}>
        <Link to={"/home"}><img src={home_logo} alt='home_logo'className={style.home_logo}></img></Link>
        <Link to={"/users"}><img src={listContacat_logo}  alt="listContact_logo" className={style.listContacat_logo} /></Link>
      </div>
    </div>
  )
}

export default User
