module.exports = {
    "testEnvironment": "node",
    "collectCoverage": true,
    "collectCoverageFrom": [
      "src/**/*.js"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
    "snapshotSerializers": [
      "./scripts/function-snapshot-serializer.js"
    ]
}