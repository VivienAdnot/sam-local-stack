const inMemoryNotes = [{ id: '1', note: 'hello world' }];

const handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inMemoryNotes)
  };
};

module.exports = { handler };