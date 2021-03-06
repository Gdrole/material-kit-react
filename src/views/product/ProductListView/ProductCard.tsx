import React, { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
	makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column'
	},
	statsItem: {
		alignItems: 'center',
		display: 'flex'
	},
	statsIcon: {
		marginRight: theme.spacing(1)
	}
}));

interface IProduct {
	media: string;
	title: string;
	description: string;
	totalDownloads: string;
}

interface Props {
	clsName: string;
	product: IProduct;
}

const ProductCard: FC<Props> = (props) => {
	const classes = useStyles();

	const { product, clsName } = props;

	return (
		<Card
			className={clsx(classes.root, clsName)}
			{...props}
		>
			<CardContent>
				<Box
					display="flex"
					justifyContent="center"
					mb={3}
				>
					<Avatar
						alt="Product"
						src={product.media}
						variant="square"
					/>
				</Box>
				<Typography
					align="center"
					color="textPrimary"
					gutterBottom
					variant="h4"
				>
					{product.title}
				</Typography>
				<Typography
					align="center"
					color="textPrimary"
					variant="body1"
				>
					{product.description}
				</Typography>
			</CardContent>
			<Box flexGrow={1} />
			<Divider />
			<Box p={2}>
				<Grid
					container
					justify="space-between"
					spacing={2}
				>
					<Grid
						className={classes.statsItem}
						item
					>
						<AccessTimeIcon
							className={classes.statsIcon}
							color="action"
						/>
						<Typography
							color="textSecondary"
							display="inline"
							variant="body2"
						>
							Updated 2hr ago
            </Typography>
					</Grid>
					<Grid
						className={classes.statsItem}
						item
					>
						<GetAppIcon
							className={classes.statsIcon}
							color="action"
						/>
						<Typography
							color="textSecondary"
							display="inline"
							variant="body2"
						>
							{product.totalDownloads}
							{' '}
              Downloads
            </Typography>
					</Grid>
				</Grid>
			</Box>
		</Card>
	);
};

// ProductCard.propTypes = {
// 	className: PropTypes.string
// };

export default ProductCard;
