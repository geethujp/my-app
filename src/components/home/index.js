import { h } from 'preact';
import style from './style.less';
import ContributionIndicator from '../contribution-indicator/index';

export default () => {
	return (
		<div class={style.home}>
			<h1>Projects</h1>
			<ContributionIndicator/>
		</div>
	);
};
