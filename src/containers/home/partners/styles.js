import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  partners: {
    background: 'var(--color-bg-gray)',
    padding: `${theme.spacing(5) - 2}px ${theme.spacing(0)}`,
    '& ul': {
      listStyle: 'none',
      justifyContent: 'center',
      padding: theme.spacing(0),
      '& li': {
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 15,
        '&.items:nth-child(2)': {
          '& img': {
            width: 190,
          }
        }
      }
    },
    '& .section-title': {
      marginBottom: 30,
    }
  },
}));