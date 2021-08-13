import { useTranslation } from 'react-i18next';

import error from '../../assets/error.png';

import {
	ErrorContainer,
	ErrorGoBackTextContainer,
	ErrorImage,
	ErrorText,
} from './index.styles';

interface IErrorProps {
	resetErrorBoundary: () => void;
}

const Error = ({ resetErrorBoundary }: IErrorProps) => {
	const { t } = useTranslation('error');

	return (
		<ErrorContainer role='alert'>
			<ErrorImage src={error} alt='Error' />
			<ErrorText>
				{t('text')}
				<ErrorGoBackTextContainer onClick={resetErrorBoundary}>
					{t('goBack')}
				</ErrorGoBackTextContainer>
			</ErrorText>
		</ErrorContainer>
	);
};

export default Error;
