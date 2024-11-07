import { useTranslation } from 'react-i18next'

export const ProfilePage = () => {
    const { t } = useTranslation()

    return <h2>{t('Profile Page')}</h2>
}
