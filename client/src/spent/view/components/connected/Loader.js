import { connect } from 'react-redux';
import focal from 'focal';
import Loader from 'spent/view/components/pure/Loader';

const props = () => ({
  message: focal.get(),
});

const ConnectedLoader = connect(props)(Loader);

export default ConnectedLoader;
