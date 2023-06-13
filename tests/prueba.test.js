function sum(a, b) {
    return a + b;
  }
  
  test("La función sum debe sumar correctamente dos números", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

 //const { nextFact, saveFact } = require("./api");


import { fireEvent } from '@testing-library/dom';
import '../js/api';

describe('api', () => {
  let nextFactButton;
  let saveFactButton;
  let textContainer;
  let savedTextsContainer;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="btn-next">Next Fact</button>
      <button id="favorite">Save Fact</button>
      <div id="elem"></div>
      <div id="savedTextList"></div>
    `;

    nextFactButton = document.getElementById('btn-next');
    saveFactButton = document.getElementById('favorite');
    textContainer = document.getElementById('elem');
    savedTextsContainer = document.getElementById('savedTextList');
  });

  test('Hacer clic en el botón "Next Fact" debe actualizar el contenido del contenedor de texto', () => {
    fireEvent.click(nextFactButton);

    expect(textContainer.innerHTML).not.toBe('');
  });

  test('Hacer clic en el botón "Save Fact" debe guardar el texto actual en el contenedor de textos guardados', () => {
    fireEvent.click(nextFactButton);

    const currentText = textContainer.innerHTML;

    fireEvent.click(saveFactButton);

    expect(savedTextsContainer.innerHTML).toContain(currentText);

    expect(textContainer.innerHTML).toBe('');
  });
});
