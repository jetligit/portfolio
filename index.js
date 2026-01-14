function goToPage(page_name){
    window.location.href = page_name;
}

document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.dataset.link;
        goToPage(link);
    });
});