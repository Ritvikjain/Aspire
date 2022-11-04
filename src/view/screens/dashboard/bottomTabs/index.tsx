import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bottomTabsSelector } from '../../../../redux/selectors/app';
import Component from './component';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    bottomTabs: bottomTabsSelector(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: any,
) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
