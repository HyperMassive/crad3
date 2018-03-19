// This file is shared across the demos.

import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import PaletteIcon from 'material-ui-icons/Palette';

export const drawerItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link to="/prototype_one" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PaletteIcon />
        </ListItemIcon>
        <ListItemText primary="Prototype One" />
      </ListItem>
    </Link>

    <Link to="/prototype_two" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PaletteIcon />
        </ListItemIcon>
        <ListItemText primary="Prototype Two" />
      </ListItem>
    </Link>

    <Link to="/prototype_three" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PaletteIcon />
        </ListItemIcon>
        <ListItemText primary="Prototype Three" />
      </ListItem>
    </Link>
  </div>
);
