import React from 'react'
import './App.css'
import Select from 'react-select';

function App() {
  const data = [{
    value: "Red", label: "Red", color: "red", Focusedcolor: "rgba(255, 0, 0, 0.2)", onClickColor: "rgba(255, 0, 0, 0.8)"
  },
  {
    value: "Blue", label: "Blue", color: "blue", Focusedcolor: "rgba(51, 77, 255, 0.2)", onClickColor: "rgba(51, 77, 255, 0.8)"
  }, {
    value: "Green", label: "Green", color: "green", Focusedcolor: "rgba(51, 255, 68, 0.2)", onClickColor: "rgba(51, 255, 68,0.8)"
  }, {
    value: "Yellow", label: "Yellow", color: "rgba(205, 213, 20,1)", Focusedcolor: "rgba(247, 255, 51,  0.2)", onClickColor: "rgba(247, 255, 51, 0.8)"
  }, {
    value: "Brown", label: "Brown", color: "brown", Focusedcolor: "rgba(144, 12, 63 , 0.2)", onClickColor: "rgba(144, 12, 63 , 0.8)"
  }, {
    value: "Orange", label: "Orange", color: "orange", Focusedcolor: "rgba(255, 172, 28,0.2)", onClickColor: "rgba(255, 172, 28,0.8)"
  }]
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white", borderColor: "blue", width: 400 }),
    option: (styles, { data, isFocused }) => {

      return { ...styles, color: data.color, backgroundColor: isFocused ? data.Focusedcolor : "none" };

    },
    multiValue: (styles, { data }) => ({ ...styles, color: "red", backgroundColor: data.Focusedcolor, }),
    multiValueLabel: (styles, { data }) => ({ ...styles, color: data.color }),
    multiValueRemove: (styles, { data }) => ({
      ...styles, color: data.color,
      ":hover": {
        color: data.onClickColor
      }
    })

  }
  return (
    <div className='parent' >
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colorStyles}
      />
    </div>
  )
}

export default App