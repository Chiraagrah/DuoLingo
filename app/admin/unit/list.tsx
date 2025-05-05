import {Datagrid, List, NumberField, ReferenceArrayField, TextField} from "react-admin";

export const UnitList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>
                <TextField source="title"/>
                <TextField source="description"/>
                <ReferenceArrayField 
                    source="courseId" 
                    reference="courses"/>
                <NumberField source="order"/>
            </Datagrid>
        </List>
    );
};