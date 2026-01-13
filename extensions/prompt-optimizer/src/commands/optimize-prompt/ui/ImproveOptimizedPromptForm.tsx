import React, { Fragment, useState } from "react";
import { Action, ActionPanel, Form, Icon, Toast, showToast } from "@raycast/api";
import { ImproveOptimizedPromptFormValues } from "commands/optimize-prompt/types";

type ImproveOptimizedPromptFormProps = {
  clarifyingQuestions: string[];
  onBack: () => void;
  onSubmit: (values: ImproveOptimizedPromptFormValues) => void;
};

export const ImproveOptimizedPromptForm: React.FC<ImproveOptimizedPromptFormProps> = ({
  clarifyingQuestions,
  onSubmit,
  onBack,
}) => {
  const [validationError, setValidationError] = useState<string | null>(null);

  const buildClarifications = (values: Form.Values) =>
    clarifyingQuestions.map((question, index) => {
      const answerValue = values[`question_${index}`];
      return {
        question,
        answer: typeof answerValue === "string" ? answerValue : "",
      };
    });

  const handleSubmit = (values: Form.Values) => {
    const clarifications = buildClarifications(values);
    const hasAnswer = clarifications.some((clarification) => clarification.answer.trim().length > 0);

    if (!hasAnswer) {
      const message = "Please answer at least one question.";
      setValidationError(message);
      void showToast({ style: Toast.Style.Failure, title: message });
      return;
    }

    setValidationError(null);
    onSubmit({ clarifications });
  };

  return (
    <Form
      navigationTitle="Clarify Your Prompt"
      actions={
        <ActionPanel>
          <Action.SubmitForm icon={Icon.Stars} title="Improve Optimized Prompt" onSubmit={handleSubmit} />
          <Action icon={Icon.ArrowLeft} title="Back to Optimized Prompt" onAction={onBack} />
        </ActionPanel>
      }
    >
      {clarifyingQuestions.map((question, index) => (
        <Fragment key={`fragment-${index}`}>
          {/* For some reason " " inside title allows to remove space between description and textarea which is exactly what we need */}
          <Form.Description text={question} title=" " />
          <Form.TextArea
            id={`question_${index}`}
            enableMarkdown
            autoFocus={index === 0}
            placeholder="Provide your clarification here"
            error={validationError ?? undefined}
            onChange={() => {
              if (validationError) {
                setValidationError(null);
              }
            }}
          />
        </Fragment>
      ))}
    </Form>
  );
};
