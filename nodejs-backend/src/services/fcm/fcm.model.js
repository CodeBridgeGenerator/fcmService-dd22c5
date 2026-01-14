
    module.exports = function (app) {
        const modelName = "fcm";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
body: { type:  String , comment: "Body, p, false, true, true, true, true, true, true, , , , ," },
receipient: { type: Schema.Types.ObjectId, ref: "users", description: "isArray", comment: "Receipient, dropdown, false, true, true, true, true, true, true, users, users, one-to-one, name," },
image: { type:  String , comment: "Image, image, false, true, true, true, true, true, true, , , , ," },

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