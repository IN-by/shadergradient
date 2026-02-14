import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function App() {
  return (
    <ShaderGradientCanvas style={{ position: 'fixed', inset: 0 }}>
      <ShaderGradient 
        control='query' 
        urlString='https://www.shadergradient.co/customize?animate=on&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1' 
      />
    </ShaderGradientCanvas>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
