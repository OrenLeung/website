import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Finger Count Project */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fffff',
								height: '176px',
								background:
									'url(https://yt3.ggpht.com/a/AGF-l7_FycTwXc9yWHX21yMHs9tkuHtt1033X5HowA=s900-c-k-c0xffffffff-no-rj-mo) center / cover'
							}}
						>
							Finger Counter
						</CardTitle>
						<CardText>
							Using Python, Keras, TensorFlow, and OpenCV, this program counts how many finger are being
							held up, via a convolutional neural network (CNN).
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/OrenLeung/FingerCount" target="_blank">
								Github
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fffff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Dog's and Cat's Project */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fffff',
								height: '176px',
								background:
									'url(https://yt3.ggpht.com/a/AGF-l7_FycTwXc9yWHX21yMHs9tkuHtt1033X5HowA=s900-c-k-c0xffffffff-no-rj-mo) center / cover'
							}}
						>
							Finger Counter
						</CardTitle>
						<CardText>
							Using Python, Keras, TensorFlow, and OpenCV, this program counts how many finger are being
							held up, via a convolutional neural network (CNN).
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
						</CardActions>
						<CardMenu style={{ color: '#fffff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is Node.js</h1>
				</div>
			);
		} else {
			return (
				<div>
					<h1>This is React</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Deep Learning</Tab>
					<Tab>Node.js</Tab>
					<Tab>React</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
