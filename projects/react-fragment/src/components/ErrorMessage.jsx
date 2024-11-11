// eslint-disable-next-line react/prop-types
const ErrorMessage = ({items}) => {
    return(
        <>
        {
            // eslint-disable-next-line react/prop-types
            items.length === 0 && <h3>I am still hungry</h3>
        }
        </>
    )
}

export default ErrorMessage;