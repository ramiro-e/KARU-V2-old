import React from 'react';
import Dropzone from 'react-dropzone';

const ImageDropzone = ({ onDrop }) => (
    <Dropzone accept="image/*" multiple onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag & drop some images here, or click to select files</p>
        </div>
        )}
    </Dropzone>
);

export default ImageDropzone