import {
  FormWrapper,
  Heading2,
  LoginLink,
  StyledLoginForm,
} from './LoginForm.styled';

const AuthForm = ({ children, on, handleSubmit, submit, errors }) => {
  const path = on ? `/signup` : '/signin';
  return (
    <FormWrapper>
      <Heading2>{on ? 'Sign In' : 'Sign Up'}</Heading2>
      <StyledLoginForm
        onSubmit={handleSubmit(submit)}
        $errorEmail={errors?.email}
        $errorPassword={errors?.password}
        $errorRepPassword={errors?.repPassword}
      >
        {children}
      </StyledLoginForm>
      <LoginLink to={path}>{on ? 'Sign Up' : 'Sign In'}</LoginLink>
      {on && <LoginLink to="/forgot-password">Forgot password?</LoginLink>}
    </FormWrapper>
  );
};

export default AuthForm;
