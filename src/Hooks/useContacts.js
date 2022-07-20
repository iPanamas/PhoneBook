// Hooks
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// RTK Query hooks
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';

// Create selector
import { createSelector } from '@reduxjs/toolkit';

const useContacts = () => {
  const filter = useSelector(state => state.filter.value);

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
