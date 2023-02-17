fixed dec pi = 3.14;
fixed str hello = "Hello";

main () {

    show ("Welcome to Less Programming");

    int num = 2.3 * 3.3 + 1;

    str age = "21";
    show(age);

    show("I am", age, "years old.");

    // Conditional statement
    int firstValue = enter("Enter first value: ");
    int secondValue = enter("Enter second value:");

    if (firstValue >= secondValue) {
        show("Hello");
    }

    else if (firstValue < secondValue) { 
        show("Hi");
    }

    else {
        show("Null");
    }

    int firstNum = 25;
    int secondNum = 32;

    if( firstNum != firstNum ) { 
        show("Hello World");
    }

    //Declaration Statement
    int num1; 
    int num2 = 5; 
    int num3;

    num3 = num1 * num2 ;

    //Iterative statement

    int i = 0;
    for ( i in 1 ... num1) {
        num2 += num1;
        show(num2);
    }

    while (True) {
        show(num);
        num = 1;
    }

    //Input Statement
    char var1 = enter("Enter words");
    show("The word/s are: ");

    show("20");
    int c = enter(int);

    int y = 3;

    int AO1 += y;
    int AO2 += y;
    int AO3 *= y;
    dec AO4 /= y;
    dec AO5 %= y;

    show("Addition assignment operator example: ", AO1);
    show("Subtraction assignment operator example: ", AO2);
    show("Multiplication assignment operator example: ", AO3);
    show("Division assignment operator example: ", AO4);
    show("Modulo assignment operator example: ", AO5);

}