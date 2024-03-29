import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // Create a connection to the database and specify the version.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction with read-write privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open the 'jate' object store.
  const store = tx.objectStore('jate');
  // Use the .put() method to add or update a record with the provided content and ID.
  const request = store.put({ content, id: 1 });
  const result = await request;
  console.log('Data saved to the database', result);

  // Log a message indicating that the function has been executed.
  console.error('putDb implemented');
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
