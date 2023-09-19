import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const OtpEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="code" source="code" />
      </SimpleForm>
    </Edit>
  );
};
