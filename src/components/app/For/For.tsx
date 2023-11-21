import React, { memo } from 'react';

interface Props<T> {
    each: T[]
    children: (item: T, index?: number) => React.ReactNode
    memo?: boolean
}

const For = <T extends unknown>({ each, children, memo: shouldMemo = false }: Props<T>): React.ReactNode => {
    const RenderChild: React.FC<{ item: T; index?: number }> = ({ item, index }) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
    );

    const MemoizedRenderChild = shouldMemo ? memo(RenderChild) : RenderChild;

    return (
        <>
            {each.map((item, index) => (
                <MemoizedRenderChild key={index} item={item} index={index} />
            ))}
        </>
    );
};

export default For;
