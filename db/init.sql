BEGIN;

CREATE TABLE IF NOT EXISTS public.topics
(
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    description TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
    options TEXT[] NOT NULL
);

CREATE TABLE IF NOT EXISTS public.votes
(
    id SERIAL PRIMARY KEY,
    topic_id INTEGER NOT NULL,
    option TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT fk_topic
        FOREIGN KEY (topic_id)
        REFERENCES public.topics (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

COMMIT;