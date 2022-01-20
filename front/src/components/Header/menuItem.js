import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

export default function MenuItem({ title, icon, link, onChangeCloserDrawer }) {
  const handleMenuItem = () => {
    onChangeCloserDrawer();
  }

  return (
    <div>
      <ListItem
        button
        onClick={handleMenuItem}
        component={Link}
        to={link}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </div>
  );
}