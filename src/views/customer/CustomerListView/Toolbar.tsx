import React, { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	InputAdornment,
	SvgIcon,
	makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
	root: {},
	importButton: {
		marginRight: theme.spacing(1)
	},
	exportButton: {
		marginRight: theme.spacing(1)
	}
}));

interface Props {
	clsName?: string;
}

const Toolbar: FC<Props> = (props) => {
	const classes = useStyles();

	const { clsName } = props;

	return (
		<div
			className={clsx(classes.root, clsName)}
			{...props}
		>
			<Box
				display="flex"
				justifyContent="flex-end"
			>
				<Button className={classes.importButton}>
					Import
        </Button>
				<Button className={classes.exportButton}>
					Export
        </Button>
				<Button
					color="primary"
					variant="contained"
				>
					Add customer
        </Button>
			</Box>
			<Box mt={3}>
				<Card>
					<CardContent>
						<Box maxWidth={500}>
							<TextField
								fullWidth
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SvgIcon
												fontSize="small"
												color="action"
											>
												<SearchIcon />
											</SvgIcon>
										</InputAdornment>
									)
								}}
								placeholder="Search customer"
								variant="outlined"
							/>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</div>
	);
};

export default Toolbar;
