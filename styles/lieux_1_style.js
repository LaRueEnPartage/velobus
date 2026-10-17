var size = 0;
var placement = 'point';
function categories_lieux_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Collège':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [140, 120],
                  scale: 0.40714285714285714,
                  anchor: [70.0, 60.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/college.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'École':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [120, 100],
                  scale: 0.475,
                  anchor: [120.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ecole_classe.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_lieux_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Lieux");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'center';
    var offsetX = 0.0;
    var offsetY = 26.0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (exp_label_lieux_1_eval_expression(context) !== null) {
        labelText = String(exp_label_lieux_1_eval_expression(context));
    }
    
    var style = categories_lieux_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
