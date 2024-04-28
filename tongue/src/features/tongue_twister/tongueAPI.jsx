export function fetchTwisterEnglish() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/TongueTwisterEnglish') 
    const data = await response.json()
    resolve({data})
  }
  );
}