# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Get your API key from https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Customize the system prompt for the chatbot (optional)
GEMINI_SYSTEM_PROMPT=You are a helpful AI assistant for DevSphere, RV University's premier club for Open Source and Web 3.0 enthusiasts. Your role is to assist students with questions about open source development, blockchain, Web 3.0 technologies, DApps, smart contracts, and related topics. Provide clear, concise, and educational responses. Be encouraging and supportive of learning.
```

## Notes

- The `GEMINI_API_KEY` is **required** for the chatbot to work
- The `GEMINI_SYSTEM_PROMPT` is **optional** - if not provided, a default prompt will be used
- After adding the `.env.local` file, restart your development server

