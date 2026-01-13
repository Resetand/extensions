import OpenAI from "openai";
import { DEFAULT_EXECUTION_MODEL } from "../constants";

export type OpenAIErrorInfo = {
  status?: number;
  message: string;
};

export type OpenAIResponseCreateParams = {
  apiKey: string;
  systemInput: string;
  userInput: string;
  responseJsonSchema: Record<string, unknown>;
};

export async function createOpenAIResponse<T>({
  apiKey,
  systemInput,
  userInput,
  responseJsonSchema,
}: OpenAIResponseCreateParams): Promise<T> {
  const client = new OpenAI({ apiKey });

  const response = await client.responses.parse({
    model: DEFAULT_EXECUTION_MODEL,
    text: !responseJsonSchema
      ? undefined
      : {
          format: {
            type: "json_schema",
            name: "response_schema",
            schema: responseJsonSchema,
            strict: true,
          },
        },

    input: [
      {
        role: "system",
        content: [{ type: "input_text", text: systemInput }],
      },
      {
        role: "user",
        content: [{ type: "input_text", text: userInput }],
      },
    ],
  });

  if (!response.output_parsed) {
    throw new Error("OpenAI response parsing failed");
  }

  return response.output_parsed as T;
}

export function toOpenAIErrorInfo(error: unknown): OpenAIErrorInfo {
  if (typeof error === "object" && error !== null) {
    const maybeStatus = (error as { status?: number }).status;
    const maybeMessage = (error as { message?: string }).message;
    return {
      status: typeof maybeStatus === "number" ? maybeStatus : undefined,
      message: typeof maybeMessage === "string" && maybeMessage.length > 0 ? maybeMessage : "OpenAI request failed",
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "OpenAI request failed" };
}
