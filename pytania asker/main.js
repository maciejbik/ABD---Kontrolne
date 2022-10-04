var pytania = ["Jakie znasz rodzaje baz danych?",
    "Co to jest baza danych?",
    "Co to jest tabela?",
    "Co to jest pole?",
    "Co to jest rekord?",
    "Co to jest klucz podstawowy?",
    "Co to jest klucz obcy?",
    "Co to jest relacja?",
    "Jakie znasz typy danych MySQL?",
    "Podaj składnię zapytania tworzącego bazę danych.",
    "Podaj składnię zapytania tworzącego tabelę.",
    "Podaj składnię zapytania tworzącego tabelę wykorzystując zapytanie SELECT.",
    "Co to jest widok? Jak można utworzyć widok?",
    "Do czego służy zapytanie SELECT?",
    "Jak można posortować wyniki po jakiejś kolumnie rosnąco?",
    "Co oznacza klauzula LIKE?",
    "Do czego w zapytaniu SELECT służy BETWEEN?",
    "Co oznacza LIMIT 1?",
    "W jaki sposób łączymy dwie lub więcej tabel ze sobą?",
    "Co oznacza klauzula GROUP BY?",
    "Co oznacza klauzula HAVING?",
    "Co oznacza klauzula DISTINCT? Podaj przykład.",
    "Co to są aliasy i jak je zastosować?",
    "Do czego służy zapytanie INSERT INTO?",
    "Jak można wprowadzić kilka rekordów za pomocą jednego zapytania INSERT?",
    "Do czego służy zapytanie UPDATE?",
    "Jak można zmienić wartości w dwóch kolumnach jednocześnie za pomocą jednego zapytania UPDATE?",
    "Do czego służy zapytanie DROP?",
    "Do czego służy zapytanie DELETE?",
    "Do czego służy zapytanie TRUNCATE?",
    "Wyjaśnij różnice pomiędzy zapytaniami DROP, DELETE, TRUNCATE?",
    "Do czego służy instrukcja ALTER?",
    "Jak można dodać kolumnę do istniejącej tabeli?",
    "Co oznaczają słowa FIRST i AFTER w instrukcji ALTER?",
    "Jak można zmienić nazwę tabeli?",
    "Jak można dodać lub usunąć klucz podstawowy w tabeli?",
    "Do czego służy instrukcja ALTER?",
    "Jak można dodać kolumnę do istniejącej tabeli?",
    "Co oznaczają słowa FIRST i AFTER w instrukcji ALTER?",
    "Jak można zmienić nazwę tabeli?",
    "Jak można dodać lub usunąć klucz podstawowy w tabeli?",
    "Co to są transakcje?",
    "Jakie znasz właściwości ACID? Omów każdą z nich. Rozwiń skrót ACID.",
    "Jakie znasz poziomy izolacji transakcji?",
    "Do czego służy instrukcja GRANT?",
    "Do czego służy instrukcja REVOKE?",
    "Jak wykonać kopię zapasową?",
    "Co to jest kopia zapasowa? Po co ją tworzymy?",
    "Jak odtworzyć kopię zapasową?",
    "Co to jest normalizacja bazy danych?",
    "Jakie znasz postacie normalne? Omów każdą z nich.",
    "Wymień zalety normalizacji bazy danych."];

var odpowiedzi = new Array();

function main()
{
    asker(0);
}

function asker(x)
{
    if(x<pytania.length)
    {
        var main = document.querySelector(".main");
        main.innerHTML = 
        `<div class="asker">${x+1}. ${pytania[x]}</div>
        <textarea cols=35 rows=10 class="answer" type="text"></textarea>
        <button class="button" onclick="dodaj(${x})">Dalej</button>`;
    }
    else
    {
        document.write("odpowiedzi = [");
        for(i=0;i<odpowiedzi.length;i++)
        {
            document.write(`"`+odpowiedzi[i]+`"`);
            if(i!=odpowiedzi.length-1)
            {
                document.write(",<br>");
            }
        }
        document.write("];");
    }
}

function dodaj(x)
{
    var answer  = document.querySelector(".answer");
    //alert(answer);
    odpowiedzi[x] = answer.value;
    //alert(answer.value);
    asker(x+1);
}
