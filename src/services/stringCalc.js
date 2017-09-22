/**
 * Function to check if token is an operator
 * @param token
 * @returns {boolean}
 */
const isOperator = (token) => {
    switch (token) {
        case '-':
        case '+':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
};

/**
 * Function to assign the priority of operator
 * @param token
 * @returns {number}
 */
const operatorPriority = (token) => {
    switch (token) {
        case "*":
        case "/":
            return 2;
        default:
            return 1;
    }
};

/**
 * Transform input string into reverse poland notation
 * @param String to calculate
 * @returns {*} formatted notation in case of success and an error object in case of an error
 */
const formatToReversePolandStatement = statement => {
    let stackStatement  = '',
        outputStatement = '',
        token,
        tmpToken;

    for (let i = 0; i < statement.length; i++) {
        token = statement[i];
        if (isOperator(token)) {
            while (stackStatement.length > 0) {
                tmpToken = stackStatement.substring(stackStatement.length - 1);
                if (isOperator(tmpToken) &&
                    ( operatorPriority(token) <= operatorPriority(tmpToken) )) {
                    outputStatement += " " + tmpToken.toString() + " ";
                    stackStatement = stackStatement.substring(0, stackStatement.length - 1);
                } else {
                    outputStatement += " ";
                    break;
                }
            }
            outputStatement += " ";
            stackStatement += token.toString();
        } else if (token === '(') {
            stackStatement += token.toString();
        } else if (token === ')') {
            tmpToken = stackStatement.substring(stackStatement.length - 1);
            while (tmpToken !== '(') {
                if (stackStatement.length < 1) {
                    return { error: "Wrong number of operators" };
                }
                outputStatement += " " + tmpToken.toString();
                stackStatement = stackStatement.substring(0, stackStatement.length - 1);
                tmpToken = stackStatement.substring(stackStatement.length - 1);
            }
            stackStatement = stackStatement.substring(0, stackStatement.length - 1);
        } else {
            outputStatement += token.toString();
        }
    }

    while (stackStatement.length > 0) {
        outputStatement += " " + stackStatement.substring(stackStatement.length - 1);
        stackStatement = stackStatement.substring(0, stackStatement.length - 1);
    }

    return outputStatement;
};

/**
 * Function to calculate an expression
 * @param operator
 * @param num1
 * @param num2
 * @returns {*}
 */
function calculateExpression(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return {
                error: "Unprocessable operator " + operator
            };
    }
}

/**
 * Function to calculate input string via descent recursive method
 * @param statement
 * @returns {{value: *, errorMessage: Array}}
 */
export const calculate = statement => {
    let a, b, tmpString, errorMessage = [];
    const stack = [];
    const formattedString = formatToReversePolandStatement(statement);

    if (!formattedString.error) {
        let stringTokens = formattedString.split(" ");
        while (stringTokens.length > 0) {
            try {
                tmpString = stringTokens.shift();
                if (tmpString.length === 1 && isOperator(tmpString)) {
                    if (stack.length < 2) {
                        errorMessage.push("Wrong quantity of input data in operational stack " + tmpString);
                        break;
                    }
                    b = stack.pop();
                    a = stack.pop();
                    a = calculateExpression(tmpString, a, b)
                    if (!a.error) {
                        stack.push(a);
                    } else {
                        errorMessage.push(a.error);
                    }
                } else if (tmpString !== "") {
                    a = +tmpString;
                    stack.push(a)
                }
            } catch (e) {
                throw e;
            }
        }
    } else {
        errorMessage.push(formattedString.error);
    }

    if (stack.length > 1) {
        errorMessage.push("Operator and operand quantity mismatch");
    }

    return {
        value: stack.shift(),
        errorMessage
    }
};