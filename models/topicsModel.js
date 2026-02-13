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
    )}
    returning *`

    return topicList[0];
}

export const topicGet = async () => {
const topics = await sql`
select * from topics
`

return topics;
}