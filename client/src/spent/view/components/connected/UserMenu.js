import { connect } from 'react-redux';
import { actions, selectors } from 'spent/state/modules/auth';
import PureUserMenu from 'spent/view/components/pure/UserMenu';

const props = () => state => ({ imageUrl: selectors.userPhoto(state) });

const dispatch = {
  onClick: actions.unauthenticate,
};

const UserMenu = connect(props, dispatch)(PureUserMenu);

export default UserMenu;
