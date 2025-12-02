const { readFilesToContextTool } = default_api;
const file_paths = ["src/convex/auth.ts"];
await readFilesToContextTool({ file_paths, replace_files_in_context: false });