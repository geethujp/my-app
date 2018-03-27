import { connect } from 'preact-redux';
import { fetchContributionSummaryData} from './actions';
import ContributionIndicator from './component';

const mapStateToProps = (state) => {
	const contributionSummary = state.contributionSummary;
	return {
		contributionSummary
	};

};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchContributionSummaryData: (data) => dispatch(fetchContributionSummaryData(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContributionIndicator);