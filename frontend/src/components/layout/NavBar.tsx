import { useHistory } from 'react-router';

import useAuth from '../../hooks/useAuth';
import authService from '../../services/AuthService';
import NavBarItem from './NavBarItem';



export default function NavBar() {
  const history = useHistory();

  const { authenticatedUser, setAuthenticatedUser } = useAuth();

  const handleLogout = async () => {
    await authService.logout();
    setAuthenticatedUser(null);
    history.push('/login');
  };

  return (
    <div>
      <nav  className='NavBar'>
        <NavBarItem to="/">
          <h2 className='NavBarItem'>Contents</h2> 
        </NavBarItem>
        <NavBarItem to="/profile">
          <h2 className='NavBarItem'>Profile</h2> 
        </NavBarItem>
        {authenticatedUser.role === 'admin' ? (
          <NavBarItem to="/users">
            <h2 className='NavBarItem'>Users</h2> 
          </NavBarItem>
        ) : null}
        <button className='NavBarItem' onClick={handleLogout} >
          <h2>LogOut</h2>
        </button>
      </nav>

    </div>
  );
}
