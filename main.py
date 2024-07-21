from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


# Create an instance of the FastAPI class
app = FastAPI()

# Mount the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Create an instance of Jinja2Templates for rendering templates
templates = Jinja2Templates(directory="templates")

# Example endpoint to render an HTML template
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    # Render the template named "index.html" from the "templates" directory
    return templates.TemplateResponse("main.html", {"request": request})



print("http://127.0.0.1:8000")