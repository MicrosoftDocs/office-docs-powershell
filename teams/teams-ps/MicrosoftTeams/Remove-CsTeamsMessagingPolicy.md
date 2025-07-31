---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsmessagingpolicy
schema: 2.0.0
title: Remove-CsTeamsMessagingPolicy
---

# Remove-CsTeamsMessagingPolicy

## SYNOPSIS
Deletes a custom messaging policy. Teams messaging policies determine the features and capabilities that can be used in messaging within the teams client.

## SYNTAX

```
Remove-CsTeamsMessagingPolicy [-Tenant <Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsMessagingPolicy.  Any users with no explicitly assigned policies will then fall back to the default policy in the organization.  You cannot delete the global policy from the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy
```

In the example shown above, the command will delete the student messaging policy from the organization's list of policies.

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
Unique identifier for the teams messaging policy to be removed. To remove the global policy, use this syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy, use this syntax: -Identity StudentMessagingPolicy .

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

### -Tenant

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
