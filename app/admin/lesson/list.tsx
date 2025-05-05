import {Datagrid, List, NumberField, ReferenceArrayField, TextField} from "react-admin";

export const LessonList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>
                <TextField source="title"/>
                <ReferenceArrayField 
                    source="unitId" 
                    reference="units"/>
                <NumberField source="order"/>
            </Datagrid>
        </List>
    );
};