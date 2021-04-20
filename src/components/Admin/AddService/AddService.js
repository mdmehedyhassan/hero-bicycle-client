import React, { useState } from 'react';

const AddService = () => {
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('File', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="d-flex row"> 
                    <div className="mb-3 col-md-6">
                        <label  className="form-label">name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" placeholder="name" name="name" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label  className="form-label">Photo upload</label>
                        <input onChange={handleFileChange} type="file" className="form-control" />
                    </div>
                    
                </div>
                <div>
                <div className="mb-3">
                        <label  className="form-label">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" placeholder="Description" name="description" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddService;