import PropTypes from 'prop-types';
import { themeColors } from './sass/colors';

const KitPropTypes = {
  themeColors: PropTypes.oneOf([...themeColors, false]),
};

export default KitPropTypes;
