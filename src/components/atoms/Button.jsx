import { isDisabled } from "@testing-library/user-event/dist/utils";


export default function Button({children, variant='primary',
    size='md', disabled=false, className='', ...props
}){
    const base='btn';

    const variantClass = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        danger : 'btn-danger'
    } [variant] ?? 'btn-primary'

    const sizeClass = {
        sm:'btn-sm',
        md: 'btn-md',
        lg:'btn-lg'
    }  [size] ?? 'btn-md'
    {/* <button className='btn btn-primary btn-sm btn-disabled' >Primary Button</button> */}
    
    return(
        <button className={ `${base} ${variantClass} ${sizeClass} 
            ${disabled? 'btn-disabled':''  } ${className}` }
            disabled={disabled}
            {...props} >

            {children}
        </button>
    )
}