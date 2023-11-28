import style from "./design.module.css"
const Error =()=>{
   
    return(
      <div className={style.err}>
        <h1>Oops!!!</h1> <br /><br />
        <h2> There was an error with your E-Mail/Password combination. Please try again.</h2>
       </div>
    )
}
export default Error