import React from 'react';
import { useHistory } from 'react-router-dom';
import t from 'locale/he_IL';
import PropTypes from 'prop-types';
import { CommentSelectors, PlanSelectors } from 'redux/selectors';
import { SavePlan, SharePlan, Title, AddNewComment } from './components';
import * as SC from './style';
import { Badge } from '@material-ui/core';
import { tabIsActive } from 'utils';

const Header = ({ isFavPlan, subscriptionHandler, openNewCommentView, match }) => {
	const history = useHistory();
	const { planData: { name, countyName } } = PlanSelectors();
	const { commentsCount } = CommentSelectors();
	const pathData  = {
		pathName: history.location.pathname,
		planId: match.params.id
	};

	return (
		<SC.Header>
			<SC.TitlesAndTabs>
				<Title countyName={countyName} planName={name}/>
				<SC.AppBar position="static">
					<div>
						<SC.Tab className={tabIsActive('summary',pathData) ? 'active' : ''} onClick={() => history.push(match.url)}>{t.summary}</SC.Tab>
						<SC.Tab className={tabIsActive('comments',pathData) ? 'active' : ''} onClick={() => history.push(`${match.url}/comments`)}>
							<Badge badgeContent={commentsCount} color="primary">
								{t.opinion}
							</Badge>
						</SC.Tab>
						<SC.Tab className={tabIsActive('info',pathData) ? 'active' : ''} onClick={() => history.push(`${match.url}/info`)}>{t.planningInformation}</SC.Tab>
					</div>
				</SC.AppBar>
			</SC.TitlesAndTabs>
			<SC.Buttons>
				<SharePlan />
				<SavePlan isFavPlan={isFavPlan} subscriptionHandler={subscriptionHandler}/>
				<AddNewComment openNewCommentView={openNewCommentView}/>
			</SC.Buttons>
		</SC.Header>
	);
};

Header.propTypes = {
	subscriptionHandler: PropTypes.func.isRequired,
	openNewCommentView: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	isFavPlan: PropTypes.bool.isRequired,
};

export default Header;