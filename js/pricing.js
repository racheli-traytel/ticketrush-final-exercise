// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 6;

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  const amount = Number(qty);
  if (!Number.isFinite(amount) || amount < 1) return null;

  const limit = maxTickets(Boolean(isMember));
  if (amount > limit) return null;

  const memberDiscount = isMember ? 0.2 : 0;
  const studentDiscount = isStudent ? 0.15 : 0;
  const discountRate = Math.max(memberDiscount, studentDiscount);
  const discountedTicket = TICKET_PRICE * (1 - discountRate);

  return Number((amount * (discountedTicket + SERVICE_FEE)).toFixed(2));
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_MAX_TICKETS, maxTickets, calcTotal };
}
