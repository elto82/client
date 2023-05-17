import { Container, Grid, Box } from "@mui/material";
import video from "../../image/Diseño sin título_1.mp4";
import { Link } from "react-router-dom";
import s from "../landing/Landing.module.css";

export const Landing = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <video
              id="video"
              autoPlay
              loop
              muted
              src={video}
              style={{
                width: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            ></video>
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};