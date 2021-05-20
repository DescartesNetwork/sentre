import { makeStyles } from 'senswap-ui/styles';

export default makeStyles(theme => ({
  aboutUs: {
    marginBottom: theme.spacing(8),
    '& .about-content': {
      '& .content-title': {
        maxWidth: '80%',
        paddingTop: theme.spacing(15) - 4,
        '& h3': {
          fontSize: 57,
          fontWeight: 700,
          lineHeight: '73px',
          marginBottom: 16,
          color: 'var(--color-white)',
        },
        '& .desc': {
          fontWeight: 300,
          fontSize: 20,
          lineHeight: '38px',
          color: 'var(--color-white)',
          marginBottom: 0,
          textAlign: 'justify',
        }
      },
      '& .content-img': {
        position: 'relative',
        width: 'calc(100% - 150px)',
        float: 'right',
        marginTop: 87,
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        },
        '& .tag': {
          position: 'absolute',
          width: 305,
          minHeight: 50,
          bottom: 80,
          left: -115,
          background: '#FEDC5A',
          borderRadius: theme.shape.borderRadius - 2,
          padding: `${theme.spacing(2)}px ${theme.spacing(3) - 3}px`,
          display: 'flex',
          '& img': {
            width: 31,
            height: 31,
            marginRight: 14,
          },
          '& .sub': {
            width: 'calc(100% - 31px)',
            '& h6': {
              color: 'var(--color-black)',
              margin: 0,
              '&.time': {
                fontSize: 14,
                lineHeight: '17px',
                letterSpacing: -0.43,
                marginBottom: 4,
                opacity: .48,
              },
              '&.title': {
                fontSize: 21,
                lineHeight: '25px',
                letterSpacing: -0.65,
                fontWeight: 500,
              }
            }
          },
          '&.tag-top': {
            bottom: 'unset',
            top: 50
          }
        },
        '&.red-tag': {
          '& .frame': {
            right: 'unset',
            left: -30
          },
          '& .tag': {
            background: '#F04037',
            '& .sub': {
              '& h6': {
                color: 'var(--color-black)',
                '&.time': {
                  opacity: .6
                }
              }
            }
          }
        }
      },
      '& .content-tags': {
        paddingTop: theme.spacing(4) - 2,
        '& .item': {
          display: 'flex',
          width: 360,
          padding: `${theme.spacing(3) - 2}px ${theme.spacing(3)}px ${theme.spacing(2) + 3}px ${theme.spacing(2) + 4}px`,
          borderRadius: theme.shape.borderRadius - 2,
          marginBottom: 18,
          '& img': {
            width: 55,
            height: 55
          },
          '& .sub': {
            width: 'calc(100% - 55px)',
            paddingLeft: theme.spacing(3) - 4,
            '& p': {
              margin: 0,
              letterSpacing: -0.65,
              '&.title': {
                fontWeight: 500,
                fontSize: 19,
                lineHeight: '27px',
                color: 'var(--color-black)',
              },
              '&.desc': {
                fontWeight: 400,
                color: 'var(--color-black)',
              }
            }
          }
        }
      },
      '& .red-tag': {
        float: 'left',
        marginLeft: 115,
      },
      '&.mb-reverse': {
        '& .content-title': {
          maxWidth: '100%',
          paddingLeft: theme.spacing(8),
        }
      },
      '@media (max-width: 992px)': {
        '& .content-img': {
          width: 'calc(100% - 115px)',
          float: 'right',
          clear: 'both',
          margin: 0,
        },
        '& .content-title': {
          width: '100%',
          marginBottom: 24,
        },
        '&.mb-reverse': {
          display: 'flex',
          flexFlow: 'column-reverse',
          '& .content-title': {
            maxWidth: '100%  !important',
            paddingLeft: `${theme.spacing(0)} !important`,
          }
        },
      }
    }
  },
  relatedArticles: {
    '& .content': {
      borderTop: '1px solid',
      borderColor: '#dadada',
      paddingTop: theme.spacing(4) - 2,
      '& .title': {
        fontSize: 24,
        lineHeight: '29px',
        letterSpacing: -0.65,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30
      },
      '& ul': {
        padding: theme.spacing(0),
        listStyle: 'none',
        '& li': {
          marginBottom: 30
        }
      }
    }
  }
}));