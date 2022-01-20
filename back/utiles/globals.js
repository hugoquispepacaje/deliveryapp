const messageValidator = {
  max: {
    string: 'El campo :attribute debe tener maximo :max caracteres.',
    numeric: 'El campo :attribute debe ser menor a :max.',
  },
  min: {
    string: 'El campo :attribute debe tener minimo :min caracteres.',
    numeric: 'El campo :attribute debe ser mayor a :min.',
  },
  numeric: 'El campo :attribute es obligatorio',
  required: 'El campo :attribute es obligatorio',
  string: 'El campo :attribute debe ser string',
  boolean: 'El campo :attribute debe ser booleano',
  date: 'El campo :attribute debe ser una fecha',
  url: 'El campo :attribute debe tener formato de url',
  email: 'El campo :attribute debe tener formato correo@correo.com',
};

export {
  messageValidator,
}