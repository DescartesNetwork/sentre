// eslint-disable-next-line import/no-anonymous-default-export
export default theme => {
  console.log(theme);
  return {
    header: {
      '& .navbar-menu': {
        width: '100%',
        margin: '0',
        padding: `${theme.spacing(3)}px ${theme.spacing(0)}`,
        '& .logo': {
          '& a': {
            '& img': {
              height: '48px'
            }
          }
        },
        '& .list-menu': {
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          '& .menu-items': {
            marginLeft: theme.spacing(3),
            '& a, & button': {
              fontWeight: 300,
              fontSize: 16,
              padding: theme.spacing(0),
              lineHeight: '10px',
              textDecoration: 'unset',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              '&:not(.btn-launch) p': {
                color: 'var(--color-white)',
              },
              '&:not(.btn-launch):hover': {
                '& p': {
                  color: 'var(--color-red)',
                }
              },
              '&.btn-launch': {
                position: 'relative',
                fontWeight: 700,
                lineHeight: '20px',
                padding: `${theme.spacing(1) + 2}px ${theme.spacing(1)}px`,
                // background: theme.palette.background.secondary,
                borderRadius: theme.shape.borderRadius / 3,
                overflow: 'hidden',
                border: 'none',
                outline: 'none',
                userSelect: 'none',
                // '&:hover': {
                //   background: theme.palette.background.secondary,
                // }
              }
            },
            '&:last-child': {
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'nowrap',
              borderLeft: '1px solid var(--color-brown)',
              marginLeft: theme.spacing(3),
              paddingLeft: theme.spacing(2),
              '& img': {
                width: 16,
                height: 16,
                marginRight: 10,
              },
              '& .MuiSwitch-track': {
                background: 'var(--color-sw-track)',
              },
              '& .MuiSwitch-thumb': {
                background: 'var(--color-sw-thumb)',
              }
            },
          }
        },
      },
      '& .btn-toggle-menu': {
        display: 'none',
      },
      '@media (max-width: 768px)': {
        '& .navbar-menu': {
          position: 'relative',
          '& .btn-toggle-menu': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 15,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            '& #ico_menu': {
              width: 18,
              height: 15,
              position: 'relative',
              transform: 'rotate(0deg)',
              transition: '.5s ease-in-out',
              cursor: 'pointer',
              '& span': {
                display: 'block',
                position: 'absolute',
                height: 2,
                width: '100%',
                background: theme.palette.background.secondary,
                borderRadius: theme.shape.borderRadius,
                opacity: 1,
                left: 0,
                transform: 'rotate(0deg)',
                transition: '.25s ease-in-out',
                '&:nth-child(1)': {
                  top: 0,
                },
                '&:nth-child(2), &:nth-child(3)': {
                  top: 5
                },
                '&:nth-child(4)': {
                  top: 10
                }
              },
            },
            '&.open': {
              position: 'fixed',
              top: 43,
              bottom: 'unset',
              zIndex: '999',
              '& #ico_menu': {
                '& span': {
                  '&:nth-child(1)': {
                    top: 5,
                    width: 0,
                    left: '50%',
                  },
                  '&:nth-child(2)': {
                    transform: 'rotate(45deg)',
                  },
                  '&:nth-child(3)': {
                    transform: 'rotate(-45deg)',
                  },
                  '&:nth-child(4)': {
                    top: 5,
                    width: 0,
                    left: '50%',
                  }
                }
              }
            }
          }
        },
        '& .list-menu': {
          position: 'fixed',
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'flex-start !important',
          alignItems: 'start !important',
          background: 'var(--color-bg-menu)',
          maxWdth: '100%',
          top: 0,
          left: '-85%',
          width: '85%',
          height: '100%',
          overflow: 'hidden',
          transition: '.18s linear',
          zIndex: 999,
          padding: `${theme.spacing(6) + 2}px ${theme.spacing(3)}px`,
          '& .menu-items': {
            marginBottom: 30,
            '& a': {
              color: theme.palette.background.secondaryGray,
            }
          },
          '&.active': {
            left: 0,
            transition: '.25s linear',
          }
        }
      }
    },
  }
}