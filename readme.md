# The Ultimate UI/UX Memory Game

## Domácí úkol na webové aplikace

Na implementaci jsem použil čistý JavaScript, CSS a HTML. JS je rozdělený do komponentů, takže projekt nelze spustit přímo ze souboru, je potřeba http.  
Snažil jsem se programovat co nejvíce dynamicky, takže pokud by někdo chtěl nahrát další obrázky, nebo kategorie, jednoduše se přidá složka do adresáře `assets/images/game` a aktualizuje se `images.json`.  

S přehledností kódu nejsem úplně spokojen, určitě to šlo lépe, ale to, jak funguji JS komponenty jsem pořádně pochopil až ke konci a už se mi nechtělo všechno "správně" přepisovat.  

Na design jsem použil Figmu.  

## Hra
Ovládání by mělo být jednoduché a intuitivní - na začátku si zvolíte, jestli chcete hrát solo, nebo s kamarádem, poté se načte obrazovka s kartami a hra začíná. 
Dá se nastavit složitost (čím vyšší složitost, tím více šipek na tlačítku), nebo se dá pole resetovat, což zamíchá a náhodně zvolí nové karty (a začne nová hra). 
Nahoře je header, který odkazuje na úvodní stránku. 

Hráč, který je na tahu je vybarven zeleně. 

Během hry se počítají tahy, skóre a přesnost. Jinak platí klasická pravidla pexesa, tedy hráč, který správně vybere dvojici karet hraje znovu. 

## Jak spustit
Spuštění je jednoduché, nejlépe přes **VSCode Live server**.
