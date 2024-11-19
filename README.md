# Package @stylistic/eslint-plugin@npm:2.11.0 [19d4c] is requested to provide typescript by its descendants


To reproduce simply run:
```bash
# Install the package

yarn

# ➤ YN0000: · Yarn 4.5.1
# ➤ YN0000: ┌ Resolution step
# ➤ YN0000: └ Completed
# ➤ YN0000: ┌ Post-resolution validation
# ➤ YN0086: │ Some peer dependencies are incorrectly met by dependencies; run yarn explain peer-# requirements for details.
# ➤ YN0000: └ Completed
# ➤ YN0000: ┌ Fetch step
# ➤ YN0000: └ Completed
# ➤ YN0000: ┌ Link step
# ➤ YN0000: └ Completed in 0s 522ms
# ➤ YN0000: · Done with warnings in 0s 615ms

# Then explain the peer requirements
yarn explain peer-requirements
# p4100c → ✓ @eslint/config-array@npm:0.19.0 doesn't provide @types/supports-color to debug@npm:4.3.7 [2a51a]
# pd3a15 → ✓ @eslint/config-array@npm:0.19.0 doesn't provide supports-color to debug@npm:4.3.7 [2a51a]
# p00233 → ✓ @eslint/eslintrc@npm:3.2.0 doesn't provide @types/supports-color to debug@npm:4.3.7 [2a51a]
# pd2670 → ✓ @eslint/eslintrc@npm:3.2.0 doesn't provide supports-color to debug@npm:4.3.7 [2a51a]
# pe6d6f → ✓ @stylistic/eslint-plugin@npm:2.11.0 [b4b1b] doesn't provide @types/typescript to @typescript-eslint/utils@npm:8.15.0 [15219] and 2 other dependencies
# p97060 → ✘ @stylistic/eslint-plugin@npm:2.11.0 [b4b1b] doesn't provide typescript to @typescript-eslint/utils@npm:8.15.0 [15219] and 2 other dependencies
# p13e66 → ✓ @typescript-eslint/typescript-estree@npm:8.15.0 [5b828] doesn't provide @types/supports-color to debug@npm:4.3.7 [2a51a]
# p46c41 → ✓ @typescript-eslint/typescript-estree@npm:8.15.0 [5b828] doesn't provide supports-color to debug@npm:4.3.7 [2a51a]
# p709c0 → ✓ eslint@npm:9.15.0 [b4b1b] doesn't provide @types/eslint to @eslint-community/eslint-utils@npm:4.4.1 [5b828]
# p996f4 → ✓ eslint@npm:9.15.0 [b4b1b] doesn't provide @types/supports-color to debug@npm:4.3.7 [2a51a]
# p8398f → ✓ eslint@npm:9.15.0 [b4b1b] provides eslint@npm:9.15.0 [b4b1b] to @eslint-community/eslint-utils@npm:4.4.1 [5b828]
# p6cc30 → ✓ eslint@npm:9.15.0 [b4b1b] doesn't provide supports-color to debug@npm:4.3.7 [2a51a]
# pe27f1 → ✓ espree@npm:10.3.0 doesn't provide @types/acorn to acorn-jsx@npm:5.3.2 [e5b10]
# pa9818 → ✓ espree@npm:10.3.0 provides acorn@npm:8.14.0 to acorn-jsx@npm:5.3.2 [e5b10]
# p47541 → ✓ stylistic-missing-peer@workspace:. doesn't provide @types/eslint to @stylistic/eslint-plugin@npm:2.11.0 [b4b1b] and 2 other dependencies
# pe1771 → ✓ stylistic-missing-peer@workspace:. doesn't provide @types/jiti to eslint@npm:9.15.0 [b4b1b]
# p369ba → ✓ stylistic-missing-peer@workspace:. provides eslint@npm:9.15.0 [b4b1b] to @stylistic/eslint-plugin@npm:2.11.0 [b4b1b] and 2 other dependencies
# p882da → ✓ stylistic-missing-peer@workspace:. doesn't provide jiti to eslint@npm:9.15.0 [b4b1b]

# Then check the @stylistic/eslint-plugin issue specifically
yarn explain peer-requirements p97060
# Package @stylistic/eslint-plugin@npm:2.11.0 [b4b1b] is requested to provide typescript by its descendants
# 
# @stylistic/eslint-plugin@npm:2.11.0 [b4b1b]
# └─ @typescript-eslint/utils@npm:8.15.0 [15219] (via *)
#    └─ @typescript-eslint/typescript-estree@npm:8.15.0 [5b828] (via *)
#       └─ ts-api-utils@npm:1.4.0 [2a51a] (via >=4.2.0)
# 
# ✘ Package @stylistic/eslint-plugin@npm:2.11.0 [b4b1b] does not provide typescript.
```