from fastapi import FastAPI
from models.user_connetion import UserConnection

app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "World"}