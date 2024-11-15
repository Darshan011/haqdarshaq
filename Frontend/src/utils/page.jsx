import React, { useState } from 'react'
import LanguageScreen from '../components/screens/languageScreen';
import LoginScreen from '../../src/components/screens/LoginScreen';


const Page = () => {
    const [temp, setTemp]= useState(1);
    const [language, setLanguage]= useState(true);

    const handlePrev = () => {
        setTemp((prev) => (prev > 1 ? prev - 1 : prev)); // Decrement temp
      };
    
      const renderContent = () => {
        switch (temp) {
          case 1:
            return <div className="content1">
                <LanguageScreen />
            </div>;
          case 2:
            return <div className="content2"> <LoginScreen /></div>;
          case 3:
            return <div className="content3">Content for case 3</div>;
          default:
            return <div className="default-content">Default Content</div>;
        }
      };
    
      return (
        <div className="container">
          <div className="arrow">
            <i className="fa-solid fa-arrow-left" onClick={handlePrev}></i>
          </div>
          <div className="container-2">
            {renderContent()}
          </div>
        </div>
      );
    };
    


export default Page
