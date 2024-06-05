function addStudent() {
  // Get form values
  const nome = document.getElementById('nome').value;
  const matricula = document.getElementById('matricula').value;
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const media = ((nota1 + nota2) / 2).toFixed(2);
  const situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

  // Create a new row and cells
  const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  const cellNome = newRow.insertCell(0);
  const cellMatricula = newRow.insertCell(1);
  const cellNota1 = newRow.insertCell(2);
  const cellNota2 = newRow.insertCell(3);
  const cellMedia = newRow.insertCell(4);
  const cellSituacao = newRow.insertCell(5);

  // Append values to the cells
  cellNome.innerText = nome;
  cellMatricula.innerText = matricula;
  cellNota1.innerText = nota1.toFixed(2);
  cellNota2.innerText = nota2.toFixed(2);
  cellMedia.innerText = media;
  cellSituacao.innerText = situacao;

  // Reset form
  document.getElementById('studentForm').reset();
}
