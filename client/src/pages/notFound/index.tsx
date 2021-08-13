import { useTranslation } from 'react-i18next';

import { ReactComponent as NotFoundSvg } from '../../assets/404.svg';

import { HOME } from '../../constants/routes';

import {
	NotFoundContainer,
	NotFoundSvgContainer,
	NotFoundLink,
} from './index.styles';

const NotFound = () => {
	const { t } = useTranslation('notFound');

	return (
		<NotFoundContainer className='not-found'>
			<NotFoundSvgContainer>
				<NotFoundSvg data-testid='icon' />
			</NotFoundSvgContainer>

			<NotFoundLink to={HOME}>{t('goBack')}</NotFoundLink>
		</NotFoundContainer>
	);
};

export default NotFound;
