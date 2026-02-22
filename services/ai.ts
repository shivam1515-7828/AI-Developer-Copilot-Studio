import { google } from "@ai-sdk/google";


export const aiService = {
  getModel: () => google("gemini-flash-latest"),

  getExplainerPrompt: (code: string) => `
Analyze this code. Explain the structure, file purposes, and component interactions in clear markdown.

Code:
${code}
`,

  getReviewerPrompt: (code: string) => `
You are an expert strict code reviewer. 
Please review the following code.
Detect any bugs, suggest improvements, identify performance issues, and recommend best practices.
Format your response in markdown.

Code:
${code}
`,

  getDebuggerPrompt: (errorLog: string) => `
You are an expert debugging assistant.
Please analyze the following error log or stack trace.
Explain the error clearly, identify the root cause, and provide a step-by-step fix to resolve the issue.

Error Log:
${errorLog}
`,

  getDocsPrompt: (code: string) => `
You are an expert AI developer assistant.
Please generate comprehensive documentation for the following code.
Include:
1. A brief overview of what the code does.
2. Explanations of key functions, classes, or methods.
3. Examples of how to use it (if applicable).
4. Any potential edge cases or limitations.

Code to document:
\`\`\`
${code}
\`\`\`
`,

  getTranslatorPrompt(code: string, language: string) {
    return `You are an expert polyglot programmer. Translate the following code into ${language}. 
    Ensure the translation remains idiomatic, efficient, and follows the best practices of the target language.
    Only return the translated code wrapped in a markdown code block. Do not provide explanations.
    
    CODE:
    ${code}`;
  },

  getCommitPrompt(diff: string) {
    return `You are an expert developer. Generate a professional, concise, and descriptive conventional commit message based on the following code diff. 
    Format should be: <type>(<scope>): <subject>
    
    Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
    
    DIFF:
    ${diff}`;
  }
};
