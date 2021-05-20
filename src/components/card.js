import React from 'react';
import Grid from 'senswap-ui/grid';
import PropType from 'prop-types';
import SenCard, { CardContent, CardMedia } from 'senswap-ui/card';
import Typography from 'senswap-ui/typography'
import { makeStyles } from 'senswap-ui/styles';

import { imgBlockBanner } from '../static/images/index';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.borderRadius / 3,
    '& .card-img': {
      height: 180,
      overflow: 'hidden',
      cursor: 'pointer',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: theme.transitions.create(),
      },
    },
    '& .card-text': {
      padding: theme.spacing(3),
      background: 'var(--color-bg-gray)',
      '& h6': {
        fontSize: 17,
        lineHeight: '20px',
        fontWeight: 600,
        // color: '#141518',
        color: 'var(--color-white)',
        height: 40,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        marginBottom: theme.spacing(2),
      },
      '& .desc': {
        // color: '#404145',
        color: 'var(--color-white)',
        fontSize: 14,
        lineHeight: '20px',
        height: 60,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        marginBottom: theme.spacing(0),
        '& figure,& img': {
          display: 'none',
        },
        '& *': {
          margin: 0,
          padding: theme.spacing(0)
        }
      }
    },
    '& .card-link': {
      textDecoration: 'none'
    },
    '&:hover': {
      '& .card-img': {
        '& img': {
          transform: 'scale(1.1)'
        }
      },
      '& .card-text': {
        '& *': {
          textDecoration: 'unset',
        }
      }
    }
  }
}))

function Card(props) {
  const classes = useStyles();
  const { src, title, description, link, ...others } = props;

  return <Grid container spacing={0}>
    <Grid item xs={12} md={12}>
      <SenCard className={classes.card} {...others}>
        <Grid component="a" href={link} className="card-link" target="_blank">
          <CardMedia className="card-img">
            <Grid component="img" src={props.src || imgBlockBanner} />
          </CardMedia>
          <CardContent className="card-text">
            <Typography variant="subtitle1">{title}</Typography>
            {/* <Typography variant="body1">{description}</Typography> */}
            <Grid className="desc" dangerouslySetInnerHTML={{ __html: description }} />
          </CardContent>
        </Grid>
      </SenCard>
    </Grid>
  </Grid>
}

Card.defaultProps = {
  src: '',
  title: '',
  desciption: '',
}
Card.propsType = {
  src: PropType.string,
  title: PropType.string,
  description: PropType.string,
}

export default Card;