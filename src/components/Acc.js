import React, { useRef } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiTypography from '@material-ui/core/Typography'
import './Acc.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #E8E8EA',
    fontSize: '14px',
    minHeight: 52,
    padding: 0,

    '&$expanded': {
      minHeight: 52,
      borderBottom: 0,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '12px',
    alignItems: 'center',
    '&$expanded': {
      margin: '0',
      // color: 'red',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: '18px 31px 18px 0',
    borderBottom: '1px solid #E8E8EA',
  },
}))(MuiAccordionDetails)

export default function Acc() {
  const [expanded, setExpanded] = React.useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const Typography = withStyles((theme) => ({
    h5: {
      fontSize: 32,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      color: '#4B4C5F',
      fontWeight: {
        '&$expanded': {
          fontWeight: 700,
        },
      },
    },
    body2: {
      fontSize: 12,
      fontFamily: 'sans-serif',
      color: '#787887',
      lineHeight: '18px',
    },
  }))(MuiTypography)

  return (
    <div>
      <Typography variant='h5'>FAQ</Typography>
      <Accordion
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <h6 className={expanded === 'panel1' ? 'bold' : 'normal'}>
            How many team members can I invite?
          </h6>
          <img
            className={expanded === 'panel1' ? 'up' : ''}
            src='../images/icon-arrow-down.svg'
            alt=''
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <h6 className={expanded === 'panel2' ? 'bold' : 'normal'}>
            What is the maximum file upload size?
          </h6>
          <img
            className={expanded === 'panel2' ? 'up' : ''}
            src='../images/icon-arrow-down.svg'
            alt=''
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <h6 className={expanded === 'panel3' ? 'bold' : 'normal'}>
            How do I reset my password?
          </h6>
          <img
            className={expanded === 'panel3' ? 'up' : ''}
            src='../images/icon-arrow-down.svg'
            alt=''
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel4d-header'>
          <h6 className={expanded === 'panel4' ? 'bold' : 'normal'}>
            How do I reset my password?
          </h6>
          <img
            className={expanded === 'panel4' ? 'up' : ''}
            src='../images/icon-arrow-down.svg'
            alt=''
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls='panel5d-content' id='panel5d-header'>
          <h6 className={expanded === 'panel5' ? 'bold' : 'normal'}>
            How do I reset my password?
          </h6>
          <img
            className={expanded === 'panel5' ? 'up' : ''}
            src='../images/icon-arrow-down.svg'
            alt=''
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
