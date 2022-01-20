import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';

const iconosSociales = (redSocial) => {
  switch (redSocial) {
    case 'facebook':
      return <Facebook />
    case 'instagram':
      return <Instagram />
    default:
      return null
  }
}

export {
  iconosSociales
}