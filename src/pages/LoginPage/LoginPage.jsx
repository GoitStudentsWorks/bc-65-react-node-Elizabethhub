import { LoginWrapper, StyledSection, SvgContainer } from './LoginPage.styled';
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

import * as yup from 'yup';
import BottleSVG from '../../images/AuthImg/BottleSVG';
import BottleSVGTablet from '../../images/AuthImg/BottleSVGTablet';
import BottleSVGDesktop from '../../images/AuthImg/BottleSVGDesktop';

const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  console.log(isMobile);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    validationSchema: schema,
  });

  function submit(data) {
    console.log(data);
  }

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthForm on={true} handleSubmit={handleSubmit} submit={submit}>
          <Loginlabel>
            Enter your email
            <LoginInput
              type="text"
              placeholder="E-mail"
              name="email"
              required
              {...register('email')}
            />
          </Loginlabel>
          <Loginlabel>
            Enter your password
            <LoginInput
              type="password"
              placeholder="Password"
              name="password"
              required
              {...register('password')}
            />
            <PassShowBtn type="button">
              <PassEye />
            </PassShowBtn>
          </Loginlabel>
          <LoginBtn type="submit">Sign In</LoginBtn>
        </AuthForm>
        <SvgContainer>
          <BottleTest />
          <PassEye height="200" width="200" />
          {isMobile && <BottleSVG />}
          {isTablet && <BottleSVGTablet />}
          {isDesktop && <BottleSVGDesktop />}
        </SvgContainer>
      </LoginWrapper>
    </StyledSection>
  );
};

export default LoginPage;
