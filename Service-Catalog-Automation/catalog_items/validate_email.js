function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;

    if (!newValue.includes("@")) {
        alert("Enter valid email address");
        g_form.clearValue('email');
    }
}
