import React, { useState } from 'react';

const MakeAdmin = () => {
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

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('File', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
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
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleBlur} type="text" className="form-control" placeholder="email" name="email" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" placeholder="name" name="name" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Photo upload</label>
                    <input onChange={handleFileChange} type="file" className="form-control"  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;