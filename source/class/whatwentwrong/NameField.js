qx.Class.define("whatwentwrong.NameField", {
    extend: qx.ui.container.Composite,

    construct: function() {
        this.base(arguments);
        var layout = new qx.ui.layout.HBox();
        this.setLayout(layout);
        var label = new qx.ui.basic.Label("Name:");
        this.add(label);
        var field = new qx.ui.form.TextField("");
        field.bind("value", whatwentwrong.Character.getInstance(), "name");
        this.add(field);
     }
});
