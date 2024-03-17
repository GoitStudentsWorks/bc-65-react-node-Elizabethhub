import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Overlay,
  Modal,
  CloseButton,
  FildsTitle,
  BigLabel,
  SmallLabel,
  Form,
  ModalTitle,
  Radio,
  InputFild,
  InputPassword,
  SaveButton,
  RadioGroup,
  RadioWrap,
  PassShowBtn,
  PasswordWrap,
  BlockWrap8,
  BlockWrap12,
  BlockWrap2452,
  ExternalBlockWrap24,
  InternalBlockWrap24,
  GenderLabel,
  ErrorSpan,
} from './SettingModal.styled';
import SvgClose from './SVG/Close';
import RadioChecked from './SVG/RadioChecked';
import RadioUnChecked from './SVG/RadioUnChecked';
import UploadingPhoto from './UploadingPhoto';
import { useForm } from 'react-hook-form';
import OpenPassEye from '../../images/AuthImg/OpenPassEye';
import PassEye from '../../images/AuthImg/PassEye';

const schema = yup
  .object({
    name: yup
      .string()
      .max(32, 'Name must contain a maximum of 32 characters')
      .required('Name is required'),
    email: yup
      .string()
      .email('Please write valid email')
      .matches(/^(?!.*@[^,]*,)/)
      .required('Email is required'),
    oldPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .required('Password is required'),
    newPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .required('Password is required'),

    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('newPassword'), null],
        "Passwords don't match, please try again."
      )
      .min(8, 'Password must be at least 8 characters')
      .required('Confirm password is required'),
  })
  .required();

const SettingModal = ({ onClose }) => {
  const [eyePass, setEyePass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  function submit(data) {
    console.log(data);
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [value, setValue] = useState('woman');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={onClose}>
          <SvgClose />
        </CloseButton>
        <ModalTitle>Setting</ModalTitle>
        <Form
          onSubmit={handleSubmit(submit)}
          encType="multipart/form-data"
          $errors={errors}
        >
          <BlockWrap8>
            <BigLabel htmlFor="photo">Your photo</BigLabel>
            <UploadingPhoto id="photo" register={register} />
          </BlockWrap8>

          <ExternalBlockWrap24>
            <BlockWrap2452>
              <BlockWrap12>
                <FildsTitle>Your gender identity</FildsTitle>
                <RadioGroup>
                  <GenderLabel>
                    <RadioWrap>
                      {value === 'woman' ? (
                        <RadioChecked />
                      ) : (
                        <RadioUnChecked />
                      )}
                    </RadioWrap>
                    <Radio
                      {...register('gender')}
                      type="radio"
                      name="gender"
                      value="woman"
                      onChange={handleChange}
                      defaultChecked
                    />
                    Woman
                  </GenderLabel>
                  <GenderLabel>
                    <RadioWrap>
                      {value === 'man' ? <RadioChecked /> : <RadioUnChecked />}
                    </RadioWrap>
                    <Radio
                      {...register('gender')}
                      type="radio"
                      name="gender"
                      value="man"
                      onChange={handleChange}
                    />
                    Man
                  </GenderLabel>
                </RadioGroup>
              </BlockWrap12>
              <InternalBlockWrap24>
                <div>
                  <BlockWrap8>
                    <BigLabel htmlFor="name">Your name</BigLabel>
                    <InputFild
                      {...register('name')}
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your name"
                    />
                  </BlockWrap8>
                  <ErrorSpan>{errors.name?.message}</ErrorSpan>
                </div>
                <div>
                  <BlockWrap8>
                    <BigLabel htmlFor="email">E-mail</BigLabel>
                    <InputFild
                      {...register('email')}
                      name="email"
                      type="email"
                      id="email"
                      placeholder="E-mail"
                    />
                  </BlockWrap8>
                  <ErrorSpan>{errors.email?.message}</ErrorSpan>
                </div>
              </InternalBlockWrap24>
            </BlockWrap2452>

            <BlockWrap12>
              <FildsTitle>Password</FildsTitle>
              <BlockWrap8>
                <SmallLabel htmlFor="oldPassword">
                  Outdated password:
                </SmallLabel>
                <PasswordWrap>
                  <InputPassword
                    {...register('oldPassword')}
                    name="oldPassword"
                    type={eyePass ? 'text' : 'password'}
                    id="oldPassword"
                    placeholder="Password"
                  />
                  <ErrorSpan>{errors.oldPassword?.message}</ErrorSpan>
                  <PassShowBtn type="button" onClick={showPass}>
                    {eyePass ? <OpenPassEye /> : <PassEye />}
                  </PassShowBtn>
                </PasswordWrap>
              </BlockWrap8>

              <BlockWrap8>
                <SmallLabel htmlFor="newPassword">New Password:</SmallLabel>
                <PasswordWrap>
                  <InputPassword
                    {...register('newPassword')}
                    name="newPassword"
                    type={eyePass ? 'text' : 'password'}
                    id="newPassword"
                    placeholder="Password"
                  />
                  <ErrorSpan>{errors.newPassword?.message}</ErrorSpan>
                  <PassShowBtn type="button" onClick={showPass}>
                    {eyePass ? <OpenPassEye /> : <PassEye />}
                  </PassShowBtn>
                </PasswordWrap>
              </BlockWrap8>

              <BlockWrap8>
                <SmallLabel htmlFor="confirmPassword">
                  Repeat new password:
                </SmallLabel>
                <PasswordWrap>
                  <InputPassword
                    {...register('confirmPassword')}
                    name="confirmPassword"
                    type={eyePass ? 'text' : 'password'}
                    id="confirmPassword"
                    placeholder="Password"
                  />
                  <ErrorSpan>{errors.confirmPassword?.message}</ErrorSpan>
                  <PassShowBtn type="button" onClick={showPass}>
                    {eyePass ? <OpenPassEye /> : <PassEye />}
                  </PassShowBtn>
                </PasswordWrap>
              </BlockWrap8>
            </BlockWrap12>
          </ExternalBlockWrap24>

          <SaveButton type="submit">Save</SaveButton>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default SettingModal;
