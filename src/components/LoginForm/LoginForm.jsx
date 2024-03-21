import { useTranslation } from 'react-i18next';
import {
  FormWrapper,
  Heading2,
  LoginLink,
  StyledLoginForm,
} from './LoginForm.styled';

const AuthForm = ({ children, on, handleSubmit, submit, errors }) => {
  const { t } = useTranslation();
  const path = on ? `/signup` : '/signin';
  return (
    <FormWrapper>
      <Heading2>{on ? t('signIn') : t('signUp')}</Heading2>
      <StyledLoginForm
        onSubmit={handleSubmit(submit)}
        $errorEmail={errors?.email}
        $errorPassword={errors?.password}
        $errorRepPassword={errors?.repPassword}
      >
        {children}
      </StyledLoginForm>
      <LoginLink to={path}>{on ? t('signUp') : t('signIn')}</LoginLink>
    </FormWrapper>
  );
};

export default AuthForm;
