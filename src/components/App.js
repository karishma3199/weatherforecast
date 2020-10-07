import React from 'react';
import { Fragment } from 'react';
import './style.css';
import Search from './Search'

export default class App extends React.Component {
	render() {
		return (
			<div className="cover">
			<Fragment>
		    		<div className="appHeading itemCenter">5-Days Weather Forecast</div>
				<Search />
				     
			</Fragment>
		
			</div>
		);
	}
}