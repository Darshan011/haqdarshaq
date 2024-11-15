import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LanguageScreen from './components/screens/LanguageScreen';
import LoginScreen from './components/screens/LoginScreen';
import Body from './components/utils/body/Body';
import LanguageScreen from './components/screens/languageScreen';
import MobileScreen from './components/screens/MobileScreen';



const AppRouter = () => {
  return (
    <Body>
       
            <Router>
                <Routes>
                    <Route path="/" element={<LanguageScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/mobile" element={<MobileScreen />} />
                </Routes>
            </Router>
        
    </Body>
  );
};

export default AppRouter;
