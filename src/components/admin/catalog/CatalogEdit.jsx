import React, { useState } from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput, useNotify } from 'react-admin';
import ImageDropzone from './ImageDropZone';
import ImageList from './ImageList';

const ProductEdit = (props) => {
    const notify = useNotify();
    const [uploadedImages, setUploadedImages] = useState([]);
  
    const onImageDrop = (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) => ({
        id: file.name,
        url: URL.createObjectURL(file),
        file,
      }));
      setUploadedImages([...uploadedImages, ...newImages]);
    };
  
    const onImageDelete = (id) => {
      const updatedImages = uploadedImages.filter((image) => image.id !== id);
      setUploadedImages(updatedImages);
    };
  
    const onImageReorder = (result) => {
      if (!result.destination) return;
  
      const reorderedImages = Array.from(uploadedImages);
      const [removed] = reorderedImages.splice(result.source.index, 1);
      reorderedImages.splice(result.destination.index, 0, removed);
  
      setUploadedImages(reorderedImages);
    };
  
    const handleSave = (values) => {
      // Save the product and images to the database
      // You'll need to implement this part based on your API and data structure
  
      // Clear uploaded images after saving
      setUploadedImages([]);
      notify('Product updated', 'info');
    };
  
    return (
      <Edit {...props}>
        <SimpleForm save={handleSave}>
          <TextInput source="name" />
          <TextInput source="description" />
          <NumberInput source="price" />
          <BooleanInput source="isAvailable" />
        </SimpleForm>
      </Edit>
    );
  };
  
  export default ProductEdit;