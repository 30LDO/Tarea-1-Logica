# Primera seccion 

Utilice el procedimiento visto en clase para la conversión de los siguientes números decimales a binarios:

### a. 7

7⁄2 = 3 ; // residuo: 1
3⁄2 = 1; // residuo: 1
1⁄2 = 0; // residuo: 1
Por lo tanto 7 (decimal) = 0000 111 (binario, 8 bits)

### b. 45

45⁄2 = 22 ; // residuo: 1
22⁄2 = 11; // residuo: 0
11⁄2 = 5; // residuo: 1
5⁄2 = 2 ; // residuo: 1
2⁄2 = 1; // residuo: 0
1⁄2 = 0; // residuo: 1
Por lo tanto 45 (decimal) = 0010 1101 (binario, 8 bits)

### c. 123

123⁄2 = 61; // residuo: 1
61⁄2 = 30; // residuo: 1
30⁄2 = 15; // residuo: 0
15⁄2 = 7; // residuo: 1
7⁄2 = 3; // residuo: 1
3⁄2 = 1; // residuo: 1
1⁄2 = 0; // residuo: 1
Por lo tanto 123 (decimal) = 0111 1011 (binario, 8 bits)

### c. 8.75

Primero hallamos el equivalente binario de la parte entera (8)
8⁄2 = 4; // residuo: 0
4⁄2 = 2; // residuo: 0
2⁄2 = 1; // residuo: 0
1⁄2 = 0; // residuo: 1
Por lo tanto 8 (decimal) = 0000 1000 (binario, 8 bits)

Multiplicamos la parte decimal hasta obtener 0.
0.75 × 2 = 1 + 0.5 //
0.5 × 2  = 1 + 0

Por lo tanto 8.75 (decimal) = 00001000.11 (binario, 8 bits)

### d. -18

18⁄2 = 9; // residuo: 0
9⁄2 = 4; // residuo: 1
4⁄2 = 2; // residuo: 0
2⁄2 = 1; // residuo: 0
1⁄2 = 0; // residuo: 1
Por lo tanto 5 (decimal) = 0001 0010 (binario, 8 bits)

Complemento a uno de 0001 0010 = 1110 1101

Sumar 1 para obtener el complemento a dos
1110 1101 + 0000 0001 = 1110 1110

El resultado final será:
-18 (decimal) = 1110 1110 (binario de 8 bits)

#

Realice las tablas de verdad de las siguientes operaciones de lógica booleana.

### a. A ^ B


                A                  B                  A^B
                T                  T                   T 
                T	               F	               F
                F	               T                   F
                F	               F	               F



### b. (¬A ^ B) v C

                A       B       C      ¬A      ^ B     v C
                T       T       T       F       F       T
                T       T       F       F       F       F
                T       F       T       F       F       T
                T       F       F       F       F       F
                F       T       T       T       T       T
                F       T       F       T       T       T
                F       F       T       T       F       T
                F       F       F       T       F       F

### c. ¬(A v C) ^ B

                A       B       C     A v C     ¬      ^ B
                T       T       T       T       F       F
                T       T       F       T       F       F
                T	    F	    T	    T	    F	    F
                T	    F	    F	    T	    F	    F
                F	    T	    T	    T	    F	    F
                F	    T	    F	    F	    T	    T
                F	    F	    T	    T	    F	    F
                F	    F	    F	    F	    T	    F

### d. (B ^ C)^(¬A)

                A       B       C     B ^ C    ¬A       ^
                T       T       T       T       F       F
                T       T       F       F       F       F
                T       F       T       F       F       F
                T       F       F       F       F       F
                F	    T       T       T       T       T
                F       T       F       F       T       F
                F       F       T       F       T       F
                F       F       F       F       T       F

### e. (M ^ (¬A)) v (¬C)

                A       M       C      ¬A      M ^     ¬C       v
                T       T       T       F       F       F       F
                T	    T	    F	    F	    F	    T	    T
                T	    F	    T	    F	    F	    F	    F
                T	    F	    F	    F	    F	    T	    T
                F	    T	    T	    T	    T	    F	    T
                F	    T	    F	    T	    T	    T	    T
                F	    F	    T	    T	    F	    F	    F
                F	    F	    F	    T	    F	    T	    T