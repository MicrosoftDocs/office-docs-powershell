---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingconfiguration
schema: 2.0.0
title: Get-CsTeamsMeetingConfiguration
---

# Get-CsTeamsMeetingConfiguration

## SYNOPSIS

The CsTeamsMeetingConfiguration cmdlets enable administrators to control the meetings configurations in their tenants.

## SYNTAX

### Identity (Default)

```
Get-CsTeamsMeetingConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter

```
Get-CsTeamsMeetingConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

The CsTeamsMeetingConfiguration cmdlets enable administrators to control the meetings configurations in their tenants. Use this cmdlet to retrieve the configuration set in your organization.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-CsTeamsMeetingConfiguration
```

Returns the configuration set in the organization.

## PARAMETERS

### -Filter

Internal Microsoft use

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

The only valid input is "Global"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Internal Microsoft use

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

### -Tenant

Internal Microsoft use

```yaml
Type: Guid
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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
