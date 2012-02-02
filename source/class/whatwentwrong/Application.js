/* ************************************************************************

   Copyright:

   License:

   Authors:

 ************************************************************************ */

/* ************************************************************************

#asset(whatwentwrong/*)

 ************************************************************************ */

/**
 * This is the main application class of your custom application "whatwentwrong"
 */
qx.Class.define("whatwentwrong.Application",
        {
            extend : qx.application.Standalone,



/*
 *****************************************************************************
 MEMBERS
 *****************************************************************************
 */

members :
{
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
        // Call super class
        this.base(arguments);

        // Enable logging in debug variant
        if (qx.core.Environment.get("qx.debug"))
        {
            // support native logging capabilities, e.g. Firebug for Firefox
            qx.log.appender.Native;
            // support additional cross-browser console. Press F7 to toggle visibility
            qx.log.appender.Console;
        }

        /*
           -------------------------------------------------------------------------
           Below is your actual application code...
           -------------------------------------------------------------------------
           */


        //var character = whatwentwrong.Table.getInstance().generatecharacter();
        this.debug(whatwentwrong.Character.getInstance().toString());

        var doc = this.getRoot();

        var throwstuffhere = new qx.ui.container.Composite().set({layout: new qx.ui.layout.VBox()});

        //var namefield = new whatwentwrong.NameField();

        var outbox = new whatwentwrong.Outbox();

        //throwstuffhere.add(namefield);

        throwstuffhere.add(outbox);
        outbox.update();

        doc.add(throwstuffhere);

    }
}
});
