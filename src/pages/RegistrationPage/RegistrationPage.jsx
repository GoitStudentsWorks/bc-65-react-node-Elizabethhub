import { useMediaQuery } from 'react-responsive';
import BottleSVG from '../../images/AuthImg/BottleSVG';
import BottleSVGDesktop from '../../images/AuthImg/BottleSVGDesktop';
import BottleSVGTablet from '../../images/AuthImg/BottleSVGTablet';
import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  SvgContainer,
} from '../LoginPage/LoginPage.styled';
import AuthForm from '../../components/LoginForm/LoginForm';
import {
  LoginBtn,
  LoginInput,
  Loginlabel,
  PassShowBtn,
} from '../../components/LoginForm/LoginForm.styled';
import PassEye from '../../images/AuthImg/PassEye';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import OpenPassEye from '../../images/AuthImg/OpenPassEye';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk, signUpThunk } from '../../store/auth/thunks';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const RegistrationPage = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const [eyePass, setEyePass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationMessages = {
    email: {
      email: t('emailValidation'),
      matches: t('emailPattern'),
      required: t('emailRequired'),
    },
    password: {
      min: t('passwordLength'),
      required: t('passwordRequired'),
    },
    repPassword: {
      min: t('repPasswordLength'),
      oneOf: t('repPasswordMatch'),
      required: t('repPasswordRequired'),
    },
  };

  const schema = yup
    .object({
      email: yup
        .string()
        .email(validationMessages.email.email)
        .matches(/^(?!.*@[^,]*,)/, validationMessages.email.matches)
        .required(validationMessages.email.required),
      password: yup
        .string()
        .min(8, validationMessages.password.min)
        .required(validationMessages.password.required),
      repPassword: yup
        .string()
        .min(8, validationMessages.repPassword.min)
        .oneOf([yup.ref('password')], validationMessages.repPassword.oneOf)
        .required(validationMessages.repPassword.required),
    })
    .required('Required');

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  function submit({ email, password }) {
    dispatch(signUpThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('Sign up done!');
        dispatch(signInThunk({ email, password }))
          .unwrap()
          .then(() => {
            navigate('/home');
          })
          .catch((err) => {
            toast.error(err);
          });
      })

      .catch(() => toast.error('Ooops... Something went wrong!'));
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthForm
          on={false}
          handleSubmit={handleSubmit}
          submit={submit}
          errors={errors}
        >
          <Loginlabel>
            {t('enteryouremail')}
            <LoginInput
              type="text"
              placeholder={t('eMail')}
              name="email"
              {...register('email')}
            />
            <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          </Loginlabel>
          <Loginlabel>
            {t('enterYourPassword')}
            <LoginInput
              type={eyePass ? 'text' : 'password'}
              placeholder={t('password')}
              name="password"
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </Loginlabel>
          <Loginlabel>
            {t('repeatpassword')}
            <LoginInput
              type={eyePass ? 'text' : 'password'}
              placeholder={t('repeatpassword')}
              name="repPassword"
              {...register('repPassword')}
            />
            <ErrorSpan>{errors?.repPassword?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </Loginlabel>
          <LoginBtn type="submit">{t('signUp')}</LoginBtn>
        </AuthForm>
        <SvgContainer>
          {isMobile && <BottleSVG />}
          {isTablet && <BottleSVGTablet />}
          {isDesktop && <BottleSVGDesktop />}
        </SvgContainer>
      </LoginWrapper>
    </StyledSection>
  );
};

export default RegistrationPage;
