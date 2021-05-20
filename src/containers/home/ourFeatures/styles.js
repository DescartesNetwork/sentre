import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  features: {
    width: '70% !important',
    margin: `${theme.spacing(0)} auto ${theme.spacing(12) + 4}px`,
    '& .title': {
      marginBottom: theme.spacing(9),
    },
    '& .content': {
      '& ul': {
        listStyle: 'none',
        padding: theme.spacing(0),
        textAlign: 'center',
        justifyContent: 'space-around',
        '& li': {
          textAlign: 'center',
          marginBottom: theme.spacing(5),
          padding: `${theme.spacing(0)} ${theme.spacing(2)}px`,
          '& img': {
            width: 48,
            marginBottom: theme.spacing(2),
          },
          '& h6': {
            fontSize: 16,
            fontWeight: 300,
            lineHeight: '28px',
            color: 'var(--color-white)',
            '& *': { color: 'var(--color-white)' }
          },
          '& .box-title': {
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: '24px',
            letterSpacing: '-0.750316px',
            marginBottom: '15px',
            minHeight: 48,
            color: 'var(--color-white)',
          },
          '& .box-desc': {
            fontSize: 16,
            fontWeight: 300,
            lineHeight: '28px',
            letterSpacing: '-0.500211px',
            margin: theme.spacing(0),
            color: 'var(--color-white)',
          }
        }
      }
    },
    '@media (max-width: 992px)': {
      width: '100% !important',
      marginBottom: theme.spacing(2) + 4,
    },
    '@media (max-width: 768px)': {
      '& .title': {
        marginBottom: theme.spacing(5),
        '& h2': {
          fontSize: 24,
          lineHeight: '29px'
        },
        '& h6': {
          fontSize: 16,
          lineHeight: '24px'
        },
      },
      '& .content': {
        '& .box-title': {
          fontSize: 18,
          lineHeight: '21px',
          minHeight: 'unset',
          marginBottom: theme.spacing(1) + 4,
        }
      }
    }
  }
}));