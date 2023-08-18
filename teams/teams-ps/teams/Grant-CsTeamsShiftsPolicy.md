---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-teamsshiftspolicy
schema: 2.0.0
---

# Grant-CsTeamsShiftsPolicy

## SYNOPSIS

This commandlet supports applying the TeamsShiftsPolicy to users in a tenant.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsShiftsPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsShiftsPolicy [-Identity] <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsShiftsPolicy [[-PolicyName] <String>] [-Group] <String> [-Rank] <Int32> [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsShiftsPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION
This commandlet enables admins to grant Shifts specific policy settings to users in their tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsShiftsPolicy -Identity IsaiahL@mwtdemo.onmicrosoft.com -PolicyName OffShiftAccessMessage1Always
```
Applies the OffShiftAccessMessage1Always instance of TeamsShiftsPolicy to one user in the tenant.

## PARAMETERS

### -Identity
UserId to whom the policy is granted. Email id is acceptable.

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName
The name of the TeamsShiftsPolicy instance that is being applied to the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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
Position: Con nombre
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-CsTeamsShiftsPolicy](Get-CsTeamsShiftsPolicy.md)

[New-CsTeamsShiftsPolicy](New-CsTeamsShiftsPolicy.md)

[Set-CsTeamsShiftsPolicy](Set-CsTeamsShiftsPolicy.md)

[Remove-CsTeamsShiftsPolicy](Remove-CsTeamsShiftsPolicy.md)
