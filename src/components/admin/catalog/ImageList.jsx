import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ImagePreview from './ImagePreview';

const ImageList = ({ images, onImageDelete }) => (
    <DragDropContext onDragEnd={onImageReorder}>
        <Droppable droppableId="image-list" direction="horizontal">
            {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={{ display: 'flex', gap: '10px' }}>
                {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                    {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <ImagePreview image={image} onDelete={onImageDelete} />
                    </div>
                    )}
                </Draggable>
                ))}
                {provided.placeholder}
            </div>
            )}
        </Droppable>
    </DragDropContext>
);

export default ImageList