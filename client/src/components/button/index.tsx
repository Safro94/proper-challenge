import { ButtonTypes } from '../../types';

import { ButtonBase } from './index.styles';

interface IButtonProps {
	children: React.ReactNode;
	onClick: (e: any) => void;
	variant?: ButtonTypes;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
}

const Button = ({
	onClick,
	children,
	variant = ButtonTypes.Primary,
	type = 'button',
	disabled = false,
	...rest
}: IButtonProps) => {
	return (
		<ButtonBase
			onClick={onClick}
			variant={variant}
			type={type}
			disabled={disabled}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
};

export default Button;
