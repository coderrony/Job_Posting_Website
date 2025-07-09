# 🚀 Job Posting Website - A Modern Job Posting Platform
A full-featured job posting website built using Next.js, Prisma, Next-Auth, Zod, and React Hook Form. This project allows users to register, log in, post jobs, and apply for them securely and efficiently.

## 🛠 Tech Stack
- Next.js – App Router based React framework for SSR/SSG
- Prisma – Type-safe ORM for database interaction
- PostgreSQL  (Pluggable with Prisma)
- Next-Auth – Authentication with credentials and OAuth support
- Zod – Schema-based form and API validation
- React Hook Form – Lightweight form handling and validation
- Tailwind CSS – Utility-first styling for responsive UI


## Run Locally
Clone the project

```bash
  git clone https://github.com/coderrony/Job_Posting_Website.git
```

Go to the project directory

```bash
  cd Job_Posting_Website
```

Install dependencies

```bash
  npm install
```
Create a .env file in the root directory and fill in the values according to .env.example

```bash
  touch .env
```
```bash
 npx prisma migrate dev --name init
```
```bash
  npx prisma generate
```

Start the server

```bash
  npm run dev
```

Run on browser

```bash
  http://localhost:3000/
```



