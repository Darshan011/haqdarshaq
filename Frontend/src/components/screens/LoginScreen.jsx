import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../utils/CustomSelect';
import Nextbutton from '../utils/nextbutton/Nextbutton';

import ScreenTilte from '../../utils/screenTilte';
import ContainerModal from '../../utils/containerModal/ContainerModal';

const LoginScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();  // Get the navigate function

  // Handle the change when a radio button is clicked
  const handleGenderChange = (event) => {
    setSelectedOption(event.target.value);  // Update the state with the selected value
  };

  // Handle the "Next" button click to navigate to the corresponding route
  const handleNext = () => {
    switch (selectedOption) {
      case 'Register me as a new user':
        navigate('/location');  // Navigate to location screen
        break;
      case 'Use my Phone Number':
        navigate('/MobileScreen');  // Navigate to phone screen
        break;
      case 'Use my Yojana Card':
        navigate('/qr');  // Navigate to QR screen
        break;
      default:
        // Optionally, you can handle the case where no option is selected
        alert('Please select an option!');
        break;
    }
  };

  return (
    <div>
      <ScreenTilte value={"How do you want to login?"} />
      <ContainerModal>
      <CustomSelect
        type="radio"
        name="userOption"
        options={[
          { value: 'Register me as a new user', label: 'Register me as a new user' },
          { value: 'Use my Phone Number', label: 'Use my Phone Number' },
          { value: 'Use my Yojana Card', label: 'Use my Yojana Card' },
        ]}
        value={selectedOption}         
        onChange={handleGenderChange}   
      />
      <Nextbutton value={"Next"} next={handleNext} />
      </ContainerModal>
    </div>
  );
};

export default LoginScreen;
