import PropTypes from 'prop-types';
import {Wrapper} from './Layout.styled'
export const Layout = ({ children }) =>  <Wrapper >{children}</Wrapper>;


Layout.propTypes = {
  children: PropTypes.array.isRequired,
  }
