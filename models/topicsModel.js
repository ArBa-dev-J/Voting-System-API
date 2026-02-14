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

export const topicGet = async ({ title, description }) => {
    return await sql`
    SELECT *
    FROM topics
    WHERE 1=1
    ${title ? sql`AND title ILIKE ${'%' + title + '%'}` : sql``}
    ${ description ? sql`AND description ILIKE ${'%' + description + '%'}` : sql``}
  `;

//     return await sql`
//     SELECT *
//     FROM topics
//   `;
}