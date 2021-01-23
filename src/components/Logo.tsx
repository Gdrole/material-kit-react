import React, { FC } from 'react';

interface Props { }

const Logo: FC<Props> = (props) => {
	return (
		<img
			alt="Logo"
			src="/static/logo.svg"
			{...props}
		/>
	);
};

export default Logo;
