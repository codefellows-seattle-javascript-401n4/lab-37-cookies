401 JS --  Lab 37 auth/cookies
===
#### setup:
.env file:
- PORT=5000
- DB_URL=mongodb://localhost:27017/visual_files_dev
- APP_SECRET=thisissupersecret
- NODE_ENV=dev
- API_URL=http://localhost:5000/api/v1
- AUTH_URL=http://localhost:5000/api/v1
- CORS_ORIGINS=http://localhost:8080

- in `/client`, run `npm run watch`
- in `/server`, run `npm run mongo`, and `npm run dev`

login, or sign up, then enter metadata about a file.
