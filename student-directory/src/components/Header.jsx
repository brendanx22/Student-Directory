import CnLogo from '../assets/cn.png'
import './Header.css'

 function Header(){
            return(
                <header className="header">
                    <img src={CnLogo} className="logo" />
                    <button className="profile-button">EC</button>
                </header>
            )
        }
        export default Header;
    