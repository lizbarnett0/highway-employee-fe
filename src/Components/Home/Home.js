import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../../imgs/HighwayLogoNoText.png';
import LoanIcon from '../../imgs/icons/loan-summary-icon.png';
import RepaymentIcon from '../../imgs/icons/repayment-icon.png';
import TransactionIcon from '../../imgs/icons/transaction-history-icon.png';
import SettingsIcon from '../../imgs/icons/settings-icon.png';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='nav-container'>
				<div>
					<img src={Logo} /> COMPANY NAME
				</div>
				<div className='nav-title'><h3>Welcome User!</h3></div>
				<div className='nav-links-container'>
					<div className='nav-link'>
						<Link to={'/loans'}>
							<p>
								<img src={LoanIcon} /> Loan Summary and Entry
							</p>
						</Link>
					</div>
					<div className='nav-link'>
						<Link to={'/repayment'}>
							<p>
								<img src={RepaymentIcon} /> Repayment Planning
							</p>
						</Link>
					</div>
					<div className='nav-link'>
						<Link to={'/transactions'}>
							<p>
								<img src={TransactionIcon} /> Transaction History
							</p>
						</Link>
					</div>
					<div className='nav-link'>
						<Link to={'/account'}>
							<p>
								<img src={SettingsIcon} /> Account Settings
							</p>
						</Link>
					</div>
				</div>
			</div>
			<div className='main-container'>Main content</div>
		</div>
	);
};

export default Home;
