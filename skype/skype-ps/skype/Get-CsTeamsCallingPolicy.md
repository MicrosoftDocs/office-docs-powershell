---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
applicable: Skype for Business Online
title: Get-CsTeamsCallingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsTeamsCallingPolicy

## SYNOPSIS

Returns information about the teams calling policies configured for use in your organization.
Teams calling policies help determine which users are able to use calling functionality within Microsoft Teams.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsCallingPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsCallingPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

Returns information about the teams calling policies configured for use in your organization.
Teams calling policies help determine which users are able to use calling functionality within Microsoft Teams and interoperability with Skype for Business.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsCallingPolicy -Identity SalesCallingPolicy
```

Retrieves the calling policy with name "SalesCallingPolicy"

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

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
Specify the TeamsCallingPolicy that you would like to retrieve.

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
Microsoft internal use.

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
Microsoft internal use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
