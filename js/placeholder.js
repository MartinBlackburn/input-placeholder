Placeholder = function(element) 
{   
    
};

$(function() 
{
    $("[placeholder]").each(function()
    {
        new Placeholder($(this));
    });
});