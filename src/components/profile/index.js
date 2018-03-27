import { h, Component } from 'preact';
import style from './style.less';

export default class Profile extends Component {
	state = {
		count: 0
	};

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count + 1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<div class={style.profileContent}>
					<p class={style.profileTextContent}>This is the user profile for a type {user}.</p>
					<p class={style.profileTextContent}>Current time: {time}</p>
					<p class={style.profileTextContent}>Profile route mounted {count} times.</p>
				</div>
			</div>
		);
	}
}
