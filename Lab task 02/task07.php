<?php
function is_prime($num) {
    if ($num <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            return false;
        }
    }
    return true;
}

$sum = 0;
for ($i = 2; $i < 100; $i++) {
    if (is_prime($i)) {
        $sum += $i;
    }
}
echo "Sum of prime numbers less than 100: " . $sum;
?>
