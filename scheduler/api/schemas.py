from pydantic import BaseModel

class UserBase(BaseModel):
    email:str

class VenueBase(BaseModel):
    name: str
    address: str

class UserCreate(UserBase):
    password:str

class User(UserBase):
    id:int
    is_active: bool
    #items: list[Item] = []

    class Config:
        orm_mode = True

class Venue(VenueBase):
    id: int

class VenueCreate(VenueBase):
    
    #items: list[Item] = []

    class Config:
        orm_mode = True