import Carousel from "react-material-ui-carousel";

type ImageProps = {
  images: any;
  duration: number;
};
type ItemProps = {
  img: string;
};

export const Carrousel: React.FC<ImageProps> = ({ images, duration }) => {
  console.log("imagenes", images);

  if (!images || images.length === 0) {
    // Si las imágenes no están disponibles, puedes mostrar un indicador de carga o un mensaje de "cargando"
    return <div>Cargando imágenes...</div>;
  }

  return (
    <Carousel indicators={false} sx={{ width: "100%" }} interval={duration * 1000}>
      {images.map((item: any, index: number) => (
        <Item key={index} img={item.img} />
      ))}
    </Carousel>
  );
};

const Item: React.FC<ItemProps> = ({ img }) => {
  return (
    <>
      <img src={img} style={{ width: "100%", height: "400px", borderRadius: "0.5em" }} />
    </>
  );
};
