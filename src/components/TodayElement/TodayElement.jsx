// import { useState } from 'react';
import {
  AddBtnWrapper,
  Amount,
  BtnWrapper,
  InfoWrapper,
  ListItem,
  ListWrapper,
  StyledList,
  Time,
} from './TodayElement.styled';
import EditSvg from '../../images/svg/svgToday/EditSvg';
import DeleteSvg from '../../images/svg/svgToday/DeleteSvg';
import SvgGlass from '../../images/svg/svgToday/GlassSvg';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsOpen } from '../../store/water/selectors';
import {
  changeModalAddForm,
  changeModalEditForm,
} from '../../store/water/waterSlice';
import ModalWater from '../ModalWater/ModalWater';

const TodayElement = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const dispatch = useDispatch();

  let waterArr = [
    { id: 1, amount: 250, hours: '11:00' },
    { id: 2, amount: 350, hours: '10:00' },
    { id: 3, amount: 200, hours: '11:00' },
    { id: 4, amount: 150, hours: '10:00' },
  ];

  return (
    <>
      <ListWrapper>
        <h2>Today</h2>
        <StyledList>
          {waterArr.map((item) => {
            return (
              <ListItem key={item.id}>
                <InfoWrapper>
                  <SvgGlass />
                  <Amount>{item.amount} ml</Amount>
                  <Time>{item.hours} PM</Time>
                </InfoWrapper>
                <BtnWrapper>
                  <div
                    onClick={() => {
                      dispatch(changeModalEditForm(true));
                    }}
                  >
                    <EditSvg />
                  </div>
                  <div>
                    <DeleteSvg />
                  </div>
                </BtnWrapper>
              </ListItem>
            );
          })}
        </StyledList>

        <AddBtnWrapper>
          <button
            onClick={() => {
              dispatch(changeModalAddForm(true));
            }}
          >
            <span>+</span>
            <span>Open </span>
          </button>
        </AddBtnWrapper>

        {isModalOpen && <ModalWater />}
      </ListWrapper>
    </>
  );
};

export default TodayElement;
