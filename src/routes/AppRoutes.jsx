import { Route, Routes } from 'react-router-dom'

import { DashboardPage } from 'pages/DashboardPage'
import { ProfilePage } from 'pages/ProfilePage'
import DesktopDashboard from 'anima/pages/dashboard/DesktopDashboard'
import { CommonPageLayout } from 'components/layout/CommonPageLayout'
// import SignInPage from '../pages/signIn/SignInPage'
import { AddaSiteStep1 } from 'anima/pages/addsite/AddaSiteStep1/AddaSiteStep1'
import { AddaSiteStep2 } from 'anima/pages/addsite/AddaSiteStep2/AddaSiteStep2'
import { AddaSiteStep3 } from 'anima/pages/addsite/AddaSiteStep3/AddaSiteStep3'

export default function AppRoutes() {
    return (
        <Routes>
            {/* Top-level routes */}
            {/* <Route path="/login" element={<SignInPage mode="login" />} />
            <Route
                path="/forgot-pw"
                element={<SignInPage mode="forgot-pw" />}
            />
            <Route path="/signup" element={<SignInPage mode="signup" />} /> */}
            <Route
                path="/dashboard"
                element={
                    <CommonPageLayout>
                        <DashboardPage />
                    </CommonPageLayout>
                }
            />
            <Route
                path="/"
                element={
                    <CommonPageLayout>
                        <DesktopDashboard />
                    </CommonPageLayout>
                }
            />
            <Route
                path="/profile"
                element={
                    <CommonPageLayout>
                        <ProfilePage />
                    </CommonPageLayout>
                }
            />
            <Route path="/addaSiteStep1" element={<AddaSiteStep1 />} />
            <Route path="/addaSiteStep2" element={<AddaSiteStep2 />} />
            <Route path="/addaSiteStep3" element={<AddaSiteStep3 />} />
        </Routes>
    )
}
