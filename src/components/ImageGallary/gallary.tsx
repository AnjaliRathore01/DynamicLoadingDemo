import { Dialog, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { DialogInnerBox } from "./style";

// interface IGallaryState {
//   se?: () => void;
// }

function Gallary(props: { open: boolean, setClick: any }) {
  const { open, setClick } = props;

  const handleClose = () => {
    console.log(close);
    setClick(false);
  };
  const imageUrls = [
    "/assets/1.avif",
    "/assets/2.avif",
    "/assets/3.avif",
    "/assets/4.avif",
    "/assets/5.avif",
    "/assets/6.avif",
    "/assets/7.avif",
    "/assets/8.avif",
  ];
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <IconButton
        sx={{
          position: "absolute",
          right: "5px",
          top: "5px",
          backgroundColor: "blue",
        }}
        onClick={handleClose}
      >
        <FontAwesomeIcon color="black" size="2xs" icon={faX} />
      </IconButton>
      <DialogInnerBox>
        {imageUrls.map((item, index) => (
          <img src={item} key={index} width="350px" height="300px" style={{ margin: "10px" }} />
        ))}
      </DialogInnerBox>
    </Dialog>
  );
}

export default Gallary;
