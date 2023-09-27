import React from 'react';
import { AppBar, Toolbar, Typography, Paper, Stack } from '@mui/material';
import Statistics from './section/output/statistics';
import Section from './section/section';
import SchoolsInput from './section/input/schools_input';
import StudentsInput from './section/input/students_input';

function App() {
  const [step, setStep] = React.useState(0)

  return (
    <>
      <Paper elevation={0}>
        <AppBar position='static' color='primary' enableColorOnDark>
          <Toolbar>
            <Typography variant='h5' color='inherit' component='div'>
              학교 배정 테스트
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={1}>
          <Stack spacing={1} direction='column'>
            <Section
              title='1. 학교 데이터 입력'
              disable={step !== 0}
            >
              <SchoolsInput
                onAccept={() => setStep(1)}
                onDecline={() => setStep(0)} />
            </Section>
            <Section
              title='2. 학생 데이터 입력'
              disable={step !== 1}
            >
              <StudentsInput
                onAccept={() => setStep(2)}
                onDecline={() => setStep(1)} />
            </Section>
            <Section
              title='3. 학교 배정'
              disable={step !== 2}
            >
              <Statistics />
            </Section>
          </Stack>
        </Paper>
      </Paper>
    </>
  );
}

export default App;
