import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../components/Header";

export const HomeLayout = () => {
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  if (status === "authenticated") {
    navigate("/app");
  }
  return (
    <Box
      sx={{
        minHeight: "100vh", // cambia height fijo por minHeight
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/images/cyberpunk-2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        width: "100vw",
      }}
    >
      <Header />
      {/* Título en el centro */}
      <Box
        sx={{
          flex: 1, // ocupa el espacio restante entre Header y Footer
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          py: { xs: 5, sm: 8 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
