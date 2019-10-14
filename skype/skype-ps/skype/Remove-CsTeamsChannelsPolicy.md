---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Online
title: Remove-CsTeamsChannelsPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Remove-CsTeamsChannelsPolicy

## SYNOPSIS

The CsTeamsChannelsPolicy allows you to manage features related to the Teams & Channels experience within the Teams application.


## SYNTAX

```
Remove-CsTeamsChannelsPolicy [-Tenant <Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
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
Unique identifier for the policy to be removed.
To "remove" the global policy, use the following syntax: `-Identity global`.
(Note that the global policy cannot actually be removed.  Instead, all the properties in that policy will be reset to their default values.) To remove a per-user policy, use syntax similar to this: `-Identity "StudentPolicy"`.
You cannot use wildcards when specifying a policy Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses all non-fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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

### Microsoft.Rtc.Management.Xds.XdsIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
