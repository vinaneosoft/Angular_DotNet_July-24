class Father{
    dream():string{
        return "Doctor";
    }
}
class Mother{
    dream():string{
        return "Engineer"
    }
}
/* class Child extends Father, Mother{
    achiveDream(){
        this.dream(); // ambiguity
    }
} */
// multiple inheritance via class in not supported
/* if multiple interfaces contain exact identical methods and if those interfaces are getting
implemented then allowed but if same methods have different signature then error occurs  */
interface Father{
    dream():string;
    hobbies():string;
}
interface Mother{
    dream():string;
    hobbies(what:string[]):string;
}
class Child2 implements Father, Mother{
    dream():string{
        return "Lawyer"
    }
    hobbies(): string {
        return "Painiting";
    }
}
// multiple inheritance via interfaces is supported with rules (if same method then must be identical)