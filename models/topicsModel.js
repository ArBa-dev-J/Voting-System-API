import { sql } from "../db.js";
// post new topic 
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

// post new vote on the topic

export const postNewVote = async (newVote, { id }) => {
  const vote = {
    topic_id: id,  
    option: newVote.option
  };

  const [voteOption] = await sql`
    insert into votes ${sql(vote)}
    returning *
  `;

  return voteOption;
};

// get topics with title and description filters
export const topicGet = async ({ title, description }) => {
    return await sql`
    SELECT *
    FROM topics
    WHERE 1=1
    ${title ? sql`AND title ILIKE ${'%' + title + '%'}` : sql``}
    ${description ? sql`AND description ILIKE ${'%' + description + '%'}` : sql``}
  `;

}

// get topics by id 

export const getTopicsById = async ({ id }) => {
    return await sql`
select * from topics
where id = ${id}
`;
}
