import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Signup from './Components/SignUp/SignUp'

function App() {
	return (
		<div>
			<Route exact path='/' render={() => <Login />} />
			<Route exact path='/signup' render={() => <Signup />} />
		</div>
	);
}

export default App;
