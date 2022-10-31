import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import './styles/Destinos.css' 

function Destinos(){ 
const [countryRequire, setCountryRequire] = useState()
const [cityRequire, setCityRequire] = useState([])
const [countrys, setCountrys] = useState([])
const [citys, setCitys] = useState([])

useEffect(()=>{
        
    fetch("https://amazon-api.sellead.com/country",{method: 'get'}).then(res => {
        return (res.json())
    }).then(data => {const tempArray = []; 
                     data.forEach((element)=>{
                        tempArray.push({label:`${element.name}`, value: `${element.code}`})
                        setCountrys(tempArray)
                        // console.log(tempArray)
                     })
    })

},[])
useEffect(()=>{
        
fetch("https://amazon-api.sellead.com/city",{method: 'get'}).then(res => {
    return (res.json())
}).then(data => {const cityArray = []
                 data.forEach((element)=>{
                      cityArray.push({label:`${element.name}`, value: `${element.code}`})   
                      setCitys(cityArray)
                 })})

},[])

  

    return(
        <div id="Destino">
            <h2 >Destinos de Interesse</h2>
            <Select onChange={()=>{setCountryRequire("true")}} className="inputSelect" isMulti options={countrys}></Select>
            {<input   tabIndex={-1}
              autoComplete="off"
              style={{ opacity: 0, height: 0 }}
              value={countryRequire}
              required
              ></input>}
            <Select onChange={()=>{setCityRequire("true")}} required className="inputSelect" isMulti options={citys}></Select>
            {<input   tabIndex={-1}
              autoComplete="off"
              style={{ opacity: 0, height: 0 }}
              defaultValue = {cityRequire}
              required
              ></input>}
        </div>
        
    )
    
}

export default Destinos;