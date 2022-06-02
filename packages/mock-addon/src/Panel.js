import React from 'react';
import { useAddonState, useChannel } from '@storybook/api';
import { AddonPanel, Placeholder, ScrollArea } from '@storybook/components';

import { ADDON_ID, EVENTS } from './utils/constants';

import { MockItem } from './components/MockItem';

export const Panel = (props) => {
    const [mockData, setState] = useAddonState(ADDON_ID, []);

    const emit = useChannel({
        [EVENTS.SEND]: (newMockData) => setState(newMockData),
    });

    const onChange = (item, name, value) => {
        emit(EVENTS.UPDATE, item, name, value);
    };

    if (!mockData || mockData.length === 0) {
        return (
            <AddonPanel {...props}>
                <Placeholder>No mock data found.</Placeholder>
            </AddonPanel>
        );
    }

    return (
        <AddonPanel {...props}>
            <ScrollArea>
                {mockData.map((item, index) => {
                    // eslint-disable-next-line no-unused-vars
                    const { searchParamKeys, path, ...rest } = item;
                    return (
                        <MockItem
                            key={index}
                            onChange={(name, value) =>
                                onChange(item, name, value)
                            }
                            {...rest}
                        />
                    );
                })}
            </ScrollArea>
        </AddonPanel>
    );
};
