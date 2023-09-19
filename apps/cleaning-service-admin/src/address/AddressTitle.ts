import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "name";

export const AddressTitle = (record: TAddress): string => {
  return record.name?.toString() || String(record.id);
};
