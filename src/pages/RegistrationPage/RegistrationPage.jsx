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
      .required('Password is required'),
    repPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .oneOf([yup.ref('password')], "Passwords don't match, please try again.")
      .required('Password is required'),
  })
  .required('Required');

const RegistrationPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  function submit(data) {
    console.log(data);
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
            Enter your email
            <LoginInput
              type="text"
              placeholder="E-mail"
              name="email"
              {...register('email')}
            />
            <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          </Loginlabel>
          <Loginlabel>
            Enter your password
            <LoginInput
              type="password"
              placeholder="Password"
              name="password"
              {...register('password')}
            />
            <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            <PassShowBtn type="button">
              <PassEye />
            </PassShowBtn>
          </Loginlabel>
          <Loginlabel>
            Repeat password
            <LoginInput
              type="password"
              placeholder="Repeat password"
              name="repPassword"
              {...register('repPassword')}
            />
            <ErrorSpan>{errors?.repPassword?.message}</ErrorSpan>
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
