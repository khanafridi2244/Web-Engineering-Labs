<?php
$stringToBeTested = "I am string to be tested";

// Reversing the string
$reversedString = strrev($stringToBeTested);
echo "Reversed String: " . $reversedString . "<br>";

// Counting the number of words
$wordCount = str_word_count($stringToBeTested);
echo "Number of Words: " . $wordCount . "<br>";

// Finding the position of the word "be"
$positionOfBe = strpos($stringToBeTested, "be");
echo "Position of 'be': " . $positionOfBe . "<br>";
?>
