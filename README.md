
### Project SetUp

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Configure Prettier and Eslint`

Install eslint, eslint-plugin-react, prettier From NPM as DEV Depency .

npm i --save-dev eslint eslint-plugin-react prettier

Insatll extensions in VSCODE - Prettier( id- esbenp.prettier-vscode ) , ESLint ( id- dbaeumer.vscode-eslint)
Search with the ids mentioned above

### Code Committing

Always remember to run the below mentioned commands before committing the code.
So that there are no errors in the code or inconsistencies with respect to the code styling.

### `npm run pretty`

Enforces a consistent code style (i.e. code formatting that won't affect the AST) across the entire codebase referring to the options mentioned in the configuration (.prettierrc.json) file.

### `npm run lint`

Identifies and reports patterns/rule violations found in ECMAScript/JavaScript/React code, with the
goal of making code more consistent and avoiding bugs referring to the rules mentioned in the
configuration (.eslintrc.json) file. And also suggests how many of those rule violations can be
fixed using the --fix option.

### `npm run lint:fix`

_Note: This command will only fix the rule violation it is capable of fixing!_

This command will fix the ESLint errors in the project. Actually overwrite the code, and print out any warnings or errors it was incapable of fixing. Most errors are not actually automatically fixable.

### Points to be remembered

ESlint Rules:

The following are the rules used for linting

Note:
0 -> Turns off the rule
1 -> Turns the rule on as a warning
2 -> Turns the rule on as an error

If you do not want to use the numbers, you can use strings like below.

"off" -> Turns off the rule
"warn" -> Turns the rule on as a warning
"error" -> Turns the rule on as an error

Where there is a single value for a rule like 0,1 or 2 and no array it directly defines the rule as off, warning or error.
But when there is an array like [2, "single"], the first value in the array indicates whether it is off, a warning
or an error and the second value describes the rule.

For example:
Let's take the rule "semi": [2, "always"] -> This rule has an array, the first value indicates to throw an
error as the value is 2, and the second value describes the rule, as the
value is "always" it is describing that semicolon is "always" needed at the
end of the statement.

"rules": {

    "react/react-in-jsx-scope": 0, -> React, from v17 onwards has made importing "React" into the code as optional.
                                      The JSX will work no matter if you import "React" or not. But eslint will throw
                                      you an error saying that "React" needs to be imported. So to fix that we are using
                                      this rule.


    "no-console": 2,  -> It disallowes writing of consoles in the code.


    "no-unused-vars": 2,  -> Sometimes we define variables and don't use them, so this rule checks for unused variables
                             and throws an error.


    "no-multi-spaces": [2], -> No more than specified spaces are allowed between two strings, variables etc.. in a line.


    "indent": [2, 2],  -> Indentation is kept at no more than 2 spaces/1 tab.


    "quotes": [2, "single"],  -> Only single quotes allowed.


    "semi": [2, "always"],  -> Semicolon should always be present at the end of the statement.


    "semi-spacing": [2, { "before": false, "after": true }]  -> No spaces allowed before the semicolon.


    "no-extra-semi": 2  -> No extra semicolon allowed.

}

Points to be noted:

1. You must install ESlint extension from Microsoft in the VSCode, so that the Linting erros get highlighted in the code.
   Or else the errors will not be highlighted.

2. If you want to check for all the linting errors in the code before commiting the code, then run "npm run lint" command
   and it'll list all the errors in the terminal. (Note: "lint" script must be added the package.json file)

3. If you want to fix all the linting errors in the code before commiting the code, then run "npm run lint:fix" command.
   (Note: "lint:fix" script must be added the package.json file)

4. Important point to be noted here is that point 2 ie: fixing the linting errors command (npm run lint:fix) can only fix
   certain errors or warning like "indentation", "semicolon", etc. But it might not be able to fix some logical errors
   for which you've provided the rules in .eslintrc.json file.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
