import React, { PropTypes } from 'react';
import {Link} from 'react-router';

// Import Style
import styles from './Navigation.css';

const Navigation = (props, context) => (
	<div className={styles['navigation']}>
		<Link to='/home'>Home</Link>
		<Link to='/about'>About</Link>
		<Link to='/'>Posts</Link>
	</div>
);

Navigation.propTypes = {
};

export default Navigation;
