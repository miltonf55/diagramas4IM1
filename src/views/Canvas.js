function Canvas() {
    return (
        <div
            className="Canvas"
            onDragOver={onDragOver()}
            onDrop={onDrop()}
        >
        </div>
    );
}

export default Canvas;
