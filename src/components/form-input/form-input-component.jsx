import React from 'react'
import {
    GroupContainer,
    FormInputContainer,
    FormLabel

} from './form-input.styles'

const FormInput = ({handleChange, label, ...restProps}) => (
    <GroupContainer>
        <FormInputContainer
            onChange={handleChange}
            {...restProps}
        />
        {
            label &&
            (<FormLabel className={
                `${restProps.value.length ?
                 'shrink' : ""} form-input-label`}
            >
                {label}
            </FormLabel>)
        }

    </GroupContainer>
)

export default FormInput