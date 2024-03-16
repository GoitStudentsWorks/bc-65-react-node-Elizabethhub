import React from 'react';
import {
  DailyEditButton,
  DailyLiter,
  DailyTittle,
  DailyWrapper,
  DailyWrapperEdit,
} from './DailyEdit.styled';

const DailyEdit = ({ openModal }) => {
  return (
    <DailyWrapper>
      <DailyTittle>My daily norma</DailyTittle>
      <DailyWrapperEdit>
        <DailyLiter>1.5 L</DailyLiter>
        <DailyEditButton type="button" onClick={() => openModal('dailyNorma')}>
          Edit
        </DailyEditButton>
      </DailyWrapperEdit>
    </DailyWrapper>
  );
};

export default DailyEdit;
