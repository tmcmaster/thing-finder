class Tender
{
  constructor(source, type, availableInputs, returnAddress) {
    this.source = source;
    this.type = type;
    this.availableInputs = availableInputs;
    this.returnAddress = returnAddress
  }
}

class Bid
{
  constructor(source, tender, requiredInputs, returnAddress) {
    this.source = source;
    this.tender = tender;
    this.requiredInputs = requiredInputs;
    this.returnAddress = returnAddress;
  }
}

class StatementOfWork
{
  constructor(source, bid, paymentInputs, returnAddress) {
    this.source = source;
    this.bid = bid;
    this.paymentInputs = paymentInputs;
    this.returnAddress = returnAddress;
  }
}

class Deliverable
{
  constructor(source, sow, item) {
    this.source = source;
    this.sow = sow;
    this.item = item;
  }
}

class Item
{
  constructor(type) {
    this.type = type;
  }
}
