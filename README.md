# Nicole AI Agent

Nicole AI Agent is a secure, production-oriented dashboard for managing a Cartesia-powered voice agent. The project provides a clean admin experience for reviewing agent configuration, validating connectivity, testing prompts, tracking conversations, and preparing authorized call workflows.

## What it does

- Provides a modern dashboard for a private AI voice assistant
- Shows real Cartesia API status and configuration health in a server-safe way
- Allows basic prompt validation and test request preparation
- Displays conversation and call management screens with empty states until data exists
- Prepares architecture for authorized outbound/inbound calling without auto-dialing
- Keeps secrets on the server and protects sensitive API routes

## Current features and limitations

### Included

- Next.js App Router application shell and dashboard screens
- Protected API routes for health and agent checks
- Typed server config and validation helpers
- Dark-and-light responsive UI with accessible contrast and nav
- Cartesia health verification using the official API root status endpoint
- Safe placeholder testing flow for prompt validation and guided manual testing

### Not yet complete

- Real production authentication flow for private access
- Live Cartesia agent invocation beyond validated connectivity checks
- Real inbound/outbound telephony execution; call features are intentionally disabled until explicit authorization and provider permissions are confirmed
- Persisted conversation and call storage beyond UI placeholders

## Technology stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Zod validation
- Vercel-ready project configuration
- Cartesia server-side integration pattern using environment variables

## Prerequisites

- Node.js 18.18 or newer
- npm 9 or newer
- A Cartesia account and valid API credentials if you want to enable live checks

## Local installation and development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000.

## Environment variable configuration

The project expects these values in `.env.local`:

```bash
CARTESIA_VOICE_ID=a2d119f3-d814-42d9-8ad8-0ba1e90a3156
CARTESIA_ID=ap_sPzVdwbVaGhEwjLzA97XRJ
CARTESIA_API_KEY=
CARTESIA_AGENT_ID=agent_i3hygTDTSTHXngRQxAWdsn
CARTESIA_ADMIN_ID=
CARTESIA_NUMBER=+17754858370
NODE_ENV=development
```

Keep secrets on the server. Never expose `CARTESIA_API_KEY` in client-side code or public environment variables.

## Cartesia connection guidance

This application verifies Cartesia connectivity using the official API status endpoint. It treats the Cartesia agent ID as configuration metadata only and does not modify the agent configuration automatically.

If your account has the required permissions, you can plug in the API key and use the protected status route to verify the environment. The app intentionally avoids making unsupported or undocumented requests.

## How to test the application safely

- Run the app locally with `.env.local` configured
- Use the dashboard status cards to confirm the environment looks healthy
- Submit a prompt through the agent testing interface to validate server-side validation and connection checks
- Use the calls page only for review and confirmation flows; no automatic dialing is enabled
- Do not place or simulate calls without explicit owner authorization and provider approval

## Deployment to Vercel

1. Push this repository to GitHub
2. Import the project into Vercel
3. Add the same environment variables in the Vercel project settings
4. Build and deploy
5. Verify the `/api/health` and `/api/agent/status` endpoints respond as expected

## Remaining work and integrations

- Secure authentication for staff-only access to private settings
- Persistent database storage for conversations and call events
- Real-time agent invocation if Cartesia exposes the required documented endpoints for your account
- Live telephone integration after confirming supported phone-agent permissions and consent requirements

## Security and privacy considerations

- Keep API keys and admin credentials in server environment variables only
- Validate request payloads on the server
- Rate-limit sensitive actions by IP or user
- Avoid exposing personal information in public routes
- Require explicit authorization before using any call-related features
- Ensure the agent identifies itself as AI when interacting with people

## License

This project is distributed under the MIT License. The existing repository license remains intact.
