var r = new sn_ws.RESTMessageV2();
r.setEndpoint('https://api.example.com/data');
r.setHttpMethod('GET');

var response = r.execute();
var status = response.getStatusCode();

if(status == 200){
    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.short_description = "Created from API";
    gr.insert();
}
