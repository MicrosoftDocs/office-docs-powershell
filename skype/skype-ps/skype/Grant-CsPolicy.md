---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Grant-CsPolicy
schema: 2.0.0
---

# Grant-CsPolicy

## SYNOPSIS
The Grant-CsPolicy cmdlet allows you to assign a policy to multiple users.

## SYNTAX

```
Grant-CsPolicy [[-PolicyType] <String>] [[-PolicyName] <String>] [[-Identity] <List>] [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-Confirm] [-AsJob] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Grant-CsPolicy cmdlet allows you to assign a policy to multiple users.  A policy type and policy name are passed together with a list of users to which the policy will be assigned.

## EXAMPLES

### Example 1
```powershell
PS C:\> $users = ("Ken Meyer", "Seema Kulkarni")
PS C:\> Grant-CsPolicy -PolicyType "TeamsUpgradePolicy" -PolicyName "SfBWithTeamsCollab" -Identity $users
```

This command will assign the Teams upgrade policy SfBWithTeamsCollab to two users.

### Example 2
```powershell
PS C:\> $users = Import-CSV "users.csv"
PS C:\> Grant-CsPolicy -PolicyType "TeamsUpgradePolicy" -PolicyName "SfBWithTeamsCollab" -Identity $users
```

This command will assign the Teams upgrade policy SfBWithTeamsCollab to all the users listed in the file users.csv.



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
{{Fill DomainController Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
{{Fill PassThru Description}}

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
{{Fill PolicyName Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
{{Fill PolicyType Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
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

### -AsJob
{{Fill AsJob Description}}

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

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter[]


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
