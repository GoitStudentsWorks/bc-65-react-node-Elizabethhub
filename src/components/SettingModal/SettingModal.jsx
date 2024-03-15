import { useState } from 'react';
// import RadioButtons from './RadioButtons';
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
  RadioWoman,
  RadioMan,
  SaveButton,
} from './SettingModal.styled';
import SvgClose from './SVG/Close';
import RadioChecked from './SVG/RadioChecked';
import RadioUnChecked from './SVG/RadioUnChecked';
import TestPhoto from './TestPhoto';

const SettingModal = ({ onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [value, setValue] = useState('woman');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const onchange = (e) => {
  //   console.log(e);
  //   if (!FileReader) {
  //     alert('FileReader не поддерживается — облом');
  //     return;
  //   }

  //   if (!e.target.files.length) {
  //     alert('Ничего не загружено');
  //     return;
  //   }

  //   var fileReader = new FileReader();
  //   fileReader.onload = function () {
  //     e.target.files[0].src = fileReader.result;
  //   };

  //   fileReader.readAsDataURL(e.target.files[0]);
  // };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        {/* <Close> */}
        <CloseButton onClick={onClose}>
          <SvgClose />
        </CloseButton>
        {/* </Close> */}
        <ModalTitle>Setting</ModalTitle>
        <Form>
          {/* <FildsTitle>Your photo</FildsTitle> */}
          <BigLabel htmlFor="photo">Your photo</BigLabel>
          <TestPhoto id="photo" />
          {/* <input type="file" onChange={onchange} /> */}
          {/* <RadioButtons /> */}
          <FildsTitle>Your gender identity</FildsTitle>
          <div>
            <SmallLabel>
              <RadioWoman>
                {value === 'woman' ? <RadioChecked /> : <RadioUnChecked />}
                {/* <RadioChecked /> */}
              </RadioWoman>
              <Radio
                type="radio"
                name="gender"
                value="woman"
                onChange={handleChange}
                // id="woman"
                defaultChecked
              />
              Woman
            </SmallLabel>
            <SmallLabel>
              {/* //  htmlFor="man" */}
              {/* >  */}
              <RadioMan>
                {value === 'man' ? <RadioChecked /> : <RadioUnChecked />}
                {/* <RadioUnChecked /> */}
              </RadioMan>
              <Radio
                type="radio"
                name="gender"
                value="man"
                onChange={handleChange}
                //  id="man"
              />
              Man
            </SmallLabel>
          </div>
          <BigLabel htmlFor="name">Your name</BigLabel>
          <InputFild type="text" id="name" />

          <BigLabel htmlFor="email">E-mail</BigLabel>
          <InputFild type="email" id="email" />

          <FildsTitle>Password</FildsTitle>

          <SmallLabel htmlFor="old">Outdated password:</SmallLabel>
          <InputPassword type="password" id="old" />

          <SmallLabel htmlFor="new">New Password:</SmallLabel>
          <InputPassword type="password" id="new" />

          <SmallLabel htmlFor="repeat">Repeat new password:</SmallLabel>
          <InputPassword type="password" id="repeat" />

          <SaveButton type="submit">Save</SaveButton>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default SettingModal;
