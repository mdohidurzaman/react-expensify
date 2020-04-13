import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    stateDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    stateDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };