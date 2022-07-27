// Hooks
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
// Redux selectors
import contactSelectors from 'redux/contacts/contactSelectors';
// RTK Query hooks
import { useFetchContactsQuery } from 'services/phoneBook';
// Create selector
import { createSelector } from '@reduxjs/toolkit';

const useContacts = () => {
  const filter = useSelector(contactSelectors.getFilter);

  const selectFilteredContacts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (contacts, filter) => {
        return (
          contacts?.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useFetchContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: selectFilteredContacts(result, filter),
      };
    },
  });
};

export default useContacts;
