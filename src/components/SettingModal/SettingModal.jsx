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
import { updateUserThunk } from '../../store/auth/thunks';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const schema = yup.object({
  name: yup.string().max(32, 'Name must contain a maximum of 32 characters'),
  email: yup
    .string()
    .email('Please write valid email')
    .matches(/^(?!.*@[^,]*,)/)
    .required('Email is required'),
  oldPassword: yup.string(),
  newPassword: yup.string().when('oldPassword', (oldPassword, schema) => {
    return oldPassword[0].length > 1 ? schema.min(8).required() : schema.min(0);
  }),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('newPassword'), null],
      "Passwords don't match, please try again."
    ),
});

const SettingModal = ({ onClose }) => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

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

  function submit({ gender, email, username, oldPassword, newPassword }) {
    const body = {
      gender,
      email,
      username,
    };
    if (oldPassword) {
      body.oldPassword = oldPassword;
      body.newPassword = newPassword;
    }

    dispatch(updateUserThunk(body))
      .unwrap()
      .then(() => {
        toast.success(`Your changes has been saved successfully`);
        onClose();
      })
      .catch((err) => toast.error(err));
  }

  function showPass() {
    eyePass ? setEyePass(false) : setEyePass(true);
  }

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [value, setValue] = useState(user?.gender);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={onClose}>
          <SvgClose />
        </CloseButton>
        <ModalTitle>{t('setting')}</ModalTitle>
        <Form onSubmit={handleSubmit(submit)} $errors={errors}>
          <BlockWrap8>
            <BigLabel htmlFor="avatarURL">{t('yourPhoto')}</BigLabel>
            <UploadingPhoto id="avatarURL" />
          </BlockWrap8>

          <ExternalBlockWrap24>
            <BlockWrap2452>
              <BlockWrap12>
                <FildsTitle>{t('yourGenderIdentity')}</FildsTitle>
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
                      defaultChecked={value === 'woman'}
                      onChange={handleChange}
                    />
                    {t('woman')}
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
                      defaultChecked={value === 'man'}
                      onChange={handleChange}
                    />
                    {t('man')}
                  </GenderLabel>
                </RadioGroup>
              </BlockWrap12>
              <InternalBlockWrap24>
                <div>
                  <BlockWrap8>
                    <BigLabel htmlFor="username">{t('yourName')}</BigLabel>
                    <InputFild
                      {...register('username')}
                      name="username"
                      type="text"
                      id="username"
                      placeholder="Your name"
                      defaultValue={user?.username}
                    />
                  </BlockWrap8>
                  <ErrorSpan>{errors.name?.message}</ErrorSpan>
                </div>
                <div>
                  <BlockWrap8>
                    <BigLabel htmlFor="email">{t('email')}</BigLabel>
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
              <FildsTitle>{t('passwords')}</FildsTitle>
              <BlockWrap8>
                <SmallLabel htmlFor="oldPassword">
                  {t('outdatedPassword')}
                </SmallLabel>
                <PasswordWrap>
                  <InputPassword
                    {...register('oldPassword')}
                    name="oldPassword"
                    type={eyePass ? 'text' : 'password'}
                    id="oldPassword"
                    placeholder={t('passwords')}
                    minLength={8}
                  />
                  <ErrorSpan>{errors.oldPassword?.message}</ErrorSpan>
                  <PassShowBtn type="button" onClick={showPass}>
                    {eyePass ? <OpenPassEye /> : <PassEye />}
                  </PassShowBtn>
                </PasswordWrap>
              </BlockWrap8>

              <BlockWrap8>
                <SmallLabel htmlFor="newPassword">
                  {t('newPassword')}
                </SmallLabel>
                <PasswordWrap>
                  <InputPassword
                    {...register('newPassword')}
                    name="newPassword"
                    type={eyePass ? 'text' : 'password'}
                    id="newPassword"
                    placeholder={t('passwords')}
                    minLength={8}
                  />
                  <ErrorSpan>{errors.newPassword?.message}</ErrorSpan>
                  <PassShowBtn type="button" onClick={showPass}>
                    {eyePass ? <OpenPassEye /> : <PassEye />}
                  </PassShowBtn>
                </PasswordWrap>
              </BlockWrap8>

              <BlockWrap8>
                <SmallLabel htmlFor="confirmPassword">
                  {t('repeatNewPassword')}
                </SmallLabel>
                <PasswordWrap>
                  <InputPassword
                    {...register('confirmPassword')}
                    name="confirmPassword"
                    type={eyePass ? 'text' : 'password'}
                    id="confirmPassword"
                    placeholder={t('passwords')}
                  />
                  <ErrorSpan>{errors.confirmPassword?.message}</ErrorSpan>
                  <PassShowBtn type="button" onClick={showPass}>
                    {eyePass ? <OpenPassEye /> : <PassEye />}
                  </PassShowBtn>
                </PasswordWrap>
              </BlockWrap8>
            </BlockWrap12>
          </ExternalBlockWrap24>

          <SaveButton type="submit">{t('save')}</SaveButton>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default SettingModal;
