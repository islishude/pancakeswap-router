import type { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.6.12",
    settings: {
      metadata: {
        bytecodeHash: "none",
      },
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
};

export default config;
