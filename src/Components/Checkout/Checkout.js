import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';
import useStyles from './CheckoutStyles';

import CartSummary from './CartSummary/CartSummary';
import ContactInfo from './ContactInfo/ContactInfo';

const getSteps = () => {
  return ['Cart Details', 'Your Contact Information', 'Confirmation'];
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CartSummary />;
    case 1:
      return <ContactInfo />;
    case 2:
      return `Your Order has been placed with orderId: ${'XXX12345'}. Kindly save this orderId for future reference. You will receive a call shortly from the baker`;
    default:
      return 'Unknown step';
  }
}

const Checkout = () => {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      history.push('/menu');
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button onClick={handleBack} className={classes.button}>
                    {activeStep === 0 ? 'Back to Menu' : 'Back'}
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default Checkout;
