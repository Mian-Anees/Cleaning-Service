import { Otp as TOtp } from "../api/otp/Otp";

export const OTP_TITLE_FIELD = "id";

export const OtpTitle = (record: TOtp): string => {
  return record.id?.toString() || String(record.id);
};
