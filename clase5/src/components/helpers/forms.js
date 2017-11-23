export const generatedHandleAttribute = (self, attributeName) => { // email o password
    /*
    * handleEmail = (event) => {
    *    this.setState({ email: event.target.value })
    *    };
    *
    * */
    return (event) => {
        let newState =  {};
        newState[attributeName] = event.target.value;
        self.setState(newState); //{ email: event.target.value } o { password: event.target.value }
    };
};