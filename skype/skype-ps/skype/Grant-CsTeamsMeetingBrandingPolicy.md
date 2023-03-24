---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/grant-csteamsmeetingbrandingpolicy
schema: 2.0.0
title: Grant-CsTeamsMeetingBrandingPolicy
author: szymonkatraMSFT
ms.author: szymonkatra
ms.reviewer:
manager: stanlythomas
---

# Grant-CsTeamsMeetingBrandingPolicy

## SYNOPSIS
Assigns a teams meeting branding policy at the per-user scope. The CsTeamsMeetingBrandingPolicy cmdlets enable administrators to control the appearance in meetings by defining custom background, logo and colors.

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
Assigns a teams meeting branding policy at the per-user scope. The CsTeamsMeetingBrandingPolicy cmdlets enable administrators to control the appearance in meetings by defining custom background, logo and colors.

## EXAMPLES

### Assign TeamsMeetingBrandingPolicy to user
```powershell
PS C:\> Grant-CsTeamsMeetingBrandingPolicy -identity "testuser@testtenantdomain.onmicrosoft.com" -PolicyName "Policy Test"
```

In the example shown above, the command will assign TeamsMeetingBrandingPolicy with name `Policy Test` to user `testuser@testtenantdomain.onmicrosoft.com`.

### Assign TeamsMeetingBrandingPolicy to group
```powershell
PS C:\> Grant-CsTeamsMeetingBrandingPolicy -Group Testgroupassignments@testtenantdomain.onmicrosoft.com -PolicyName "Policy Test" -Rank 1
```

In the example shown above, the command will assign TeamsMeetingBrandingPolicy with name `Policy Test` to group `Testgroupassignments@testtenantdomain.onmicrosoft.com`.


## PARAMETERS

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
The user you want to grant policy to. This can be specified as SIP address, UserPrincipalName, or ObjectId.

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
The name of the custom policy that is being assigned to the user. To remove a specific assignment and fall back to the default tenant policy, you can assign to $Null.

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

## NOTES

Available in Teams PowerShell Module 4.9.3 or later.

## RELATED LINKS

[Get-CsTeamsMeetingBrandingPolicy](Get-CsTeamsMeetingBrandingPolicy.md)
[Grant-CsTeamsMeetingBrandingPolicy](Grant-CsTeamsMeetingBrandingPolicy.md)
[New-CsTeamsMeetingBrandingPolicy](New-CsTeamsMeetingBrandingPolicy.md)
[Remove-CsTeamsMeetingBrandingPolicy](Remove-CsTeamsMeetingBrandingPolicy.md)
[Set-CsTeamsMeetingBrandingPolicy](Set-CsTeamsMeetingBrandingPolicy.md)