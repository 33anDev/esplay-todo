# Esplay ToDo

## Frågor om koden

### State-hantering
Appen sparar alla uppgifter i en array med `useState` i `App.jsx`. Varje uppgift är ett objekt med `id`, `text` och `completed`, där `completed` visar om uppgiften är klar eller inte. Text som användaren skriver i inputfältet sparas i ett eget state, `newTodo`. När jag anropar `setTodos` med en ny lista renderar React om komponenten, så att listan och räknaren direkt visar den nya datan utan att sidan laddas om.

### Oföränderlighet
React jämför den gamla och den nya array för att se om någonting har ändrats. Om man använder `.push()` ändras samma array så react ser ingen skillnad och gränssnittet uppdateras inte. Därför skapar jag alltid en ny array när jag lägger till en uppgift använder jag spread `[...prevTodos, todo]`, och när jag tar bort en uppgift använder jag `.filter()`, som skapar en ny lista utan den valda uppgiften. När en uppgift markeras som klar använder jag `.map()` och skapar ett nytt objekt med `{ ...todo, completed: !todo.completed }`.

## Kodgranskning

```javascript
function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
```

Funktionen ska lägga till en ny uppgift i listan så att den syns på skärmen.

Den tar emot listan todos och en text. Sen använder den push som ändrar direkt i den gamla listan, och returnerar samma lista igen. Den lägger också bara till en text och inte ett objekt med id och completed.

Problemet är att React inte märker att något har ändrats eftersom det fortfarande är samma lista. Då uppdateras inte skärmen och den nya uppgiften syns inte.

Koden försöker lägga till en uppgift med push, men problemet är att den ändrar direkt i state så att React inte upptäcker ändringen. Ett bättre sätt är att skapa en ny lista med spread och lägga till ett nytt objekt.

function addTodo(todos, text) {
  const newTodo = { id: crypto.randomUUID(), text: text, completed: false }
  return [...todos, newTodo]
}

## Problemlösning och reflektion

När jag skulle koppla inputfältet till state skrev jag `value={}` utan något innehåll och fick felet "JSX attributes must only be assigned a non-empty expression", både i VSC och i webbläsaren. Jag frågade Claude ai vad felet betydde och fick förklarat att `value` ska visa det nuvarande värdet från state, alltså `newTodo`, medan `setNewTodo` används i `onChange` för att ändra det. Sen så rättade jag själv till raden `value={newTodo}` och testade att texten följde med när jag skrev. Under projektet har jag också använt ai för förklaringar, små kodexempel, styling och felsökning.


## Muntlig redovisning

länk till den muntliga redovisningen: https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_uzeiem_folkuniversitetet_nu/IQC4Fdgz5DAmQKR3E1Ve3OHtAYA7DNyETUw84M6p86vEaNQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=bhMckx