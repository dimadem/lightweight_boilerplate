'use client';

import {
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Textarea
} from "@/shared/ui";
import { Rabbit, Bird, Turtle } from "lucide-react";
import { type ModelSettings, type MessageSettings } from "@/shared/types/interfaces";
import { useModelSettingsContext } from "@/shared/context/model-settings-provider";

const ModelSettings = () => {
    const anthropic_models = {
        "claude_3_5_sonnet": 'claude-3-5-sonnet-20240620',
        "claude_3_opus": 'claude-3-opus-20240229',
        "claude_3_sonnet": 'claude-3-sonnet-20240229',
        "claude_3_haiku": 'claude-3-haiku-20240307',
    };
    const { modelSettings, setModelSettings } = useModelSettingsContext();
    const handleSettingChange = (key: keyof ModelSettings, value: ModelSettings[keyof ModelSettings]) => {
        setModelSettings({ ...modelSettings, [key]: value });
    };
    return (
        <>
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                </legend>
                <div className="grid gap-3">
                    <Label htmlFor="model">Model</Label>
                    <Select
                        name="model"
                        defaultValue={anthropic_models.claude_3_haiku}
                        onValueChange={(value) => handleSettingChange('model', value)}
                        value={modelSettings.model}>
                        <SelectTrigger
                            id="model"
                            className="items-start [&_[data-description]]:hidden"
                        >
                            <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={anthropic_models.claude_3_haiku}>
                                <div className="flex items-start gap-3 text-muted-foreground">
                                    <Bird className="size-5" />
                                    <div className="grid gap-0.5">
                                        <p>
                                            <span className="font-medium text-foreground">
                                                Claude 3 Haiku
                                            </span>
                                        </p>
                                        <p className="text-xs" data-description>
                                            Performance and speed for efficiency.
                                        </p>
                                    </div>
                                </div>
                            </SelectItem>
                            <SelectItem value={anthropic_models.claude_3_5_sonnet}>
                                <div className="flex items-start gap-3 text-muted-foreground">
                                    <Rabbit className="size-5" />
                                    <div className="grid gap-0.5">
                                        <p>
                                            <span className="font-medium text-foreground">
                                                Claude 3.5 Sonnet
                                            </span>
                                        </p>
                                        <p className="text-xs" data-description>
                                            Our fastest model for general use cases.
                                        </p>
                                    </div>
                                </div>
                            </SelectItem>
                            <SelectItem value={anthropic_models.claude_3_sonnet}>
                                <div className="flex items-start gap-3 text-muted-foreground">
                                    <Rabbit className="size-5" />
                                    <div className="grid gap-0.5">
                                        <p>
                                            <span className="font-medium text-foreground">
                                                Claude 3 Sonnet
                                            </span>
                                        </p>
                                        <p className="text-xs" data-description>
                                            Our fastest model for general use cases.
                                        </p>
                                    </div>
                                </div>
                            </SelectItem>
                            <SelectItem value={anthropic_models.claude_3_opus}>
                                <div className="flex items-start gap-3 text-muted-foreground">
                                    <Turtle className="size-5" />
                                    <div className="grid gap-0.5">
                                        <p>
                                            <span className="font-medium text-foreground">
                                                Claude 3 Opus
                                            </span>
                                        </p>
                                        <p className="text-xs" data-description>
                                            The most powerful model for complex computations.
                                        </p>
                                    </div>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="top-k">Max Tokens</Label>
                        <Input
                            id="max-tokens"
                            type="number"
                            value={modelSettings.max_tokens}
                            onChange={(e) => handleSettingChange('max_tokens', parseInt(e.target.value))}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="temperature">Temperature</Label>
                        <Input
                            id="temperature"
                            type="number"
                            placeholder="0.0"
                            min="0.0"
                            max="1.0"
                            step="0.1"
                            value={modelSettings.temperature}
                            onChange={(e) => handleSettingChange('temperature', parseFloat(e.target.value))}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="top-p">Top P</Label>
                        <Input
                            id="top-p"
                            type="number"
                            placeholder="0.0"
                            min="0.0"
                            max="1.0"
                            step="0.1"
                            value={modelSettings.top_p}
                            onChange={(e) => handleSettingChange('top_p', parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="top-k">Top K</Label>
                        <Input
                            id="top-k"
                            type="number"
                            value={modelSettings.top_k}
                            onChange={(e) => handleSettingChange('top_k', parseFloat(e.target.value))}
                        />
                    </div>
                </div>
            </fieldset>
        </>
    )
}

const MessageSettings = () => {
    const { messageSettings, setMessageSettings } = useModelSettingsContext();
    const handleSettingChange = (key: keyof MessageSettings, value: MessageSettings[keyof MessageSettings]) => {
        setMessageSettings({ ...messageSettings, [key]: value });
    };
    return (
        <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
                Messages
            </legend>
            <div className="grid gap-3">
                <Label id="role">Role</Label>
                <Select
                    name="role"
                    defaultValue={messageSettings.role}
                    onValueChange={(value) => handleSettingChange('role', value)}
                    value={messageSettings.role}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="content">Content</Label>
                <Textarea
                    id="content"
                    name="content"
                    placeholder="You are a..."
                    className="min-h-[9.5rem]"
                    value={messageSettings.content}
                    onChange={(e) => handleSettingChange('content', e.target.value)}
                />
            </div>
        </fieldset>
    )
}

const Settings = () => {
    return (
        <div className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
            <form className="grid w-full items-start gap-6">
                <ModelSettings />
                <MessageSettings />
            </form>
        </div>
    )
}

export { Settings }