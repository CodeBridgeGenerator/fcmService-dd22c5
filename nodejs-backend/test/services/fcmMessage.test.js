const assert = require("assert");
const app = require("../../src/app");

describe("fcmMessage service", () => {
  let thisService;
  let fcmMessageCreated;

  beforeEach(async () => {
    thisService = await app.service("fcmMessage");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (fcmMessage)");
  });

  describe("#create", () => {
    const options = {"title":"new value","body":"new value","recipients":"aasdfasdfasdfadsfadfa","image":"new value","from":"aasdfasdfasdfadsfadfa"};

    beforeEach(async () => {
      fcmMessageCreated = await thisService.create(options);
    });

    it("should create a new fcmMessage", () => {
      assert.strictEqual(fcmMessageCreated.title, options.title);
assert.strictEqual(fcmMessageCreated.body, options.body);
assert.strictEqual(fcmMessageCreated.recipients, options.recipients);
assert.strictEqual(fcmMessageCreated.image, options.image);
assert.strictEqual(fcmMessageCreated.from, options.from);
    });
  });

  describe("#get", () => {
    it("should retrieve a fcmMessage by ID", async () => {
      const retrieved = await thisService.get(fcmMessageCreated._id);
      assert.strictEqual(retrieved._id, fcmMessageCreated._id);
    });
  });

  describe("#update", () => {
    let fcmMessageUpdated;
    const options = {"title":"updated value","body":"updated value","recipients":"345345345345345345345","image":"updated value","from":"345345345345345345345"};

    beforeEach(async () => {
      fcmMessageUpdated = await thisService.update(fcmMessageCreated._id, options);
    });

    it("should update an existing fcmMessage ", async () => {
      assert.strictEqual(fcmMessageUpdated.title, options.title);
assert.strictEqual(fcmMessageUpdated.body, options.body);
assert.strictEqual(fcmMessageUpdated.recipients, options.recipients);
assert.strictEqual(fcmMessageUpdated.image, options.image);
assert.strictEqual(fcmMessageUpdated.from, options.from);
    });
  });

  describe("#delete", () => {
  let fcmMessageDeleted;
    beforeEach(async () => {
      fcmMessageDeleted = await thisService.remove(fcmMessageCreated._id);
    });

    it("should delete a fcmMessage", async () => {
      assert.strictEqual(fcmMessageDeleted._id, fcmMessageCreated._id);
    });
  });
});