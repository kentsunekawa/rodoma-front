import vest, { test, enforce } from "vest";
import isEmail from "validator/es/lib/isEmail";
import { VALIDATE_ERROR_MESSAGES } from "utils/messages";

// import { SignupInfo } from 'types';

enforce.extend({ isEmail });

const suite = vest.create("signup", (forgetPassInfo: { email: string }) => {
  test("email", VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(forgetPassInfo.email).isNotEmpty();
  });
  test("email", VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(forgetPassInfo.email).isEmail();
  });
});

export default suite;
