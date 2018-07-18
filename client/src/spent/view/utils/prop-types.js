import PropTypes from 'prop-types';
import { themeColors } from './sass/colors';

const SpentPropTypes = {
  themeColors: PropTypes.oneOf([...themeColors, false]),
};

export default SpentPropTypes;
