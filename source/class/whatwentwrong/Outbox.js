qx.Class.define("whatwentwrong.Outbox", {
    extend: qx.ui.form.TextArea,

    construct: function() {
        this.base(arguments);
        this.setReadOnly(true);
        this.setWidth(500);
        this.setHeight(500);
        this.setFont("monospace");
    },

    members: {
        update: function() {
            this.setValue(whatwentwrong.Character.getInstance().toString());
        }
    }
});
