---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsfilespolicy
schema: 2.0.0
---

# Grant-CsTeamsFilesPolicy

## SYNOPSIS
Assigns an online teams files policy to a user account, to a group of users, or set the tenant Global instance.
Online teams files policies manage usages of files-related features.

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsTeamsFilesPolicy [-Global]
 [[-PolicyName] <String>]
 [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsFilesPolicy [-Group] <String>
 [[-PolicyName] <String>]
 [<CommonParameters>]
```

### Identity
```
Grant-CsTeamsFilesPolicy [-Identity <String>]
 [[-PolicyName] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns an existing user-specific online teams files policy to a user, a group of users, or the Global policy instance.

## EXAMPLES

### Example 1
```
Grant-CsTeamsFilesPolicy -Identity "user@contoso.com" -PolicyName NativeEntrypointDisabled
```

The command shown in Example 1 assigns the per-user online teams files policy NativeEntrypointDisabled to a single user user@contoso.com.

### Example 2
```
Grant-CsTeamsFilesPolicy -Group sales@contoso.com -PolicyName NativeEntrypointDisabled
```

The command shown in Example 2 assigns the online teams files policy NativeEntrypointDisabled to the members of the group sales@contoso.com.

## PARAMETERS

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

### -PolicyName
A unique identifier(name) of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Sets the parameters of the Global policy instance to the values in the specified policy instance.

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

### -Identity
The Identity parameter represents the ID of the specific user in your organization; this can be either a SIP address or an Object ID.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES
The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsfilespolicy)

[Set-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsfilespolicy)

[New-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsfilespolicy)

[Remove-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsfilespolicy)
