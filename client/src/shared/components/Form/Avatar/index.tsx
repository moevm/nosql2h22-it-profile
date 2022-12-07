import avatar from '../../../../asserts/avatar.jpg';
import './style.scss';

export default function Avatar({ src }: { src?: string }) {
    return (
        <div className="avatar--field">
            <img src={src} />
        </div>
    );
}
