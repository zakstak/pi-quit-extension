import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.on("input", async (event, ctx) => {
    const text = event.text.trim().toLowerCase();

    if (text === "exit" || text === ":q") {
      ctx.ui.notify("Quitting pi…", "info");
      ctx.shutdown();
      return { action: "handled" };
    }

    return { action: "continue" };
  });
}
