---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: amehta
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamscortanapolicy
schema: 2.0.0
title: Remove-CsTeamsCortanaPolicy
---

# Remove-CsTeamsCortanaPolicy

## SYNOPSIS
The CsTeamsCortanaPolicy cmdlets enable administrators to control settings for Cortana voice assistant in Microsoft Teams.

## SYNTAX

```
Remove-CsTeamsCortanaPolicy [-Tenant <System.Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsCortanaPolicy. Any users with no explicitly assigned policies will then fall back to the default policy in the organization.  You cannot delete the global policy from the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsCortanaPolicy -Identity MyCortanaPolicy
```

In the example shown above, the command will delete the MyCortanaPolicy from the organization's list of policies.

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
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
Identity for the policy you're modifying. To modify the global policy, use this syntax: -Identity global. To modify a per-user policy, use syntax similar to this: -Identity MyCortanaPolicy.
If you do not specify an Identity the Set-CsTeamsCortanaPolicy cmdlet will automatically modify the global policy.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:
-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"
You can return your tenant ID by running this command:
Get-CsTenant | Select-Object DisplayName, TenantID

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
