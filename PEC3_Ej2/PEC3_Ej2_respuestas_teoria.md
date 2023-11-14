<!-- 0.(0.5 punts) Modificar el codi de code1.ts perquè doni un error al IDE disparant un TypeError. -->
JordiJuny@JORDI MINGW64 ~/Dropbox/uoc/UOC/HTML i CSS 1 + Frameworks JS/Angular/PAC3/PEC3_Ej2 (main)
$ tsc code1.ts
code1.ts:7:11 - error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

7 const d = c * 4;
            ~
Found 1 error in code1.ts:7

R/ Aquest error s'ha produit perquè estic operant un objecte que es C i multiplicant-lo per 4. Això no és possible. Un objecte no es pot multplicar per 4. Ho hauria de fer per algún dels seus valors, sempres que fos un valor numeric no donaria problemes.
Al compilar l'arxiu code1.ts a code1.js en el mateix terminal podem detectar aquests tipo d'errors així com altres errors menors o de sintaxi. Això permet entregar codi de més alta qualitat i ajuda a detectar errors en temps de desenvolupament i millora la seguretat del codi.


<!-- 1. (1 punt) Per a cadascun dels valors del fitxer code2.ts, quin tipus de dades inferirà TypeScript? Expliqueu per què s'ha inferit aquest tipus de dades. -->
const a = 1042;  > number > Typescript detectará que es un nombre i declarará 'a' com a variable numerica.

const b = 'apples and oranges'; > String > Typescript detectarà que està entre cometes simples, pel que marcarà a 'b' com a un string.

const c = 'pineapples'; > String > Typescript detectarà que està entre cometes simples, pel que marcarà a 'c' com a un string.

const d = [true, true, false]; > Object > Typescript detecta que és un array però si utlitzem la propietat typeof() veurem que retorna un objecte. Aquest array en realitat es un array de booleans. Podría estar definit com a const d: Array<boolean>. 
Typeof() retorna un objecte perquè a JavaScript els arrays son objectes.

const e = { type: 'ficus' }; > Object > Typescript classifica com a objecte ja que segueix l'esquema key: value i va entre claus. Es clarament un objecte.

const f = [1, false]; > Object > Typescript es un array, podría estar definit com const f: Array<any> = [1, false];  ja que conté un nombre i un boolea. La propietat typeof() la detecta com a un objecte ja que els arrays son objectes en JavaScript. No obstant, no deixa de ser un array amb dos valors en les posicions 0 i 1.

const g = [3]; > Object > És un array que té un valor numèric, per tant serà un Array<number>. La propietat typeof() de javascript el detecte com a Objecte, perquè a JS els arrays son objectes.

const h = null; > Object > Encara que porti el valor NULL, la propietat Typeof() ho detecta com a un objecte. Perquè fos una variable null huria d'estar definida com a const h: null = null; És una variable a la que no li ha estat assignada cap valor i és per això que és undefined. Això vol dir que si proves de dir: h=2 o h=true, al compilar et donarà problemes, ja que h no està definida. 


<!-- 2. (1 punt) Per què es dispara cadascun dels errors del fitxer code3.ts? -->
Els errors son 4 i els exposaré un a un primer ensenyant l'error i després comentant-lo:

ERROR 1 > code3.ts:2:1 - error TS2588: Cannot assign to 'i' because it is a constant. Line 2, i = 4; // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)
RESPOSTA > Aquest error es dona perquè 'i' està declarada com a 'const' que vol dir constant, per tant no pot canviar i adoptar un altre valor, encara que aquest altre valor sigui un altre number. Per definició i=3 sempre i és constant. 

ERROR 2 > code3.ts:6:8 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'. Line 6, j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
RESPOSTA > 'j' es un Array on es dona d'alta amb valors tipo 'number'. A la línea 6 del codi s'està intentant introduir un nou valor al final de l'array mitjançant .push(), però el que passa és que aquest nou valor es un string (una cadena) i aquest array no admet aquest tipo de valors. A diferència de la línea 5 que fa push d'un nombre i s'incerta correctamente a l'array j que tindrà un element més, ja que és un number.

ERROR 3 > code3.ts:8:5 - error TS2322: Type 'number' is not assignable to type 'never'. Line 8, let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
RESPOSTA > 'never' sempre dona un error. Quan es defineix una variable amb 'never', aquesta sempre retorna un error i indica que els valors que no es produiran mai. S'utlitza 'never' quan estem al 100% segurs que mai no passarà alguna cosa. Aquí dona error perquè s'està intentant definir 'k' com el valor 4 i això no pot ser, ja que una variable si es defineix com a 'never' no podem donar-li al mateix temps un valor 4.

ERROR 4 > code3.ts:11:9 - error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. Line 11, let m = l * 2; // Error TS2571: Object is of type 'unknown'.
RESPOSTA > La variable 'l' està definida com a 'unknown' que vol dir que es desconeguda. Es defineix així una variable quan no se sap quin tipus serà aquesta. Es podria ulitizar any per això però unknown és també una opció valida i es menys permisiva que any. Totes les assignacions d'un valor a la variable es consideren correctes amb l'ús de uknown. No obstant això, quan s'intenta operar amb una variable definida així amb altres tipus de variables no és possible.
En aquest cas la línea 10 no dona problemes i l=4. Però la línea 11, que multiplica l per 2, dona error perquè la lógica diu que estem operant amb una variable desconeguda i hauria de ser 'any' o 'number' o 'bigint' per poder realitzar la operació. Quan s'opera es comprova que sigui possible mirant la definició de les variables utilitzades.

<!-- 3. (0.5 punts) Quina és la diferència entre una classe i una interfície a TypeScript? -->

Una classe és una plantilla per a la creació d'objectes amb implementacions concretes de mètodes i propietats. És a dir, es defineix tant el comportament(mitjançant mètodes) com les propietats(mitjançant atributs) que els objectes creats a partir de la classe heredaran. Adicionalment, les classes poden tenir constructors per a inicialitzar objectes quan es creen.
En canvi una interfície és una contractació que defineix quins mètodes i propietats ha de tenir una classe que la implementa, sense proporcionar la implementació com a tal. És a dir, una interfície és una manera de definir contractes par a les classes. Les interfícies no implementen cap lògica, però es poden utilitzar per garantir que les classes compleixin certes restriccions o certs requeriments en la seva estructura.
