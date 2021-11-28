function Selector() {
  return (
    <div className="Selector">
        <div id="explicacion">
            <p className="text-center">Center aligned text on all viewport sizes.</p>
        </div>
        <div
        id="start-end"
        className="text-center fs-4"
        draggable="true"
        onDragStart={onDragStart(event)}
        >Inicio / Final
        </div>
        <div
        id="proceso"
        className="text-center fs-4"
        draggable="true"
        ondragstart="onDragStart(event);"
        >Proceso</div>
        <div
        id="desicion"
        className="text-center fs-4"
        draggable="true"
        ondragstart="onDragStart(event);"
        >Desición</div>
        <div
        id="entrada"
        className="text-center fs-4"
        draggable="true"
        ondragstart="onDragStart(event);"
        >Entrada / Salida</div>
    </div>
  );
}

export default Selector;