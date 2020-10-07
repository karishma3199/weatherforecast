import React from 'react';
// import { Fragment } from 'react';

import Button from './Button';
import DatesContainer from './showDates';

export default class outcome extends React.Component {
	view = () => {
		const {showWhat, city, country, results} = this.props;

		console.log('results.prop', this.props);

		let resultsView; 
		switch(showWhat) {
			case "notFound":
				resultsView = <h2> City Not found</h2>;
				break;
			case "results":
				resultsView = <DatesContainer city={city} country={country} results={results}/>;
				break;
			default:
				break;
		}

		return resultsView;
	}

	render() {
		return (
			<div className=" ">
				{
					(this.props.showWhat) ? 
						<Button  className="itemCenter" clickHandler={this.props.handleClear} 
							btnCopy="Get another weather" />
						: ""
				}

				{this.view()}

			
			</div>
		);
	}
}