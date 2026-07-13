---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csmainlineattendantspamdetectiontemplate
schema: 2.0.0
title: New-CsMainlineAttendantSpamDetectionTemplate
---

# New-CsMainlineAttendantSpamDetectionTemplate

## SYNOPSIS

The New-CsMainlineAttendantSpamDetectionTemplate cmdlet creates a new spam detection template.

## SYNTAX

```
New-CsMainlineAttendantSpamDetectionTemplate -Name <string> -Description <string> -EnableSpamDetection <Boolean> -Action <String> [-CallTarget <String>] [-InclusionScope <list>] [-ExclusionScope <list>]
```

## DESCRIPTION

The New-CsMainlineAttendantSpamDetectionTemplate cmdlet creates a new spam detection template.

> [!CAUTION]
> Teams Phone Agent (formerly Mainline Attendant) is currently only available to customers in the [Frontier](https://www.microsoft.com/microsoft-365-copilot/frontier-program) Public Preview program.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsMainlineAttendantSpamDetectionTemplate -Name "Spam Detection - Disconnect" -Description "Calls determined to be spam will be disconnected" -EnableSpamDetection $true -Action "DisconnectCall"
```

When assigned to a Teams Phone Agent (formerly Mainline Attenant), this example will create a new Spam Detection Template that will disconnect calls determined to be spam.

### -------------------------- Example 2 --------------------------
```
New-CsMainlineAttendantSpamDetectionTemplate -Name "Spam Detection - Disconnect - Except CEO" -Description "Except CEO - Calls determined to be spam will be disconnected" -EnableSpamDetection $true -Action "DisconnectCall" -ExclusionList @("+14255551212")
```

When assigned to a Teams Phone Agent (formerly Mainline Attenant), this example will create a new Spam Detection Template that will disconnect calls determined to be spam except if the call is coming from `+14255551212`.

## PARAMETERS

### -Name

The name of the spam detection template.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

The description for the spam detection template.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSpamDetection

Is spam detection enabled for this template.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action

The action to take it the call is spam.

PARAMVALUE: DisconnectCall | TransferCallToOperator | TransferCallToTarget

- DisconnectCall - the call will be disconnected.
- TransferCallToOperator - the call will be transferred to the configured operator. If no operator has been configured, the call will be disconnected.
- TransferCallToTarget - the call will be transferred to the target defined by the `-CallTarget` parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallTarget

The call target when `-Action` is set to `TransferCallToTarget`.

Use the `New-CsAutoAttendantCallableEntity` cmdlet to create new callable entities.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True - if -Action set to TransferCallToTarget
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InclusionList

A list of e.164 formatted phone numbers that will always be considered as spam.

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusionList

A list of e.164 formatted phone numbers that will never be considered as spam.

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Identity
Represents the unique identifier of a question and answer booking flow.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

