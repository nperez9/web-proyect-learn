from fastapi import FastAPI
from models.user_connetion import UserConnection

app = FastAPI()
user_connection = UserConnection()

@app.get("/")
def root():
    user_connection
    return {"Hello": "World"}