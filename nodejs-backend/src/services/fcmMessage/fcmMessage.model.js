
    module.exports = function (app) {
        const modelName = "fcm_message";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , required: true, comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
body: { type:  String , required: true, comment: "Body, inputTextarea, false, true, true, true, true, true, true, , , , ," },
recipients: { type: Schema.Types.ObjectId, ref: "users", description: "isArray", comment: "Recipients, dropdown, false, true, true, true, true, true, true, users, users, one-to-one, name," },
image: { type:  String , comment: "Image, image, false, true, true, true, true, true, true, , , , ," },
from: { type: Schema.Types.ObjectId, ref: "users", comment: "From, dropdown, false, true, true, true, true, true, true, users, users, one-to-one, name," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };