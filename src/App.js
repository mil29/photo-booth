import { Fragment, useState } from 'react';

import Navbar from './components/navbar/navbar.component';
import ImageContainer from './components/image-container/image-container.component';

function App() {
  const [showRandomImages, setShowRandomImages] = useState(true);
  return (

    <Fragment>
      <Navbar setShowRandomImages={setShowRandomImages} />
      {
        showRandomImages && <ImageContainer />
      }
    </Fragment>
  );
}

export default App;
