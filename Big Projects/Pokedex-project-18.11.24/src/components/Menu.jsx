import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./styles/Header.css";

const Menu = ({ onSelectMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSelectMode = (mode) => {
    onSelectMode(mode);
    setIsMenuOpen(false); // Close the modal after selecting
  };

  const modalStyle = {
    position: "absolute",
    top: "46%",
    right: "-50px",
    transform: "translate(-50%, -50%)",
    width: "100px",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 3,
  };

  return (
    <div>
      <div className="menu" onClick={openMenu}>
        <Typography variant="h6" className="menu-trigger"></Typography>
      </div>
      {/* MUI Modal */}
      <Modal
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        aria-labelledby="menu-modal-title"
        aria-describedby="menu-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="menu-modal-title"
            variant="h6"
            component="h2"
            style={{ cursor: "default" }}
          >
            <b>Select a Mode</b>
          </Typography>
          <List style={{ cursor: "pointer" }}>
            {[
              { label: "Default", mode: "default" },
              { label: "Back", mode: "back" },
              { label: "Shiny ✨", mode: "shiny" },
              { label: "Shiny Back ✨", mode: "shiny-back" },
              { label: "Other + evolve", mode: "mega" },
              { label: "Other + evolve Shiny ✨", mode: "mega-shiny" },
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectMode(item.mode);
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </div>
  );
};

export default Menu;
