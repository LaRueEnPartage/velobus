var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_lieux_1 = new ol.format.GeoJSON();
var features_lieux_1 = format_lieux_1.readFeatures(json_lieux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lieux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lieux_1.addFeatures(features_lieux_1);
var lyr_lieux_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lieux_1, 
                style: style_lieux_1,
                popuplayertitle: 'lieux',
                interactive: true,
    title: 'lieux<br />\
    <img src="styles/legend/lieux_1_0.png" /> Collège<br />\
    <img src="styles/legend/lieux_1_1.png" /> École<br />' });
var format_ligne_2 = new ol.format.GeoJSON();
var features_ligne_2 = format_ligne_2.readFeatures(json_ligne_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_2.addFeatures(features_ligne_2);
var lyr_ligne_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_2, 
                style: style_ligne_2,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_2.png" /> ligne'
            });
var format_arrets_3 = new ol.format.GeoJSON();
var features_arrets_3 = format_arrets_3.readFeatures(json_arrets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_3.addFeatures(features_arrets_3);
var lyr_arrets_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_3, 
                style: style_arrets_3,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_3.png" /> arrets'
            });
var format_ligne_4 = new ol.format.GeoJSON();
var features_ligne_4 = format_ligne_4.readFeatures(json_ligne_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_4.addFeatures(features_ligne_4);
var lyr_ligne_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_4, 
                style: style_ligne_4,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_4.png" /> ligne'
            });
var format_arrets_5 = new ol.format.GeoJSON();
var features_arrets_5 = format_arrets_5.readFeatures(json_arrets_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_5.addFeatures(features_arrets_5);
var lyr_arrets_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_5, 
                style: style_arrets_5,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_5.png" /> arrets'
            });
var format_ligne_6 = new ol.format.GeoJSON();
var features_ligne_6 = format_ligne_6.readFeatures(json_ligne_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_6.addFeatures(features_ligne_6);
var lyr_ligne_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_6, 
                style: style_ligne_6,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_6.png" /> ligne'
            });
var format_arrets_7 = new ol.format.GeoJSON();
var features_arrets_7 = format_arrets_7.readFeatures(json_arrets_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_7.addFeatures(features_arrets_7);
var lyr_arrets_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_7, 
                style: style_arrets_7,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_7.png" /> arrets'
            });
var format_ligne_8 = new ol.format.GeoJSON();
var features_ligne_8 = format_ligne_8.readFeatures(json_ligne_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_8.addFeatures(features_ligne_8);
var lyr_ligne_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_8, 
                style: style_ligne_8,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_8.png" /> ligne'
            });
var format_arrets_9 = new ol.format.GeoJSON();
var features_arrets_9 = format_arrets_9.readFeatures(json_arrets_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_9.addFeatures(features_arrets_9);
var lyr_arrets_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_9, 
                style: style_arrets_9,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_9.png" /> arrets'
            });
var group_CorbiacCollgeChedid = new ol.layer.Group({
                                layers: [lyr_ligne_8,lyr_arrets_9,],
                                fold: 'close',
                                title: 'Corbiac - Collège Chedid'});
var group_Courtadecolecentre = new ol.layer.Group({
                                layers: [lyr_ligne_6,lyr_arrets_7,],
                                fold: 'close',
                                title: 'Courtade - école centre'});
var group_Bcutcolecentre = new ol.layer.Group({
                                layers: [lyr_ligne_4,lyr_arrets_5,],
                                fold: 'close',
                                title: 'Bécut - école centre'});
var group_Tauzincolecentre = new ol.layer.Group({
                                layers: [lyr_ligne_2,lyr_arrets_3,],
                                fold: 'close',
                                title: 'Tauzin - école  centre'});

lyr_WazeWorld_0.setVisible(true);lyr_lieux_1.setVisible(true);lyr_ligne_2.setVisible(true);lyr_arrets_3.setVisible(true);lyr_ligne_4.setVisible(true);lyr_arrets_5.setVisible(true);lyr_ligne_6.setVisible(true);lyr_arrets_7.setVisible(true);lyr_ligne_8.setVisible(true);lyr_arrets_9.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_lieux_1,group_Tauzincolecentre,group_Bcutcolecentre,group_Courtadecolecentre,group_CorbiacCollgeChedid];
lyr_lieux_1.set('fieldAliases', {'id': 'id', 'Lieux': 'Lieux', 'Nom': 'Nom', });
lyr_ligne_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', 'Horaire': 'Horaire', });
lyr_ligne_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', 'Horaire': 'Horaire', });
lyr_ligne_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', });
lyr_ligne_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', 'Horaire': 'Horaire', });
lyr_lieux_1.set('fieldImages', {'id': 'TextEdit', 'Lieux': 'TextEdit', 'Nom': 'TextEdit', });
lyr_ligne_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', 'Horaire': 'DateTime', });
lyr_ligne_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', 'Horaire': 'TextEdit', });
lyr_ligne_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', });
lyr_ligne_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', 'Horaire': 'DateTime', });
lyr_lieux_1.set('fieldLabels', {'id': 'hidden field', 'Lieux': 'hidden field', 'Nom': 'hidden field', });
lyr_ligne_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'no label', 'Horaire': 'no label', });
lyr_ligne_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'no label', 'Horaire': 'no label', });
lyr_ligne_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'no label', });
lyr_ligne_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'inline label - visible with data', 'Horaire': 'inline label - visible with data', });
lyr_arrets_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});