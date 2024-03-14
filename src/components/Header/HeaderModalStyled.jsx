import styled from 'styled-components';

export const HeaderModalContainer = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: #fff;
  position: absolute;
  top: ${(props) => (props.$visible ? '70px' : '-100px')};
  right: 20px;
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  transition:
    opacity 0.3s ease,
    top 0.3s ease;
  z-index: 999;
`;
