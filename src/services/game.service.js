import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const searchGames = async (searchText) => {
  const gamesCollection = collection(db, 'games');
  const q = query(
    gamesCollection,
    where('title', '>=', searchText),
    where('title', '<=', searchText + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);
  const games = [];
  querySnapshot.forEach((doc) => {
    games.push({ id: doc.id, ...doc.data() });
  });

  return games;
};
