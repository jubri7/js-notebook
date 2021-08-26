import * as esbuild from "esbuild-wasm/esm/browser";

let service: any;

const startService = async () => {
  if (!service) {
    service = await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      // "https://unpkg.com/esbuild-wasm/esbuild.wasm"
    });
  }
};

export default startService;
