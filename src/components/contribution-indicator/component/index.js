import { h, Component } from 'preact';
import style from './style.less';
import fundModalityMockData from '../../../assets/json/fundModalityMockData';

export default class ContributionIndicator extends Component {



	componentWillMount() {
		this.props.fetchContributionSummaryData(fundModalityMockData);
	}
	render() {
		let isNonEmpty = this.props.contributionSummary.data.length > 0,
			data = isNonEmpty ? this.props.contributionSummary.data : [];

		return (
			<div>{
				data.map((el, index) => {
					return (
						<div class={style.contributionIndicator}>
							<div>{el.ID}</div>
							<div>{el.Output}</div>
							<div>{el.Theme}</div>
							<div>{el.Description}</div>
							<div>{el.Link}</div>
						</div>
					);})
			}</div>
		);
	}
}

