import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import FetchComponent from './fetch/FetchComponent.tsx'

render(<FetchComponent />, document.getElementById('app')!)
