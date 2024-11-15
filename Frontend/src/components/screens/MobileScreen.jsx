import React from 'react'

import CustomSelect from '../utils/CustomSelect';
import Nextbutton from '../utils/nextbutton/Nextbutton';
//import ScreenTilte from '../../utils/screenTilte';
import ContainerModal from '../../utils/containerModal/ContainerModal';
import Custominput from '../utils/customInput/Custominput';
import Body from '../utils/body/Body';
import ScreenTilte from '../../utils/screenTilte';
const MobileScreen = ({handleNext}) => {
    
  return (
    <div>
        <Body>
            <ScreenTilte value={"What is your number number?"} />
       <ContainerModal>
      
        <Custominput
        type="text"
        placeholder={"Enter mobile number"} />
        <p style={{
        color: 'gray',
        fontSize: 'medium',
        textAlign: 'left',
        paddingLeft: '2px',
        marginLeft: '25px'
      }}>
        This is used to create an account in your name on the Haqdarshak app.
      </p>
      <Nextbutton value={"Next"}  onClick={handleNext}/> 
      </ContainerModal>
      </Body>
    </div>
  )
}

export default MobileScreen
