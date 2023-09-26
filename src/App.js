import { AppBar, Toolbar, Typography, Paper, Stack } from '@mui/material';
import './App.css';
import DataInput from './input/data_input';
import Statistics from './output/statistics';
import SectionAccordian from './section_accordian';

function App() {
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
            <SectionAccordian title="입력 데이터">
              <DataInput />
            </SectionAccordian>
            <SectionAccordian title="배정 결과">
              <Statistics />
            </SectionAccordian>
          </Stack>
        </Paper>
      </Paper>
    </>
  );
}

export default App;
