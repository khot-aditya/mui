export default function (plop) {
  plop.setGenerator("Component", {
    description: "Create a new React TypeScript component",
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
        templateFile: "plop/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/app/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/app/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop/stories.tsx.hbs",
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
        templateFile: "plop/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/mui/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/Component.tsx.hbs",
      },
    ],
  });
}
