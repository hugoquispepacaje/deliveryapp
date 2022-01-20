import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItem from './menuItem';
import { mainMenu } from '../../data/mainMenu';
import { secundaryMenu } from '../../data/secMenu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuDrawer({ menuState, onChangeCloserDrawer, isMain }) {
  const anchor = isMain ? 'left' : 'right';
  const menu = isMain ? mainMenu : secundaryMenu;
  const classes = useStyles();

  const handleCloseMenu = () => {
    onChangeCloserDrawer();
  }

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={anchor} open={menuState} onClose={handleCloseMenu}>
          <div
            className={clsx(classes.list)}
            role="presentation"
          >
            <List>
              {menu.map((item) => <MenuItem key={item.title} {...item} onChangeCloserDrawer={onChangeCloserDrawer} />)}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}