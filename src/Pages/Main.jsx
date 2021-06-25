import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import avatar from '../Assets/avataaars 1.png'
import flow from '../Assets/flowchart 1.png'
import repo from '../Assets/bookmark 1.png'
import foll from '../Assets/user 1.png'
import grp from '../Assets/Group.png'
import vec from '../Assets/Vector (1).png'
import light from '../Assets/light.png'
import light1 from '../Assets/userd (1).png'
import light2 from '../Assets/userd (2).png'
import light3 from '../Assets/userd (3).png'
import useMediaQuery from '@material-ui/core/useMediaQuery';





const useStyles = makeStyles((theme) => ({
  top: {
    margin: '3rem 0'
  },
  card: {
    boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.07)',
    borderRadius: '10px',
    marginBottom: '2rem'
  },
  cardDark: {
    boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.07)',
    borderRadius: '10px',
    marginBottom: '2rem',
    background: '#161B22',
    color: '#fff',
    border: '1px solid #9FCCCC'
  },
  image: {
    background: '#E6F1F1',
    marginRight: '1rem',
    border: '5px solid #fff',
    borderRadius: '10px',
  },
  cardBg: {
    display: 'flex',
    width: '98%',
    margin: '0 auto',
    padding: '0.8rem 0',
  },
  engage: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '60%',
    margin: '-2.5rem 0 0 8.5rem',
    padding: '0 0 1.7rem 0',
    justifyContent: 'space-between',
  },
  engageMob: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '60%',
    margin: '-2.5rem 0 0 7.1rem',
    padding: '0 0 1.7rem 0',
    justifyContent: 'space-around',
  },
  test: {
    display: 'flex',
    width: '18%',
  },
  cardImage: {
    float: 'left',
    marginRight: '1rem'
  },
  htext: {
    color: '#9FCCCC',
    fontWeight: 'normal'
  },
  h1: {
    fontWeight: 'normal'
  }
}))

const Main = ({ setDarkMode, darkMode }) => {
  const classes = useStyles()
  const mobile = useMediaQuery('(max-width:600px)');


  return (
    <>
      <Container >
        <Grid container className={classes.top}>

          <Grid item xs={12} sm={12} lg={12}>
            <Paper elevation="3" className={darkMode ? classes.cardDark : classes.card}>
              <div className={classes.cardBg}>

                <img src={avatar} alt="" className={classes.image} />
                <span>
                  <h2 className={darkMode ? classes.htext : classes.h1}>Elon Musk</h2>
                  <p>@musketeer</p>
                </span>

              </div>

              <div className={mobile ? classes.engageMob : classes.engage}>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light : flow} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>99</b> contributions</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light2 : repo} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>42</b> repositories</p>}
                </span>
                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light1 : foll} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>126</b> follower</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light3 : grp} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>217</b> gists</p>}
                </span>
              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <Paper elevation="3" className={darkMode ? classes.cardDark : classes.card}>
              <div className={classes.cardBg}>
                {/* <span className={classes.test}> */}
                <img src={avatar} alt="" className={classes.image} />
                <span>
                  <h2 className={darkMode ? classes.htext : classes.h1}>Larry Page</h2>
                  <p>@lpage</p>
                </span>
                {/* </span> */}
              </div>

              <div className={mobile ? classes.engageMob : classes.engage}>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light : vec} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>76</b> contributions</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light2 : repo} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>23</b> repositories</p>}
                </span>
                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light1 : foll} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>126</b> follower</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light3 : grp} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>217</b> gists</p>}
                </span>
              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <Paper elevation="3" className={darkMode ? classes.cardDark : classes.card}>
              <div className={classes.cardBg}>

                <img src={avatar} alt="" className={classes.image} />
                <span>
                  <h2 className={darkMode ? classes.htext : classes.h1}>Jeff Bezos</h2>
                  <p>@jeffbezoos</p>
                </span>

              </div>

              <div className={mobile ? classes.engageMob : classes.engage}>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light : vec} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>63</b> contributions</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light2 : repo} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>22</b> repositories</p>}
                </span>
                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light1 : foll} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>126</b> follower</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light3 : grp} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>217</b> gists</p>}
                </span>
              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <Paper elevation="3" className={darkMode ? classes.cardDark : classes.card}>
              <div className={classes.cardBg}>

                <img src={avatar} alt="" className={classes.image} />
                <span>
                  <h2 className={darkMode ? classes.htext : classes.h1}>Mark Zuckerberg</h2>
                  <p>@mark</p>
                </span>

              </div>

              <div className={mobile ? classes.engageMob : classes.engage}>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light : vec} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>47</b> contributions</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light2 : repo} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>42</b> repositories</p>}
                </span>
                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light1 : foll} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>126</b> follower</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light3 : grp} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>217</b> gists</p>}
                </span>
              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <Paper elevation="3" className={darkMode ? classes.cardDark : classes.card}>
              <div className={classes.cardBg}>

                <img src={avatar} alt="" className={classes.image} />
                <span>
                  <h2 className={darkMode ? classes.htext : classes.h1}>Bill Gates</h2>
                  <p>@gates</p>
                </span>

              </div>

              <div className={mobile ? classes.engageMob : classes.engage}>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light : vec} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>42</b> contributions</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light2 : repo} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>42</b> repositories</p>}
                </span>
                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light1 : foll} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>126</b> follower</p>}
                </span>

                <span style={{ display: 'flex' }}>
                  <img src={darkMode ? light3 : grp} alt="" />
                  {mobile ? '' : <p>&nbsp; <b>217</b> gists</p>}
                </span>
              </div>

            </Paper>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default Main;