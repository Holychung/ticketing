import { Publisher, Subjects, TicketUpdatedEvent } from '@holy-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
