# SpaceInvaders 

Hej verden, dette er mit første git & P5JS blanding projekt. Jeg håber koden er til at overskue. Åben venlist den sidste gemt commit :)

# Udviklingsprocessen 

Til at starte fik jeg et skabelon af læreren, som jeg skulle videre udvikle på. Det fungere på den måde at vi brugte GitHub, til at gemme og videre udvikle vores kode. Vi skulle lave en bruger til at starte med på github, som vi så skulle bruge gennem resten af projektet. Det en god idé at bruge github, da det giver adgang til versionskontrol, som blandt andet gør at mange kan arbjede med samme kode, kodebasens ændringshistorik gemmes og ældre versioner af kodebasen kan rekonstrueres. Dette var en stor hjælp under mit projekt, fordi under en af tingene videre udviklede på, gik noget andet i koden i "stykker", og derfor gik jeg bare en version tilbage, hvor det hele fungere igen. Fordelen med verssionskontrol system er at der er kun ét repository, som kan forstilles som en slags server, der logger og gemmer alt. Man kunne åbne sit projket fra visual studie, som også var noget jeg prøvede for første gang. Der inde kunne man skrive kommandoer i terminalen, som så gemte ens kode, til github. Jeg lavede en lille liste over hvordan man skal gøre og i hvilken rækkefølge. 

git init 

git add -A

git status 

git commit -m 'navn på commit'

git push -u origin master 

Med disse kommandoer, var det nemt og gemme, hver gang man udviklede på sin kode. 

Jeg fik bunkerene til at fungere delvist, men skibet, bullets og alians fungere godt. 


# Svær kode
"
hasHitAliens(aliens){ 
        for (let i=0;i<aliens.length;i++){
            if (aliens[i].alive && this.hasNotHit){
                if (this.x > (aliens[i].x)-3 && this.x < (aliens[i].x)+27
                    && this.y > (aliens[i].y)-3 && this.y < (aliens[i].y)+27){
                   // print("true")
                    aliens[i].alive = false;
                    this.hasNotHit = false;
                }
            }
        }
    }
"
Denne metoder under klassen bullet, tjekker om en alian er blevet ramt af en bullet. Den tjekker om alien er "alive" og om bullet har ramt noget endnu for hver eneste alian. Den ved om bulleten har ramt alian, ved at se både bulleten og alians position overlapper hinanden, hvis de gør har bulleten ramt alian, og den specifikke alian skal ikke blive tegnet mere. Altså hvis en bullet position overlapper en alians position, sætter den "aliens[i].alive" til "false" og "this.hasNotHit" til false. 

For at forklare hvordan delene fungere laver jeg nogle punkter: 

1. Preloader og initializere:
   * Altaå at preload funktion bliver brugt til at loade billederne ind.
   * Bullets, aliensLine1,aliensLine2,aliensLine3 samt bunker arrays blivere initializerert.

2. Setup function:
  * Vi sætter vores canvas op og initializere ship, alian og bunker.

3. Draw function:
  * Draw functionen bliver ved med at blive updatere, så man kan se det på sit canvas.
  * Functionen bliver brugt til at updatere og tegne rumskibet, bullets, aliens og bunkers.

4. Klasser
  * Jeg har difineret flere klasser, såsom Ship, Alian, Bullet og Bunker, hvor alle har deres egne attributter og metoder.
  * "Alian" klassen, kontrolere hvordan aliansne bevæger sig og deres udseende.
  * "Ship" klassen, kontrolere spillerens inputs, samt bevægelser og udseende.
  * "Bullet" klassen, kontrolere bullets bevægelse, og collision detection.
  * "Bunker" klassen, styrer hvordan bunkersne ser ud samt collistion detection.

5. Player inputs  
  * Når pil tasterne bliver trykket på og spacebaren, sker der noget på skærmen, som keyPressed functionen bliver brugt til.

6. Collision detection
  * hasHitAliens metoden, checker om nogen skud har ramt aliensne og fjerner dem der er blevet ramt. 
  * hasHitBunkers metoden checker om nogen skud har ramt bunkers.

7. spil loop 
  * Det handler om at updatere og tegne spil elementer gentagende gange indtil en kondition et nået. Et eksempel kan være aliensne som rammer bunden og spiller stopper. 

# Test af programmet

