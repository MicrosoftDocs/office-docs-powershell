---
external help file: New-CsOrganizationalAutoAttendantDialScope.xml
title: New-CsOrganizationalAutoAttendantDialScope
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantDialScope

## SYNOPSIS
Use New-CsOrganizationalAutoAttendantDialScope cmdlet to create dial-scopes for use with Auto Attendant (AA) service.

## SYNTAX

```
New-CsOrganizationalAutoAttendantDialScope -GroupScope -GroupIds <List> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new dial-scope to be used with Auto Attendant (AA) service. OAAs use dial-scopes to restrict the scope of call transfers that can be made through directory lookup feature. 

**NOTE**
- The returned dial-scope model composes a member for the underlying type/implementation, e.g. in case of the group-based dial scope, in order to modify its Group IDs, you can access them through `DialScope.GroupScope.GroupIds`.  


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$groupIds = @("00000000-0000-0000-0000-000000000000")
$dialScope = New-CsOrganizationalAutoAttendantDialScope -GroupScope -GroupIds $groupIds
```

In Example 1, the New-CsOrganizationalAutoAttendantDialScope cmdlet is used to create a dial-scope with a group whose id is 00000000-0000-0000-0000-000000000000.

## PARAMETERS

### -GroupScope
Indicates that a dial-scope based on groups (distribution lists, security groups) is to be created.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupIds
Refers to the IDs of the groups that are to be included in the dial-scope.

Group IDs can be obtained by using the Find-CsGroup cmdlet. 

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.DialScope


## NOTES

## RELATED LINKS


