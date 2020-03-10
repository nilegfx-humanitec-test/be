const express = require('express');
const cors = require('cors');

const BE_PORT = process.env.BE_PORT || 5050;

express()
  .use(cors())
  .get('/health', (req, res) => res.json({ healthy: true }))
  .get('/users', (req, res) =>
    res.json({ users: [{ name: 'Ahmed' }, { name: 'Ayoub' }] })
  )
  .listen(BE_PORT, () => {
    console.log(`http://localhost:${BE_PORT}`);
  });
