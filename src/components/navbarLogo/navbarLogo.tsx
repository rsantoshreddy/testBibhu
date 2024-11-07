import { Navbar } from "react-bootstrap";
import useTheme from "hooks/useTheme";
import envisionLogoDark from "/img/envision-logo-600-dark.svg";
import envisionLogoLight from "/img/envision-logo-600-light.svg";
import "./NavbarLogo.scss";

export default function NavbarLogo() {
  const { theme } = useTheme();

  const logoMode = theme === "light" ? envisionLogoLight : envisionLogoDark;
  return (
    <Navbar.Brand href="/dashboard" className="NavbarLogo">
      <img src={logoMode} className="logo" alt="EnvisionDX Logo" />
    </Navbar.Brand>
  );
}
