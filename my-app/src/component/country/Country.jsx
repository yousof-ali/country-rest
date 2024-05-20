import { useState } from 'react';
import './Country.css'

const Country = ({county,handleClk}) => {
    const {name,flags}=county

    const [visite,setVisiste]=useState(false)

    const btnClickd=()=>{
        setVisiste(!visite);

    }
    

    return (
        <div className={`box ${visite && 'visited'}`}>
            <p>Name: {name.common} </p>
            <img src={flags.png} alt="" />
            <button onClick={()=> handleClk(county)}>add to visite</button>
            <button className={`${visite && 'btn'}`} onClick={btnClickd}>{visite?"visited":"go"}</button>
            {visite?"visited":"not visited"}
        </div>
    );
};

export default Country;