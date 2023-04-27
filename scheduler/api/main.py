# from fastapi import FastAPI

# app = FastAPI()


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

# @app.get("/event")
# async def root():
#     return {"message": "Events"}

from typing import Union

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import crud, models, schemas
#from .database import SessionLocal, engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_DATABASE_URL = 'postgresql://postgres:Aviral60@127.0.0.1:5432/sp'

engine = create_engine(
    SQLALCHEMY_DATABASE_URL 
) #connect_args={"check_same_thread":False} for sqlite
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

#dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

from enum import Enum

class ModelName(str, Enum):
    skills = "skill"
    applicants = "applicant"
    positions = "position"



@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: str, q: Union[str, None] = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
    return {"item_id": item_id, "q": q}

@app.get("/venues/{venue_id}")
async def get_venues(
    venue_id: str, needy: str, skip: int=0, limit: int | None=None
):
    item = {"venue_id":venue_id, "needy":needy, "skip": skip, "limit": limit}
    return item

@app.get("/models/{model_name}")
def get_model(model_name:ModelName):
    if model_name is ModelName.skills:
        return {"model_name":model_name, "message":"Python, FastApi, Angular"}
    if model_name.value == "applicant":
        return {"model_name":model_name, "message":"User1, user2"}
    

@app.post("/create-venue")
def add_venue(venue: schemas.VenueCreate, db: Session=Depends(get_db)):
    #venue.name = venue.name + int('12')
    # v = models.Venue(name = venue.name, address = venue.address)
    # v.save()
    crud.create_venue(db, venue=venue)
    return venue