
// Noakhali Donate Calculation
document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const noakhaliInputValue = getInputValueById('noakhali-input');
    if (isNaN(noakhaliInputValue) || noakhaliInputValue <= 1) {
        document.getElementById('noakhali-error-input').classList.remove('hidden')
        return alert('Invalid Input')

    }

    const noakhaliBalanceNumber = getTextValueById('noakhali-balance');
    const newBalance = noakhaliBalanceNumber + noakhaliInputValue;
    document.getElementById('noakhali-balance').innerText = newBalance;

    const mainBalance = getTextValueById('main-balance');
    const mainBalanceUpdate = mainBalance - noakhaliInputValue;
    document.getElementById('main-balance').innerText = mainBalanceUpdate;

    //  modal payments Successfully 
    my_modal_1.showModal()


    const div = document.createElement('div');
    div.className = 'bg-slate-300 p-8 rounded-lg';
    div.innerHTML = `
    <h2 class="card-title text-color text-xl font-bold">${noakhaliInputValue} Taka Donate for Flood at Nokhali, Bangladesh</h2>
    <p class="text-color font-medium text-base">Date: ${new Date().toLocaleDateString()}</p>
    `
    const historyItem = document.getElementById('history-item');
    historyItem.appendChild(div);

    document.getElementById('noakhali-input').value = '';
});


// Feni Donate Calculation
document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const feniInputValue = getInputValueById('feni-input');
    if (isNaN(feniInputValue) || feniInputValue <= 1) {
        // document.getElementById('noakhali-error-input').classList.remove('hidden')
        return alert('Invalid Input')

    }
    const feniBalanceNumber = getTextValueById('feni-balance');
    const newBalance = feniBalanceNumber + feniInputValue;
    document.getElementById('feni-balance').innerText = newBalance;

    const mainBalance = getTextValueById('main-balance');
    const mainBalanceUpdate = mainBalance - feniInputValue;
    document.getElementById('main-balance').innerText = mainBalanceUpdate;

    //  modal payments Successfully 
    my_modal_1.showModal()

    const div = document.createElement('div');
    div.className = 'bg-slate-300 p-8 rounded-lg';
    div.innerHTML = `
            <h2 class="card-title text-color text-xl font-bold">${feniInputValue} Taka Donate for Flood at Feni, Bangladesh</h2>
            <p class="text-color font-medium text-base">Date: ${new Date().toLocaleDateString()}</p>
        `
    const historyItem = document.getElementById('history-item');
    historyItem.appendChild(div);

    document.getElementById('feni-input').value = '';
});


// Quota Donate Calculation
document.getElementById('quota-btn').addEventListener('click', function () {
    const quotaInput = getInputValueById('quota-input');
    if (isNaN(quotaInput) || quotaInput <= 1) {
        // document.getElementById('noakhali-error-input').classList.remove('hidden')
        return alert('Invalid Input')

    }
    const quotaBalanceNumber = getTextValueById('quota-balance');
    const newBalance = quotaBalanceNumber + quotaInput;
    document.getElementById('quota-balance').innerText = newBalance;

    const mainBalance = getTextValueById('main-balance');
    const mainBalanceUpdate = mainBalance - quotaInput;
    document.getElementById('main-balance').innerText = mainBalanceUpdate;

    //  modal payments Successfully 
    my_modal_1.showModal()

    const div = document.createElement('div');
    div.className = 'bg-slate-300 p-8 rounded-lg';
    div.innerHTML = `
            <h2 class="card-title text-color text-xl font-bold">${quotaInput} Taka Donate for Flood at Quota Movement, Bangladesh</h2>
            <p class="text-color font-medium text-base">Date: ${new Date().toLocaleDateString()}</p>
        `
    const historyItem = document.getElementById('history-item');
    historyItem.appendChild(div);


    document.getElementById('quota-input').value = '';
})


// history btn switch 
document.getElementById('history-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('history-btn');
    historyBtn.className = 'text-xl font-semibold bg-primary-color text-color py-2 px-8 rounded-md';
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.className = "text-xl font-semibold bg-white border-solid border-2 border-primary-color b text-color py-2 px-8 rounded-md";

    const allContent = document.getElementById('all-content');
    allContent.className = 'hidden'

    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden')
});


// Donation btn switch 
document.getElementById('donation-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('donation-btn');
    historyBtn.className = 'text-xl font-semibold bg-primary-color text-color py-2 px-8 rounded-md';
    const donationBtn = document.getElementById('history-btn');
    donationBtn.className = "text-xl font-semibold bg-white border-solid border-2 border-primary-color b text-color py-2 px-8 rounded-md";

    const allContent = document.getElementById('all-content');
    allContent.classList.remove('hidden');

    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.add('hidden')


})