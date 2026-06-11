from fastapi import APIRouter

router = APIRouter(
    prefix="/user",
    tags=["User"]
)


@router.get("/")
def get_user():
    return {"msg":"Hello from get user"}



@router.post("/")
def set_user():
    return {"msg":"Hello from create user"}


@router.put("/")
def seet_user():
    return {"msg":"Hello from set user"}


@router.delete("/")
def delete_user():
    return {"msg":"Hello from delete user"}

