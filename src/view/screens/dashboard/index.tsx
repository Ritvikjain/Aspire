import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { weeklySpendingLimitSelector } from '../../../redux/selectors/app';
import { handleWeeklyLimitToogleClick } from '../../../redux/thunks/app.thunk';
import Component from './component';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    weeklySpendingLimit: weeklySpendingLimitSelector(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: any,
) => {
  return {
    onClickWeeklySpendingLimit: () => handleWeeklyLimitToogleClick(ownProps.componentId),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
