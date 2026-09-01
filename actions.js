import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';



$(window).on("load", function () {

    const nodes = [
        {
            id: '0',
            panorama: 'img/foto0.webp',
            thumbnail: 'img/foto0_thumb.webp',
            name: 'Piso 8',
            caption: 'Puerta principal',
            links: [{ nodeId: '1', position: { textureX: -80, textureY: -1800 } }, { nodeId: '12', position: { textureX: 10010, textureY: -1450 } }, { nodeId: '19', position: { textureX: 10010, textureY: -2150 } }],
            sphereCorrection: { pan: '0deg' }
        },
        {
            id: '1',
            panorama: 'img/foto1.webp',
            thumbnail: 'img/foto1_thumb.webp',
            name: 'Entrada',
            caption: 'Puerta principal',
            links: [{ nodeId: '2', position: { textureX: -200, textureY: -1800 } }, { nodeId: '0', position: { textureX: 3500, textureY: -1800 } }],
            sphereCorrection: { pan: '0deg' }
        },
        {
            id: '2',
            panorama: 'img/foto2.webp',
            thumbnail: 'img/foto2_thumb.webp',
            name: 'Sala',
            caption: 'Sala Comedor',
            links: [{ nodeId: '1', position: { textureX: 3300, textureY: -1800 } }, { nodeId: '3', position: { textureX: 4100, textureY: -1800 } }, { nodeId: '4', position: { textureX: 100, textureY: -1800 } }, { nodeId: '5', position: { textureX: 5000, textureY: -1800 } }],
            sphereCorrection: { pan: '190deg' }
        },
        {
            id: '3',
            panorama: 'img/foto3.webp',
            thumbnail: 'img/foto3_thumb.webp',
            name: 'Cocina',
            caption: 'Cocina',
            links: [{ nodeId: '1', position: { textureX: 2600, textureY: -2100 } }, { nodeId: '2', position: { textureX: 400, textureY: -2400 } }, { nodeId: '4', position: { textureX: 100, textureY: -1800 } }, { nodeId: '5', position: { textureX: -1400, textureY: -2000 } }],
            sphereCorrection: { pan: '190deg' }
        },
        {
            id: '4',
            panorama: 'img/foto4.webp',
            thumbnail: 'img/foto4_thumb.webp',
            name: 'Mirador',
            caption: 'Mirador Principal',
            links: [{ nodeId: '2', position: { textureX: 3400, textureY: -2300 } }],
            sphereCorrection: { pan: '15deg' }
        },
        {
            id: '5',
            panorama: 'img/foto5.webp',
            thumbnail: 'img/foto5_thumb.webp',
            name: 'Estudio',
            caption: 'Estudio Principal',
            links: [{ nodeId: '2', position: { textureX: 1200, textureY: -1800 } }, { nodeId: '6', position: { textureX: 5900, textureY: -1800 } }],
            sphereCorrection: { pan: '95deg' }
        },
        {
            id: '6',
            panorama: 'img/foto6.webp',
            thumbnail: 'img/foto6_thumb.webp',
            name: 'Pasillo',
            caption: 'Pasillo Principal',
            links: [{ nodeId: '5', position: { textureX: 1800, textureY: -1800 } }, { nodeId: '7', position: { textureX: 3700, textureY: -1800 } }, { nodeId: '8', position: { textureX: 7500, textureY: -1800 } }, { nodeId: '9', position: { textureX: 6500, textureY: -1800 } }, { nodeId: '10', position: { textureX: 5200, textureY: -1800 } }],
            sphereCorrection: { pan: '95deg' }
        },
        {
            id: '7',
            panorama: 'img/foto7.webp',
            thumbnail: 'img/foto7_thumb.webp',
            name: 'Baño',
            caption: 'Baño Auxiliar',
            links: [{ nodeId: '6', position: { textureX: 3500, textureY: -1800 } }],
            sphereCorrection: { pan: '0deg' }
        },
        {
            id: '8',
            panorama: 'img/foto8.webp',
            thumbnail: 'img/foto8_thumb.webp',
            name: 'Habitación',
            caption: 'Habitación Auxiliar #1',
            links: [{ nodeId: '6', position: { textureX: 4350, textureY: -1800 } }],
            sphereCorrection: { pan: '0deg' }
        },
        {
            id: '9',
            panorama: 'img/foto9.webp',
            thumbnail: 'img/foto9_thumb.webp',
            name: 'Habitación',
            caption: 'Habitación Auxiliar #2',
            links: [{ nodeId: '6', position: { textureX: 2700, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '10',
            panorama: 'img/foto10.webp',
            thumbnail: 'img/foto10_thumb.webp',
            name: 'Habitación',
            caption: 'Habitación Principal',
            links: [{ nodeId: '6', position: { textureX: 2800, textureY: -2000 } }, { nodeId: '11', position: { textureX: 4800, textureY: -2000 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '11',
            panorama: 'img/foto11.webp',
            thumbnail: 'img/foto11_thumb.webp',
            name: 'Baño',
            caption: 'Baño Principal',
            links: [{ nodeId: '10', position: { textureX: 4300, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '12',
            panorama: 'img/foto12.webp',
            thumbnail: 'img/foto12_thumb.webp',
            name: 'Terraza',
            caption: 'Zona Social/Piscina Adultos',
            links: [{ nodeId: '0', position: { textureX: -15, textureY: -1800 } }, { nodeId: '13', position: { textureX: 550, textureY: -1800 } }, { nodeId: '14', position: { textureX: 1800, textureY: -1800 } }, { nodeId: '26', position: { textureX: -1600, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '13',
            panorama: 'img/foto13.webp',
            thumbnail: 'img/foto13_thumb.webp',
            name: 'BBQ',
            caption: 'Piscina Niños',
            links: [{ nodeId: '12', position: { textureX: 0, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '14',
            panorama: 'img/foto14.webp',
            thumbnail: 'img/foto14_thumb.webp',
            name: 'Pasillo',
            caption: 'Turco/Baños',
            links: [{ nodeId: '12', position: { textureX: 5200, textureY: -1800 } }, { nodeId: '15', position: { textureX: 1800, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '15',
            panorama: 'img/foto15.webp',
            thumbnail: 'img/foto15_thumb.webp',
            name: 'Pasillo',
            caption: 'Gimnasio',
            links: [{ nodeId: '14', position: { textureX: 5200, textureY: -1800 } }, { nodeId: '16', position: { textureX: 1700, textureY: -1800 } }, { nodeId: '18', position: { textureX: 3800, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '16',
            panorama: 'img/foto16.webp',
            thumbnail: 'img/foto16_thumb.webp',
            name: 'Exterior',
            caption: 'Jardín',
            links: [{ nodeId: '15', position: { textureX: 5350, textureY: -1900 } }, { nodeId: '17', position: { textureX: 7400, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '17',
            panorama: 'img/foto17.webp',
            thumbnail: 'img/foto17_thumb.webp',
            name: 'Exterior',
            caption: 'Vista',
            links: [{ nodeId: '16', position: { textureX: 4000, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '18',
            panorama: 'img/foto18.webp',
            thumbnail: 'img/foto18_thumb.webp',
            name: 'Interior',
            caption: 'Gimnasio',
            links: [{ nodeId: '15', position: { textureX: 500, textureY: -1800 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '19',
            panorama: 'img/foto19.webp',
            thumbnail: 'img/foto19_thumb.webp',
            name: 'Piso L',
            caption: 'Pasillo Ascensor',
            links: [{ nodeId: '0', position: { textureX: 0, textureY: -1800 } }, { nodeId: '20', position: { textureX: 5300, textureY: -1750 } }, { nodeId: '24', position: { textureX: 1700, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '20',
            panorama: 'img/foto20.webp',
            thumbnail: 'img/foto20_thumb.webp',
            name: 'Piso L',
            caption: 'Pasillo',
            links: [{ nodeId: '19', position: { textureX: 1700, textureY: -1750 } }, { nodeId: '21', position: { textureX: -50, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '21',
            panorama: 'img/foto21.webp',
            thumbnail: 'img/foto21_thumb.webp',
            name: 'Piso L',
            caption: 'Entrada Parque',
            links: [{ nodeId: '20', position: { textureX: 3550, textureY: -1750 } }, { nodeId: '22', position: { textureX: 1700, textureY: -1700 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '22',
            panorama: 'img/foto22.webp',
            thumbnail: 'img/foto22_thumb.webp',
            name: 'Piso L',
            caption: 'Parque #1',
            links: [{ nodeId: '21', position: { textureX: -500, textureY: -1800 } }, { nodeId: '23', position: { textureX: 3400, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '23',
            panorama: 'img/foto23.webp',
            thumbnail: 'img/foto23_thumb.webp',
            name: 'Piso L',
            caption: 'Parque #2',
            links: [{ nodeId: '22', position: { textureX: -650, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '24',
            panorama: 'img/foto24.webp',
            thumbnail: 'img/foto24_thumb.webp',
            name: 'Piso L',
            caption: 'Portería Etapa 2',
            links: [{ nodeId: '19', position: { textureX: 3400, textureY: -1750 } }, { nodeId: '25', position: { textureX: 1900, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '25',
            panorama: 'img/foto25.webp',
            thumbnail: 'img/foto25_thumb.webp',
            name: 'Exterior',
            caption: 'Entrada Principal',
            links: [{ nodeId: '24', position: { textureX: 3500, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },
        {
            id: '26',
            panorama: 'img/foto26.webp',
            thumbnail: 'img/foto26_thumb.webp',
            name: 'Exterior',
            caption: 'Psicina Adultos',
            links: [{ nodeId: '12', position: { textureX: 3500, textureY: -1750 } }],
            sphereCorrection: { pan: '90deg' }
        },

    ];


    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        //panorama: 'img/habitacion1a.jpg',
        moveInertia: 0.9,
        navbar: 'caption gallery gyroscope fullscreen',
        plugins: [
            GyroscopePlugin,
            CompassPlugin,
            MarkersPlugin,
            [VirtualTourPlugin, {
                positionMode: 'manual',
                renderMode: '2d',
                nodes: nodes,
                startNodeId: '0',
            }],
            [GalleryPlugin, {
                thumbnailSize: { width: 100, height: 100 },
            }],
        ],
    });





});