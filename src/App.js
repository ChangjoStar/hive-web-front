import React from 'react';
import { AppBar, Toolbar, Typography, Paper, Stack } from '@mui/material';
import DataInput from './section/input/data_input';
import Statistics from './section/output/statistics';
import Section from './section/section';
import { checkSchools, checkStudents } from './section/input/check_file';

function App() {
  const [ step, setStep ] = React.useState(0)
  return (
    <>
      <Paper elevation={0}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography variant="h5" color="inherit" component="div">
              학교 배정 테스트
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={1}>
          <Stack spacing={1} direction="column">
            <Section
              title="1. 학교 데이터 입력"
              disable={step < 0}
            >
              <DataInput
                href={'./schools.csv'}
                filename={'schools.csv'}
                onAccept={() => setStep(1)}
                onDecline={() => setStep(0)}
                checkFile={checkSchools} />
            </Section>
            <Section
              title="2. 학생 데이터 입력"
              disable={step < 1}
            >
              <DataInput
                href={'./students.csv'}
                filename={'students.csv'}
                onAccept={() => setStep(2)}
                onDecline={() => setStep(1)}
                checkFile={checkStudents} />
            </Section>
            <Section
              title="3. 학교 배정"
              disable={step < 2}
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
