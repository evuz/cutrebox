import React from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

import Cutrebox from './components/Cutrebox/Cutrebox';
import Float from './components/Float/Float';

function print() {
  html2canvas(document.body).then(canvas => {
    document.body.appendChild(canvas);
    // const img = canvas.toDataURL('image/png');
    // const doc = new jsPDF({ format: 'a3', orientation: 'landscape' });
    // doc.addImage(img, 'PNG', 10, 10);
    // doc.save();
  });
}

function App() {
  return (
    <div className="App">
      <Cutrebox />
      <Float onClick={print}>Print</Float>
    </div>
  );
}

export default App;
