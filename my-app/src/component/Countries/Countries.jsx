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
        if(countr.includes(country)){
            const newarr = [...countr]
            setCountry(newarr)
        }
        else{
            const newarr = [...countr,country]
            setCountry(newarr)
        }
           
    }
    
    

    return (
        <>
        <p>hello from country{countrys.length}</p>
        <div className="visite">
            <h5>Visited country {countr.length}</h5>
            <ul>
                {
                    countr.map(coun=><li key={countr.ccn2}>{coun.name.common}</li>)
                }
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