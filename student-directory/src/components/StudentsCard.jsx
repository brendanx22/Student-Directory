import {UserRound,Mail,MapPin} from 'lucide-react'
import './StudentsCard.css'

function StudentsCard({name,image,username,email,city}){
            

            return(

                <div className="students-card">
                    <img src={image} className="student-image"  />
                    <div className="student-description">
                    <h3>{name}</h3>
                    <p><UserRound className="icon" /> @{username}</p>
                    <p><Mail className="icon" />{email}</p>
                    <p><MapPin className="icon" /> {city}</p>
                    </div>
                </div>
                

                );
        }
        export default StudentsCard;
        