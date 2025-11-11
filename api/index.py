from fastapi import FastAPI

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")


@app.get("/api/py/helloFastApi")
def hello(name: str, age: int):
    return {"message": f"Hello, {name}! Age: {age}"}