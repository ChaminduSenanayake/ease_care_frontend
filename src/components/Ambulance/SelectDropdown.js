import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SelectDropdown = React.forwardRef((props, ref) => {

  const [value, setValue] = useState('');
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#3949ab ' : 'white',
      '&:hover': {
        color: 'inherit',
        background: '#bfc8ff'
      },
    }),
    control: () => ({
      border: '1px solid #ced4da',
      borderColor: props.hasError ? 'red' : '#ced4da',
      borderRadius: 4,
      height: props.height ? props.height : 50,
      display: 'flex',
      alignItems: 'center',
      minWidth: '100%',
      width: props.width ? props.width : 'unset',
      backgroundColor: props.isDisabled ? '#e9ecef' : '#fff',
      marginRight:'-22px',
    }),
    singleValue: () => ({
      borderColor: 'red',
      paddingBottom: '20px'
    }),

  }

  useEffect(() => {
    if (props.value === undefined) {
      setValue(null);
    }
  }, [props.value]);

  const handleChange = (val) => {
    if (props.onChange) {
      props.onChange(val);
    }
    setValue(val.value);
  }

  return (
      <>
        <Select
            placeholder="Select"
            options={props.options}
            getOptionLabel={props.getOptionLabel}
            getOptionValue={props.getOptionValue}
            isMulti={false}
            isSearchable={false}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
            onChange={val => handleChange(val)}
            value={props.defaultValue ? props.options.filter(option => option.value === props.defaultValue.value) : props.options.filter(option => option.value === value)}
            isDisabled={props.isDisabled}
            className={props.className}
        />
        <input
            id={props.id}
            ref={ref}
            name={props.name}
            type="hidden"
            value={value != null ? value : ''}
            // value={value}
            onChange={val => setValue(val)}
        />
      </>
  )
});

export default SelectDropdown
