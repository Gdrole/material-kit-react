import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	TextField,
	makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
	root: {}
}));

interface Props {

}

const Password: FC<Props> = (props) => {
	const classes = useStyles();

	const [values, setValues] = useState({
		password: '',
		confirm: ''
	});

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	return (
		<form
			className={clsx(classes.root)}
			{...props}
		>
			<Card>
				<CardHeader
					subheader="Update password"
					title="Password"
				/>
				<Divider />
				<CardContent>
					<TextField
						fullWidth
						label="Password"
						margin="normal"
						name="password"
						onChange={handleChange}
						type="password"
						value={values.password}
						variant="outlined"
					/>
					<TextField
						fullWidth
						label="Confirm password"
						margin="normal"
						name="confirm"
						onChange={handleChange}
						type="password"
						value={values.confirm}
						variant="outlined"
					/>
				</CardContent>
				<Divider />
				<Box
					display="flex"
					justifyContent="flex-end"
					p={2}
				>
					<Button
						color="primary"
						variant="contained"
					>
						Update
          </Button>
				</Box>
			</Card>
		</form>
	);
};

Password.propTypes = {
	className: PropTypes.string
};

export default Password;
