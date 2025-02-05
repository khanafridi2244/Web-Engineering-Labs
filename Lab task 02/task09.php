<?php
function sum_of_digits($num) {
    $sum = 0;
    while ($num > 0) {
        $sum += $num % 10;
        $num = (int)($num / 10);
    }
    return $sum;
}

$num = 12345;
echo "Summation of $num is: " . sum_of_digits($num);
?>
