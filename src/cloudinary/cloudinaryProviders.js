import axios from "axios";
import { setImagesFromCloud } from "../store/slices/userSlice";

export const getCloudinaryImagesThunk = () => {
  return async (dispatch) => {
    try {
      const { data: cloudinaryUrls } = await axios.get(
        "https://notic-zen.netlify.app/.netlify/functions/getCloudinaryImages"
      );

      dispatch(setImagesFromCloud(cloudinaryUrls));
    } catch (error) {
      console.error("Error obteniendo imágenes de Cloudinary:", error);
    }
  };
};

export const getCloudinaryImages = async () => {
  try {
    let totalImages = 0;
    let cloudiImages = [];

    const { data } = await axios.get(
      "https://notic-zen.netlify.app/.netlify/functions/getCloudinaryImages"
    );

    // cloudiImages = Array.isArray(data) ? data : [];
    if (Array.isArray(data)) {
      cloudiImages = data;
    } else {
      console.error(
        "⚠️ Respuesta inesperada de Cloudinary, no es un array:",
        data
      );
    }

    totalImages = cloudiImages.length;

    return {
      cloudiImages,
      totalImages,
    };
  } catch (error) {
    console.error("Error obteniendo imágenes de Cloudinary:", error);
    return {
      cloudiImages: [],
      totalImages: 0,
    };
  }
};

export const deleteOrphanImagesFromCloudinary = async (orphanImages) => {
  if (!orphanImages || orphanImages.length === 0) {
    console.log("✅ No hay imágenes huérfanas para eliminar.");
    return;
  }

  try {
    const response = await axios.post(
      "https://notic-zen.netlify.app/.netlify/functions/deleteOrphanImages",
      JSON.stringify({ orphanImages }),
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("🔥 Imágenes huérfanas eliminadas:", response.data);
  } catch (error) {
    console.error("❌ Error eliminando imágenes huérfanas:", error);
  }
};
