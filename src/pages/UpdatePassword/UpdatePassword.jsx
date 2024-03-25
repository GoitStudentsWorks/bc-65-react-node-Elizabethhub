import { useForm } from 'react-hook-form';
import {
  ForgotBtn,
  ForgotForm,
  ForgotHeading,
  ForgotInput,
  ForgotLabel,
  ForgotWrapper,
} from '../ForgotPassword/ForgotPassword.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePasswordThunk } from '../../store/auth/thunks';
import { PassShowBtn } from '../../components/SettingModal/SettingModal.styled';
import OpenPassEye from '../../images/AuthImg/OpenPassEye';
import PassEye from '../../images/AuthImg/PassEye';
import { useState } from 'react';

const UpdatePassword = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const tempCode = useParams('tempCode');
  const navigate = useNavigate();
  const [eyePass, setEyePass] = useState(false);

  function submit({ newPassword }) {
    dispatch(updatePasswordThunk({ tempCode, newPassword }))
      .unwrap()
      .then(() => {
        toast.info('Your password change succsessful!\nPlease login!');
        navigate('/signin');
      })
      .catch(() => toast.error('Oops something went wrong!!'));
  }
  function showPass() {
    setEyePass((prev) => !prev);
  }

  return (
    <ForgotWrapper>
      <ForgotHeading>Update your password</ForgotHeading>
      <ForgotForm onSubmit={handleSubmit(submit)}>
        <ForgotLabel>
          New password
          <ForgotInput
            type={eyePass ? 'text' : 'password'}
            {...register('newPassword')}
            name="newPassword"
            placeholder="Your password"
            required
            minLength={8}
          />
          <PassShowBtn type="button" onClick={showPass}>
            {eyePass ? <OpenPassEye /> : <PassEye />}
          </PassShowBtn>
        </ForgotLabel>
        <ForgotLabel>
          Confirm new password
          <ForgotInput
            {...register('confPassword')}
            name="confPassword"
            type={eyePass ? 'text' : 'password'}
            placeholder="Your password"
            required
            minLength={8}
          />
          <PassShowBtn type="button" onClick={showPass}>
            {eyePass ? <OpenPassEye /> : <PassEye />}
          </PassShowBtn>
        </ForgotLabel>
        <ForgotBtn aria-label="click to update password">Update</ForgotBtn>
      </ForgotForm>
    </ForgotWrapper>
  );
};

export default UpdatePassword;
