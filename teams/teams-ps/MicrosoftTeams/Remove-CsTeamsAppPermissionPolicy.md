---
applicable: Microsoft Teams
author: ashishguptaiitb
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: prkosh
Module Name: MicrosoftTeams
ms.author: prkosh
ms.reviewer: mhayrapetyan
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsapppermissionpolicy
schema: 2.0.0
title: Remove-CsTeamsAppPermissionPolicy
---

# Remove-CsTeamsAppPermissionPolicy

## SYNOPSIS
This cmdlet allows you to remove app permission policies that have been created within your organization.

## SYNTAX

```
Remove-CsTeamsAppSetupPolicy [-Tenant <Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: You can use this cmdlet to remove a specific custom policy from a user. We require that all creation and modification of app permission polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app permission policies to enable or block specific apps for your users.  Learn more about the App Permission Policies: <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies>.

This cmdlet allows you to remove app permission policies that have been created within your organization. If you run Remove-CsTeamsAppPermissionPolicy on the Global policy, it will be reset to the defaults provided for new organizations.

**This is only applicable for tenants who have not been migrated to ACM or UAM.**

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsAppPermissionPolicy -Identity SalesPolicy
```

Deletes a custom policy that has already been created in the organization.

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the policy to be removed.
To "remove" the global policy, use the following syntax: `-Identity global`.
(Note that the global policy cannot actually be removed.  Instead, all the properties in that policy will be reset to their default values.) To remove a per-user policy, use syntax similar to this: `-Identity "SalesDepartmentPolicy"`.
You cannot use wildcards when specifying a policy Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
