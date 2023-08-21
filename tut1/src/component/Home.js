import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [allCompanies,setAllCompanies] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8080/company/showAllCompanies",{headers:{
            'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
        }}).then((res)=> {
            console.log(res)
            setAllCompanies(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])
    return (
        <div>
           {allCompanies.map((company) => {
            return(
                <div>
                   <li key={company.id}> {company.company_name} </li>
                </div>
            )
           })}
        </div>
    )
}

export default Home