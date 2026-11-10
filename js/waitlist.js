function joinWaitlist(list, email) {
  const current = Array.isArray(list) ? list.slice() : [];
  const normalized = String(email || '').trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return current;
  }

  if (current.includes(normalized)) {
    return current;
  }

  return current.concat(normalized);
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
