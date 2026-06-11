from fastapi import APIRouter

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

@router.post("/signin")
def signin():
    return {"msg":"signin "}


@router.post("/signup")
def signup():
    return {"msg":"register a user"}


@router.post("/forgot-password")
def forgot_password():
    return {"msg":"forgot password"}