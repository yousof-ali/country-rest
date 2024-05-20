import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    const [countrys,setCountrys] =useState([]);
    const [countr,setCountry]=useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>setCountrys(data))
    }
        ,[])

    
    const haldlevisited = country =>{
        const newarr = [...countr, country]
        setCountry(newarr)
           
    }
    
    console.log(countr)

    return (
        <>
        <p>hello from country{countrys.length}</p>
        <div>
            <h5>Visited country {countr.length}</h5>
            <ul>
                <li>{}</li>
            </ul>
        </div>
        <div className="country-container">
            {
                countrys.map(country => <Country county={country} handleClk={haldlevisited} key={country.ccn3}></Country>)
            }   
        </div>
        </>
    );
};

export default Countries;