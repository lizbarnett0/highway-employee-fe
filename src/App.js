import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Signup from './Components/SignUp/SignUp'
import Home from './Components/Home/Home'

function App() {
	return (
		<div>
			<Route exact path='/' render={() => <Login />} />
			<Route exact path='/signup' render={() => <Signup />} />
			<Route exact path='/home' render={() => <Home />} />
		</div>
	);
}

export default App;
