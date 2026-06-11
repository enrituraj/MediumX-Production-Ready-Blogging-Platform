from fastapi import FastAPI
from app.router import user,admin,article,auth

app = FastAPI(
    title="MediumX Backend - a blogging app",
    summary="summary of the app",
    description="Bloggin app"
)

app.include_router(user.router)
app.include_router(article.router)
app.include_router(auth.router)
app.include_router(admin.router)


@app.get("/")
def main():
    return {"message": "Hello, World!"}

