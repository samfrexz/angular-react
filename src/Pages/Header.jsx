import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import globe from '../Assets/globe.png'
import git from '../Assets/git.png'
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';
import Main from '../Pages/Main'
import useMediaQuery from '@material-ui/core/useMediaQuery';







const useStyle = makeStyles((theme) => ({
  header: {
    display: 'flex',
    height: '24vh',
    position: 'sticky',
    top: '0',
    background: '#9FCCCC',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
  },
  headerDark: {
    background: '#1F2029',
    color: '#fff',
    display: 'flex',
    height: '24vh',
    position: 'sticky',
    top: '0',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
  },
  navFirst: {
    height: '50%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navSec: {
    height: '50%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navSecc: {
    flexFlow: 'wrap'
  },
  flot: {
    float: 'left',
    paddingRight: '1rem'
  },
  selct: {
    border: 'none',
    padding: '1rem 1.3rem',
    outline: 'none',
    borderRadius: '6px',
    fontSize: '1rem'
  },
  selctMob: {
    padding: '0.5rem 0.7rem',
    fontSize: '0.8rem',
    outline: 'none',
    borderRadius: '6px',
    border: 'none',
  },
  log: {
    display: 'flex',
    alignItems: 'center'
  },
  txt: {
    color: '#fff'
  },
  mobTxt: {
    fontSize: '1.4rem',
    color: '#fff'
  }

}))



const Header = () => {
  const classes = useStyle()

  const mobile = useMediaQuery('(max-width:600px)');

  const body = document.body;
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    body.classList.toggle('body-dark')
  }

  return (
    <>
      <nav className={darkMode ? classes.headerDark : classes.header}>
        <Container>
          <div className={classes.navFirst}>
            <span className={classes.log}>
              <img src={logo} alt="company logo" className={classes.flot} />
              <Typography variant="h4">Angular</Typography>
            </span>

            <span >
              <img src={git} alt="" style={{ paddingRight: '0.5rem' }} />
              <Brightness4SharpIcon
                onClick={handleDarkMode}
                style={{ color: '#fff', cursor: 'pointer' }}
              />
              <img src={globe} alt="" style={{ paddingLeft: '0.5rem' }} />
            </span>
          </div>

          <div className={mobile ? classes.navSecc : classes.navSec}>
            <Typography variant="h4" className={mobile ? classes.mobTxt : classes.txt}>Contributors</Typography>

            <span>
              <select name="cont" id="cont" className={mobile ? classes.selctMob : classes.selct}>
                <option value="Contributions">Contributions</option>
              </select>
              &nbsp; &nbsp;

              <select name="asc" id="asc" className={mobile ? classes.selctMob : classes.selct}>
                <option value="Ascending">Ascending</option>
              </select>
            </span>
          </div>

        </Container>
      </nav>

      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default Header;