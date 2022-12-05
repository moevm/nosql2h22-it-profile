import "./style.scss";

interface IProps {
    children?: JSX.Element[] | JSX.Element | string | number;
}

export default function SplitScreenLayout({ children }: IProps) {
    return <div className="split--screen">{children}</div>;
}

SplitScreenLayout.LeftSide = ({ children }: IProps) => (
    <div className="split--screen__left--side">{children}</div>
);

SplitScreenLayout.RightSide = ({ children }: IProps) => (
    <div className="split--screen__right--side">{children}</div>
);
