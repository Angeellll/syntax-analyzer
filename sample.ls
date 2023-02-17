    

    job combine (firstName, lastName) {

        str fullName;
        fullName = firstName + lastName;
        return fullName;
        
    }

    main () {

        str firstName;
        str lastName;

        firstName = enter("Enter your first name: ");
        lastName = enter("Enter your last name: ");
        show("\n");

        show("Your first name is ", firstName);
        show("Your last name is ", lastName);
        show("\n");
        
        int i = 0;

        for ( i in 1 ... 5) {
            str name = combine(firstName, lastName);
            show(name, i);
        } 
    }



  