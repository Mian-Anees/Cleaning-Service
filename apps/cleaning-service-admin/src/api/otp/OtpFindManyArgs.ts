import { OtpWhereInput } from "./OtpWhereInput";
import { OtpOrderByInput } from "./OtpOrderByInput";

export type OtpFindManyArgs = {
  where?: OtpWhereInput;
  orderBy?: Array<OtpOrderByInput>;
  skip?: number;
  take?: number;
};
