

export default function WelcomeWithProps({welcomeMessage, number}){
    
    return (
        <>
            <div> Welcome Message: {welcomeMessage}  </div>
            <div>Number: {number}</div>
        </>
    )
}