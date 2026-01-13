import { TargetModelInfo } from "./types";

export const DEFAULT_EXECUTION_MODEL = "gpt-5.2";
export const OPENAI_API_KEYS_URL = "https://platform.openai.com/api-keys";

export const TARGET_MODELS: TargetModelInfo[] = [
  {
    key: "gpt-5",
    title: "GPT-5",
    description:
      "Flagship multimodal OpenAI model. Strong instruction-following, reasoning, code, and tool-use. Suitable for complex and agent-style workflows.",
  },
  {
    key: "gpt-4o",
    title: "GPT-4o",
    description:
      "Fast multimodal OpenAI model optimized for chat, analysis, images, and tools. Works well in interactive and agent pipelines with clear instructions.",
  },
  {
    key: "gpt-4",
    title: "GPT-4",
    description:
      "Powerful general-purpose LLM with strong reasoning. Performs best with detailed, well-structured text prompts.",
  },
  {
    key: "openai-o3",
    title: "OpenAI o3",
    description:
      "Reasoning-focused OpenAI model for complex logic and math. Prefers formal problem statements and step-based goals.",
  },
  {
    key: "openai-o1",
    title: "OpenAI o1",
    description: "Early reasoning model optimized for explicit logical tasks. Requires a clearly defined objective.",
  },
  {
    key: "openai-codex",
    title: "OpenAI Codex",
    description:
      "Code-centric OpenAI model for generating and modifying code. Best with precise technical instructions and project context.",
  },
  {
    key: "claude-3-opus",
    title: "Claude 3 Opus",
    description:
      "Top-tier Anthropic model for deep analysis and long documents. Responds best to formal, structured prompts.",
  },
  {
    key: "claude-3-sonnet",
    title: "Claude 3 Sonnet",
    description: "Balanced Anthropic model for analysis and coding. Prefers clear requirements and logical structure.",
  },
  {
    key: "claude-3-haiku",
    title: "Claude 3 Haiku",
    description: "Fast, lightweight Anthropic model for simple tasks. Works best with short, direct prompts.",
  },
  {
    key: "gemini-2",
    title: "Gemini 2",
    description:
      "Multimodal Google model for text, images, and code. Performs best with explicit goals and output format.",
  },
  {
    key: "gemini-1-5",
    title: "Gemini 1.5",
    description: "Google model with large context window. Suitable for long documents and structured inputs.",
  },
  {
    key: "llama-3",
    title: "LLaMA 3",
    description:
      "Open-weight Meta model widely used in self-hosted setups. Works best with direct, explicit instructions.",
  },
  {
    key: "llama-2",
    title: "LLaMA 2",
    description: "Previous-generation Meta open-source model. Requires more explicit guidance and constraints.",
  },
  {
    key: "mistral-large",
    title: "Mistral Large",
    description: "High-quality commercial Mistral model. Optimized for concise, well-scoped prompts.",
  },
  {
    key: "mixtral",
    title: "Mixtral",
    description:
      "MoE-based Mistral model for analytical and technical tasks. Prefers structured inputs and clear output format.",
  },
  {
    key: "codestral",
    title: "Codestral",
    description: "Mistral code-focused model for programming tasks. Performs best with precise technical context.",
  },
  {
    key: "grok-2",
    title: "Grok 2",
    description: "xAI model focused on reasoning and current information. Responds well to direct, concrete prompts.",
  },
  {
    key: "grok-1",
    title: "Grok",
    description: "First-generation xAI model for dialogue and reasoning. Requires a clearly stated goal.",
  },
  {
    key: "command-r",
    title: "Command-R",
    description: "Enterprise-focused Cohere model for RAG and search. Best with formal, structured prompts.",
  },
  {
    key: "amazon-titan-text",
    title: "Amazon Titan Text",
    description: "AWS Bedrock LLM for enterprise use. Designed for strict, business-oriented prompts.",
  },
  {
    key: "phi-3",
    title: "Phi-3",
    description: "Compact Microsoft reasoning model. Effective with short, precise logical instructions.",
  },
  {
    key: "qwen-2",
    title: "Qwen 2",
    description: "Alibaba open-weight general-purpose model. Performs best with explicit instructions and format.",
  },
  {
    key: "deepseek-coder",
    title: "DeepSeek Coder",
    description:
      "Open-weight coding model optimized for programming and code analysis. Requires clear technical context.",
  },
];
