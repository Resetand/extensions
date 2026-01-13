# Prompt Optimizer

Rewrite and improve prompts for reliable use with AI tools and agents.

## Setup

1. Install dependencies
   - `npm install`
2. Add your OpenAI API key
   - Open Raycast → Extensions → Prompt Optimizer → Preferences
   - Set `OpenAI API Key`

## Usage

- Run the command `Optimize Prompt`
- Choose a target model and paste the prompt you want to optimize
- Submit to receive an optimized prompt
- If clarifying questions appear, choose "Clarify Your Prompt" and answer at least one to improve the result

## Notes

- The optimizer uses OpenAI Responses API with a system prompt + JSON user payload.
- The selected model type is passed as contextual input for optimization.
