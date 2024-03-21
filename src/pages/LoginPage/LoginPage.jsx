import {
  ErrorSpan,
  LoginWrapper,
  StyledSection,
  SvgContainer,
} from './LoginPage.styled';
import { useMediaQuery } from 'react-responsive';
import AuthForm from '../../components/LoginForm/LoginForm';
import {
  LoginBtn,
  LoginInput,
  Loginlabel,
  PassShowBtn,
} from '../../components/LoginForm/LoginForm.styled';
import PassEye from '../../images/AuthImg/PassEye';
import { useForm } from 'react-hook-form';

import BottleSVG from '../../images/AuthImg/BottleSVG';
import BottleSVGTablet from '../../images/AuthImg/BottleSVGTablet';
import BottleSVGDesktop from '../../images/AuthImg/BottleSVGDesktop';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import OpenPassEye from '../../images/AuthImg/OpenPassEye';
import { useDispatch } from 'react-redux';
import { signInThunk } from '../../store/auth/thunks';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const [eyePass, setEyePass] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup
        .object({
          email: yup
            .string()
            .email(t('emailValidation'))
            .matches(/^(?!.*@[^,]*,)/, t('emailPattern'))
            .required(t('emailRequired')),
          password: yup
            .string()
            .min(8, t('passwordLength'))
            .max(64)
            .required(t('passwordRequired')),
        })
        .required()
    ),
    mode: 'onChange',
  });

  function submit(data) {
    dispatch(signInThunk(data))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user.username}`);
        navigate('/home');
      })
      .catch((err) => toast.error(err));
  }

  function showPass() {
    setEyePass((prev) => !prev);
  }

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthForm
          on={true}
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
              required
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
              required
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </Loginlabel>
          <LoginBtn type="submit">{t('signIn')}</LoginBtn>
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
export default LoginPage;
