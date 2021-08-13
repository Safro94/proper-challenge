import { useTranslation } from 'react-i18next';

import error from '../../assets/error.png';

import {
	ErrorContainer,
	GoBackTextContainer,
	Image,
	Text,
} from './index.styles';

interface IErrorProps {
	resetErrorBoundary: () => void;
}

const Error = ({ resetErrorBoundary }: IErrorProps) => {
	const { t } = useTranslation('error');

	return (
		<ErrorContainer role='alert'>
			<Image src={error} alt='Error' />
			<Text>
				{t('text')}
				<GoBackTextContainer onClick={resetErrorBoundary}>
					{t('goBack')}
				</GoBackTextContainer>
			</Text>
		</ErrorContainer>
	);
};

export default Error;
