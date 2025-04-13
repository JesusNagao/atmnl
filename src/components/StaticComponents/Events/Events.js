import './Events.css';

export default function Events(){
    return(
        <div>
            <div className='title'>
                <h1>Calendario</h1>
                <p>En este calendario podras encontrar los proximos eventos afiliados a la Asociacion de Tenis de Mesa de Nuevo Leon</p>
            </div>
            <iframe src="https://calendar.google.com/calendar/embed?src=5e00e21be6fe5da6d1550075b401e6c0b5ed0e9ee62dc5dfa5296d9033155d32%40group.calendar.google.com&ctz=America%2FMonterrey" frameborder="0" className='calendar' scrolling="no"></iframe>
        </div>
        );
}