import {SimpleForm, TextInput, required, ReferenceInput, NumberInput, SelectInput, Edit} from "react-admin";

export const ChallengEdit = () => {
    return(
        <Edit>
            <SimpleForm>
                <NumberInput
                    source="id" 
                    validate={[required()]} 
                    label = "Id"
                />
                <TextInput 
                    source="question" 
                    validate={[required()]} 
                    label = "Question"
                />
                <SelectInput 
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
                    validate={[required()]}
                />
                <ReferenceInput 
                    source="lessonId"
                    reference="lessons"
                />
                <NumberInput 
                    source="order"
                    validate={[required()]}
                    label="order" 
                /> 
            </SimpleForm>
        </Edit>
    );
};