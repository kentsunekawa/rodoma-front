import vest, { test, enforce } from 'vest';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

const suite = vest.create('subject', (subject: { title: string }) => {
  test('title', VALIDATE_ERROR_MESSAGES.required, () => {
    enforce(subject.title).isNotEmpty();
  });
  test('title', VALIDATE_ERROR_MESSAGES.subject_title_over, () => {
    enforce(subject.title).shorterThanOrEquals(30);
  });
});

export default suite;
