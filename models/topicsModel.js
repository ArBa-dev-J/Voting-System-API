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

export const topicGet = async ({title}) => {
if (title) {
    return await sql`
      SELECT *
      FROM topics
      WHERE title ILIKE ${'%' + title + '%'}
    `;
  }

  return await sql`
    SELECT *
    FROM topics
  `;
}