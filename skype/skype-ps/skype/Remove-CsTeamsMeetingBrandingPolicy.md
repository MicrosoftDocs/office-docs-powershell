---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/remove-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Remove-CsTeamsMeetingBrandingPolicy
author: szymonkatraMSFT
ms.author: szymonkatra
ms.reviewer:
manager: stanlythomas
---

# Remove-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
The CsTeamsMeetingBrandingPolicy cmdlets enable administrators to control the appearance in meetings by defining custom background, logo and colors.

## SYNTAX

```
Remove-CsTeamsMeetingBrandingPolicy [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsMeetingBrandingPolicy. Any users with no explicitly assigned policies will then fall back to the default policy in the organization. You cannot delete the global policy from the organization. If you want to remove policies currently assigned to one or more users, you should assign a different policy to them before.

## EXAMPLES

### Remove meeting branding policy
```powershell
PS C:\> Remove-CsTeamsMeetingBrandingPolicy -Identity "policy test"
```

In the example shown above, the command will delete the `policy test` meeting branding policy from the organization's list of meeting branding policies and remove all assignments of this policy from users who have had the policy assigned.

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

## NOTES

Available in Teams PowerShell Module 4.9.3 or later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](Get-CsTeamsMeetingBrandingPolicy.md)
[Grant-CsTeamsMeetingBrandingPolicy](Grant-CsTeamsMeetingBrandingPolicy.md)
[New-CsTeamsMeetingBrandingPolicy](New-CsTeamsMeetingBrandingPolicy.md)
[Remove-CsTeamsMeetingBrandingPolicy](Remove-CsTeamsMeetingBrandingPolicy.md)
[Set-CsTeamsMeetingBrandingPolicy](Set-CsTeamsMeetingBrandingPolicy.md)