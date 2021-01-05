
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    back:{
      backgroundColor: 'rgba(98, 88, 251, 0.9)',
      justifyContent:'center',
      alignItems:'center',
      display:'flex',
      flexDirection: 'column',
      width:'100%'
    },
    logotypeText: {
      color: "white",
      fontWeight: 500,
      fontSize: 84,
      [theme.breakpoints.down("md")]: {
        fontSize: 48,
      },
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'rgba(98, 88, 251, 0.9)',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'rgba(98, 88, 251, 0.9)'
    },
  }));