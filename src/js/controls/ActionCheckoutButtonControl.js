import Control from "./Control.js";

export default class ActionCheckoutButtonControl extends Control {
    groupId() {
        return 'action';
    }

    renderHtml() {
        var thisControl = this;

        var html = $('#ActionCheckoutButtonControl').html();
        html = html.replace("[TITLE]", this.title);

        var div = $('<div>').html(html);
        div.find('.action-button .owp-button').html(getI18n('select_option'));
        div.find('.action-button .down-menu-button').append('<li style="display:none;"><a class="link-button select-option link-page" href="javascript:;" data-name="--Select option--" id="">--Select option--</a></li>');


        //************************* Product Drop Down *************************//
        // Cache the .action-button element for reuse
        var actionButton = div.find('.action-button');
        // Create a jQuery object for the select element and populate it with options
        var select = $(`<select id="product-dropdown-${this.id}" class="form-control text-center w-50">
            </select>`);
        // Append options from window.storeProducts
        window.storeProducts.forEach(function (product) {
            select.append(`<option value="${product.id}">${product.title}</option>`);
        });
        // Create a template for the widget section
        var widgetSectionTemplate = `
            <div id="product-widget-section-${this.id}" class="widget-section">
            <div class="label">Select Product</div>
            </div>
            `;
        // Append the widget section to .action-button
        actionButton.append(widgetSectionTemplate);
        // Append the select element to the widget section
        actionButton.find(`#product-widget-section-${this.id}`).append(select);


        //************************* Product Drop Down *************************//


        div.find('.action-button .action-button-link').html(getI18n('select_option'));
        div.find('.action-button .down-menu-action-button').append('<li style="display:none;"><a class="link-action-button select-option link-action-page" href="javascript:;" data-name="--Select option--" id="">--Select option--</a></li>');

        //cho link to page
        var down_menu_button_id = 'down-menu-button_' + this.id;
        div.find('.action-button .down-menu-button').attr('id', down_menu_button_id);

        var dropdown_link_page = 'dropdown-link-page_' + this.id;
        div.find('.action-button .owp-button').attr('id', dropdown_link_page);

        //cho action page(form submit)
        var down_menu_action_button_id = 'down-menu-action-button_' + this.id;
        div.find('.action-button .down-menu-action-button').attr('id', down_menu_action_button_id);

        var dropdown_action_page = 'dropdown-action-page_' + this.id;
        div.find('.action-button .action-button-link').attr('id', dropdown_action_page);

        //radio check action page
        var check_link_page = 'check-link-page_' + this.id;
        div.find('.action-button .check-link-page').attr('id', check_link_page);
        var check_action_page = 'check-action-page_' + this.id;
        div.find('.action-button .check-action-page').attr('id', check_action_page);

        div.find('.action-button .down-menu-button').append('<li><a class="link-button external-url" href="javascript:;" data-name="PRODUCT" id="">Product</a></li>');

        var link_button_id = 'link-button_' + this.id;
        div.find('.action-button .link-button').attr('id', link_button_id);
        var link_action_button_id = 'link-action-button_' + this.id;
        div.find('.action-button .link-action-button').attr('id', link_action_button_id);
        var input_external_id = 'input-' + this.id;
        var product_dropdown_id = 'product-dropdown-' + this.id;
        div.find('.action-button .input-external').attr('id', input_external_id);

        var input_url_external = 'input-url_' + this.id;
        div.find('.action-button .input-url').attr('id', input_url_external);

        //truong hop the aco link la external url
        var href = this.value.data_action;
        if (href == undefined || href == '') {
            div.find('.action-button button.action-button-link').addClass('disable');
            div.find('.action-button button.owp-button').addClass('disable');
            div.find('.action-button div.arrows-button').addClass('disable');

            // default custom URL if href is empty
            div.find('.action-button .owp-button').html(getI18n('product'));
            var external_url = div.find('.action-button .owp-button').html();
            if (external_url == getI18n('product')) {
                div.find('.action-button .input-url').removeClass('input-url-hide');
            }
            div.find('.action-button .input-external').attr('value', url);
            div.find('.action-button input.check-link-page').attr("checked", true);
            div.find('.action-button button.action-button-link').addClass('disable');
            div.find('.action-button div.arrows-button').addClass('disable');
            div.find('.action-button .owp-button').removeClass('disable');


        }

        if (href) {
            var string = href.slice(5);
            var url = string.split(']}')[0];

            var href_ext = href.indexOf('{URL[http');
            if (href_ext !== -1) {
                div.find('.action-button .owp-button').html(getI18n('product'));
                var external_url = div.find('.action-button .owp-button').html();
                if (external_url == getI18n('product')) {
                    div.find('.action-button .input-url').removeClass('input-url-hide');
                }
                div.find('.action-button .input-external').attr('value', url);
                div.find('.action-button input.check-link-page').attr("checked", true);
                div.find('.action-button button.action-button-link').addClass('disable');
                div.find('.action-button div.arrows-button').addClass('disable');

            } else if (href_ext == -1) {
                div.find('.action-button .owp-button').html(getI18n('product'));
                var ext_url = div.find('.action-button .owp-button').html();
                if (ext_url == getI18n('product')) {
                    div.find('.action-button .input-url').removeClass('input-url-hide');
                }
                div.find('.action-button .input-external').attr('value', href);
                div.find('.action-button input.check-link-page').attr("checked", true);
                div.find('.action-button button.action-button-link').addClass('disable');
                div.find('.action-button div.arrows-button').addClass('disable');
            }
        }
        div.find('.action-button .giua').addClass('d-none');



        //click select options
        $(document).on('click', '#' + link_button_id, function () {
            var data_name = $(this).attr('data-name');
            $('.owp-button').html(data_name);

            var data_action = $(this).attr('value');
            if (data_name == 'PRODUCT' && !$('#' + input_external_id).is(":visible")) {
                data_action = '';
                $('#' + input_external_id).val('');
            }
            $('#' + down_menu_button_id).removeClass('hienlen');
            $('#' + down_menu_action_button_id).removeClass('hienlen');
            div.find('.action-button .action-button-link').html('--Select option--');
            $('#' + dropdown_action_page).html('--Select option--');

            thisControl.callback({data_action: data_action});
        });

        $(document).on('click', '#' + link_action_button_id, function () {
            var data_name = $(this).attr('data-name');
            $('.action-button-link').html(data_name);

            var data_action = $(this).attr('value');

            $('#' + down_menu_action_button_id).removeClass('hienlen');
            $('#' + down_menu_button_id).removeClass('hienlen');
            $('#' + dropdown_link_page).html('--Select option--');
            $('#' + input_url_external).addClass('input-url-hide');

            thisControl.callback({data_action: data_action});
        });

        //change input external
        $(document).on('change keyup', '#' + input_external_id, function () {
            var data_action = $(this).val();
            // var action = '{URL['+data_action+']}';

            thisControl.callback({data_action: data_action});
        });

        $(document).on('change', '#' + product_dropdown_id, function () {
            var data_action = $(this).val();
            console.log(data_action, '#product-dropdown')
            thisControl.callback({data_action: data_action});
        });

        //click input radio show hide action menu
        //check_link_page
        //check_action_page
        $(document).on('click', '#' + check_link_page, function () {
            $('#' + dropdown_action_page).addClass('disable');
            $('#' + dropdown_action_page).html(getI18n('select_option'));
            $('#' + dropdown_link_page).removeClass('disable');
            $('#' + down_menu_action_button_id).removeClass('hienlen');
        });

        $(document).on('click', '#' + check_action_page, function () {
            $('#' + dropdown_link_page).addClass('disable');
            $('#' + dropdown_link_page).html(getI18n('select_option'));
            $('#' + dropdown_action_page).removeClass('disable');
            $('#' + down_menu_button_id).removeClass('hienlen');
            $('#' + input_url_external).addClass('input-url-hide');
        });

        return div.html();
    }

}
