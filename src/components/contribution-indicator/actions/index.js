export const CONTIRBUTION_SUMMARY = {
	start: 'fetch_start/contribution_summary',
	end: 'fetch_end/contribution_summary',
	success: 'fetch_success/contribution_summary',
	failed: 'fetch_failed/contribution_summary'
};

export const contributionSummaryFetchStart = () => ({
	type: CONTIRBUTION_SUMMARY.start
});

export const contributionSummaryFetchEnd = () => ({
	type: CONTIRBUTION_SUMMARY.end
});

export const contributionSummaryFetchSuccess = (data) => (
	{
		type: CONTIRBUTION_SUMMARY.success,
		data
	});

export const contributionSummaryFetchFailed = (error) => ({
	type: CONTIRBUTION_SUMMARY.failed,
	error
});

export const fetchContributionSummaryData = (data) => {
	return (dispatch) => {
		dispatch(contributionSummaryFetchStart());
		if (data !== {}) {
			dispatch(contributionSummaryFetchEnd());
			dispatch(contributionSummaryFetchSuccess(data));
		} else {
			dispatch(contributionSummaryFetchEnd());
			dispatch(contributionSummaryFetchFailed());
		}

	};
};