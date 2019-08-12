import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png "
							alt="avatar"
							className="avatar-img"
						/>
					</Cell>
					<div className="banner-text">
						<h1>Full Stack Web Developer</h1>

						<hr />
						<p>React | TensorFlow | Computer Vision | Flutter | Express.js</p>
						<div className="social-links">
							{/* LinkedIn  */}
							<a href="https://github.com/OrenLeung" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							{/* Github  */}
							<a href="https://www.linkedin.com/in/oren-leung/" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>
						</div>
					</div>
				</Grid>
			</div>
		);
	}
}

export default Landing;
