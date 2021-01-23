import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	AppBar,
	Toolbar,
	makeStyles
} from '@material-ui/core';
import Logo from 'components/Logo';


const useStyles = makeStyles(({
	root: {},
	toolbar: {
		height: 64
	}
}));

interface Props {
	clsName?: string;
}

const TopBar: FC<Props> = (props) => {
	const classes = useStyles();

	const { clsName } = props;

	return (
		<AppBar
			className={clsx(classes.root, clsName)}
			elevation={0}
			{...props}
		>
			<Toolbar className={classes.toolbar}>
				<RouterLink to="/">
					<Logo />
				</RouterLink>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
