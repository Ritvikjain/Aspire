import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { cardDataSelector, cardLimitsSelector, weeklySpendingLimitSelector } from '../../../redux/selectors/app';
import { handleWeeklyLimitToogleClick, loadInitialData } from '../../../redux/thunks/app.thunk';
import Component from './component';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    weeklySpendingLimit: weeklySpendingLimitSelector(state),
    cardData: cardDataSelector(state),
    cardLimits: cardLimitsSelector(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: any,
) => {
  return {
    loadInitialData: loadInitialData,
    onClickWeeklySpendingLimit: () => handleWeeklyLimitToogleClick(ownProps.componentId),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
