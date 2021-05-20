import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  banner: {
    marginBottom: '100px',
    '& .left-content': {
      '& .content': {
        position: 'relative',
        paddingTop: 138,
        '& .bg-content': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 0,
          '& img': {
            transform: 'translate(-80px, 70px)',
            width: 185,
            height: 187,
            '&.img-multi-dot': {
              height: 'auto',
              transform: 'translate(-180px, 100px)'
            }
          }
        },
        '& .text-content': {
          position: 'relative',
          zIndex: 1,
          '& h1': {
            fontWeight: 800,
            fontSize: 79,
            lineHeight: '96px',
            color: 'var(--color-white)',
          },
          '& p': {
            fontWeight: 300,
            fontSize: 18,
            lineHeight: '24px',
            marginBottom: theme.spacing(0)
          },
          '& .group-btn': {
            marginTop: theme.spacing(4),
            '& button,& a': {
              // border: '1px solid',
              borderRadius: theme.shape.borderRadius - 4,
              cursor: 'pointer',
              '& p': {
                fontSize: 16,
                lineHeight: '20px',
                fontWeight: 500,
                letterSpacing: '-0.65px',
              },
              '&:first-child': {
                marginRight: theme.spacing(3),
                padding: `${theme.spacing(1) + 2}px ${theme.spacing(1)}px`
              },
              '&:last-child': {
                borderColor: 'var(--color-red)',
                backgroundColor: 'unset',
                padding: `${theme.spacing(1) + 2}px ${theme.spacing(2) + 4}px`
              }
            }
          }
        }
      }
    },
    '& .right-content': {
      '& .group-img': {
        position: 'relative',
        textAlign: 'right',
        paddingTop: theme.spacing(6) + 2,
        '& img': {
          '&.bg-banner': {
            width: '85%',
            objectFit: 'contain',
          },
          '&.ico-lg-square': {
            position: 'absolute',
            top: 50,
            left: -75,
            zIndex: -1,
          },
          '&.ico-sm-square': {
            position: 'absolute',
            right: '0',
            top: 375,
            left: -95,
            zIndex: -1
          }
        },
      }
    },

    '@media (max-width: 992px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      '& .left-content': {
        padding: theme.spacing(0),
        '& .content': {
          paddingTop: `${theme.spacing(0)} !important`,
          '& .bg-content': {
            '& img': {
              transform: 'unset',
              '&.img-multi-dot': {
                transform: 'translate(0, -190px) !important',
                opacity: 0.3,
              },
            }
          }
        }
      },
      '& .right-content': {
        '& .group-img': {
          marginBottom: theme.spacing(6),
          '& img': {
            '&.bg-banner': {
              width: '100% !important'
            },
            '&:not(.bg-banner)': {
              display: 'none',
            }
          }
        }
      }
    },
    '@media (max-width: 768px)': {
      '& .left-content': {
        '& .content': {
          '& .text-content': {
            '& h1': {
              fontSize: '36px !important',
              lineHeight: '48px !important',
            },
          }
        }
      },
      '& .group-btn': {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'space-between',
        '& button': {
          minWidth: '45%',
          margin: theme.spacing(0),
          '& h6': {
            fontSize: '14px',
            lineHeight: '22px'
          }
        }

      }
    },
  }
}));