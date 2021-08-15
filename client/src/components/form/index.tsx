import { FC } from 'react';

import Button from '../button';

import { FormContainer, FormInput, FormLabel } from './index.styles';

interface IInputProps {
	type?: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
}

interface ISubmitProps {
	children: React.ReactNode;
	onClick: (e: React.FormEvent<HTMLFormElement>) => void;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled: boolean;
}

const Form: FC & {
	Submit: React.FunctionComponent<ISubmitProps>;
} & { Input: React.FunctionComponent<IInputProps> } & {
	Label: React.FunctionComponent;
} = ({ children, ...rest }) => {
	return (
		<FormContainer method='POST' {...rest}>
			{children}
		</FormContainer>
	);
};

const Label = ({ ...rest }) => {
	return <FormLabel {...rest} />;
};

const Input = ({ type = 'text', ...rest }: IInputProps) => {
	return <FormInput type={type} {...rest} />;
};

const Submit = ({
	children,
	onClick,
	type = 'submit',
	...rest
}: ISubmitProps) => {
	return (
		<Button onClick={onClick} type={type} {...rest}>
			{children}
		</Button>
	);
};

Form.Label = Label;
Form.Input = Input;
Form.Submit = Submit;

export default Form;
