import Button from '../../shared/components/Button';
import './style.scss';

export default function AdminPage() {
    return (
        <div className="admin--page">
            <div>
                <Button variant='primary'>IMPORT</Button>
            </div>
            <div>
                <Button variant='primary'>EXPORT</Button>
            </div>
        </div>
    );
}
