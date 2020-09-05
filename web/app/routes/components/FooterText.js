import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved. This is the &quot;{ props.name }&quot; built with { props.desc }. 
		Designed and implemented by{' '}
		<a
			href="https://shandilya.me/"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			https://shandilya.me/
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2020",
    name: "Planck Dashboard",
    desc: "Django, DRF, React & NPM"
};

export { FooterText };
