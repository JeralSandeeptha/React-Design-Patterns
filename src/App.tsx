import './App.css'
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import SubTitle from './components/SubTitle';
import WithLargeFont from './utils/WithLargeFont';

function App() {

  const LargeParagraph = WithLargeFont(Paragraph);
  const LargeHeading = WithLargeFont(Heading);
  const LargeSubTitle = WithLargeFont(SubTitle);

  return (
    <>
      <Heading />
      <LargeHeading />

      <br />

      <Paragraph />
      <LargeParagraph />

      <br />

      <SubTitle />
      <LargeSubTitle />
    </>
  );

}

export default App;