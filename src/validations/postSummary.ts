import vest, { test, enforce } from 'vest';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

const suite = vest.create('postSummary', (postSummary: {
  title: string
}) => {
  test('title', VALIDATE_ERROR_MESSAGES.post_title_required, () => {
    enforce(postSummary.title).isNotEmpty();
  });
  test('title', VALIDATE_ERROR_MESSAGES.post_title_over, () => {
    enforce(postSummary.title).shorterThanOrEquals(100);;
  });
});

export default suite;