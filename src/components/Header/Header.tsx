import { Link } from '../Link/Link';
import './Header.pcss';

const isLoggedIn = false;

export const Header = (): JSX.Element => (
  <header className='header'>

    <div className='header-nav'>
      <nav>
        <ul className='nav-list'>

          {!isLoggedIn && (
            <>
              <li>
                <Link
                  href='/'
                  text='Home'
                />
              </li>

              <li>
                <Link
                  href='/signin'
                  text='Sign In'
                />
              </li>

              <li>
                <Link
                  href='/signup'
                  text='Sign Up'
                />
              </li>
            </>
          )}

          {isLoggedIn && (
            <>
              <li>
                <Link
                  href='/main'
                  text='Boards'
                />

              </li>

              <li>
                <Link
                  href='/profile'
                  text='Profile'
                />
              </li>

              <li>
                <Link
                  href='/signout'
                  text='Sign Out'
                />
              </li>
            </>

          )}

        </ul>
      </nav>
    </div>

  </header>

);
