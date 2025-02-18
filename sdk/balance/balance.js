const rest = require('../utils/rest.js');
const check = require('../utils/check.js');
const Resource = require('../utils/resource.js').Resource


class Balance extends Resource {
    /**
     *
     * Balance object
     *
     * @description The Balance object displays the current balance of the workspace,
     * which is the result of the sum of all transactions within this
     * workspace. The balance is never generated by the user, but it
     * can be retrieved to see the information available.
     *
     * Attributes (return-only):
     * @param id [string, default null]: unique id returned when Balance is created. ex: '5656565656565656'
     * @param amount [integer, default null]: current balance amount of the workspace in cents. ex: 200 (= R$ 2.00)
     * @param currency [string, default null]: currency of the current workspace. Expect others to be added eventually. ex: 'BRL'
     * @param updated [string, default null]: update datetime for the balance. ex: '2020-03-10 10:30:00.000'
     *
     */
    constructor(id, amount, currency, updated) {
        super(id);
        this.amount = amount;
        this.currency = currency;
        this.updated = check.datetime(updated);
    }
}

exports.Balance = Balance;
let resource = {'class': exports.Balance, 'name': 'Balance'};


exports.get = async function ({user} = {}) {
    /**
     *
     * Retrieve the Balance object
     *
     * @description Receive the Balance object linked to your workspace in the Stark Bank API
     *
     * Parameters (optional):
     * @param user [Project object]: Project object. Not necessary if starkbank.user was set before function call
     * @param user [Organization/Project object]: Organization or Project object. Not necessary if starkbank.user was set before function call
     * 
     * Return:
     * @returns Balance object with updated attributes
     *
     */
    let balance = await rest.getList(resource, 100, user).next();
    return balance['value'];
};
