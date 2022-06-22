import { UserProvider } from "./user";
import { WorkHourProvider } from "./workhour";


const AppProvider: React.FunctionComponent<any> = ({children}) => {
    return(
        <UserProvider>
            <WorkHourProvider>
            {children}
            </WorkHourProvider>
        </UserProvider>
    )
}

export {AppProvider}