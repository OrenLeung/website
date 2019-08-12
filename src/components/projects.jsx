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
							Cats-Dogs-Classifier
						</CardTitle>
						<CardText>
							Designed a multi-layer convolutional neural network in Python to classify images of dogs and
							cats using TensorFlow API. The model was trained on 20,000 images of dogs and cats and
							achieved a 87.6% validation accuracy.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/OrenLeung/FingerCount" target="_blank">
								Github
							</Button>
						</CardActions>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fffff',
								height: '176px',
								background:
									'url(https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/012018/untitled-1_6.jpg?T.5SY36tBoYSp9Rx_.gtWv0m_FP8EAKI&itok=2oolyWAf) center / cover'
							}}
						>
							TTC Predictions SMS
						</CardTitle>
						<CardText>
							Twilio SMS application that allows users to get predictions from when the bus will arrive.
							Application build with Twilio, Node.js, and Express.js.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/OrenLeung/TTCTwilio" target="_blank">
								Github
							</Button>
						</CardActions>
					</Card>
				</div>
			);
		} else {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fffff',
								height: '176px',
								background:
									'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'
							}}
						>
							Personal Portfolio
						</CardTitle>
						<CardText>
							Designed, and Developed a personal portfolio using React.js, React Router, and React-mdl.
						</CardText>
						<CardActions border>
							<Button colored href="https://github.com/OrenLeung/website" target="_blank">
								Github
							</Button>
						</CardActions>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fffff',
								height: '176px',
								background:
									'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'
							}}
						>
							React New Years Countdown
						</CardTitle>
						<CardText>Developed a New Years Countdown to demostrate state management in React.</CardText>
						<CardActions border>
							<Button colored href="https://github.com/OrenLeung/ReactNewYears" target="_blank">
								Github
							</Button>
							<Button colored href="https://orenleung.github.io/ReactNewYears/" target="_blank">
								Live Demo
							</Button>
						</CardActions>
					</Card>
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
