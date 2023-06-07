## Optional

Optional用法:

- 无法判断被调用传递过来的list 是否为空, 可以省略if null的判断条件

  ```java
  List<String> carsFiltered = Optional.ofNullable(cars)
              .orElseGet(Collections::emptyList)
              .stream()
              .filter(Objects::nonNull) //filtering car object that are null
              .map(Car::getName) //now it's a stream of Strings
              .filter(Objects::nonNull) //filtering null in Strings
              .filter(name -> name.startsWith("M"))
              .collect(Collectors.toList()); //back to List of Strings
  ```

- 