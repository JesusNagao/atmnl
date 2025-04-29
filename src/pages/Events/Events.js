import  React, { useState, useEffect } from 'react';
import Calendar from 'components/StaticComponents/Events/Events'

export default function Events() {
    return (
        <div className="events">
            <Calendar />
        </div>
    );
}
