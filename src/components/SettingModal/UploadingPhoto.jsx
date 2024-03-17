import { useState } from 'react';
import styled from 'styled-components';
import PersonIcon from '../../images/SettingModal/PersonIcon';
import Upload from '../../images/SettingModal/Upload';

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
  color: #407bff;
`;

const UploadingPhoto = ({ register }) => {
  const [imageSrc, setImageSrc] = useState('');

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <InputContainer htmlFor="fileInput">
      <HiddenInput
        {...register('photo')}
        name="photo"
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {imageSrc !== '' ? (
        <DivIconInput>
          <InputImg src={imageSrc} alt="Uploaded image" />
          <PInput>Photo uploaded</PInput>
        </DivIconInput>
      ) : (
        <DivIconInput>
          <PersonIcon />
          <Upload />
          <PInput>Upload a photo</PInput>
        </DivIconInput>
      )}
    </InputContainer>
  );
};

export default UploadingPhoto;
