chrome.contextMenus.create(
    {
        "title": "Wrap Text",
        "contexts":["editable"],
        "onclick": function(info, tab) 
        {
            chrome.tabs.sendRequest(
                tab.id, 
                {
                    "wrapText": true
                }, 
                function(response){ }
            )
        }
    }
);
