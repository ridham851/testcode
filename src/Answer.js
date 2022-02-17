import React from 'react';

const RgbValueColour = () => {
    //calling the funstion 
    const rgbColours = createColours();

    // creating range of the values % 8
    function rangeValues(start, end) {
        var array = [];
        for (let i = start; i <= end; i++) {
            if (i !== 0 && i % 8 === 0) {
                array.push(i);
            }
        }
        return array;
    };

    // This function will create 3 diffrent colors have the range in 32 and will be creating a empty array and they pushing alll the values in the array.
    function createColours() {
        var red = rangeValues(8, 256);
        var green = rangeValues(8, 256);
        var blue = rangeValues(8, 256);
        var Result = [];

        
        
        // while loop for each color so that we will get diffrent value of rgb each time. so three while loops for each color.
        var i = 0;
        while (i < red.length) {
            const redrgb = red[i];
            i++;
            var j = 0;
            while (j < blue.length) {
             
                const bluergb = blue[j];
                j++;

                var k =0;
                while (k < green.length) {
                    
                    const greenrgb = green[k];

                    k++;
                    //calling rgb function to covert the number values in colors.
                    const rgb = `rgb(${redrgb},${greenrgb},${bluergb})`;
                    Result.push(rgb);
                }
            }
        }
        
        return (Result);
    };


    return (
        //calling map functinon so it will loop from all the vlaues.
        rgbColours.map((index) => {
            return (
                <div>
                    
                    <div key={index} id={index} style={{ backgroundColor: index }} className="shape"></div>
                </div>
            )
        })
    );
}

export default RgbValueColour;