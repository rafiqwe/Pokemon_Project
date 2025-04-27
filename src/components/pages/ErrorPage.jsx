import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status !== 404) {
        return <h1>Something going wrong plz reload this page</h1>
    }
    const navigate = useNavigate()
    const handleGoBack = () => {
      navigate(-1);
    }
    return (
        <>
        <section className="error_page">
            <img src="https://i.pinimg.com/originals/c9/01/03/c901035a8cd3745d6e47fafe6ad048d9.gif" alt="errorImg"/> 
            <div className="error_text">
                <h1>{error.error.message}</h1>
                <h1 className="error_status">{error.status}</h1>
                <h1>{error.statusText}</h1>
                <button onClick={handleGoBack} >Go Back</button>
            </div>
        </section>

        </>
    )
}