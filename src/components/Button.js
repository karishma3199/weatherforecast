import React from 'react';

export default class Button extends React.Component {
	render() {
		const theButton = (this.props.isDisabled) ? 
			<button className="disabled btn  searchButton " disabled>
		{this.props.btnCopy}
			</button> 
			: 
			<div className="itemCenter">
			<button  classNamr=" btn  searchButton" onClick={this.props.clickHandler}>
				{this.props.btnCopy}
			</button>
			</div>	

		return (
			theButton
		);
	}
}