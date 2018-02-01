'use strict';

const superagent = require('superagent');
const server = require('../index.js');

process.env.MONGODB_URL || 'mongodb://localhost:27017/37Lab';
const mongoose = require('mongoose');
const Sushi = require('../models/sushi.js');


test('get route for all objects', () => {
  return superagent.get('http://localhost:3000/api/Sushi')
    .then( res => {
      expect(res.status).toBe(200);
    });
});

test('get route for a single object', () => {
  return superagent.get('http://localhost:3000/api/Sushi/5a727452b4f559694bfb7a36')
    .then( res => {
      expect(res.body.task).toBe('l');
      expect(res.body.description).toBe('l');
    });
});

test('post route', () => {
  return superagent.post('http://localhost:3000/api/Sushi')
    .send({task: 'groceries', description: 'food'})
    .then( res => {
      expect(res.body.task).toBe('groceries');
      expect(res.body.description).toBe('food');
    });
});

test('put route', () => {
  return superagent.put('http://localhost:3000/api/Sushi/5a7274260464c3690b77ed7b')
    .send({task: 'car', description: 'oil'})
    .then( res => {
      expect(res.body.task).toBe('car');
      expect(res.body.description).toBe('oil');
    });
});

test('delete route', () => {
  return superagent.delete('http://localhost:3000/api/Sushi/5a6be32f39f40d42f1b81ef7')
    .then( res => {
      expect(res.body.task).toBe(undefined);
      expect(res.body.description).toBe(undefined);
      expect(res.body.categoryID).toBe(undefined);
    });
});
