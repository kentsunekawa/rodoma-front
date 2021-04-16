import vest, { test, enforce } from "vest";
import isEmail from "validator/es/lib/isEmail";
import { VALIDATE_ERROR_MESSAGES } from "utils/messages";

import { SignupInfo } from "types";
import { isAnyOf } from "@reduxjs/toolkit";

enforce.extend({ isEmail });

const suite = vest.create("signup", (signupInfo: SignupInfo) => {
  test("name", VALIDATE_ERROR_MESSAGES.name_required, () => {
    enforce(signupInfo.name).isNotEmpty();
  });

  test("name", VALIDATE_ERROR_MESSAGES.name_over, () => {
    enforce(signupInfo.name).shorterThanOrEquals(30);
  });

  test("email", VALIDATE_ERROR_MESSAGES.email_required, () => {
    enforce(signupInfo.email).isNotEmpty().isEmail();
  });

  test("password", VALIDATE_ERROR_MESSAGES.password_required, () => {
    enforce(signupInfo.password).isNotEmpty();
  });

  test("password", VALIDATE_ERROR_MESSAGES.password_shorter, () => {
    enforce(signupInfo.password).longerThanOrEquals(8);
  });

  if (signupInfo.password) {
    test(
      "password_confirmation",
      VALIDATE_ERROR_MESSAGES.password_not_match,
      () => {
        enforce(signupInfo.password_confirmation).equals(signupInfo.password);
      }
    );
  }
});

export default suite;
