import { registerDecorator, ValidationArguments } from 'class-validator';

export function IsNumberOrSelectedString(values: string[]) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsStringOrNumber',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const validate =
            typeof args.value === 'number' || values.includes(args.value);

          if (validate) return true;
          return false;
        },
      },
    });
  };
}
