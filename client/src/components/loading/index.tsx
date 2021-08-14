import { Ring } from 'react-spinners-css';

import { LoadingContainer } from './index.styles';

const Loading = () => {
	return (
		<LoadingContainer>
			<Ring color='#54bf7d' />;
		</LoadingContainer>
	);
};

export default Loading;
