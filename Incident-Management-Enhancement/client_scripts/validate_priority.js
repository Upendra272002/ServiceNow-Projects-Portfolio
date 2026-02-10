function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;

    if (newValue == '1') {
        alert("Priority 1 requires manager approval");
    }
}
