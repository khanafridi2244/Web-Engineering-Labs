<?php
$array = array("Pakistan", "England", "India",
               "America", "Dubai", "Saudi Arabia",
               "Mexico", "Turkey", "Holland",
                "Karachi", "Peshawar", "Lahore");
// Printing values separated by commas
echo implode(", ", $array);
echo "<br>";

// Sorting the array
sort($array);

// Printing values in an unordered list
echo "<ul>";
foreach ($array as $value) {
    echo "<li>$value</li>";
}
echo "</ul>";

// Adding new cities
$array = array_merge($array, array("Quetta", "Faisalabad", "Multan"));

// Sorting again
sort($array);

// Printing again in an unordered list
echo "<ul>";
foreach ($array as $value) {
    echo "<li>$value</li>";
}
echo "</ul>";
?>
