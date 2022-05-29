import { Publisher, Subjects, TicketCreatedEvent } from '@holy-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
