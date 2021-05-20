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
  },
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
  },
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
  },
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