function getUserStatus() {
    //var status_code = "Inactive"; JS engine optimizes the code and hoists the variable declaration to the top of the function scope, but not the assignment. So, when you try to log `status_code` before its assignment, it will be `undefined`.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
    }

    getUserStatus();

// Note : var is function scoped, so the variable `status_code` is only accessible within the `getUserStatus` function. If you try to access it outside of the function, it will result in a ReferenceError.
// the top of the getuserstatus function scope, but not the assignment. So, when you try to log `status_code` before its assignment, it will be `undefined`.