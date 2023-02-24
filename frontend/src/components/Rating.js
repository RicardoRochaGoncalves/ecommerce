import React from 'react';
 
function Rating({ value, text, color }) {
    const arr = new Array(5).fill("");
    return (
        <div className="rating">
            {arr.map((_, index) =>
                <i
                    key={index}
                    style={{ color }}
                    className={
                        value >= (index + 1)
                            ? 'fas fa-star'
                            : value >= (index + 0.5)
                                ? `fas fa-star-half-alt`
                                : 'far fa-star'
                    }
                />
            )}
 
            <span>{ text && text}</span>
        </div>
    )
}
 
export default Rating