---
applicable: Microsoft Teams
author: ashishguptaiitb
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: prkosh
Module Name: MicrosoftTeams
ms.author: prkosh
ms.reviewer: mhayrapetyan
online version: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsapppermissionpolicy
schema: 2.0.0
title: Grant-CsTeamsAppPermissionPolicy
---

# Grant-CsTeamsAppPermissionPolicy

## SYNOPSIS
As an admin, you can use app permission policies to allow or block apps for your users.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsAppPermissionPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsAppPermissionPolicy [-Identity] <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsAppPermissionPolicy [[-PolicyName] <String>] [-Group] <String> [-Rank] <Int32>
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsAppPermissionPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: You can use this cmdlet to assign a specific custom policy to a user. We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app permission policies to enable or block specific apps for your users. Learn more about the App Permission Policies: <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies>.

This is only applicable for tenants who have not been migrated to ACM or UAM.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsAppPermissionPolicy -Identity "Ken Myer" -PolicyName StudentAppPermissionPolicy
```

In this example, a user with identity "Ken Myer" is being assigned the StudentAppPermissionPolicy

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

### -DomainController
Do not use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Resets the values in the global policy to match those in the provided (PolicyName) policy.  Note that this means all users with no explicit policy assigned will have these new policy settings.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
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
The user to whom the policy should be assigned.

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
{{ Fill PassThru Description }}

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

### -PolicyName
The name of the custom policy that is being assigned to the user.  To remove a specific assignment and fall back to the default tenant policy, you can assign to $Null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

### -Tenant
Do not use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
