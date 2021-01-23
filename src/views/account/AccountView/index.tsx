import React, { FC } from 'react';
import {
	Container,
	Grid,
	makeStyles
} from '@material-ui/core';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import Page from 'components/Page';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		minHeight: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3)
	}
}));

interface Props { }

const Account: FC<Props> = (props) => {
	const classes = useStyles();

	return (
		<Page
			clsName={classes.root}
			title="Account"
		>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={3}
				>
					<Grid
						item
						lg={4}
						md={6}
						xs={12}
					>
						<Profile />
					</Grid>
					<Grid
						item
						lg={8}
						md={6}
						xs={12}
					>
						<ProfileDetails />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
};

export default Account;
