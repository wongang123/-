1.개발 기획 - 게임을 좋아하기 때문에 게임을 하는데 도움이 되는 앱을 만들자고 생각하게 되었다. 게임을 하는 사람들의 큰 고민 중 하나가 어떤 게임을 할 것인가에 대한 고민이다. 이에 어떤 장르에 어떤 게임이 있고, 그 게임의 내용이 어떤건지를 알려주는 앱이 있으면 좋을 것 같다고 생각했다.
2.처음으로 gemini에 입력한 프롬포트는 "나는 게임 검색 app을 만들고 싶어. gemini cli의 명령어를 사용하고 프로트엔드는 Node.js, Tailwind CSS, Shadcn/UI를 사용하고 Firebase를 DB로 설정하려고 해 Gemini cli를 사용하는 GEMINI.md 파일도 만들어"이다.
3.게임 검색 애플리케이션을 만들기 위해 git hub에서 필요한 소스코드를 알려줘
 Firebase 연결:Write a function in src/firebase/config.js to initialize Firebase with environment variables and export the Firestore instance.
 
 Shell ls -F src (Lists the contents of the 'src' directory.)                                      
  ls: cannot access 'src': No such file or directory                                                
✦ OK, it looks like the src directory doesn't exist. I will create the src/firebase directory structure
  first, and then create the config.js file with the Firebase initialization code.
Shell mkdir -p src/firebase (Creates the directory structure 'src/firebase'.)                     
WriteFile Writing to src/firebase/config.js                                                       
  1 import { initializeApp } from "firebase/app";                                                  
  2 import { getFirestore } from "firebase/firestore";                                             
  3                                                                                     4 const firebaseConfig = {                                                                       
   5   apiKey: process.env.REACT_APP_API_KEY,                                          
   6   authDomain: process.env.REACT_APP_AUTH_DOMAIN,                                   
   7   projectId: process.env.REACT_APP_PROJECT_ID,                                     
   8   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,                             
   9   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,                    
   10   appId: process.env.REACT_APP_APP_ID,                                            
  };                                                                                    11    12                                                                                   13 const app = initializeApp(firebaseConfig);                                         
   14 const db = getFirestore(app);                                                     15                                                                                   16 export {db };    

4.프로젝트의 소스코드인 src -dir코드를 추가해줘

 ✓  WriteFile Writing to src/firebase/config.js                                                       
 1 import { initializeApp } from "firebase/app";                                  
 2 import { getFirestore } from "firebase/firestore";                       
 3                                                                                      
 4 const firebaseConfig = 
 {                                                         
│     5   apiKey: process.env.REACT_APP_API_KEY,                                   
│     6   authDomain: process.env.REACT_APP_AUTH_DOMAIN,                         
│     7   projectId: process.env.REACT_APP_PROJECT_ID,                              
│     8   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,                        
│     9   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,               
│    10   appId: process.env.REACT_APP_APP_ID,                                  
 };                                                                              12     
    11 const app = initializeApp(firebaseConfig);                                    
    12 const db = getFirestore(app);                                           13                                                                                  14     export { db };                                                             
✦ src/firebase/config.js 파일이 생성되었습니다.
5.In src/services/game.service.js, write a searchGames function that queries the 'games' Firestore collection where the 'title' field contains the user's search query.

✓  Shell mkdir -p src/services (Creates the directory 'src/services'.)
✓  WriteFile Writing to src/services/game.service.js                                                                                      1 import { db } from '../firebase/config';                                       
2 import { collection, query, where, getDocs } from 'firebase/firestore';                 3                                                                                       4 export const searchGames = async (searchText) => 
{                 
  5   const gamesCollection = collection(db, 'games');        
  6   const q = query
       (                                                   
  7  gamesCollection,                                                                
  8     where('title', '>=', searchText),                                              
  9     where('title', '<=', searchText + '\uf8ff')                                     
  10   );                                                                                                                                                                   11   const querySnapshot = await getDocs(q);                                  
  12   const games = [];                                                        
  13   querySnapshot.forEach((doc) => 
    {                                             
     14     games.push({ id: doc.id, ...doc.data() });                                 
    });                                                                           
    15                                                               
    16   return games;                                                             
 };                                                                                  
✦ OK. I have created the searchGames function in src/services/game.service.js.
