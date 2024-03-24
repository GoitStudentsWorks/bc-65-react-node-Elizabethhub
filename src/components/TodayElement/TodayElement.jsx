import {
  AddBtnWrapper,
  Amount,
  BtnWrapper,
  EmptyListMessage,
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
import {
  // fetchAllWaterThunk,
  fetchTodayWaterThunk,
} from '../../store/water/operations.js';
import { format } from 'date-fns';

import { selectUser } from '../../store/auth/selectors.js';

import { useTranslation } from 'react-i18next';

const TodayElement = () => {
  const { t } = useTranslation();
  const isModalOpen = useSelector(modalDeleteOpen);
  const waterTodayList = useSelector(selectorWaterToday);
  const isUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0];
    if (isUser) {
      dispatch(fetchTodayWaterThunk({ date }));
    }
  }, [dispatch, isUser]);

  const sortedWaterTodayList = waterTodayList
    .slice()
    .map((item) => ({ ...item, time: new Date(item.time) }))
    .sort((a, b) => a.time - b.time);

  return (
    <>
      <ListWrapper>
        <h2>{t('today')}</h2>
        <StyledList>
          {sortedWaterTodayList.length === 0 ? (
            <EmptyListMessage>No notes yet</EmptyListMessage>
          ) : (
            sortedWaterTodayList.map((item) => (
              <ListItem id={item._id} key={item._id}>
                <InfoWrapper>
                  <SvgGlass />
                  <Amount>{item.milliliters} ml</Amount>
                  <Time>{format(new Date(item.time), 'hh:mm a')}</Time>
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
                      dispatch(changeModalId(item._id));
                    }}
                  >
                    <DeleteSvg />
                  </div>
                </BtnWrapper>
              </ListItem>
            ))
          )}
        </StyledList>

        <AddBtnWrapper>
          <button
            onClick={() => {
              dispatch(changeModalAddForm(true));
            }}
          >
            <span>+</span>
            <span>{t('addwater')}</span>
          </button>
        </AddBtnWrapper>
        {isModalOpen && <ModalDeleteWater />}
      </ListWrapper>
    </>
  );
};

export default TodayElement;
