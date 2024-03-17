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

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please write valid email')
      .matches(/^(?!.*@[^,]*,)/)
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .required('Password is required'),
  })
  .required();

const LoginPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const [eyePass, setEyePass] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  function submit(data) {
    dispatch(signInThunk(data));
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
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
            Enter your email
            <LoginInput
              type="text"
              placeholder="E-mail"
              name="email"
              required
              {...register('email')}
            />
            <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          </Loginlabel>
          <Loginlabel>
            Enter your password
            <LoginInput
              type={eyePass ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              required
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            <PassShowBtn type="button" onClick={showPass}>
              {eyePass ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </Loginlabel>
          <LoginBtn type="submit">Sign In</LoginBtn>
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
