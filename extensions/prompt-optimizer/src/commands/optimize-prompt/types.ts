import { TargetModelInfo } from "shared/types";

export type OptimizePromptFormValues = {
  prompt: string;
  targetModel: string;
};

export type ImproveOptimizedPromptFormValues = {
  clarifications: { question: string; answer: string }[];
};

export type OptimizePromptFormErrorState = {
  title: string;
  message: string;
  status?: number;
  snippet?: string;
};

/**
 * The raw response from the optimizer LLM.
 */
export type OptimizerResponseDTO = {
  ok: boolean;
  optimizedPrompt: string;
  clarifyingQuestions: string[];
  rejectReason: string;
};

/**
 * The result when the optimization is successful.
 */
export type OptimizerSuccessResult = {
  ok: true;
  optimizedPrompt: string;
  clarifyingQuestions: string[];
};

/**
 * The result when the optimization is rejected by the LLM.
 */
export type OptimizerRejectedResult = {
  ok: false;
  rejectReason: string;
};

/** Wrapper type for optimizer responses. */
export type OptimizerResult = OptimizerSuccessResult | OptimizerRejectedResult;

export type OptimizerClarificationInput = {
  question: string;
  answer: string;
};

export type OptimizerInputPayload = {
  /** The original prompt to optimize. */
  initialPrompt: string;

  /** The target model info (the model for which the prompt is being optimized) */
  targetModel: TargetModelInfo;

  /** An optional current optimized prompt to provide as context. */
  currentOptimizedPrompt?: string;

  /** Any requested changes from the user to clarify the prompt. */
  clarifications?: OptimizerClarificationInput[];

  /** Any additional changes requested by the user. */
  requestedChanges?: string;
};
