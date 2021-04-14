import vest, { test, enforce } from 'vest';

const validate = vest.create('NewUserForm', (formData) => {
  test('username', 'Must be between 2 and 10 chars', () => {
    enforce(formData.username)
      .longerThanOrEquals(2)
      .shorterThan(10);
  });

  test('username', 'username is required', () => {
    enforce(formData.username)
      .isNotEmpty();
  });

  test('password', 'Must contain at least on digit', () => {
    enforce(formData.password)
      .matches(/(?=.*[0-9])/);
  });
});

export default validate;