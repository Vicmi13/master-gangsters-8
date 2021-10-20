import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useHistory } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useRouteMatch } from "react-router-dom";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MoreIcon from "@mui/icons-material/MoreVert";
import { UserLoggedContext } from "../context/userContext";

export default function NavBar() {
  /** estados definidos */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMenu, setShowMenu] = React.useState(false);
  /* context */
  const { globalUser, setGlobalUser } = React.useContext(UserLoggedContext);
  console.log("globalUser", globalUser);

  const history = useHistory();
  const useRouteM = useRouteMatch();
  /* el path nos sirve para construir rutas relativas al padre */
  const { path } = useRouteM;

  const handleMenuOpen = (event) => {
    // console.log("event.currentTarget", event.currentTarget);
    setAnchorEl(event.currentTarget);
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setShowMenu(false);
  };

  const loggedOut = () => {
    // setear estado global a vacio
    setGlobalUser({});
    // redirect a pagina de login
    history.push("/");
  };

  const renderMenu = (
    <Menu
      id="menu-appbar"
      keepMounted
      anchorEl={anchorEl}
      // Posiciones del menu
      // anchorOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      // transformOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      open={showMenu}
      onClose={handleMenuClose}
    >
      <Link
        to={`${path}/mi-perfil`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleMenuClose}>Mi Perfil</MenuItem>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem onClick={loggedOut}>Cerrar sesión</MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={`${path}`}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Link>

          <Link to={`${path}/nuevo-usuario`} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              Crear usuario
            </Typography>
          </Link>

          <Typography variant="h5" component="div" style={{ margin: 10 }}>
            |
          </Typography>

          <Link to={`${path}/usuarios`} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              Usuarios
            </Typography>
          </Link>
          <Typography variant="h5" component="div" style={{ margin: 10 }}>
            |
          </Typography>

          <Link to={`${path}/items`} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white" }}
            >
              Items
            </Typography>
          </Link>
          <Typography variant="h5" component="div" style={{ margin: 10 }}>
            |
          </Typography>

          {globalUser.role === "ADMIN" && (
            <Link to={`${path}/videos`} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "white" }}
              >
                Videos
              </Typography>
            </Link>
          )}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          {/* Display in extra small devices */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}
