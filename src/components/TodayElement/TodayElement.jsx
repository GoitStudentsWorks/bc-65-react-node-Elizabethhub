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
  modalId,
  selectorWaterToday,
} from '../../store/water/selectors.js';
import ModalDeleteWater from '../ModalDeleteWater/ModalDeleteWater.jsx';
import { useEffect } from 'react';
import { fetchAllWaterThunk } from '../../store/water/operations.js';
import { format } from 'date-fns';

const TodayElement = () => {
  const isModalOpen = useSelector(modalDeleteOpen);
  const id = useSelector(modalId);
  const waterTodayList = useSelector(selectorWaterToday);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllWaterThunk());
  }, [dispatch]);

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
                      dispatch(changeModalId(item._id));
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
        {isModalOpen && (
          <ModalDeleteWater
            waterItem={waterTodayList.find((item) => item._id === id)}
          />
        )}
      </ListWrapper>
    </>
  );
};

export default TodayElement;
