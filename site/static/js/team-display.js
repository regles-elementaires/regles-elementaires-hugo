const allMembers = Array.from(document.querySelectorAll(".equipe__membre"));
const allButtons = Array.from(document.querySelectorAll(".equipe-button"));

const displayMembers = elem => {

    console.log(elem.dataset.team);

    if (!elem.classList.contains("equipe-button-active")) {
        allButtons.forEach(button => {
            button.classList.remove("equipe-button-active");
        });
        elem.classList.add("equipe-button-active");

        allMembers.forEach(member => {
            if (!member.classList.contains(elem.dataset.team)) {
                member.classList.add("equipe__membre-inactive");
            } else {
                member.classList.remove("equipe__membre-inactive");
            }
        });
    }
}

const initMembers = () => {
    allMembers.forEach(member => {
        if (!member.classList.contains("permanent")) {
            member.classList.add("equipe__membre-inactive");
        };
    });
}