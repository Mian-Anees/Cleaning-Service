import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OtpWhereInput = {
  code?: IntNullableFilter;
  id?: StringFilter;
};
