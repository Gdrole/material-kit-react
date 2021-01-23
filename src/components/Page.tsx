import React, { FC, forwardRef, useRef } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
	title: string;
	clsName: string;
}

const Page: FC<Props> = (props) => {

	const ref = useRef<any>();

	const { title, children } = props;

	return (
		<div
			ref={ref}
			{...props}
		>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{children}
		</div>
	);
};

export default Page;
