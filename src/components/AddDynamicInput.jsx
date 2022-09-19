import React, { useState } from "react";
function AddDynamicInput() {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    console.log(val, "data-")
    return (
        <>
            <div className="container col-lg-7 mt-5">
                <button className="btn btn-secondary" onClick={() => handleAdd()}>Add</button>
                {val.map((data, i) => {
                    return (
                        <div>
                            <input className="form-control mt-2" value={data} onChange={e => handleChange(e, i)} />
                            <button className="btn btn-primary mt-2" onClick={() => handleDelete(i)}>x</button>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
export default AddDynamicInput;