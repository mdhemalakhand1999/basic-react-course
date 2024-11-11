const BDTime = () => {
    const time = new Date();
    return(
        <>
            <p>This is current time: {time.toLocaleTimeString()}</p>
        </>
    )
}

export default BDTime