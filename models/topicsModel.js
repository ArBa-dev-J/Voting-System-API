import { sql } from "../db.js";

export const postNewTopic = async (newTopic) => {
    const { title, description, options } = newTopic;

    const topic = { title, description, options };

    const topicList = await sql`
    insert into topics ${sql(
        topic,
        "title",
        "description",
        "options"
    )}`

    return topicList[0];
}