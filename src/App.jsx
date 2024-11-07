import './App.css'

import useTheme from './hooks/useTheme'
import { Route, Routes } from 'react-router-dom'
// import { ComingSoonPage } from './pages/ComingSoonPage'
import AppRoutes from './routes/AppRoutes'
// import { useKeycloak } from '@react-keycloak/web'
// import { KeyCloakLoginPage } from 'pages/KeycloakLoginPage/KeycloakLoginPage'

function App() {
    const { theme } = useTheme()
    // const { keycloak } = useKeycloak()
    return (
        <div
            className={`App ${
                theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
            }`}>
            <Routes>
                {/* {keycloak.authenticated ? ( */}
                {/* by pass login as we have different running instances */}
                <Route path="*" Component={AppRoutes} />
                {/* {true ? (
                    <Route path="*" Component={AppRoutes} />
                ) : (
                    <Route path="/" exact Component={KeyCloakLoginPage} />
                )} */}
            </Routes>
        </div>
    )
}

export default App
