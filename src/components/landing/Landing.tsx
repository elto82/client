import { Container, Box } from "@mui/material";
import video from "../../image/Diseño sin título_1.mp4";
import { Link } from "react-router-dom";
import s from "../landing/Landing.module.css";

export const Landing = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <video
        id="video"
        autoPlay
        loop
        muted
        src={video}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "-1",
        }}
      ></video>
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "100vh" }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
          <Link to="/home">
            <strong>
              <button className={s.bt}>INGRESAR</button>
            </strong>
          </Link>

          <Link to="/about">
            <strong>
              <button className={s.bt}>NOSOTROS</button>
            </strong>
          </Link>
        </Box>
      </Container>
    </div>
  );
};