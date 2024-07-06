import React, { useRef, useState,useEffect, Fragment } from "react";

import "./ImageUpload";
import Button from "../Buttons/Button";

const ImageUpload = ({file, setFile, id}) => {

    
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if(!file){
        return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHanler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if(event.target.files && event.target.files.length === 1 ){
        pickedFile = event.target.files[0];
        setFile(pickedFile);
        setIsValid(true);
        fileIsValid = true;
    }
    else {
        setIsValid(false);
        fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, isValid);

}

  return (
    <div className="bg-fuchsia-200">
    <Fragment >
      <input
        id={id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHanler}
      />
      <div className={`image-upload center bg-fuchsia-200 `}>
        <div className="image-upload__preview mb-4">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p className="text-center">Please Pick Cover Image</p>}
        </div>
        <div className="w-[100%] flex justify-center mb-4">
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE{" "}
        </Button>
        </div>
      </div>
      {/* {!isValid && <p>Please pick an image</p>} */}
      </Fragment>
      </div>
    
  );
};

export default ImageUpload;
