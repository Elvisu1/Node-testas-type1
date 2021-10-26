console.log('user groups');
const URL = 'http://localhost:3000/bills/all';

// elements
const groupsContainer = document.querySelector('.bills-container')





// fetch all groups
async function fetchData(urlPath = ''){
    const resp = await fetch(`${URL}${urlPath}`);
    const dataFromResp = await  resp.json();
    return dataFromResp
}
async function init(){
    const allBillsArr = await getBills() ;
    console.log(allBillsArr)
    generateBills(allBillsArr,groupsContainer)

}
init();

async function getBills(){

    const data = await fetchData()
    // console.log('data', data)
    if(data.msg === 'success'){
        return data.data;
    }
    throw new Error('no groups found');

}

// show group cards

function generateBills (dataArr, dest){

    dest.innerHTML = dataArr.map(
        (bill) => `
        <div class="line">
            <p>${bill.amount}</p>
            <p>${bill.description}</p>
            <p>${bill.group_id}</p>


        </div>

        `,

    ).join('')

}
