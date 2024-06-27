import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Divider, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SecondaryButton from "../../../buttons/SecondaryButton";
import Ratings from "./Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const socialMedia = [
  {
    id: 1,
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
  },
  {
    id: 4,
    icon: <YouTubeIcon />,
  },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ProductPreview(props) {
  const { open, handleClose, contentType } = props;

  return (
    <React.Fragment>
      {contentType === "preview" && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            "& .MuiDialog-paper": {
              width: "50vw",
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Preview
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f0f4f7",
                }}
              >
                <img
                  src="https://4.imimg.com/data4/EX/IX/MY-26971534/alphonso-mango1.jpg"
                  alt="product-preview-pic"
                  style={{ maxWidth: "100%", mixBlendMode: "multiply" }}
                />
              </Grid>
              <Grid item xs={7}>
                <Ratings />
                <Typography variant="h6">Product Title</Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body1">INR 145.00</Typography>
                  <span>INR 165</span>
                </div>
                <Divider component={"div"} />
                <div>
                  <Typography
                    variant="body2"
                    margin={"10px 0px"}
                    padding={"5px 0px"}
                  >
                    Categories:
                  </Typography>
                </div>
                <Divider component={"div"} />
                <Grid container mt={4} spacing={2}>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid",
                        borderColor: "divider",
                        justifyContent: "space-between",
                        borderRadius: 1,
                        bgcolor: "background.paper",
                        color: "text.secondary",
                        padding: "4px 0px",
                        "& svg": {
                          m: 1,
                        },
                      }}
                    >
                      <RemoveIcon />
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Typography variant="body1">1</Typography>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <AddIcon />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <SecondaryButton>
                      <ShoppingCartIcon /> ADD TO CART
                    </SecondaryButton>
                  </Grid>
                </Grid>
                <Grid container mt={2}>
                  <Grid item xs={6}>
                    <a href="/" style={{ display: "flex" }}>
                      <FavoriteBorderIcon />
                      <Typography variant="body2">Add to Wishlist</Typography>
                    </a>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
                <Grid container mt={4}>
                  <Grid item xs={12} display={"flex"}>
                    <Typography variant="body2">Share:</Typography>
                    {socialMedia.map((val) => (
                      <Typography
                        key={val.id}
                        sx={{ margin: "0px 10px", cursor: "pointer" }}
                      >
                        {val.icon}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </BootstrapDialog>
      )}
      {contentType === "cart" && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            "& .MuiDialog-paper": {
              width: "50vw",
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            PRODUCT ADDED TO CART
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ backgroundColor: "#f0f4f7" }}>
                  <img
                    src="https://4.imimg.com/data4/EX/IX/MY-26971534/alphonso-mango1.jpg"
                    alt="product-preview-pic"
                    style={{
                      maxWidth: "100%",
                      mixBlendMode: "multiply",
                      height: "90px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={8} width={"90%"} margin={"auto"}>
                <Typography variant="h6">Cart Title</Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0px",
                  }}
                >
                  <CheckCircleIcon />{" "}
                  <span>Successfully added to your cart</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "20px 0px",
                    justifyContent: "space-around",
                  }}
                >
                  <SecondaryButton>View Cart</SecondaryButton>
                  <SecondaryButton>Checkout</SecondaryButton>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Divider component={"div"} />
                <div style={{ width: "80%", margin: "auto", padding: "10px" }}>
                  <Typography variant="body2" gutterBottom textAlign={"center"}>
                    we want to give you <strong>10% discount</strong> for your
                    first Order, use (LovePurePantry) discount code at checkout
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </BootstrapDialog>
      )}

      {contentType === "favorite" && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            "& .MuiDialog-paper": {
              width: "30vw",
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Wishlist
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={2} padding={1}>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ backgroundColor: "#f0f4f7" }}>
                  <img
                    src="https://4.imimg.com/data4/EX/IX/MY-26971534/alphonso-mango1.jpg"
                    alt="product-preview-pic"
                    style={{
                      maxWidth: "100%",
                      mixBlendMode: "multiply",
                      height: "90px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={8} width={"90%"} margin={"auto"}>
                <Typography variant="h6">Title</Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0px",
                  }}
                >
                  <CheckCircleIcon />{" "}
                  <span>Successfully added to your cart</span>
                </div>
                <SecondaryButton>View Wishlist</SecondaryButton>
              </Grid>
            </Grid>
          </DialogContent>
        </BootstrapDialog>
      )}
    </React.Fragment>
  );
}
