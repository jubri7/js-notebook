import * as esbuild from "esbuild-wasm/esm/browser";
import { unpkgPathPlugin } from "../plugins/unpkgpathplugin";
import { fetchPlugin } from "../plugins/fetch-plugin";

const bundling = async (rawCode: string) => {
  try {
    let result = await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        "process.env.NODE_ENV": "'production'",
      },
      jsxFactory: "_React.createElement",
      jsxFragment: "_React.Fragment",
    });

    return { code: result.outputFiles[0].text, err: "" };
  } catch (error: any) {
    return { code: "", err: error.message };
  }
};

export default bundling;
