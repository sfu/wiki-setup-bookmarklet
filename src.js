(function() {
    
    if (window.location.host !== 'wiki.sfu.ca' || window.location.pathname.indexOf('/config/') === -1) {
        // not the config page, bail
        alert('This script can only run from a wiki.sfu.ca config page.');
        return false;
    }
    var path = location.pathname.replace('/config/', '').replace('index.php', '').substr(1).replace('/', '_');

    var promptForValues = {
        Sitename: path,
        DBname: 'sfumediawikidb112x',
        DBprefix: path + '_'
    };

    var fields = {
        EmergencyContact: 'wiki@sfu.ca',
        SysopPass: 'REPLACE_ME',
        SysopPass2: 'REPLACE_ME',
        DBserver: 'mara.nfs.sfu.ca',
        DBuser: 'sfumediawiki',
        DBpassword: 'REPLACE_ME',
        DBpassword2: 'REPLACE_ME',
        RootUser: ''
    };

    for (var promptField in promptForValues) {
        fields[promptField] = prompt('Value for ' + promptField, promptForValues[promptField]);
    }

    for (var field in fields) {
        document.getElementById(field).value = fields[field];
    }
    
    window.scrollTo(0,document.body.scrollHeight);
})();