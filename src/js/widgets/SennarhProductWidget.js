import Widget from "./Widget.js";

export default class SennarhProductWidget extends Widget {
    getHtmlId() {
        return "SennarhProductWidget";
    }

    init() {
        // default button html
        this.setButtonHtml(`
            <div class="_1content widget-text">
                <div class="panel__body woo-panel__body">
                    <div class="image-drag">
                        <div>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0MjI2MThDMkExMTExRUVCMUM1RDI5MTBBQzFBMTAyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0MjI2MThEMkExMTExRUVCMUM1RDI5MTBBQzFBMTAyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTQyMjYxOEEyQTExMTFFRUIxQzVEMjkxMEFDMUExMDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTQyMjYxOEIyQTExMTFFRUIxQzVEMjkxMEFDMUExMDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5F7awWAAAGwElEQVR42uyc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">
                        </div>
                    </div>
                    <div class="body__title">{language.widget.SennarhProductWidget}</div>
                </div>
            </div>
        `);


            this.setContentHtml(`
                   <div class="text-center">
            <a builder-element="CheckoutButtonElement" data-style="style_1" builder-inline-edit class="btn btn-primary btn-lg mr-2" style="display: inline-block;
            font-weight: 400;
            color: #fff;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem 1.5rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color: #f5ce2c;
border-color:  #f5ce2c;">
                <div>Buy Now</div>
            </a>
        </div>
            `);


        // default dragging html
        this.setDraggingHtml(this.getButtonHtml());
    }

    getCellContainerElement() {
        return currentEditor.getIframeContent().find('#' + this.id);
    }

    drop() {
        // after drop
    }
}
