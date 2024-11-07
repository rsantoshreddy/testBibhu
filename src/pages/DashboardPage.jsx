import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import DashboardPanel from '../components/dashboard/DashboardPanel'

// @todo -- the AppHeader and AppFooter should not be called in each page.
// we probably want to put the AppHeader and AppFooter into the CommonPageLayout

export const DashboardPage = () => {
    return (
        <div>
            <AppHeader />
            <DashboardPanel />
            <AppFooter />
        </div>
    )
}
