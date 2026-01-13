import React from "react";
import { Action, ActionPanel, Detail, Icon } from "@raycast/api";

type OptimizedPromptDetailProps = {
  optimizedPrompt: string;
  onImprovePrompt?: () => void;
  showImprovePromptAction?: boolean;
  onRetry?: () => void;
  showRetryAction?: boolean;
  copyActionTitle?: string;
  onBack?: () => void;
  backActionTitle?: string;
};

export const OptimizedPromptDetail: React.FC<OptimizedPromptDetailProps> = ({
  optimizedPrompt,
  onImprovePrompt,
  showImprovePromptAction = Boolean(onImprovePrompt),
  onRetry,
  showRetryAction = Boolean(onRetry),
  copyActionTitle = "Copy Optimized Prompt",
  onBack,
  backActionTitle = "Back",
}) => {
  return (
    <Detail
      markdown={optimizedPrompt}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title={copyActionTitle} content={optimizedPrompt} />
          {showImprovePromptAction && (
            <Action icon={Icon.LightBulb} title="Clarify Your Prompt" onAction={onImprovePrompt} />
          )}
          {showRetryAction && onRetry && <Action icon={Icon.Repeat} title="Retry Optimization" onAction={onRetry} />}
          {onBack && <Action icon={Icon.ArrowLeft} title={backActionTitle} onAction={onBack} />}
        </ActionPanel>
      }
    />
  );
};
