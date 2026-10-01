import SearchInput from './SearchInput.jsx'
import CityDropdownMenu from './CityDropdownMenu.jsx'
import './Body1.css'

 function Body1({searchText,setSearchText,cities,selectedCity,setSelectedCity,isOnline,error}){
            return(
                <div className="body1">
                    <h2>Student Directory</h2>
                    <p>Browse and Search students in your school.</p>
                    <div className="filter-areas">
                    <SearchInput
                    searchText={searchText}
                    setSearchText={setSearchText}
                    isOnline={isOnline}
                    error={error}
                    />
                    <CityDropdownMenu 
                    cities={cities}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    isOnline={isOnline}
                    error={error}
                    />
                    </div>
                </div>
            )
        }
        export default Body1