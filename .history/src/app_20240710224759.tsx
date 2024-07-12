import './app.css'
import {MyComponent} from './MyComponent.tsx';


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
