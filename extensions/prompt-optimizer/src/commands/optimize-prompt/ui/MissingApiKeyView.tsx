import React from "react";
import { Action, ActionPanel, Detail, openExtensionPreferences } from "@raycast/api";
import { OPENAI_API_KEYS_URL } from "shared/constants";

function buildMissingApiKeyMarkdown(): string {
  return "# OpenAI API Key Required";
}

export const MissingApiKeyView: React.FC = () => {
  return (
    <Detail
      markdown={buildMissingApiKeyMarkdown()}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser url={OPENAI_API_KEYS_URL} title="Open OpenAI API Keys" />
          <Action title="Open Extension Preferences" onAction={openExtensionPreferences} />
        </ActionPanel>
      }
    />
  );
};
