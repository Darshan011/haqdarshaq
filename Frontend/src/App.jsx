

import './App.css'
// import Body from './components/utils/body/Body'

import Custominput from './components/utils/customInput/Custominput'
import CustomSelect from './components/utils/CustomSelect'
import Nextbutton from './components/utils/nextbutton/Nextbutton'
import LanguageScreen from './components/screens/languageScreen'
import LoginScreen from './components/screens/LoginScreen'
import Page from './utils/page'
import AppRouter from './Router';
import SelectScreen from './components/screens/SelectScreen'
import ScreenTilte from './utils/screenTilte'
import ContainerModal from './utils/containerModal/ContainerModal'
import Body from './utils/body/Body'
import MobileScreen from './components/screens/MobileScreen'
import { useState } from 'react'
function App() {
  const handleNext = () => {
    const [selectedOption, setSelectedOption] = useState('');
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
    {/* <Body/> */}
    {/* <ContainerModal /> */}
    {/* <SelectScreen/> */}
         {/* <AppRouter /> */}
         {/* <ScreenTilte value={"hi"} /> */}
         {/* <ContainerModal /> */}
         <MobileScreen handleNext={handleNext}/>
       

   </div>
  )
}

export default App
