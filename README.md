# MediumX

A production-ready Medium-inspired blogging platform built with FastAPI and React.

## Features

### Authentication

* JWT Authentication
* Refresh Tokens
* Email Verification
* Forgot Password
* Password Reset
* Session Management
* OAuth Login (Google/GitHub)

### User Management

* User Profiles
* Follow/Unfollow Users
* Profile Pictures
* Bio & Social Links

### Articles

* Draft Articles
* Publish Articles
* Scheduled Publishing
* Article Editing
* Version History
* Soft Delete
* Article Tags
* Reading Time Estimation

### Engagement

* Like Articles
* Bookmark Articles
* Comments
* Nested Replies
* Comment Reactions

### Search & Discovery

* Full Text Search
* Trending Articles
* Popular Tags
* Personalized Feed

### Notifications

* New Followers
* Article Likes
* Comments
* Replies

### Admin Features

* User Management
* Content Moderation
* Reported Content
* Analytics Dashboard

## Tech Stack

### Backend

* FastAPI
* PostgreSQL
* SQLAlchemy 2.0
* Alembic
* Redis
* Celery
* JWT
* Pytest

### Frontend

* React
* TypeScript
* React Query
* React Router
* Tailwind CSS

### Infrastructure

* Docker
* Docker Compose
* Nginx
* GitHub Actions

## Running Locally

```bash
docker-compose up --build
```

Backend:

```bash
cd server
uvicorn app.main:app --reload
```

Frontend:

```bash
cd client
npm install
npm run dev
```

## Testing

```bash
pytest
```

## Future Improvements

* AI article summaries
* Recommendation engine
* Multi-language support
* Team publications
* Real-time collaboration
* WebSocket notifications
* Event-driven architecture
