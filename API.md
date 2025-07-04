# Backend API Documentation

This document describes the backend API endpoints for the Chatbot app.

## POST /api/chat

Handles chat messages from the frontend and returns a response based on the user's request (joke, cat picture, or fun fact).

### Request
- **Method:** POST
- **Endpoint:** `/api/chat`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "message": "<user's message>"
  }
  ```
  Example:
  ```json
  {
    "message": "Tell me a joke"
  }
  ```

### Response
The response format varies depending on the type of request:

#### Joke Response
```json
{
  "type": "joke",
  "response": "Why did the chicken cross the road? To get to the other side!"
}
```

#### Cat Picture Response
```json
{
  "type": "cat",
  "response": "https://cdn.thecatapi.com/images/abc123.jpg"
}
```

#### Fact Response
```json
{
  "type": "fact",
  "response": "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.",
  "source": "https://www.nationalgeographic.com/science/article/honey-bees-archaeology"
}
```

#### Unknown Request
```json
{
  "response": "Sorry, I couldn't process that request."
}
```

### Notes
- The `type` field indicates the kind of response (`joke`, `cat`, or `fact`).
- For `fact` responses, a `source` field is included with a URL to the fact's origin.
- For image responses, the `response` field contains the image URL.
- For unsupported or unrecognized requests, a generic message is returned. 