import { ListAltOutlined, CloseOutlined } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

let open = false;

function toggleNav() {
  if (open) {
    return closeNav();
  }

  return openNav();
}

function openNav() {
  open = true;
  let nav = document.getElementById("topbar");
  if (nav) { nav.style.height = '20rem'; }
}

function closeNav() {
  open = false;
  let nav = document.getElementById("topbar");
  if (nav) { nav.style.height = '0'; }
}

export default function Topbar() {
  return (
    <>
      <ListAltOutlined onClick={toggleNav}></ListAltOutlined>

      <div className="topbar" id="topbar">
        <CloseOutlined className="close-topbar-icon" onClick={toggleNav}></CloseOutlined>

        <List>
          <ListItem>
            <ListItemButton href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/about">
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>

      </div>
    </>
  );
}
