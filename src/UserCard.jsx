import style from "./design.module.css"
const UserCard = ({filterData}) => {
    console.log(filterData);
     return (
    <div >
      {
        filterData.map((emp)=>{
            return(
                <div className={style.userCard} key={emp.id}>
                    
                    <p className={style.nameColor}>  EMP ID :{emp.id}</p>
                    <p className={style.nameColor}>   Name   :{emp.maidenName}</p>
                    <p className={style.orangeText}>  DOB    :{emp.birthDate}</p>
                    <p className={style.greenText}>  Role   :{emp.company.department}</p>
                </div> 
            )
        })
      }
    </div>
  )
}

export default UserCard
