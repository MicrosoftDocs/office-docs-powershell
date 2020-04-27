---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamscallparkpolicy
applicable: Skype for Business Online
title: New-CsTeamsCallParkPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---


# New-CsTeamsCallParkPolicy

## SYNOPSIS

The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature in Microsoft Teams.  Call park allows enterprise voice customers to place a call on hold and then perform a number of actions on that call: transfer to another department, retrieve via the same phone, or retrieve via a different Teams phone.  The New-CsTeamsCallParkPolicy cmdlet lets you create a new custom policy that can then be assigned to one or more specific users.

NOTE: The call park feature currently available in desktop. mobile and web clients. Supported with TeamsOnly mode.

## SYNTAX

### Identity (Default)
```
New-CsTeamsCallParkPolicy [-Tenant <System.Guid>] [-AllowCallPark <Boolean>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The TeamsCallParkPolicy controls whether or not users are able to leverage the call park feature in Microsoft Teams.  Call park allows enterprise voice customers to place a call on hold and then perform a number of actions on that call: transfer to another department, retrieve via the same phone, or retrieve via a different phone.  The New-CsTeamsCallParkPolicy cmdlet lets you create a new custom policy that can then be assigned to one or more specific users.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsCallParkPolicy -Identity "SalesPolicy" -AllowCallPark $false
```

Create a new custom policy that has call park enabled.  This policy can then be assigned to individual users.

## PARAMETERS

### -AllowCallPark
If set to true, customers will be able to leverage the call park feature to place calls on hold and then decide how the call should be handled - transferred to another department, retrieved using the same phone, or retrieved using a different phone.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Force
Suppress all non-fatal errors.

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
A unique identifier for the policy - this will be used to retrieve the policy later on to assign it to specific users.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
