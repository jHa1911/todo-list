class toDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority || "medium";
    }
}

const addDialog = document.getElementById("addDialog");
const dialogBtn = document.getElementById("openDialogBtn");


dialogBtn.addEventListener("click", () => {
    addDialog.showModal();
    console.log('clicked');
});

