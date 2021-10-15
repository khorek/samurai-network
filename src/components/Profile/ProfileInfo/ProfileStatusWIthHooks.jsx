import React, { useState } from 'react';
import { useEffect } from 'react';
import { InputGroup , FormControl } from 'react-bootstrap';


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    // Хук useEffect выполняется после каждой отрисовки (Если не передать зависимость)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    // Зависимость - передаётся в массив. Зависимость - то что должно измениться для запуска useEffecta
    // Пустой массив лучше не передавать.

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span style={{ border: '1px solid red', width: '250px', padding: '2px' }} onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;