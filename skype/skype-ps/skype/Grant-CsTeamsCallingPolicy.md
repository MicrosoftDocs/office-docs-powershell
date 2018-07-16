---
external help file: tmp_hj4xd5au.st3-help.xml
Module Name: tmp_hj4xd5au.st3
online version: http://technet.microsoft.com/EN-US/library/089fd324-a267-4e53-ad32-924875d15ef9(OCS.15).aspx
schema: 2.0.0
---

# Grant-CsTeamsCallingPolicy

## SYNOPSIS

Cmdlet to assign a specific Teams Calling Policy to a user.

## SYNTAX

```
Grant-CsTeamsCallingPolicy [-PassThru] [-Confirm] [[-PolicyName] <Object>] [[-Identity] <Object>] [-Global]
 [-Tenant <Object>] [-DomainController <Object>] [-WhatIf] [-AsJob]
```

## DESCRIPTION
The Teams Calling Policies designate which users are able to use calling functionality within teams and determine the interopability state with Skype for Business.  This cmdlet allows admins to grant user level policies to individual users.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsCallingPolicy -identity "Ken Myer" -PolicyName SalesCallingPolicy
```

Assigns the TeamsCallingPolicy called "SalesCallingPolicy" to the user "Ken Myer"

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
Internal Microsoft use

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

### -Global
Internal Microsoft use

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
The user object to whom the policy is being assigned.

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
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsCallingPolicy cmdlet does not pass objects through the pipeline.

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
The name of the policy being assigned.  To remove an existing user level policy assignment, specify PolicyName as null.

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
Internal Microsoft use

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
Internal Microsoft use

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

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
