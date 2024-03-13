import { useMediaQuery } from 'react-responsive';
import BottleSVG from '../../images/AuthImg/BottleSVG';
import BottleSVGDesktop from '../../images/AuthImg/BottleSVGDesktop';
import BottleSVGTablet from '../../images/AuthImg/BottleSVGTablet';
import {
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

const RegistrationPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <StyledSection>
      <LoginWrapper>
        <AuthForm on={false} handleSubmit={handleSubmit} submit={submit}>
          <Loginlabel>
            Enter your email
            <LoginInput
              type="text"
              placeholder="E-mail"
              name="email"
              {...register('email')}
            />
          </Loginlabel>
          <Loginlabel>
            Enter your password
            <LoginInput
              type="password"
              placeholder="Password"
              name="password"
              {...register('password')}
            />
            <PassShowBtn type="button">
              <PassEye />
            </PassShowBtn>
          </Loginlabel>
          <Loginlabel>
            Repeat password
            <LoginInput
              type="password"
              placeholder="Repeat password"
              name="rep_password"
              {...register('rep_password')}
            />
            <PassShowBtn type="button">
              <PassEye />
            </PassShowBtn>
          </Loginlabel>
          <LoginBtn type="submit">Sign Up</LoginBtn>
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
