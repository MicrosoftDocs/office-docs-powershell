---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Grant-CsTeamsVdiPolicy

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsVdiPolicy [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsVdiPolicy -Identity <String> [[-PolicyName] <String>] [-ProgressAction <ActionPreference>]
 [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsVdiPolicy [[-PolicyName] <String>] [-Group] <String> -Rank <Int32>
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsVdiPolicy [[-PolicyName] <String>] [-Global] [-Force] [-ProgressAction <ActionPreference>]
 [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Force
{{ Fill Force Description }}

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
{{ Fill Global Description }}

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
{{ Fill Group Description }}

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
{{ Fill Identity Description }}

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
{{ Fill PolicyName Description }}

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
{{ Fill Rank Description }}

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

### -ProgressAction
{{ Fill ProgressAction Description }}

```yaml
Type: ActionPreference
Parameter Sets: (All)
Aliases: proga

Required: False
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
