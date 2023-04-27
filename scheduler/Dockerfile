FROM python:3.9

WORKDIR /scheduler

COPY ./requirements.txt /scheduler/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /scheduler/requirements.txt

COPY ./api /scheduler/api

CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]