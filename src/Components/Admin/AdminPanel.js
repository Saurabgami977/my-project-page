import { Button } from '@material-ui/core'
import React from 'react'
import Input from '../UI/Input/Input'
import SimpleSelect from '../UI/Select/Select'

function AdminPanel() {
    return (
        <div>
            <SimpleSelect />
            <Input label="Project Name" />
            <Input label="Github" />
            <Input label="Live Demo" />
            <Input label="Description" multiline='true' />
            <Input label="Tools used" multiline />
            <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
            </Button>
        </div>
    )
}

export default AdminPanel
