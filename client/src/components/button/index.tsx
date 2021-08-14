import { ButtonTypes } from '../../types';

import { ButtonBase } from './index.styles';

interface IButtonProps {
	text: string;
	onClick: () => void;
	variant?: ButtonTypes;
}

const Button = ({
	onClick,
	text,
	variant = ButtonTypes.Primary,
}: IButtonProps) => {
	return (
		<ButtonBase onClick={onClick} variant={variant}>
			{text}
		</ButtonBase>
	);
};

export default Button;
