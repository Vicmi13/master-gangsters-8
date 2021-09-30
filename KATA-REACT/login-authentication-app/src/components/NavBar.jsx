import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useRouteMatch } from "react-router-dom";

export default function NavBar() {
  const useRouteM = useRouteMatch();

  /* el path nos sirve para construir rutas relativas al padre */
  const { path } = useRouteM;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // eslint-disable-next-line no-unused-vars
  const isMenuOpen = Boolean(anchorEl);

  /** Pendiente ver componente material UI y poner igual menu desplegable en ICONO usuario */

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
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>

          <Link to={`${path}/nuevo-usuario`} style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crear usuario
            </Typography>
          </Link>

          <Typography variant="h5" component="div" style={{ margin: 10 }}>
            |
          </Typography>

          <Link to={`${path}/usuarios`} style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Usuarios
            </Typography>
          </Link>
          <Typography variant="h5" component="div" style={{ margin: 10 }}>
            |
          </Typography>

          <Link to={`${path}/items`} style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Items
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="account-user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
