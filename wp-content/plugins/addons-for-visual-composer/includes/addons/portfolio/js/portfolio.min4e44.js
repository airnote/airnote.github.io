jQuery(function(t){if(void 0!==t().isotope){var o="";t(".lvca-portfolio-wrap").each(function(){var e=t(this).find(".js-isotope");e.imagesLoaded(function(){e.isotope("layout")});var i=t(this).find(".lvca-portfolio");if(0!==i.length){t(this).find(".lvca-taxonomy-filter .lvca-filter-item a").on("click",function(o){o.preventDefault();var e=t(this).attr("data-value");return i.isotope({filter:e}),t(this).closest(".lvca-taxonomy-filter").children().removeClass("lvca-active"),t(this).closest(".lvca-filter-item").addClass("lvca-active"),!1}),portfolio_elem=t(this).find(".lvca-portfolio");var a="#"+portfolio_elem.attr("id"),l="undefined"!=typeof portfolio_elem.data("gutter")?portfolio_elem.data("gutter"):10,r="undefined"!=typeof portfolio_elem.data("tablet_gutter")?portfolio_elem.data("tablet_gutter"):10,p=portfolio_elem.data("tablet_width")||800,f="undefined"!=typeof portfolio_elem.data("mobile_gutter")?portfolio_elem.data("mobile_gutter"):10,d=portfolio_elem.data("mobile_width")||480;o+=a+".lvca-portfolio { margin-left: -"+l+"px; margin-right: -"+l+"px; }",o+=a+".lvca-portfolio .lvca-portfolio-item { padding:"+l+"px; }",o+=" @media only screen and (max-width: "+p+"px) { "+a+".lvca-portfolio { margin-left: -"+r+"px; margin-right: -"+r+"px; } "+a+".lvca-portfolio .lvca-portfolio-item { padding:"+r+"px; } } ",o+=" @media only screen and (max-width: "+d+"px) { "+a+".lvca-portfolio { margin-left: -"+f+"px; margin-right: -"+f+"px; } "+a+".lvca-portfolio .lvca-portfolio-item { padding:"+f+"px; } } "}}),""!=o&&(o='<style type="text/css">'+o+"</style>",t("head").append(o))}});