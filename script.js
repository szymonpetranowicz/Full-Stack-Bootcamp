var cells = {}

for (var i = 0; i < 9; i++) {
  cells[i] = document.getElementsByTagName('a')[i]
}

for (i in cells){
  const cell = cells[i]
  cell.addEventListener('click',function(){
    if(cell.innerText=='X'&&cell.style.color==''){
      cell.style.color='black'
      cell.innerText = 'O'
      }
    else if (cell.innerText=='O'){
      cell.innerText= 'X'}
    else if (cell.innerText=='X'&&cell.style.color=='black'){
      cell.style.color=''
    }})

}
