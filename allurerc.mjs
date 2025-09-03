const hasEnv = (labels, expectedEnv) =>
  labels.some(({ name, value }) => name === "env" && value === expectedEnv);

export default {
  plugins: {
    awesome: {
      options: {
        groupBy: ["package", "testClass"],
      },
    },
  },
  environments: {
    "ubuntu-22.04, net8.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-22.04, net8.0, Debug"),
    },
    "ubuntu-22.04, net8.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-22.04, net8.0, Release"),
    },
    "ubuntu-22.04, net9.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-22.04, net9.0, Debug"),
    },
    "ubuntu-22.04, net9.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-22.04, net9.0, Release"),
    },
    "ubuntu-24.04, net8.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-24.04, net8.0, Debug"),
    },
    "ubuntu-24.04, net8.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-24.04, net8.0, Release"),
    },
    "ubuntu-24.04, net9.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-24.04, net9.0, Debug"),
    },
    "ubuntu-24.04, net9.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "ubuntu-24.04, net9.0, Release"),
    },
    "windows-2022, net8.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2022, net8.0, Debug"),
    },
    "windows-2022, net8.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2022, net8.0, Release"),
    },
    "windows-2022, net9.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2022, net9.0, Debug"),
    },
    "windows-2022, net9.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2022, net9.0, Release"),
    },
    "windows-2025, net8.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2025, net8.0, Debug"),
    },
    "windows-2025, net8.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2025, net8.0, Release"),
    },
    "windows-2025, net9.0, Debug": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2025, net9.0, Debug"),
    },
    "windows-2025, net9.0, Release": {
      matcher: ({ labels }) => hasEnv(labels, "windows-2025, net9.0, Release"),
    },
  },
  historyPath: "./.allure/history.jsonl",
};