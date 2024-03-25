import { useForm } from 'react-hook-form';
import {
  LoginBtn,
  LoginInput,
  Loginlabel,
} from '../../components/LoginForm/LoginForm.styled';
import {
  ForgotBtn,
  ForgotForm,
  ForgotHeading,
  ForgotInput,
  ForgotLabel,
  ForgotWrapper,
} from './ForgotPassword.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { forgotThunk } from '../../store/auth/thunks';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(forgotThunk(data))
      .unwrap()
      .then(() => toast.info('We have sent an email to reset your password.'))
      .catch(() => toast.error('Oops something went wrong!!'));
  }

  return (
    <ForgotWrapper>
      <ForgotHeading>{t('forgotPassword')}</ForgotHeading>
      <ForgotForm onSubmit={handleSubmit(submit)}>
        <ForgotLabel>
          <ForgotInput
            {...register('email')}
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
          <ForgotBtn type="submit" aria-label="click to reset password">
            {t('send')}
          </ForgotBtn>
        </ForgotLabel>
      </ForgotForm>
    </ForgotWrapper>
  );
};

export default ForgotPassword;
