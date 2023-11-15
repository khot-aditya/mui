export default function (plop) {
  plop.setGenerator("Component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        validate: function (value) {
          var valid = /^[A-Z][a-zA-Z0-9]+$/.test(value);
          return (
            valid ||
            "Component name must start with a capital letter and can only contain alphanumeric characters."
          );
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/app/{{pascalCase name}}/index.ts",
        templateFile: "plop/components/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/app/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/components/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/app/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop/components/stories.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("Page", {
    description: "Create a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
        validate: function (value) {
          var valid = /^[A-Z][a-zA-Z0-9]+$/.test(value);
          return (
            valid ||
            "Page name must start with a capital letter and can only contain alphanumeric characters."
          );
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.ts",
        templateFile: "plop/pages/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/pages/Page.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop/pages/stories.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("MUI Component", {
    description: "Create a new MUI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        validate: function (value) {
          var valid = /^[A-Z][a-zA-Z0-9]+$/.test(value);
          return (
            valid ||
            "Component name must start with a capital letter and can only contain alphanumeric characters."
          );
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/mui/{{pascalCase name}}/index.ts",
        templateFile: "plop/components/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/mui/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/components/Component.tsx.hbs",
      },
    ],
  });
}
