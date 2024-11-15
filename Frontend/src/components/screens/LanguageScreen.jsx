import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
 
import CustomSelect from '../utils/CustomSelect';
import Nextbutton from '../utils/nextbutton/Nextbutton';
import ScreenTilte from '../../utils/screenTilte';
import ContainerModal from '../../utils/containerModal/ContainerModal';

const LanguageScreen = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const navigate = useNavigate(); 
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleNext = () => {
    navigate('/login');
  };

  return (
    <div>
      
      <ScreenTilte value={"Which language do you prefer?"} />
      <ContainerModal>
      <CustomSelect
        type="radio"
        name="gender"
        options={[
          { value: 'English', label: 'English' },
          { value: 'Hindi', label: 'Hindi' },
          { value: 'Marathi', label: 'Marathi' },
        ]}
        value={selectedGender}
        onChange={handleGenderChange}
      />
        <p style={{
        color: 'gray',
        fontSize: 'medium',
        textAlign: 'left',
        paddingLeft: '2px',
        marginLeft: '25px'
      }}>
        This allows you to experience the app in a language of your preference
      </p>
      <Nextbutton value={"Next"} next={handleNext} /> 
      </ContainerModal>
    </div>
  );
};

export default LanguageScreen;
