module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-vars": "warn",
    "react/boolean-prop-naming": ["error", {
      "propTypeNames": ["bool"],
      "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      "validateNested": true
    }],
    "react/button-has-type": "off",
    "react/default-props-match-prop-types": ["warn", {
      "allowRequiredDefaults": false
    }],
    "react/destructuring-assignment": ["off", "always"],
    "react/display-name": ["error", {
      "ignoreTranspilerName": false
    }],
    "react/forbid-component-props": ["warn", {
      "forbid": ["style"]
    }],
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": ["warn", {
      "allowInPropTypes": false
    }],
    "react/forbid-prop-types": ["warn", {
      "forbid": ["any", "array", "object"],
      "checkContextTypes": false,
      "checkChildContextTypes": false
    }],
    "react/function-component-definition": ["warn", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/hook-use-state": "error",
    "react/iframe-missing-sandbox": "warn",
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "warn",
    "react/no-array-index-key": "warn",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": ["error", {
      "allowFunctions": false
    }],
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "warn",
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],
    "react/no-did-update-set-state": ["error", "disallow-in-func"],
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-invalid-html-attribute": "warn",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", {
      "ignoreStateless": false
    }],
    "react/no-namespace": "error",
    "react/no-redundant-should-component-update": "warn",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": ["error", {
      "noTemplateLiterals": false
    }],
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": ["warn", {
      "forbid": ['>', '"', '\'', '}']
    }],
    "react/no-unknown-property": "error",
    "react/no-unsafe": ["error", { "checkAliases": false }],
    "react/no-unstable-nested-components": ["error", {
      "allowAsProps": false
    }],
    "react/no-unused-class-component-methods": "warn",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/no-will-update-set-state": ["error", "disallow-in-func"],
    "react/prefer-es6-class": ["error", "always"],
    // check with button or input extra props
    "react/prefer-exact-props": "warn",
    "react/prefer-read-only-props": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/require-default-props": "off",
    "react/require-optimization": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    "react/sort-comp": "off",
    "react/sort-prop-types": ["warn", {
      "callbacksLast": true,
      "ignoreCase": true,
      "requiredFirst": true,
      "sortShapeProp": true,
      "noSortAlphabetically": false
    }],
    "react/state-in-constructor": ["error", "always"],
    "react/static-property-placement": ["error", "property assignment"],
    "react/style-prop-object": "warn",
    "react/void-dom-elements-no-children": "error"
  },
  "settings": {
    "propWrapperFunctions": [
      {"property": "exact", "exact": true}
    ],
    "react": {
      "version": "detect"
    }
  }
}
