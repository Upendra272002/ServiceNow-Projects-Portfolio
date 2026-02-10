(function executeRule(current, previous) {

    if (current.category == 'software') {
        current.assignment_group = 'Software Support';
    }
    else if (current.category == 'hardware') {
        current.assignment_group = 'Hardware Support';
    }

})(current, previous);
