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
import {
  changeModalAddForm,
  changeModalDeleteForm,
  changeModalEditForm,
} from '../../store/water/waterSlice';
import {
  modalDeleteOpen,
  selectorWaterToday,
} from '../../store/water/selectors.js';
import ModalDeleteWater from '../ModalDeleteWater/ModalDeleteWater.jsx';
import { useEffect } from 'react';
import { fetchAllWaterThunk } from '../../store/water/operations.js';
import { selectUser } from '../../store/auth/selectors.js';

const TodayElement = () => {
  const isModalOpen = useSelector(modalDeleteOpen);
  const isUser = useSelector(selectUser);

  const waterTodayList = useSelector(selectorWaterToday);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isUser) {
      dispatch(fetchAllWaterThunk());
    }
  }, [dispatch, isUser]);

  return (
    <>
      <ListWrapper>
        <h2>Today</h2>
        <StyledList>
          {waterTodayList.map((item) => {
            return (
              <ListItem id={item._id} key={item._id}>
                <InfoWrapper>
                  <SvgGlass />
                  <Amount>{item.milliliters} ml</Amount>
                  <Time>{item.time} PM</Time>
                </InfoWrapper>
                <BtnWrapper>
                  <div
                    onClick={() => {
                      dispatch(changeModalEditForm(true));
                    }}
                  >
                    <EditSvg />
                  </div>
                  <div
                    onClick={() => {
                      dispatch(changeModalDeleteForm(true));
                    }}
                  >
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
            <span>Add water</span>
          </button>
        </AddBtnWrapper>
        {isModalOpen && <ModalDeleteWater />}
      </ListWrapper>
    </>
  );
};

export default TodayElement;
