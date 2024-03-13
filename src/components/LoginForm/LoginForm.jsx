import {
  FormWrapper,
  Heading2,
  LoginLink,
  StyledLoginForm,
} from './LoginForm.styled';

const AuthForm = ({ children, on, handleSubmit, submit }) => {
  const path = on ? `/signup` : '/signin';
  return (
    <FormWrapper>
      <Heading2>{on ? 'Sign In' : 'Sign Up'}</Heading2>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        {children}
      </StyledLoginForm>
      <LoginLink to={path}>{on ? 'Sign Up' : 'Sign In'}</LoginLink>
    </FormWrapper>
  );
};

export default AuthForm;
