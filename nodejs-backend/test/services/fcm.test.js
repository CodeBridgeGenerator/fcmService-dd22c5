const assert = require("assert");
const app = require("../../src/app");

describe("fcm service", () => {
  let thisService;
  let fcmCreated;

  beforeEach(async () => {
    thisService = await app.service("fcm");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (fcm)");
  });

  describe("#create", () => {
    const options = {"title":"new value","body":"new value","receipient":"aasdfasdfasdfadsfadfa","image":"new value"};

    beforeEach(async () => {
      fcmCreated = await thisService.create(options);
    });

    it("should create a new fcm", () => {
      assert.strictEqual(fcmCreated.title, options.title);
assert.strictEqual(fcmCreated.body, options.body);
assert.strictEqual(fcmCreated.receipient, options.receipient);
assert.strictEqual(fcmCreated.image, options.image);
    });
  });

  describe("#get", () => {
    it("should retrieve a fcm by ID", async () => {
      const retrieved = await thisService.get(fcmCreated._id);
      assert.strictEqual(retrieved._id, fcmCreated._id);
    });
  });

  describe("#update", () => {
    let fcmUpdated;
    const options = {"title":"updated value","body":"updated value","receipient":"345345345345345345345","image":"updated value"};

    beforeEach(async () => {
      fcmUpdated = await thisService.update(fcmCreated._id, options);
    });

    it("should update an existing fcm ", async () => {
      assert.strictEqual(fcmUpdated.title, options.title);
assert.strictEqual(fcmUpdated.body, options.body);
assert.strictEqual(fcmUpdated.receipient, options.receipient);
assert.strictEqual(fcmUpdated.image, options.image);
    });
  });

  describe("#delete", () => {
  let fcmDeleted;
    beforeEach(async () => {
      fcmDeleted = await thisService.remove(fcmCreated._id);
    });

    it("should delete a fcm", async () => {
      assert.strictEqual(fcmDeleted._id, fcmCreated._id);
    });
  });
});