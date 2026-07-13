// Expo Metro configuration for monorepo (SDK 57+).
// Auto-detects workspaces — no manual watchFolders/nodeModulesPaths required.
// See: https://docs.expo.dev/guides/monorepos/

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;
