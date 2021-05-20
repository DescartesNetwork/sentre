import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  news: {
    paddingTop: theme.spacing(9) - 2,
    paddingBottom: theme.spacing(8),
    '& .news': {
      width: '100%',
    },
    '& .title': {
      position: 'relative',
      '& img': {
        position: 'absolute',
        width: 238,
        height: 189,
        right: 0,
        top: -30,
      }
    },
    '& .btn-more': {
      position: 'relative',
      padding: `${theme.spacing(6) + 2}px ${theme.spacing(0)}`,
      textAlign: 'center',
      overflow: 'hidden',
      '& a': {
        padding: `${theme.spacing(1) + 2}px ${theme.spacing(3) + 4}px`,
        borderRadius: theme.shape.borderRadius - 4,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: '20px',
        textTransform: 'capitalize',
        zIndex: 9,
      },
      '& img': {
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 25,
      },
      '@media (max-width: 992px)': {
        padding: `${theme.spacing(1) + 2}px ${theme.spacing(0)} ${theme.spacing(20) + 2}px`,
        '& img': {
          width: '175%',
          top: 70
        }
      },
      '@media (max-width: 768px)': {
        '& img': {
          width: '350%',
        }
      }
    }
  }
}));