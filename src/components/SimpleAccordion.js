import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './SimpleAccordion.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxShadow: 'none',
    borderRadius: 0,
  },
  heading: {
    fontSize: 14,
  },

  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 700,
    fontSize: 32,
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 8px 0 0',
  },
  noshadow: {
    boxShadow: 'none',
    borderBottom: '1px solid #E8E8EA',
    borderRadius: 0,
    '&:last-of-type': {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    '&::before': {
      height: 0,
    },
    '&$expanded': {
      margin: 0,
    },
  },
  orange: {
    color: '#F47B56',
  },
  detail: {
    fontSize: 12,
    lineHeight: '18px',
  },
}))

export default function SimpleAccordion({ title }) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.title}>
        FAQ
      </Typography>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className={classes.noshadow}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.orange} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            How many team members can I invite?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography className={classes.detail}>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className={classes.noshadow}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.orange} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            What is the maximum file upload size?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className={classes.noshadow}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.orange} />}
          aria-controls='panel3a-content'
          id='panel3a-header'
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            How do I reset my password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className={classes.noshadow}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.orange} />}
          aria-controls='panel4a-content'
          id='panel4a-header'
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            Can I cancel my subscription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        className={classes.noshadow}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.orange} />}
          aria-controls='panel5a-content'
          id='panel5a-header'
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            Do you provide additional support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
