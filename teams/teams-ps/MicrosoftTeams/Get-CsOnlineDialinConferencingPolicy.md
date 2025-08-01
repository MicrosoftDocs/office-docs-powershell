---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinedialinconferencingpolicy
schema: 2.0.0
title: Get-CsOnlineDialinConferencingPolicy
---

# Get-CsOnlineDialinConferencingPolicy

## SYNOPSIS
Retrieves the available Dial-in Conferencing policies in the tenant.

## SYNTAX

### Identity (Default)
```
Get-CsOnlineDialinConferencingPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineDialinConferencingPolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Retrieves the available Dial-in Conferencing policies in the tenant.

## EXAMPLES

### Example 1
```
Get-CsOnlineDialinConferencingPolicy
```

This example retrieves all the available Dial in Conferencing policies in the tenant.

## PARAMETERS

### -Filter

> Applicable: Microsoft Teams

This parameter accepts a wildcard string and returns all policies with identities matching that string. For example, a Filter value of tag:* will return all policies defined at the per-user level.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

A unique identifier specifying the scope and, in some cases the name, of the policy. If this parameter is omitted, all policies for the organization are returned.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

> Applicable: Microsoft Teams

Reserved for Microsoft Internal use.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
