
import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../../assets/crown.svg';
import './navigation.styles.scss';


const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                 <Logo className='logo'>Logo</Logo>
            </Link>
          <div className='links-container'>
              <div className='nav-link-container'>
                    <Link className='nav-link' to='/shop'>
                      SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-In'>
                      SIGN IN
                    </Link>
              </div>
          </div> 
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;