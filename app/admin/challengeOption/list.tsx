import {Datagrid, List, NumberField, ReferenceArrayField, TextField, BooleanField} from "react-admin";

export const ChallengeOptionList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>
                <TextField source="text"/>
                <BooleanField
                    source="correct"
                />
                <ReferenceArrayField 
                    source="challengeId" 
                    reference="challenges"/>
                <TextField source="imageSrc" />
                <TextField source="audioSrc" />
            </Datagrid>
        </List>
    );
};