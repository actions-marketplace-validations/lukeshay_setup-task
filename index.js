import { downloadTool, extractTar, cacheDir } from "@actions/tool-cache";
import { addPath } from "@actions/core";

async function run() {
  const taskPath = await downloadTool(
    "https://github.com/go-task/task/releases/download/v3.3.0/task_linux_amd64.tar.gz"
  );
  const node12ExtractedFolder = await extractTar(taskPath);
  const cachedPath = await cacheDir(node12ExtractedFolder, "task", "3.3.0");
  addPath(cachedPath);
}

run();
