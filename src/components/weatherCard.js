import React from 'react';
import './style.css'
export default class weatherCard extends React.Component {
	render() {
		return (
			<div className="itemCenter dataBox ">
				<div className="date">{this.props.date}</div> <br/>
				<img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} className="weatherImg"alt={this.props.main}/>
				<div className="description">{this.props.description}</div>
				
				<div className="dataItem ">Max: {this.props.max}&deg;C</div>
				<div className="dataItem ">Min: {this.props.min}&deg;C </div>
				
			</div>
		);
	}
}	