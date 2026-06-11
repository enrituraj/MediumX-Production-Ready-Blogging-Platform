from fastapi import APIRouter

router = APIRouter(
    prefix="/article",
    tags=["Article"]
)

@router.get("/")
def get_all_article():
    return {"msg":"get all the article"}

@router.get("/a")
def get_single_article():
    return {"msg":"single article"}
