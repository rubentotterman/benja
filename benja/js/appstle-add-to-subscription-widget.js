document.addEventListener('OpenAppstleContracts', appstleAddToShipmentHandler)

function appstleAddToShipmentHandler() {
    window.appstleAddToShipmentWidget = true;
    if (!checkAppstleCPInitialised()) {
        createAppstleCPPopupMarkup();
        appstleSubscriptionCustomerPortalInit("#appstle-cp-widget-placeholder");
        openAppstleCPPopup();
        appstle_jQuery('html').addClass('appstle-cp-widget-initialised');
    } else {
        openAppstleCPPopup();
    }
}

function checkAppstleCPInitialised() {
    if (appstle_jQuery('html').hasClass('appstle-cp-widget-initialised')) {
        return true;
    } else {
        return false;
    }
}

function openAppstleCPPopup() {
    appstle_jQuery('.appstle-cp-widget-popup').removeClass('as-hidden');
}

function closeAppstleCPPopup() {
    appstle_jQuery('.appstle-cp-widget-popup').addClass('as-hidden');
}

function createAppstleCPPopupMarkup() {
    appstle_jQuery('body').append(`<div class="appstle-cp-widget-popup as-hidden as-relative as-z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div style="display: block !important; position: fixed;" class="!as-fixed !as-block as-inset-0  as-bg-gray-900 as-bg-opacity-75 as-transition-all as-backdrop-blur-md"></div><div class="as-fixed as-inset-0 as-z-10 as-w-screen as-overflow-y-auto"><div class="as-min-h-full as-items-end as-justify-center as-p-4 as-text-center sm:as-items-center sm:as-p-0"><div class="as-relative as-transform as-overflow-hidden as-rounded-lg as-text-left as-transition-all sm:as-my-8 sm:as-w-full as-mx-auto"><div class="as-container as-mx-auto"><div class="as-flex as-justify-end "><button onClick="closeAppstleCPPopup()" class="as-py-3 as-px-4 as-pt-3 as-rounded-full as-border-red as-bg-white as-flex as-leading-none as-justify-center as-items-center text-lg">×</button></div><div id="appstle-cp-widget-placeholder"><div style="margin-top: 32px;" class="as-mt-4 as-rounded-lg as-bg-white as-shadow as-overflow-hidden sm:as-rounded-lg as-card as-subscription as-w-full as-mx-auto">
            <div class="as-px-4 as-py-5 sm:as-px-6 as-flex as-justify-between as-flex-col lg:as-flex-row as-subscription-header">
                <p class="as-mt-1 as-max-w-2xl as-text-sm as-text-gray-900 as-next-order-date"></p>
                <p class="as-mt-1 as-max-w-2xl as-text-sm as-text-gray-900 as-order-frequency"></p>
            </div>
            <div class="as-border-gray-200 as-px-4 as-py-5 sm:as-px-6 as-subscription-detail">
                <div class="as-flex as-justify-center as-items-center as-subscription-product">
                    <div class="as-col-span-3 as-subscription-product-details">
                    <svg role="status" class="as-mr-2 as-inline as-w-6 as-h-6 as-text-gray-200 as-animate-spin as-fill-blue-600 appstle-loader-small" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
</svg> We are fetching your contract details. Please wait.</div>
                </div>
            </div>
            <div class="as-px-4 as-py-5 sm:as-px-6 as-flex as-justify-between as-flex-col md:as-flex-row as-items-center  as-subscription-footer">
                <p class="as-text-md as-leading-6 as-font-medium as-text-gray-700 as-flex as-items-center as-total"></p>
            </div>
            </div></div></div></div></div></div></div>`)
}