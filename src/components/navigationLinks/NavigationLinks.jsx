import { Link } from 'react-router-dom'
import './NavigationLinks.scss'

/**
 * Navigation Links component for Header and footer
 *
 * @param {object} props
 * @param {string} props.className Extra CSS class name
 */

export default function NavigationLinks({ className: propsClassName }) {
    let className = 'NavigationLinks'
    if (propsClassName) className += ` ${propsClassName}`

    return (
        <div className={className}>
            <Link to="/sites" className="text-wrapper-28">
                sites
            </Link>
            <Link to="/network" className="text-wrapper-28">
                network
            </Link>
            <Link to="/security" className="text-wrapper-28">
                security
            </Link>
            <Link to="/voice" className="text-wrapper-28">
                voice
            </Link>
            <Link to="/billing" className="text-wrapper-28">
                billing
            </Link>
            <Link to="/support" className="text-wrapper-28">
                support
            </Link>
        </div>
    )
}
