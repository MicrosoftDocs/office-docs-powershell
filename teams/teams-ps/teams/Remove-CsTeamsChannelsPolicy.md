---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamschannelspolicy
applicable: Microsoft Teams
title: Remove-CsTeamsChannelsPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Remove-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.

## SYNTAX

```
Remove-CsTeamsChannelsPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.  The Remove-CsTeamsChannelsPolicy cmdlet lets you delete a custom policy that has been configured in your organization.

If you run Remove-CsTeamsChannelsPolicy on the Global policy, it will be reset to the defaults provided for new organizations.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsChannelsPolicy -Identity SalesPolicy
```

Deletes a custom policy that has already been created in the organization.

## PARAMETERS

### -Identity
The name of the policy to be removed. Wildcards are not supported.

To remove a custom policy, use syntax similar to this: `-Identity "Student Policy"`.

To "remove" the global policy, use the following syntax: `-Identity Global`. You can't actually remove the global policy. Instead, all properties will be reset to their default values as shown in the default policy (`Tag:Default`).

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
