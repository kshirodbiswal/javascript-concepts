// lexical scope:it is the scope of a function which is inside another function

function outer(){
    let outV="ofOuterFunction"

    function inner(){
        let innV="ofInnerFunction"
        console.log(outV);  //inner function can acces the scope of a outer function
    
    }
    inner()
}

outer()  //it is a example of lexical scoping


//closer:whenever we pass a reference of inner functiion then irrespective of its executional context the entier lexical scope (i.e. including the scope of the outer function) is passes as a memory reference.

function outerF(){
    let name="outer"

    function innerF(){
        console.log(name);
    }

    return innerF;  //passing the inner function passes the entire lexical scope of the ineerF() i.e. including outerF()
}

const user= outerF();
user()