import React, { useState } from 'react';
import {
	Box,
	Container,
	makeStyles
} from '@material-ui/core';

import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import Page from 'components/Page';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		minHeight: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3)
	}
}));

const CustomerListView = () => {
	const classes = useStyles();
	const [customers] = useState(data);

	return (
		<Page
			clsName={classes.root}
			title="Customers"
		>
			<Container maxWidth={false}>
				<Toolbar />
				<Box mt={3}>
					<Results customers={customers} />
				</Box>
			</Container>
		</Page>
	);
};

export default CustomerListView;
