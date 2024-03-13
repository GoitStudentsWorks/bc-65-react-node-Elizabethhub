import { useState } from 'react';
import ProfileSettings from '../ProfileІSettings/ProfileSettings';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <ProfileSettings onClose={closeModal} />}
      <div>
        <h1>Header</h1>
        <button onClick={openModal}>Settings</button>
      </div>
    </>
  );
};

export default Header;
