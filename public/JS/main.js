console.log('front');
const URL = 'http://localhost:3000/groups';

// elements
const groupsContainer = document.querySelector('.groups-container')





// fetch all groups
async function fetchData(urlPath){
    const resp = await fetch(`${URL}${urlPath}`);
    const dataFromResp = await  resp.json();
    return dataFromResp
}
async function init(){
    const allGroupsArr = await getGroups() ;
    // console.log(allGroupsArr)
    generateGroups(allGroupsArr,groupsContainer)

}
init();

async function getGroups(){

    const data = await fetchData('/all')
    // console.log('data', data)
    if(data.msg === 'success'){
        return data.data;
    }
    throw new Error('no groups found');

}

// show group cards

function generateGroups (dataArr, dest){

    dest.innerHTML = dataArr.map(
        (group) => `
         <div class="card">
                <h3> <a style="text-decoration: none" href="singleGroup.html">ID:${group.id}</a></h3>
                <p> <a style="text-decoration: none" href="singleGroup.html">${group.name}</a></p>

            </div>
        
        `,

    ).join('')

}

