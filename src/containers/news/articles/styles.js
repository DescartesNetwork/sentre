import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  articles: {
    padding: `${theme.spacing(5)}px ${theme.spacing(0)}`,
    '& .content': {
      '& ul': {
        padding: theme.spacing(0),
        listStyle: 'none',
      }
    },
    '& .paginations': {
      margin: 'auto',
      padding: `${theme.spacing(5)}px ${theme.spacing(0)}`
    }
  }
}));