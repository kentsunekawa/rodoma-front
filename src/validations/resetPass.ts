import vest, { test, enforce } from "vest";
import isEmail from "validator/es/lib/isEmail";
import { VALIDATE_ERROR_MESSAGES } from "utils/messages";

import { ResetPassInfo } from "types";

enforce.extend({ isEmail });

const suite = vest.create("signup", (resetPassInfo: ResetPassInfo) => {
  test("email", VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(resetPassInfo.email).isNotEmpty();
  });
  test("email", VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(resetPassInfo.email).isEmail();
  });
  test("password", VALIDATE_ERROR_MESSAGES.password_required, () => {
    enforce(resetPassInfo.password).isNotEmpty();
  });

  test("password", VALIDATE_ERROR_MESSAGES.password_shorter, () => {
    enforce(resetPassInfo.password).longerThanOrEquals(8);
  });

  if (resetPassInfo.password) {
    test(
      "password_confirmation",
      VALIDATE_ERROR_MESSAGES.password_not_match,
      () => {
        enforce(resetPassInfo.password_confirmation).equals(
          resetPassInfo.password
        );
      }
    );
  }
});

export default suite;
