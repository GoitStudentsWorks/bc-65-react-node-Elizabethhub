import styled from 'styled-components';

import Cup from './Cup';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  /* justify-content: center;
  align-items: center; */
  place-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Cup />
    </LoaderContainer>
  );
};

export default Loader;
