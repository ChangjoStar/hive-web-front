import { AppBar, Toolbar, Typography, Paper } from '@mui/material';
import './App.css';
import DataInput from './data_input';
import Statistics from './statistics';
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
          <SectionAccordian title="입력 데이터">
            <DataInput></DataInput>
          </SectionAccordian>
          <SectionAccordian title="배정 결과">
            <Statistics></Statistics>
          </SectionAccordian>
        </Paper>
      </Paper>
    </>
  );
}

export default App;
