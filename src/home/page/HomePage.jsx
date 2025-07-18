import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CarouselComponent } from "../../components/CarouselComponent";

export const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          mt: 20,
          px: 2,
          py: 5,
          color: "#fff",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.4)", // capa oscura sobre fondo
          backdropFilter: "blur(5px)", // efecto de desenfoque
          borderRadius: 4,
          mx: "auto",
          maxWidth: "1000px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
            },
          }}
        >
          Bienvenido a ZenNotes
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 3,
            opacity: 0.9,
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            px: 2,
          }}
        >
          Organiza tus ideas y notas con facilidad 🚀
        </Typography>

        <Box mt={6} sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ mb: 2 }} color="text.primary">
            How does it work?
          </Typography>
          <CarouselComponent />
        </Box>

        <Box
          mt={10}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: {
              xs: "center",
              sm: "stretch",
            },
          }}
        >
          {[
            {
              icon: (
                <NoteAddIcon
                  sx={{ fontSize: 50, color: theme.palette.secondary.main }}
                />
              ),
              title: "Create & Manage Notes",
              desc: "Easily add, edit, or delete notes with titles, descriptions, and images.",
            },
            {
              icon: (
                <LockPersonIcon
                  sx={{ fontSize: 50, color: theme.palette.secondary.main }}
                />
              ),
              title: "Secure Auth",
              desc: "Access your notes from anywhere using secure Firebase Authentication.",
            },
            {
              icon: (
                <CloudUploadIcon
                  sx={{ fontSize: 50, color: theme.palette.secondary.main }}
                />
              ),
              title: "Cloud Gallery",
              desc: "Upload and store your note images safely with Cloudinary.",
            },
          ].map((item, i) => (
            <Paper
              key={i}
              elevation={3}
              sx={{
                width: 250,
                textAlign: "center",
                padding: 3,
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#fff",
                borderRadius: 3,
                backdropFilter: "blur(2px)",
              }}
            >
              {item.icon}
              <Typography variant="h6" fontWeight="bold" mt={1}>
                {item.title}
              </Typography>
              <Typography variant="body2" mt={1} sx={{ opacity: 0.8 }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </>
  );
};
