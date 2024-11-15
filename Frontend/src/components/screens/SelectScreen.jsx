import React from 'react'
import CustomSelect from '../utils/CustomSelect';

const SelectScreen = () => {
  return (
    <div>
<CustomSelect
        type="select"
        name="userOption"
        options={[
          { value: 'Register me as a new user', label: 'Register me as a new user' },
          { value: 'Use my Phone Number', label: 'Use my Phone Number' },
          { value: 'Use my Yojana Card', label: 'Use my Yojana Card' },
        ]}
        value={"selectedOption"}         // Controlled value for radio buttons
        onChange={"handleGenderChange"}   // Handler that updates the selected option state
      />         
    </div>
  )
}

export default SelectScreen
