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
  changeModalId,
} from '../../store/water/waterSlice';
import {
  modalDeleteOpen,
  selectorWaterToday,
} from '../../store/water/selectors.js';
import ModalDeleteWater from '../ModalDeleteWater/ModalDeleteWater.jsx';
import { useEffect } from 'react';
import { fetchAllWaterThunk } from '../../store/water/operations.js';
import { selectUser } from '../../store/auth/selectors.js';
import { format } from 'date-fns';

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

  // function formatDate(date) {
  //   if (date) {
  //     const newDate = new Date(date);
  //     const hour = newDate.getHours();
  //     const minute = newDate.getMinutes();
  //     return `${hour}:${minute}`;
  //   }
  // }

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
                  <Time>{format(item.time, 'hh:mm a')}</Time>
                  {/* <Time>{console.log(item.time)} PM</Time> */}
                </InfoWrapper>
                <BtnWrapper>
                  <div
                    onClick={() => {
                      dispatch(changeModalEditForm(true));
                      dispatch(changeModalId(item._id));
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
