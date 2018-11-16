# Paradigms

Quiz:

In procedural programming (*C*), the most important building blocks are the **procedures**.

```C
float runCar(float currentCarMileage, float additionalMileage){
  float finalMileage = currentCarMileage + additionalMileage;
  return finalMileage;
}

void main(){
  float newCar = 0;
  newCar = runCar(newCar, 30);
  printf("%fkm.", newCar);
  return 0;
}
```

In object oriented programming (*Java*), the most important building blocks are **objects**.

```Java
public class Kilometers {
  private float amount;
  public Kilometers(float km){
    amount = km;
  }

  public void add(Kilometers additional){
    amount += additional.getAmount();
  }

  public float getAmount(){
    return amount;
  }

  public String print(){
    return amount+"km.";
  }
  public static void main(String[] args){
      Kilometers newCar = new Kilometers(0);
      newCar.add(new Kilometers(30));
      System.out.println(newCar.print());
    }
}


```

In functional programming (*Javascript??*) the most important building blocks are the _________.

## But why?

Object orientation is good at modelling the *agents* involved in the application.

Procedures are great at scoping your application to *only* what you need.

Functions are great at being *modular*. Such functions will always do the same thing and thus you can trust them at any moment. It's helps you abstract WHAT you want without the how. State of the application doesn't mutate, and so unexpected behaviour can't happen.

# Pure functions

Pure functions are deterministic. They will always return the same result for the same parameters.

# Function composition

Functions can have other functions and functions' results as entry parameters.

# No shared states nor side effects

No data should be duplicated

# No mutation of data

Data shouldn't mutate. But we **should** keep a history of it in case we need it X steps back (debugging).

# Imperative vs Declarative

In imperative programming you define **what** you want and **how** to reach that.

In declarative programming you only need to tell **what** you want. (the how is hidden in the language & libraries :P)