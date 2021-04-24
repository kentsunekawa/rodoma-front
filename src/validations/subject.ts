import vest, { test, enforce } from 'vest';
import { Subject } from 'types';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

const suite = vest.create(
  'subject',
  (subject: { title: string }, subjects: Subject[], currentSubject: number | null) => {
    test('title', VALIDATE_ERROR_MESSAGES.required, () => {
      enforce(subject.title).isNotEmpty();
    });
    test('title', VALIDATE_ERROR_MESSAGES.subject_title_over, () => {
      enforce(subject.title).shorterThanOrEquals(30);
    });

    test('title', VALIDATE_ERROR_MESSAGES.subject_title_used, () => {
      let isValid = true;
      subjects.forEach((otherSubject, i) => {
        if (currentSubject !== i && otherSubject.title === subject.title) isValid = false;
      });
      if (!isValid) return isValid;
    });
  }
);

export default suite;
