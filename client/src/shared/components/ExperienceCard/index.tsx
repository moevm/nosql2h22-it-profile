import { Button, Chips } from '@components';
import { Link } from 'react-router-dom';
import './style.scss';

interface IExperienceCardProps {
    title: string;
    position: string;
    period: string;
    description: string;
    techStack: string[];
    links?: Array<{ to: string; title: string }>;
    viewOnly?: boolean;
}

export default function ExperienceCard({
    title,
    position,
    period,
    description,
    techStack,
    links,
    viewOnly: onView = false
}: IExperienceCardProps) {
    return (
        <div className="exp--card">
            <div className="exp--card__header">
                <div className="exp--card__title">{title}</div>
                <div className="exp--card__sub--title">
                    {position} | {period}
                </div>
            </div>
            <div className="exp--card__descr">{description}</div>
            <div className="exp--card__tech">
                <div className="exp--card__tech--title">Tech Stack:</div>
                <Chips values={techStack} />
            </div>
            <div className="exp--card__bottom">
                <div className="exp--card__bottom__links">
                    {links?.map((link) => (
                        <a
                            href={link.to}
                            key={link.to}
                            className="exp--card__bottom__item--link"
                            target="_blank">
                            {link.title}
                        </a>
                    ))}
                </div>
                {!onView && (
                    <div className="exp--card__bottom__btns">
                        <div>
                            <Button type="button" variant="primary">
                                Remove
                            </Button>
                        </div>
                        <div>
                            <Button type="button" variant="primary">
                                Edit
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
