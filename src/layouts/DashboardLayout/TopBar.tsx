import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	AppBar,
	Badge,
	Box,
	Hidden,
	IconButton,
	Toolbar,
	makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'components/Logo';

const useStyles = makeStyles(() => ({
	root: {},
	avatar: {
		width: 60,
		height: 60
	}
}));

interface Props {
	clsName?: string;
	onMobileNavOpen: () => void;
}

const TopBar: FC<Props> = (props) => {
	const classes = useStyles();
	const [notifications] = useState([]);

	const { clsName, onMobileNavOpen } = props;

	return (
		<AppBar
			className={clsx(classes.root, clsName)}
			elevation={0}
			{...props}
		>
			<Toolbar>
				<RouterLink to="/">
					<Logo />
				</RouterLink>
				<Box flexGrow={1} />
				<Hidden mdDown>
					<IconButton color="inherit">
						<Badge
							badgeContent={notifications.length}
							color="primary"
							variant="dot"
						>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit">
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton
						color="inherit"
						onClick={onMobileNavOpen}
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
