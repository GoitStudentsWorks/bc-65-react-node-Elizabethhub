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
import SvgClose from '../../images/SettingModal/Close';
import RadioChecked from '../../images/SettingModal/RadioChecked';
import RadioUnChecked from '../../images/SettingModal/RadioUnChecked';
import UploadingPhoto from './UploadingPhoto';
import { useForm } from 'react-hook-form';
import OpenPassEye from '../../images/AuthImg/OpenPassEye';
import PassEye from '../../images/AuthImg/PassEye';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/selectors';
import { updateAvatarThunk } from '../../store/auth/thunks';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().max(32, 'Name must contain a maximum of 32 characters'),
  // .required('Name is required')
  email: yup
    .string()
    .email('Please write valid email')
    .matches(/^(?!.*@[^,]*,)/)
    .required('Email is required'),
  oldPassword: yup
    .string()

    // .min(8, 'Password must be at least 8 characters')
    .max(64),

  // .required('Password is required')
  newPassword: yup
    .string()
    // .min(8, 'Password must be at least 8 characters')
    .max(64),
  // .required('Password is required')
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('newPassword'), null],
      "Passwords don't match, please try again."
    ),
  // .min(8, 'Password must be at least 8 characters')
  // .required('Confirm password is required')
});

// const schema = yup.object({
//   name: yup
//     .string()
//     .max(32, 'Name must contain a maximum of 32 characters')
//     .required('Name is required'),
//   email: yup
//     .string()
//     .email('Please write valid email')
//     .matches(/^(?!.*@[^,]*,)/)
//     .required('Email is required'),
//   oldPassword: yup
//     .string()
//     .nullable()
//     .when('oldPassword', {
//       is: (val) => val && val.length > 0,
//       then: yup.string().min(8, 'Password must be at least 8 characters').max(64),
//     }),
//   newPassword: yup
//     .string()
//     .nullable()
//     .when('newPassword', {
//       is: (val) => val && val.length > 0,
//       then: yup.string().min(8, 'Password must be at least 8 characters').max(64),
//     }),
//   confirmPassword: yup
//     .string()
//     .nullable()
//     .oneOf(
//       [yup.ref('newPassword'), null],
//       "Passwords don't match, please try again."
//     ),
// });

const SettingModal = ({ onClose }) => {
  const user = useSelector(selectUser);
  // const [imageUser, setImageUser] = useState('');
  // const [name, setName] = useState('');
  // const [newEmail, setNewEmail] = useState(email || '');
  // const [oldPassword, setoldPassword] = useState('');

  // const userProfile = useSelector(selectUser);

  const [eyePass, setEyePass] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  function submit(data) {
    const formData = new FormData();
    formData.append('avatarURL', data.avatarURL[0]);
    dispatch(updateAvatarThunk(formData))
      .unwrap()
      .then((res) => {
        // console.log(res);
        if (!res) {
          throw errors;
        }
        toast.success(`Your avatar has been saved successfully`);
        onClose();
      })
      .catch((err) => toast.error(err));
    // console.log(formData);

    // console.log(data);
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

  // const handleInputChange = ({ target }) => {
  //   if (target.name === 'name') {
  //     setName(target.value);
  //   }
  //   if (target.name === 'email') {
  //     setNewEmail(target.value);
  //   }
  //   if (target.name === 'oldPassword') {
  //     setoldPassword(target.value);
  //   }

  //   console.log(target.value);
  // };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={onClose}>
          <SvgClose />
        </CloseButton>
        <ModalTitle>Setting</ModalTitle>
        <Form onSubmit={handleSubmit(submit)} $errors={errors}>
          <BlockWrap8>
            <BigLabel htmlFor="avatarURL">Your photo</BigLabel>
            <UploadingPhoto id="avatarURL" register={register} />
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
                      defaultValue={user?.username}
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
                      defaultValue={user?.email}
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
                    // onChange={handleInputChange}
                    // value={oldPassword}
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
