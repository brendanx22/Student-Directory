import {useState} from 'react'
import './CityDropdownMenu.css'


 function CityDropdownMenu({cities,selectedCity,setSelectedCity,isOnline,error}){
            const[isOpen,setIsOpen]=useState(false);
            return(
                <div className="custom-dropdown">
                    <button className="dropdown-button"
                     disabled={!isOnline  || error}
                     onClick={()=>setIsOpen(!isOpen)}
                    >
                        {selectedCity}
                        
                    </button>
                    {isOpen &&(
                        <div className="dropdown-options">
                            <div 
                               className="dropdown-option"
                                onClick={()=>{
                                    setSelectedCity('All Cities');
                                    setIsOpen(false);
                                }}
                            >
                            All Cities 
                            </div>
                            {cities.map((city) => (
                        <div
                            className="dropdown-option"
                            key={city}
                            onClick={() => {
                                setSelectedCity(city);
                                setIsOpen(false);
                            }}
                        >
                            {city}
                        </div>
                    ))}
                        </div>
                    )}
                </div>
            );
        }
        export default CityDropdownMenu