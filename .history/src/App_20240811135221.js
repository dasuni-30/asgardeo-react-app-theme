import './App.css';
import { useAuthContext } from '@asgardeo/auth-react';

function App() {
  const { signIn, signOut, state } = useAuthContext();

  return (
    <div className="App">
      <header className="App-header">
      {
          state.isAuthenticated
            ? (
              <div>
                <ul>
                  <li>{state.username}</li>
                </ul>

                <button onClick={() => signOut()}>Logout</button>
              </div>
            )
            : <button onClick={() => signIn()}>Login</button>
        }
      </header>
    </div>
  );
}

export default App;
