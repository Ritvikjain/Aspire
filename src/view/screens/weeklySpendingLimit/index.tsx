import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { goBack } from '../../../navigation/navigators';
import { weeklySpendingLimitSelector } from '../../../redux/selectors/app';
import { saveWeeklyLimit } from '../../../redux/thunks/app.thunk';
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
    onBack: () => {
      goBack(ownProps?.componentId);
    },
    onClickSaveLimit: (limit: number) => {
      saveWeeklyLimit(limit, () => goBack(ownProps?.componentId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
