import './app.css'
import NoPortalExample from './NoPortalExample.tsx';
import PortalExample from './PortalExample.tsx';

import FetchComponent from './fetch/FetchComponent.tsx';

export function App() {


  return (
    <>
      {/* <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div> */}
      <FetchComponent/>
    </>
  )
}
