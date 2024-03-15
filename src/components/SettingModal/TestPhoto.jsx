import { useState } from 'react';
import styled from 'styled-components';
import defaultImage from './PhotoInput.jpg';
import SVGInput from './SVGTEST';
import PersonIcon from './SVG/PersonIcon';

const InputImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const InputContainer = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  /* margin-top: 50px; */
`;

const HiddenInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
`;

const DivIconInput = styled.div`
  /* display: flex; */
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  gap: 8px;
`;
const PInput = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #407bff;
`;

const TestPhoto = () => {
  const [imageSrc, setImageSrc] = useState(defaultImage);

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
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {imageSrc !== defaultImage ? (
        <DivIconInput>
          <InputImg src={imageSrc} alt="Uploaded image" />
          <PInput>Фотографія завантажена</PInput>
        </DivIconInput>
      ) : (
        <DivIconInput>
          {/* <InputImg src={defaultImage} alt="Default image" /> */}
          <PersonIcon />
          <SVGInput />
        </DivIconInput>
      )}
    </InputContainer>
  );
};

export default TestPhoto;
