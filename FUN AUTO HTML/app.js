const dropdown = Acceuil.queryselector(".dropdown");
const btnDrop = Acceuil.queryselector(".bloc-top");


let toggleIndex = 0;

btnDrop.addEventListener('click', () => {

      //console.log(dropdown.scrollHeight)

      if(toggleIndex === 0){
        dropdown.style.height = ${dropdown.scrollHeight}px;
        toggleIndex++;
      } else{
        dropdown.style.height = ${btnDrop.scrollHeight}px;
        toggleIndex--;

      }

})