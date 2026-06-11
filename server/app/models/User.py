from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    fullname:str
    email:Optional[str]
    