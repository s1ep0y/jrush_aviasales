export default {
    searchIdUrl: () => 'https://front-test.beta.aviasales.ru/search',
    ticketsUrl: (searchId) => ['https://front-test.beta.aviasales.ru/tickets?searchId=', searchId].join('')
}