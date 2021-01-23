import React, { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	Button,
	ListItem,
	makeStyles
} from '@material-ui/core';
import { Icon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
	item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0
	},
	button: {
		color: theme.palette.text.secondary,
		fontWeight: theme.typography.fontWeightMedium,
		justifyContent: 'flex-start',
		letterSpacing: 0,
		padding: '10px 8px',
		textTransform: 'none',
		width: '100%'
	},
	icon: {
		marginRight: theme.spacing(1)
	},
	title: {
		marginRight: 'auto'
	},
	active: {
		color: theme.palette.primary.main,
		'& $title': {
			fontWeight: theme.typography.fontWeightMedium
		},
		'& $icon': {
			color: theme.palette.primary.main
		}
	}
}));

interface Props {
	clsName?: string;
	href: string;
	Icon: Icon;
	title: string;
}

const NavItem: FC<Props> = (props) => {
	const classes = useStyles();

	const { clsName, href, Icon, title } = props;

	return (
		<ListItem
			className={clsx(classes.item, clsName)}
			disableGutters
			{...props}
		>
			<Button
				activeClassName={classes.active}
				className={classes.button}
				component={RouterLink}
				to={href}
			>
				{Icon && (
					<Icon
						className={classes.icon}
						size="20"
					/>
				)}
				<span className={classes.title}>
					{title}
				</span>
			</Button>
		</ListItem>
	);
};

export default NavItem;
