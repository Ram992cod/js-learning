function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}

console.log(canAccessWebsite(17));