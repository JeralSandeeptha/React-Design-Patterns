import { useContext } from 'react';
import './App.css'
import ButtonFactory from './utils/ButtonFactory';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './utils/TextFactory';
import { ThemeContext } from './context/ThemeContext';
import { DangerButtonWithTheme, PrimaryButtonWithTheme, SuccessButtonWithTheme } from './utils/ButtonFactoryTwo';

function App() {

  // we can create elements in here
  const PrimaryButton = ButtonFactory('primary');
  const DangerButton = ButtonFactory('danger');
  const SecondaryButton = ButtonFactory('secondary');

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
      throw new Error("ThemeContext must be used within a ThemeProvider");
  }
  const { theme } = themeContext;
  console.log(theme);

  return (
    <>
      <PrimaryButton>Primary Button</PrimaryButton>
      <DangerButton>Danger Button</DangerButton>
      <SecondaryButton>Danger Button</SecondaryButton>

      <br />
      <br />
      <br />

      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />

      <br />
      <br />
      <br />

      <PrimaryButtonWithTheme>Primary</PrimaryButtonWithTheme>
      <DangerButtonWithTheme>Danger</DangerButtonWithTheme>
      <SuccessButtonWithTheme>Success</SuccessButtonWithTheme>
    </>
  )
}

export default App;