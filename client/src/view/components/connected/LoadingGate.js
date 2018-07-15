import { connect } from 'react-redux';
import { LoadingGate } from 'spent/view/components/utility';
import { selectors } from 'spent/state/modules/auth';

const props = state => ({
  isLoading: selectors.loading(state),
});

const ConnectedLoadingGate = connect(props)(LoadingGate);

export default ConnectedLoadingGate;
