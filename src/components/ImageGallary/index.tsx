import { useState } from "react";

import { ButtonWrapper, ImageGroupWrapper } from "./style";
import Gallary from "./gallary";

function ImageGroup() {
  const [isclicked, setclick] = useState<boolean>(false);
  const imageUrls = [
    "/assets/1.avif",
    "/assets/2.avif",
    "/assets/3.avif",
    "/assets/4.avif",
    "/assets/5.avif",
    "/assets/6.avif",
    "/assets/7.avif",
    "/assests/8.avif",
  ];
  const maxVisible = 4;

  const visibleImages = imageUrls.slice(0, maxVisible);
  const remainingImagesCount = imageUrls.length - maxVisible;

  const handleClick = () => {
    setclick(true);
  };

  if (isclicked) {
    return <Gallary open={isclicked} setClick={setclick} />;
  }
  return (
    <ImageGroupWrapper>
      {visibleImages.map((image: string, index: number) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{ width: "130px", height: "100px", objectFit: "cover", margin: " auto 5px" }}
        />
      ))}
      {remainingImagesCount > 0 && <ButtonWrapper onClick={handleClick}>+{remainingImagesCount}</ButtonWrapper>}
    </ImageGroupWrapper>
  );
}

export default ImageGroup;
