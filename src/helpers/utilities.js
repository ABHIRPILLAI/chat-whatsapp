const isFormFieldValid = (formik, name) => !!(formik.touched[name] && formik.errors[name]);
const getFormErrorMessage = (formik, name) =>
    isFormFieldValid(formik, name) && (
        <span className="invalid-message" style={{
            fontSize:'10px',
            color:'red'
        }}>
            <sup>*</sup>
            {formik.errors[name]}
        </span>
    );
export{
    isFormFieldValid,
    getFormErrorMessage,
}    