import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@holy-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
