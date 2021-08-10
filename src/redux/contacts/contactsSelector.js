export const getFiltered = (state) => state.phonebook.filter;

export const getContactsList = (state) => state.phonebook.contacts;

export const getFiltredContacts = (state) => {
  const filter = getFiltered(state);
  const contacts = getContactsList(state);

  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizeFilter) ||
      number.includes(normalizeFilter)
  );
};
