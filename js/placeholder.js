Placeholder = function(element) 
{   
    //set the value to the placeholder attribute
    element.val(element.attr('placeholder'));
    
    //clear value on focus, if it's the same as placeholder attribute
    element.focus(function()
    {
        if (element.val() == element.attr('placeholder'))
        {
            element.val('');
        }
    });
    
    //reset value to placeholder attribute, if no value has been entered
    element.blur(function()
    {
        if (element.val() == "")
        {
            element.val(element.attr('placeholder'));
        }
    });
    
    //clear value on submit, to stop it being submitted, if it's the same as placeholder
    element.parents('form').submit(function() 
    {
        if (element.val() == element.attr('placeholder'))
        {
            element.val('');
        }
    });
};

$(function() 
{
    function isPlaceholderSupported() 
    {
        var input = document.createElement("input");
        return ('placeholder' in input);
    }
    
    if(!isPlaceholderSupported())
    {    
        $("[placeholder]").each(function()
        {
            new Placeholder($(this));
        });
    }
});