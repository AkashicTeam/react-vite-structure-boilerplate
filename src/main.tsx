import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
Chart.register(CategoryScale)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <App />
    </>
)
