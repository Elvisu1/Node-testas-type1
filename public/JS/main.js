console.log('front');
const URL = 'http://localhost:3000/groups';

// fetch all groups
async function fetchData(){
    const resp = await fetch(`${URL}/all`);
    const dataFromResp = await  resp.json();
    return dataFromResp
}
async function init(){
    getGroups();

}
init();

async function getGroups(){

    const data = await fetchData()
    console.log('data', data)

}
