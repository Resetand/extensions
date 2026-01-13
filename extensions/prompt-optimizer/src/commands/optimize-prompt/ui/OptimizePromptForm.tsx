import React from "react";
import { Action, ActionPanel, Form, Icon } from "@raycast/api";
import { useCachedState } from "@raycast/utils";
import { TARGET_MODELS } from "shared/constants";
import { OptimizePromptFormErrorState, OptimizePromptFormValues } from "../types";

type OptimizePromptFormProps = {
  isOptimizing: boolean;
  errorState: OptimizePromptFormErrorState | null;
  onSubmit: (values: OptimizePromptFormValues) => void;
};

export const OptimizePromptForm: React.FC<OptimizePromptFormProps> = ({ isOptimizing, errorState, onSubmit }) => {
  const defaultTargetModel = TARGET_MODELS[0]?.key ?? "";
  const [targetModel, setTargetModel] = useCachedState("optimizePrompt.targetModel", defaultTargetModel);

  return (
    <Form
      isLoading={isOptimizing}
      actions={
        <ActionPanel>
          <Action.SubmitForm
            icon={errorState ? Icon.Repeat : Icon.Stars}
            title={errorState ? "Retry" : "Optimize"}
            onSubmit={onSubmit}
          />
        </ActionPanel>
      }
    >
      <Form.Dropdown id="targetModel" title="Model" value={targetModel} onChange={setTargetModel}>
        {TARGET_MODELS.map((modelType) => (
          <Form.Dropdown.Item key={modelType.key} value={modelType.key} title={modelType.title} />
        ))}
      </Form.Dropdown>

      <Form.TextArea
        id="prompt"
        title="Prompt"
        placeholder="Paste the prompt you want to optimize"
        enableMarkdown
        autoFocus
      />
    </Form>
  );
};
