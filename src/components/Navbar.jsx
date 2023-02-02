import {useNavigate} from 'react-router-dom';
import logo from '../images/curriculum.png'
const Nav = () => {
    const navigate = useNavigate()


    return (
        <div className="navbar-container"> 
          <img
            class="logo"
            alt="Erik Widell´s logga"
            src={logo}
          />
        <div type="button" class="navigate" onClick={() => navigate('about')}> About Me </div>
        <div type="button" class="navigate" onClick={() => navigate('projects')}> Projects</div>
        <div type="button" class="navigate" onClick={() => navigate('contacts')}>contacts </div>

      </div>
    )
}

export default Nav