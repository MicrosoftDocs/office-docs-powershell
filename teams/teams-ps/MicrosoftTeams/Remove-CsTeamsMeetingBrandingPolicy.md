---
author: serdarsoysal
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: stanlythomas
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Remove-CsTeamsMeetingBrandingPolicy
---

# Remove-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The **CsTeamsMeetingBrandingPolicy** cmdlet enables administrators to control the appearance in meetings by defining custom backgrounds, logos, and colors.

## SYNTAX

```
Remove-CsTeamsMeetingBrandingPolicy [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsMeetingBrandingPolicy. Any users with no explicitly assigned policies will then fall back to the default policy in the organization. You cannot delete the global policy from the organization. If you want to remove policies currently assigned to one or more users, you should first assign a different policy to them.

## EXAMPLES

### Remove meeting branding policy
```powershell
PS C:\> Remove-CsTeamsMeetingBrandingPolicy -Identity "policy test"
```

In this example, the command deletes the `policy test` meeting branding policy from the organization's list of meeting branding policies and removes all assignments of this policy from users who have the policy assigned.

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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
Unique identifier of the policy to be deleted.
```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

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
This cmdlet supports the common parameters: `-Debug`, `-ErrorAction`, `-ErrorVariable`, `-InformationAction`, `-InformationVariable`, `-OutVariable`, `-OutBuffer`, `-PipelineVariable`, `-Verbose`, `-WarningAction`, and `-WarningVariable`. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

Available in Teams PowerShell Module 4.9.3 and later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingbrandingpolicy)

[Grant-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsmeetingbrandingpolicy)

[New-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingbrandingpolicy)

[Remove-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmeetingbrandingpolicy)

[Set-CsTeamsMeetingBrandingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingbrandingpolicy)
