Crea una carpeta PAC3 i inicialitza git en aquesta ruta. Igual que a les anteriors PAC, has de crear un fitxer README.md a l'arrel de la carpeta que contingui que contindrà almenys aquesta informació 
• Login UOC : jjunyc
• Nom i cognoms de l’alumne: Jordi Juny Canals
• Breu descripció del que s'ha realitzat en aquesta PAC, dificultats, millores realitzades, si cal tenir alguna cosa en compte a l'hora de corregir/executar la pràctica o qualsevol aspecte que vulgueu destacar.

1. Tasca 1 i exercici 2 hi han molts errors de typescript i algun codi afegit addicional, quen m'ha servit per compendre l'exercici, entendre les variables, provar casos i exemplificar el que després responc a la teoria.

2. L'exercici 4 he estat molt de temps resolent el problema de la exportació:
 Uncaught ReferenceError: exports is not defined
que m'apareixia a tots els fitxers (view, service, model, controller). Finalment ho he resolt ja que era un tema de configuració de l'arxiu tsconfig i per resoldre-ho he hagut de configurar un arxiu tsconfig.browser.json que genera una carpeta dist amb tots els arxius.
Ara funciona.


Enllaç de GIT: https://github.com/jjunycanals/PAC3.git

echo "# jjunycanals" >> README.md

git init git add README.md git commit -m "first commit" git branch -M main git remote add origin https://github.com/jjunycanals/PAC3.git git push -u origin main