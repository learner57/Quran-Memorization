import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
      name: 'quranmemorization.db', // Replace with your database name
      createFromLocation: 1, // Ensure database is loaded from assets
    },
    () => console.log('Database opened successfully'),
    (error) => console.error('Error opening database:', error)
  );
  
  if (!db) {
    console.error('Database is null. Ensure the file exists and is correctly configured.');
  }
  

// Function to fetch verses
/*export const fetchVerses = (surahId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM verses WHERE surah_id = ?',
        [surahId],
        (tx, results) => {
          const rows = results.rows;
          const verses = [];
          for (let i = 0; i < rows.length; i++) {
            verses.push(rows.item(i)); // Convert rows to an array
          }
          resolve(verses);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};*/
