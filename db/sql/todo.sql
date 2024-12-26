CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    assignee VARCHAR(255),
    status VARCHAR(50) NOT NULL CHECK (status IN ('incomplete', 'complete'))
);
