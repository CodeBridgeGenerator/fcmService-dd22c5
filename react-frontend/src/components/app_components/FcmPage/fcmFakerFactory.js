
import { faker } from "@faker-js/faker";
export default (user,count,receipientIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.lorem.sentence(""),
body: faker.lorem.sentence(""),
receipient: receipientIds[i % receipientIds.length],
image: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
