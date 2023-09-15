import React from 'react';

const ImagePreview = ({ image, onDelete }) => (
    <div>
        <img src={image.url} alt="Product" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <div onClick={() => onDelete(image.id)} style={{ cursor: 'pointer' }} >🗑️</div>
    </div>
);

export default ImagePreview