from fastapi import APIRouter

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)

@router.get("/")
def get_all_admin():
    return {"msg":"get all admin"}