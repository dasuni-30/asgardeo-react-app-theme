import GITHUB_ICON from './images/github.png';
import REACT_LOGO from './images/react-asgardeo-header.png';
import { useAuthContext } from '@asgardeo/auth-react';
import './styles/Global.css';

/**
 * Home page for the Sample.
 *
 * @param props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
function App() {

  const { state, signIn, signOut } = useAuthContext();

  const signUpURL = `${process.env.REACT_APP_SIGN_UP_URL}${process.env.REACT_APP_CLIENT_ID} &sp=${process.env.REACT_APP_APPLICATION_NAME} &redirect_url=${process.env.REACT_APP_CLIENT_BASE_URL}`;

  return (
    <>
      {
        state?.isAuthenticated
        ? (
          <>
            <header className='App-header-section'>
              <div className="logo-container">
                <img alt='react-logo' src={ REACT_LOGO } className='header-logo-image logo'/>
                </div>
                <h1>Hello {state?.displayName ?? state?.username}!</h1>
                <h4>Welcome to the React + Asgardeo sample application</h4>
                <p className='p-description justified-text max-width'>This application adds Asgardeo login to a React sample application.</p>
                <div className='button-container'>
                <button className='btn' onClick={() => signOut()}>Sign Out</button>
              </div>
            </header>
          </>
        ) : (
          <header className='App-header-section'>
            <div>
              <div className="container">
                <div className="logo-container">
                  <img alt='react-logo' src={ REACT_LOGO } className='header-logo-image logo'/>
              </div>
            </div>
              <div className='logo-container'>
                <h1>Asgardeo + React Application
                </h1>
              </div>
              <p className='p-description justified-text'>
                Integrate Asgardeo Authentication to your React sample application.
              </p>
              <div className='button-container'>
                <button className='btn' onClick={() => signIn()}>Sign In</button>
                <a href={signUpURL}>
                  <button className='btn-outline large-button'>Create an account</button>
                </a>
              </div>
              <div className="container-column">
                <a href='https://github.com/dasuni-30/asgardeo-react-sample-app'>
                    <img alt='react-logo' src={ GITHUB_ICON } className='github-logo-image-small'/>
                </a>
                <a href='https://github.com/dasuni-30/asgardeo-react-app-theme'>
                  Explore the source code
                </a>
            </div>
            </div>
          </header>
        )
      }
    </>
  );
};

export default App;