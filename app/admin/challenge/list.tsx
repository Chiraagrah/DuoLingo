import {Datagrid, List, NumberField, SelectField, ReferenceArrayField, TextField} from "react-admin";

export const ChallengeList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>
                <TextField source="question"/>
                <SelectField 
                    source="type"
                    choices={[
                        {
                            id:"SELECT",
                            name:"SELECT"
                        },
                        {
                            id:"ASSIST",
                            name:"ASSIST"
                        },
                    ]}
                />
                <ReferenceArrayField 
                    source="lessonId" 
                    reference="lessons"/>
                <NumberField source="order"/>
            </Datagrid>
        </List>
    );
};