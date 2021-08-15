import { ButtonTypes } from '../../types';

import { ButtonBase } from './index.styles';

interface IButtonProps {
	children: React.ReactNode;
	onClick: (e: any) => void;
	variant?: ButtonTypes;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
	onClick,
	children,
	variant = ButtonTypes.Primary,
	type = 'button',
	...rest
}: IButtonProps) => {
	const handleClick = () => {
		console.log('entra aca');
	};

	return (
		<ButtonBase
			onClick={handleClick}
			variant={variant}
			type={type}
			disabled
			{...rest}
		>
			{children}
		</ButtonBase>
	);
};

export default Button;
