sameHeight = function(container, el) {

    $(container).each(function() {
        var highestEl = 0,
        $this = $(this);
        $(el, this).each(function() {
            if ($this.height() > highestEl)
                highestEl = $this.height();
        });
        $(el, this).height(highestEl);

    });
}