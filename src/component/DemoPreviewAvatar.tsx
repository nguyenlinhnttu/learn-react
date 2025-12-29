import { useState, useEffect } from "react";

function DemoPreviewAvatar() {
    const [preview, setPreview] = useState();

    const handleSelectImage = (e) => {
       const file = e.target.files[0];
       if(!file) return;
        console.log("Selected file:", file);
        // add field preview to file object
        file.preview = URL.createObjectURL(file);
        setPreview(file);
    }

    useEffect(() => {
        // Cleanup the object URL when the component unmounts or when a new file is selected
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview.preview);
            }
        }   
      }, [preview]);

    return (
        <div>
            <h1>Demo Preview Avatar Component</h1>
            <input type="file" accept="image/*" 
             onChange={ handleSelectImage }/>

            {preview && (
                <div>
                    <h3>Preview:</h3>
                    <img src={preview.preview} alt="Preview" />
                </div>
            )}

        </div>

    
    )
}

export default DemoPreviewAvatar;