var c=0;

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    //event.currentTarget.style.backgroundColor = 'yellow';
    event.dataTransfer.dropEffect = "copy";
  }
  function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", c);
    c++;
    if (id=="start-end") {
      newDiv.setAttribute("class", "start-end");
      newDiv.setAttribute("data-bs-toggle", "modal");
      newDiv.setAttribute("data-bs-target", "#exampleModal");
      var newContent = document.createTextNode("Inicio/Final");
      newDiv.appendChild(newContent); //añade texto al div creado.
    }
    if (id=="proceso") {
      newDiv.setAttribute("class", "proceso");
      newDiv.setAttribute("data-bs-toggle", "modal");
      newDiv.setAttribute("data-bs-target", "#exampleModal");
      var newContent = document.createTextNode("Proceso");
      newDiv.appendChild(newContent); //añade texto al div creado.
    }
    if (id=="entrada") {
      newDiv.setAttribute("class", "entrada");
      newDiv.setAttribute("data-bs-toggle", "modal");
      newDiv.setAttribute("data-bs-target", "#exampleModal");
      var newContent = document.createTextNode("Entrada");
      newDiv.appendChild(newContent); //añade texto al div creado.
    }
    if (id=="desicion") {
      newDiv.setAttribute("class", "desicion");
      newDiv.setAttribute("data-bs-toggle", "modal");
      newDiv.setAttribute("data-bs-target", "#exampleModal");
      var newContent = document.createTextNode("Desicion");
      newDiv.appendChild(newContent); //añade texto al div creado.
    }
    const dropzone = event.target;
    dropzone.appendChild(newDiv);
    event.dataTransfer.clearData();
  }
  
  /*function checkCookie() {
    let dato = getCookie("dato");
    if (dato != "") {
      setCookie("dato", dato++);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }*/

  var exampleModal = document.getElementById('exampleModal');
  var actualID;
  exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var id=button.getAttribute('id')
    actualID=id; 
    let elementStyle = window.getComputedStyle(button);
    let elementColor = elementStyle.getPropertyValue('color');
    let elBackC = elementStyle.getPropertyValue('background-color');
    // Update the modal's content.
    var cT = exampleModal.querySelector('#cT');
    var cB = exampleModal.querySelector('#cB');
    var modalBodyInput = exampleModal.querySelector('#message-text');

    //modalTitle.textContent = 'New message to ' + id
    modalBodyInput.value = button.textContent;
    cT.value=rgb2hex(elementColor);
    cB.value=rgb2hex(elBackC);
  });
  function eliminar(){
    var el = document.getElementById(actualID);
    el.remove();
  }
  function cambiar(){
    let cT=document.getElementById('cT').value;
    let cB;document.getElementById('cB').value;
    let t=document.getElementById('message-text').value;

    let element=document.getElementById(actualID);
    element.style.color=cT;
    element.style.backgroundColor=cB;
    element.innerHTML=t;

  }

  function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
