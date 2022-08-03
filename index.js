exports.version = '2.13.0';

let user = null;
exports.setUser = function (newUser) {
    user = newUser;
}

exports.cache = {};
exports.user = user;
exports.language = "en-US"

// Modules
exports.transaction = require('./sdk/transaction');
exports.balance = require('./sdk/balance');
exports.boleto = require('./sdk/boleto');
exports.boletoHolmes = require('./sdk/boletoHolmes');
exports.invoice = require('./sdk/invoice');
exports.dictKey = require('./sdk/dictKey');
exports.deposit = require('./sdk/deposit');
exports.brcodePayment = require('./sdk/brcodePayment');
exports.brcodePreview = require('./sdk/brcodePreview');
exports.transfer = require('./sdk/transfer');
exports.boletoPayment = require('./sdk/boletoPayment');
exports.utilityPayment = require('./sdk/utilityPayment');
exports.paymentRequest = require('./sdk/paymentRequest');
exports.taxPayment = require('./sdk/taxPayment');
exports.darfPayment = require('./sdk/darfPayment');
exports.paymentPreview = require('./sdk/paymentPreview');
exports.webhook = require('./sdk/webhook');
exports.workspace = require('./sdk/workspace');
exports.event = require('./sdk/event');
exports.institution = require('./sdk/institution')
exports.key = require('./sdk/key.js');
exports.error = require('./sdk/error.js');
exports.organization = require('./sdk/user/organization.js')


// Classes
exports.Project = require('./sdk/user').Project;
exports.Organization = require('./sdk/user').Organization;
exports.Transaction = exports.transaction.Transaction;
exports.Balance = exports.balance.Balance;
exports.Boleto = exports.boleto.Boleto;
exports.BoletoHolmes = exports.boletoHolmes.BoletoHolmes;
exports.Invoice = exports.invoice.Invoice;
exports.DictKey = exports.dictKey.DictKey;
exports.Deposit = exports.deposit.Deposit;
exports.BrcodePayment = exports.brcodePayment.BrcodePayment;
exports.BrcodePreview = exports.brcodePreview.BrcodePreview;
exports.BoletoPayment = exports.boletoPayment.BoletoPayment;
exports.UtilityPayment = exports.utilityPayment.UtilityPayment;
exports.PaymentRequest = exports.paymentRequest.PaymentRequest;
exports.TaxPayment = exports.taxPayment.TaxPayment;
exports.DarfPayment = exports.darfPayment.DarfPayment;
exports.Transfer = exports.transfer.Transfer;
exports.Webhook = exports.webhook.Webhook;
exports.Workspace = exports.workspace.Workspace;
exports.Event = exports.event.Event;
exports.Institution = exports.institution.Institution;
exports.PaymentPreview = exports.paymentPreview.PaymentPreview;
