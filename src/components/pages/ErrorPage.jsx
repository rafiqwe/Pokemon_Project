import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    if (error.status !== 404) {
        return <h1>Something going wrong plz reload this page</h1>
    }
    
    return (
        <>
            <h1>404</h1>
        </>
    )
}