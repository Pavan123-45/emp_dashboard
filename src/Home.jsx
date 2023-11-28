import style from "./design.module.css"
import React from 'react'
import logo from "./img/logo.png"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
let [empData, setEmpData] = useState([])
let [inputEmailData, setInputEmailData] = useState([])
let [inputpasswordData, setInputPasswordData] = useState([])

  useEffect(()=>{
    axios.get("https://dummyjson.com/users")
    .then((res)=>{
         setEmpData(res.data.users)
        })
    .catch((err)=>{
        console.log("error");
    })
    },[])
 
let emailData=(e)=>{
    e.preventDefault()
    setInputEmailData(e.target.value)
}
let passwordData=(e)=>{
    setInputPasswordData(e.target.value)
  }
let navigate = useNavigate()

let login=()=>{let findData= empData.filter((e)=>{
     return e.email===inputEmailData && e.password===inputpasswordData} )
   if(findData.length>0)
  {
    navigate("/home")
  }
  else {
    navigate("./error")
  }
}
  return (
    <div className={style.home}>
       <img src={logo} alt="logo" className={style.logo}/>
       <input type="email" placeholder="E-mail" className={style.inputemail} onChange={emailData} /> 
       <input type="password"   placeholder="Password" className={style.inputpassword} onChange={passwordData}/>
       <button className={style.inputbtn} onClick={login}>Login</button>
       <Link className={style.anc}>Forgot Password?</Link>
      
    </div>
  )
}

export default Home
