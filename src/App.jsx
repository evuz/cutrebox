import React from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

import Cutrebox from './components/Cutrebox/Cutrebox';
import Float from './components/Float/Float';

function print() {
  html2canvas(document.querySelector('#cutrebox'), {scale: 3}).then(canvas => {
    const img = canvas.toDataURL('image/png');
    const doc = new jsPDF({ format: 'a3', orientation: 'landscape' });
    doc.addImage(img, 'PNG', 0, 0, 420, 297);
    doc.save('cutrebox');
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
