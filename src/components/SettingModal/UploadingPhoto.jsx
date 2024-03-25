import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PersonIcon from '../../images/SettingModal/PersonIcon';
import Upload from '../../images/SettingModal/Upload';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/selectors';
import { updateAvatarThunk } from '../../store/auth/thunks';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const InputImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const InputContainer = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
`;

const DivIconInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const PInput = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${(props) => props.theme.formInputColor};
`;

const UploadingPhoto = () => {
  const [imageSrc, setImageSrc] = useState('');
  const user = useSelector(selectUser);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.avatarURL) {
      let avatarURL = user.avatarURL;

      if (avatarURL.startsWith('avatars')) {
        avatarURL = `https://byte-water-back.onrender.com/${avatarURL}`;
      }
      setImageSrc(avatarURL);
    }
  }, [user]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append('avatarURL', file);
    dispatch(updateAvatarThunk(formData))
      .unwrap()
      .then(() => {
        toast.success(`Your avatar has been saved successfully`);
      })
      .catch((err) => toast.error(err));
  };

  return (
    <InputContainer htmlFor="fileInput">
      <HiddenInput
        name="avatarURL"
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {imageSrc !== '' ? (
        <DivIconInput>
          <InputImg src={imageSrc} alt="Uploaded image" />
          <PInput>{t('photoUploaded')}</PInput>
        </DivIconInput>
      ) : (
        <DivIconInput>
          <PersonIcon />
          <Upload />
          <PInput aria-label="Upload a photo">Upload a photo</PInput>
        </DivIconInput>
      )}
    </InputContainer>
  );
};

export default UploadingPhoto;
