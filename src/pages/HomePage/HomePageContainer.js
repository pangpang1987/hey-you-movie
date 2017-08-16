import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomePage from './HomePageView';
import { actions as bindActions } from './module/reducer';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(bindActions, dispatch)
});

const mapStateToProps = state => ({
  ...state.search
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
