import { useState } from 'react';
import IntroPage from './components/IntroPage';
import MessagePage from './components/MessagePage';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {!showMessage ? (
        <IntroPage onContinue={() => setShowMessage(true)} />
      ) : (
        <MessagePage />
      )}
    </>
  );
}

export default App;
