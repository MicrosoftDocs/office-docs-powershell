---
author: serdarsoysal
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: stanlythomas
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Grant-CsTeamsMeetingBrandingPolicy
---

# Grant-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
Assigns a teams meeting branding policy at the per-user scope. The **CsTeamsMeetingBrandingPolicy** cmdlet enables administrators to control the appearance in meetings by defining custom backgrounds, logos, and colors.

## SYNTAX

### GrantToUser
```
Grant-CsTeamsMeetingBrandingPolicy -Identity <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsMeetingBrandingPolicy [[-PolicyName] <String>] [-Group] <String> -Rank <Int32>
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsMeetingBrandingPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Assigns a teams meeting branding policy at the per-user scope. The **CsTeamsMeetingBrandingPolicy** cmdlet enables administrators to control the appearance in meetings by defining custom backgrounds, logos, and colors.

## EXAMPLES

### Assign TeamsMeetingBrandingPolicy to a user
```powershell
PS C:\> Grant-CsTeamsMeetingBrandingPolicy -identity "alice@contoso.com" -PolicyName "Policy Test"
```

In this example, the command assigns TeamsMeetingBrandingPolicy with the name `Policy Test` to user `alice@contoso.com`.

### Assign TeamsMeetingBrandingPolicy to a group
```powershell
PS C:\> Grant-CsTeamsMeetingBrandingPolicy -Group group@contoso.com -PolicyName "Policy Test" -Rank 1
```

In this example, the command will assign TeamsMeetingBrandingPolicy with the name `Policy Test` to group `group@contoso.com`.

## PARAMETERS

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

### -Global
Use this switch if you want to grant the specified policy to be the default policy for all users in the tenant.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The user you want to grant policy to. This can be specified as an SIP address, UserPrincipalName, or ObjectId.

```yaml
Type: String
Parameter Sets: GrantToUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the custom policy that is being assigned to the user. To remove a specific assignment and fall back to the default tenant policy, you can assign it to `$Null`.

```yaml
Type: String
Parameter Sets: GrantToUser, GrantToGroup, GrantToTenant
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

Required: True
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
