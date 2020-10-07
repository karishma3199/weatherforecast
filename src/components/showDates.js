import React from 'react';
import { Fragment } from 'react';
import './style.css';
import { formatDate, formatTime } from './dateFormats'; 

import WeatherCard from './weatherCard';

const calCelsius=(temp)=>{
	let x = ((temp-32)*5)/9;
	return x;
  }
  

export default class showDates extends React.Component {
	render() {
		const {city, country, results} = this.props;

		return (
			<Fragment>
				<h2 className="cityName itemCenter ">{city}, {country}</h2>
				<div className="row">
				{
					results.map((result, i) => {
						return (
							<div className="col-md-4 col-sm-6 col-xs-4  justify-content-center" key={i}>
								
								   <h6 className=" day itemCenter pt-3 pd-2 ">{formatDate(result.name)}</h6>
									{ 	
										result.weathers.slice(0,1)
											.map((weatherItem) => 
												<WeatherCard key={i}
													date={formatTime(weatherItem.dt_txt.split(' ')[1])}
													icon={weatherItem.weather[0].icon}
													main={weatherItem.weather[0].main}
													description={weatherItem.weather[0].description}
													max={Math.round(calCelsius(weatherItem.main.temp_max))}
													min={Math.round(calCelsius(weatherItem.main.temp_min))} />)
									}

							</div>	
						)
					})
				}
				</div>
			</Fragment>
		);
	}
}