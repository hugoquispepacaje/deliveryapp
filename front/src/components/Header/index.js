import { useState } from 'react';
import Toolbar from './navbar';
import MenuDrawer from './menuDrawer';

const Header = () => {
  const [isDrawerState, setDrawerState] = useState(false);
  const [isMainState, setMainState] = useState(false);
  const handleOpenLeftDrawer = () => {
    setDrawerState(true);
    setMainState(true);
  }
  const handleOpenRightDrawer = () => {
    setDrawerState(true);
    setMainState(false);
  }
  const handleCloserDrawer = () => {
    setDrawerState(false);
  }

  return (
    <div>
      <Toolbar
        onChangeOpenLeftDrawer={handleOpenLeftDrawer}
        onChangeOpenRightDrawer={handleOpenRightDrawer}
      />
      <MenuDrawer
        menuState={isDrawerState}
        onChangeCloserDrawer={handleCloserDrawer}
        isMain={isMainState}
      />
    </div>
  );
}

export default Header;