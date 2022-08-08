export type FieldTypes = {
  [key: string]: any;
};

export type JengaFieldData<Name extends string | number | symbol, Value> = {
  readonly name: Name;
  errors: string[];
  value?: Value;
  touched?: boolean;
  rules?: any[];
  validating?: boolean;
};

export type Fields = Record<keyof FieldTypes, JengaFieldData<string, any>>;

export type SetFieldsArrType<
  T extends FieldTypes,
  Name extends keyof T,
> = JengaFieldData<Name, T[Name]>;
