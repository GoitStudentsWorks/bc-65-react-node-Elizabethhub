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

const UpdatePassword = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const tempCode = useParams('tempCode');
  const navigate = useNavigate();

  function submit({ newPassword }) {
    dispatch(updatePasswordThunk({ tempCode, newPassword }))
      .unwrap()
      .then(() => {
        toast.info('Your password change succsessful!\nPlease login!');
        navigate('/signin');
      })
      .catch(() => toast.error('Oops something went wrong!!'));
  }

  return (
    <ForgotWrapper>
      <ForgotHeading>Update your password</ForgotHeading>
      <ForgotForm onSubmit={handleSubmit(submit)}>
        <ForgotLabel>
          New password
          <ForgotInput
            {...register('newPassword')}
            name="newPassword"
            type="password"
            placeholder="Your password"
          />
        </ForgotLabel>
        <ForgotLabel>
          Confirm new password
          <ForgotInput
            {...register('confPassword')}
            name="confPassword"
            type="password"
            placeholder="Your password"
          />
        </ForgotLabel>
        <ForgotBtn>Update</ForgotBtn>
      </ForgotForm>
    </ForgotWrapper>
  );
};

export default UpdatePassword;
