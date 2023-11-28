import style from "./design.module.css"
const UrlError =()=>{
    return(
      <div className={style.err}>
        <h1>Oops!!!</h1> <br /><br />
        <h2>"404 Not Found"</h2> <br /><br />
        <h2>The page you requested could not be found</h2>
      </div>
    )
}
export default UrlError