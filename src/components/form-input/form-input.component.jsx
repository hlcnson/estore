import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input 
            className='form-input' 
            onChange={handleChange} 
            {...otherProps} 
        />
        {
            // Toán tử ternary: Nếu label không null thì render phần tử label
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;