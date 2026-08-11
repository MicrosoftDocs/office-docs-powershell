---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsvdipolicy
schema: 2.0.0
title: Grant-CsTeamsVdiPolicy
---

# Grant-CsTeamsVdiPolicy

## SYNOPSIS
Assigns a teams Vdi policy at the per-user scope. The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

## SYNTAX

### Identity (Default)
```powershell
Grant-CsTeamsVdiPolicy [<CommonParameters>]
```

### GrantToUser
```powershell
Grant-CsTeamsVdiPolicy -Identity <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```powershell
Grant-CsTeamsVdiPolicy [[-PolicyName] <String>] [-Group] <String> -Rank <Int32> [<CommonParameters>]
```

### GrantToTenant
```powershell
Grant-CsTeamsVdiPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Assigns a teams Vdi policy at the per-user scope. The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsVdiPolicy -identity "Ken Myer" -PolicyName RestrictedUserPolicy
```

In this example, a user with identity "Ken Myer" is being assigned the RestrictedUserPolicy

## PARAMETERS

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -Global
When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant. To skip a warning when you do this operation, specify "-Global".

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
Indicates the Identity of the user account the policy should be assigned to. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

```yaml
Type: String
Parameter Sets: GrantToUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
