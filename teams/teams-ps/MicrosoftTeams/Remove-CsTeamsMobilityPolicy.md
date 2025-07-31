---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: ritikag
Module Name: MicrosoftTeams
ms.reviewer: ritikag
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsmobilitypolicy
schema: 2.0.0
title: Remove-CsTeamsMobilityPolicy
---

# Remove-CsTeamsMobilityPolicy

## SYNOPSIS
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users.

## SYNTAX

```
Remove-CsTeamsMobilityPolicy [-Tenant <System.Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users.

The Remove-CsTeamsMobilityPolicy cmdlet lets an Admin delete a custom teams mobility policy that has been created.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsMobilityPolicy -Identity SalesPolicy
```

Deletes a custom policy that has already been created in the organization.

## PARAMETERS

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
Suppresses all non-fatal errors.

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
Unique identifier for the client policy to be removed. To "remove" the global policy, use the following syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the properties in that policy will be reset to their default values.) To remove a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy". You cannot use wildcards when specifying a policy Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
