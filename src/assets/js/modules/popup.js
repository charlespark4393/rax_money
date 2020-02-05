class Popup {
    constructor() {
        this.$DOM = {
            popup: $(".popup"),
            popupInner: $(".popup__inner"),
            trigger: $("[data-popup-trigger]")
        }

        this.$DOM.trigger.click(this.togglePopup);
        this.$DOM.popup.click(this.closePopup);
        this.$DOM.popupInner.click(e => { e.stopPropagation(); });
    }

    closePopup = () => {
        this.$DOM.popup.removeClass("is-active");
    }

    togglePopup = e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const target = $this.attr("data-popup-trigger");
        const $target = $(`[data-popup-target="${target}"]`);
        $target.toggleClass("is-active");
    }
}