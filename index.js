const express = require('express');
const cors = require('cors');

const APP_PORT = process.env.APP_PORT || 5050;

express()
  .use(cors())
  .get('/health', (req, res) => res.json({ healthy: true }))
  .get('/users', (req, res) =>
    res.json({ users: [{ name: 'Ahmed' }, { name: 'Ayoub' }] })
  )
  .listen(APP_PORT, () => {
    console.log(`http://localhost:${APP_PORT}`);
  });
