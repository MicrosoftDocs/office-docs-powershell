---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-csconferencedisclaimer
schema: 2.0.0
title: Remove-CsConferenceDisclaimer
---

# Remove-CsConferenceDisclaimer

## SYNOPSIS
Clears the text from the header and body of the conference disclaimer used in your organization.
The conference disclaimer is a message that is displayed to users who join the conference by using a hyperlink (for example, users who paste a link to the conference into a browser such as Windows Internet Explorer).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsConferenceDisclaimer [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When configuring conferencing settings, administrators can include a legal disclaimer to display to participants when these people join conferences hosted by Skype for Business Server.
This disclaimer is typically used to explain legal and intellectual property laws regarding the conference.
Users cannot join the conference without agreeing to the stipulations set forth in the disclaimer.
Note that this disclaimer is only shown to users who join a conference by using a hyperlink.

Skype for Business Server allows for a single, global instance of the conference disclaimer.
The `Remove-CsConferenceDisclaimer` cmdlet enables you to reset your conference disclaimer: when you run this cmdlet, both the disclaimer header and the disclaimer body are set to null values.


## EXAMPLES

### Example 1
```
Remove-CsConferenceDisclaimer -Identity global
```

Example 1 resets the property values of the global disclaimer.
That means that both the disclaimer Header and Body will be set to null values, giving you a blank disclaimer.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique Identity of the conference disclaimer to be removed.
Although you can only have a single, global instance of the conference disclaimer, you must still use the Identity parameter when calling the `Remove-CsConferenceDisclaimer` cmdlet.


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer

The `Remove-CsConferenceDisclaimer` cmdlet accepts pipelined input of conference disclaimer objects.

## OUTPUTS

### None
Instead, the `Remove-CsConferenceDisclaimer` cmdlet resets existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WebConf.ConferenceDisclaimer object to their default property values.

## NOTES

## RELATED LINKS

[Get-CsConferenceDisclaimer](Get-CsConferenceDisclaimer.md)

[Set-CsConferenceDisclaimer](Set-CsConferenceDisclaimer.md)
