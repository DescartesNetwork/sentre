import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  community: {
    background: 'var(--color-bg-dgray)',
    '& .community': {
      position: 'relative',
      padding: `${theme.spacing(9)}px ${theme.spacing(2)}px`,
      '& .group-btn': {
        position: 'relative',
        textAlign: 'center',
        zIndex: 2,
        '& button, & a': {
          width: 249,
          height: 63,
          borderRadius: theme.shape.borderRadius - 2,
          border: 'none',
          '& p': {
            color: '#fff',
            fontSize: '21px',
            lineHeight: '28px',
            letterSpacing: '-0.66px',
            fontWeight: 'bold',
          }
        },
        '& .btn-tw': {
          background: '#5ED5F0',
          marginRight: theme.spacing(2),
          '& img': {
            width: 30,
            height: 22,
            marginRight: theme.spacing(1) + 2,
          }
        },
        '& .btn-fb': {
          background: '#368AEC',
          '& img': {
            width: 15,
            height: 28,
            marginRight: theme.spacing(1) + 2,
          }
        }
      },
      '& .img-bg': {
        position: 'absolute',
        '&.comm-bgr': {
          right: 0,
          top: 0,
        },
        '&.comm-bgl': {
          left: 0,
          bottom: 0,
        }
      }
    },
    '@media (max-width: 992px)': {
      '& .community': {
        '& img': {
          zIndex: 1,
        }
      }
    },
    '@media (max-width: 768px)': {
      '& .community': {
        overflow: 'hidden',
        '& .title': {
          marginBottom: theme.spacing(5),
        },
        '& .group-btn': {
          '& button': {
            width: '100% !important',
            margin: theme.spacing(0),
            '&:first-child': {
              marginBottom: theme.spacing(2) + 4,
            },
            '&.btn-tw': {
              marginRight: theme.spacing(0),
            }
          },
        },
        '& .img-bg': {
          '&.comm-bgr': {
            right: -150,
          },
          '&.comm-bgl': {
            left: -150,
          }
        }
      }
    }
  }
}));