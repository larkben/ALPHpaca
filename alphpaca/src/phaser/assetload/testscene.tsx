export default class TestScene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        
    }

    create ()
    {
        const text = this.add.text(150, 100, '', { font: '16px Courier', color: '#00ff00' });
        const gem = this.add.image(100, 100, 'gem');

        //  Store some data about this Gem:
        gem.setData('name', 'Red Gem Stone');
        gem.setData('level', 2);
        gem.setData('owner', 'Link');

        //  Whenever a data value is updated we call this function:
        gem.on('setdata', function (gameObject: any, key: any, value: any) {
            text.setText([
                'Name: ' + gem.getData('name'),
                'Level: ' + gem.getData('level'),
                'Value: ' + gem.getData('gold') + ' gold',
                'Owner: ' + gem.getData('owner')
            ]);
        });

        //  Set the value, this will emit the `setdata` event.
        gem.setData('gold', 50);

        //  Change the 'value' property when the mouse is clicked
        this.input.on('pointerdown', function () {
            gem.data.values.gold += 50;
            if (gem.data.values.gold % 200 === 0)
            {
                gem.data.values.level++;
            }
        });
    }
}
