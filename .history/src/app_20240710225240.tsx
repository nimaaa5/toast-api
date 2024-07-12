import './app.css'
import NoPortalExample from './NoPortalExample.tsx';
import PortalExample from './PortalExample.tsx';


export function App() {


  return (
    <>
     <>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
    </>
  )
}
