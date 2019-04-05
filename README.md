# Project 2 @cmda-minor-web-dev · 2018-2019

## Opdracht
Verbeter de website van [CMD Amsterdam](https://www.cmd-amsterdam.nl/). Dit kan door bijvoorbeeld de Performance (Laadsnelheid) en Accessibility (toegankelijkheid) te verbeteren.
Ook kan er rekening gehouden worden met Progressive Enhancement. 

## Developer (install)
```
npm i
npm start
```

## Analyse 
#### Performance
Bij het draaien van een test van de website valt gelijk op dat de website zeer laag scoort op Performance.
Op traag 3G netwerk duurt het 1.5 minuut voordat de website geheel geladen is. <br/>
__Wat veroorzaakt deze trage laadtijd?__ (Kort door de bocht):
* HTML laadtijd 6.2 seconden
* CSS laadtijd 2.6 seconden
* __Afbeeldingen 40 - 50 seconden!__

##### Test
![Eerste test](public/readmeimg/performance1.png)

#### Accessibility
Wat betreft de toegankelijkheid van de website is dit vrijwel in orde. Er kunnen wel labels worden toegevoegd
zodat screenreaders de pagina beter kunnen begrijpen. 

## Uitwerking
Voor dit project heb ik me gefocust op de performance omdat hier het meest te verbeteren valt.
Wat betreft de performance zijn de afbeeldingen de hoofdoorzaak van de langzame laadtijd. Hier
heb ik me dus op gefocust.

### Stap 1 - Server side 
Aangezien het een wordpress website is en deze op php draaien is het natuurlijk al een server side website.
Toch heb ik de website op mijn eigen NodeJS server laten draaien, zodat ik de performance verbeteringen kan 
toepassen die ik in het vak 'Performance-Matters' aan bod zijn gekomen. 

#### Wordpress API
Voor het renderen van de website waren er deze week twee keuzes:
* Gebruik de Wordpress REST API  













